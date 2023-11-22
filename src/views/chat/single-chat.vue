<script>

import { SimpleBar } from "simplebar-vue3";
import { layoutComputed } from "@/state/helpers";
import { nextTick } from 'vue';
import EmojiPicker from "vue3-emoji-picker";
import "vue3-emoji-picker/css";

import { connections, ChannelsData, messages, channelMessage } from "@/common/data/chat";

export default {
  data() {
    return {
      username: "Joel Bird",
      userAvatar: "https://img.themesbrand.com/steemx/users/avatar-2.jpg",
      currentSelectedChat: "users",
      isUserChat: true,
      isChannelChat: false,
      loader: false,
      connections: connections,
      ChannelsData: ChannelsData,
      messages: messages,
      channelMessage: channelMessage,
      searchMessages: null,
      isReplyClicked: false,
      inviteMembersModal: false,
      userProfileCanvas: false,
      chat: {
        newMsg: ""
      },
      mediaRecorder: null,
      chatMessages: [],
      sendMsg: null,
      isOpen: false,
      sendEmoji: [],

      emojiPickerStyle: {
        position: 'absolute',
        top: '-900%', // Adjust this value to position the picker accordingly
        left: '0',
      },

      startButtonClass: "btn-ghost-success",
      conversationName: "",
      isReplyMessage: false,
      recognition: null

    };
  },
  computed: {
    ...layoutComputed,
    displayedUserMsg() {
      return this.messages;
    },
    resultQuery() {
      if (this.searchMessages) {
        const search = this.searchMessages.toLowerCase();

        return this.displayedUserMsg.filter((data) => data.message.some((message) => message.msg.toLowerCase().includes(search)))
          .filter(element => {
            var newMsg = Object.assign({}, element);
            newMsg = newMsg.message.filter(message => message.msg.toLowerCase().includes(search));
            return newMsg;
          });
      } else {
        return this.displayedUserMsg;
      }
    },
  },
  mounted() {
    this.initializeRecognition();
    this.copyToClipboard();
    this.replyMessage();

    document.getElementById("imageInput").addEventListener("change", this.handleImageUpload);
    // document.getElementById("imageInput").addEventListener("click", this.handleImageUpload);
  },
  methods: {

    initializeRecognition() {
      if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
        this.recognition = new (
          window.SpeechRecognition ||
          window.webkitSpeechRecognition ||
          window.mozSpeechRecognition ||
          window.msSpeechRecognition
        )();
        this.recognition.lang = "en-US, fr-FR, es-ES, hi-IN, gu-IN";

        this.recognition.onresult = event => {
          const result = event.results[0][0].transcript;
          this.chat.newMsg = result;
        };

        this.recognition.onend = () => {
          this.startButtonClass = "btn-ghost-success";
        };

        this.recognition.onerror = event => {
          alert("Speech recognition error: " + event.error);
        };
      } else {
        alert("Speech recognition is not supported in this browser.");
      }
    },
    startRecognition() {
      if (this.recognition) {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
          console.log(stream);
          this.recognition.start();
          this.startButtonClass = "btn-ghost-danger";

          var replyToggleOpen = document.querySelector(".replyCard");
          if (document.querySelector(".replyCard .replymessage-block .flex-grow-1 .mb-0")) {
            replyToggleOpen.classList.add("show");
            document.querySelector(".replyCard .replymessage-block .flex-grow-1 .mb-0").innerText = 'Speech recognition start... Say something';

            setTimeout(() => {
              replyToggleOpen.classList.remove("show");
              // reset value
              document.querySelector(".replyCard .replymessage-block .flex-grow-1 .mb-0").innerHTML = "";
              document.querySelector(".replyCard .replymessage-block .flex-grow-1 .conversation-name").innerText = "";
              this.isreplyMessage = false;
            }, 3000);
          }
        })
          .catch(error => {
            alert("Error accessing the microphone: " + error);
          });
      }
    },

    scrollToBottom(id) {
      setTimeout(function () {
        var simpleBar = document.getElementById(id).querySelector("#chat-conversation .simplebar-content-wrapper") ? document.getElementById(id).querySelector("#chat-conversation .simplebar-content-wrapper") : '';

        var offsetHeight = document.getElementsByClassName("chat-conversation-list")[0] ? document.getElementById(id).getElementsByClassName("chat-conversation-list")[0].scrollHeight - window.innerHeight + 600 : 0;

        if (offsetHeight)
          simpleBar.scrollTo({
            top: offsetHeight,
            behavior: "smooth"
          });
      }, 300);
    },

    chatUsername(name, image, type, data) {

      if (data.Channels) { data.Channels = 0; }

      if (type == "users") {
        this.currentSelectedChat = "users";
        this.username = name;
        this.userAvatar = image ? image : 'https://img.themesbrand.com/steemx/users/user-dummy-img.jpg';

        setTimeout(() => {
          this.copyToClipboard();
        }, 1000);
      } else {
        this.currentSelectedChat = "channel";
        this.username = name;
        this.userAvatar = image ? image : 'https://img.themesbrand.com/steemx/users/multi-user.jpg';

        setTimeout(() => {
          this.copyToClipboard();
        }, 1000);
      }
      document.querySelector('.user-chat').classList.add('user-chat-show');
    },

    copyToClipboard() {
      nextTick(() => {
        var itemList = document.querySelector(".chat-conversation-list");
        var copyMessage = itemList.querySelectorAll(".copy-message");
        copyMessage.forEach(function (item) {
          item.addEventListener("click", function () {
            if (item.closest('.chat-conversation-list').id == "users-conversation") {
              document.getElementById("copyClipBoard").style.display = "block";
            } else {
              document.getElementById("copyClipBoardChannel").style.display = "block";
            }
            var isText = item.closest(".ctext-wrap").children[0]
              ? item.closest(".ctext-wrap").children[0].children[0].innerText
              : "";
            navigator.clipboard.writeText(isText);

            setTimeout(() => {
              if (item.closest('.chat-conversation-list').id == "users-conversation") {
                document.getElementById("copyClipBoard").style.display = "none";
              } else {
                document.getElementById("copyClipBoardChannel").style.display = "none";
              }
            }, 1000);
          });
        });
      });
    },

    deleteMsg(e) {
      e.target.closest(".user-chat-content").childElementCount == 2 ? e.target.closest(".chat-list").remove() : e.target.closest(".ctext-wrap").remove();
    },

    formSubmit(e) {
      e.preventDefault();
      const message = this.chat.newMsg;
      if ((message != '' && message != null) || this.sendMsg) {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        var timeFormate = hours >= 12 ? "pm" : "am";
        let replyUsername = '';
        let replyMsg = '';

        if (document.querySelector(".replyCard")) {
          if (this.isReplyClicked == true) {
            replyUsername = document.querySelector(".replyCard .replymessage-block .conversation-name").innerText;
            replyMsg = document.querySelector(".replyCard .replymessage-block .conversation-name").nextSibling.innerText;
            document.querySelector(".replyCard").classList.remove("show");

            this.isReplyClicked = false;
          }
        }

        this.messages.push({
          align: "right",
          name: "Henry Wells",
          message: [
            {
              msg_id: 12,
              msg: message,
              reply_msg: replyMsg,
              reply_username: replyUsername,
              img: this.sendMsg
            }
          ],
          createdAt: hours + ":" + currentDate.getMinutes() + " " + timeFormate,
        });

        this.chat.newMsg = null;
        this.sendMsg = null;
        this.sendEmoji = [];
        document.querySelector(".replyCard").classList.remove("show");
        var currentChatId = "users-chat";
        this.scrollToBottom(currentChatId);

        document.querySelector(".chat-input-feedback").classList.add("d-none");
      } else {
        document.querySelector(".chat-input-feedback").classList.remove("d-none");
        document.querySelector(".chat-input-feedback").classList.add("d-block");
        setTimeout(function () {
          document.querySelector(".chat-input-feedback").classList.remove("d-block");
          document.querySelector(".chat-input-feedback").classList.add("d-none");
        }, 10000);
      }
    },

    replyMessage() {
      nextTick(() => {
        var itemList = document.querySelector(".chat-conversation-list");
        var replyMessage = itemList.querySelectorAll(".reply-message");
        var replyToggleOpen = document.querySelector(".replyCard");
        var replyToggleClose = document.querySelector("#close_toggle");
        var isThis = this;
        replyMessage.forEach(function (item) {
          var This = isThis;
          item.addEventListener("click", function () {
            This.isReplyClicked = true;
            replyToggleOpen.classList.add("show");
            replyToggleClose.addEventListener("click", function () {
              replyToggleOpen.classList.remove("show");
            });

            var replyMsg = item.closest(".ctext-wrap").children[0].children[0].innerText;
            document.querySelector(".replyCard .replymessage-block .flex-grow-1 .mb-0").innerText = replyMsg;
            var replyuser = document.querySelector(".user-chat-topbar .text-truncate .username").innerHTML;
            var msgOwnerName = (item.closest(".chat-list")) ? item.closest(".chat-list").classList.contains("left") ? replyuser : 'You' : replyuser;
            document.querySelector(".replyCard .replymessage-block .flex-grow-1 .conversation-name").innerText = msgOwnerName;

          }, This);
        }, isThis);
      });
    },

    closeChatbox() {
      document.querySelector('.user-chat').classList.remove('user-chat-show');
    },

    async startRecording() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.start();

        this.isRecording = true;

        this.mediaRecorder.ondataavailable = event => {
          if (event.data.size > 0) {
            // Process the recorded audio data, send it to a server, etc.
          }
        };

        this.mediaRecorder.onstop = () => {
          this.isRecording = false;
          stream.getTracks().forEach(track => track.stop());
        };
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    },

    stopRecording() {
      if (this.mediaRecorder) {
        this.mediaRecorder.stop();
      }
    },

    sendMessage() {
      if (this.message.trim() !== '') {
        // Send the text message to the chat or server
        this.$emit('messageSent', { type: 'text', content: this.message });
        this.message = ''; // Clear the input field
      }
    },

    handleImageUpload(event) {

      let file = event.target.files[0];

      if (file) {
        const imageUrl = URL.createObjectURL(file);
        this.sendMsg = imageUrl;
      }

      document.querySelector(".replyCard").classList.add("show");
    },

    closeReply() {
      document.querySelector(".replyCard").classList.remove("show");
      this.sendMsg = null;
    },


    recieveCall() {
      document.getElementById("incomingCall").classList.add("d-none");
      document.getElementById("recieveCall").classList.remove("d-none");
    },

    disconnectSimpleCall() {
      document.getElementById("incomingCall")?.classList.remove("d-none");
      document.getElementById("recieveCall")?.classList.add("d-none");
    },

    onSelectEmoji(emoji) {
      this.isOpen = false;

      this.sendEmoji = [...this.sendEmoji, emoji.i];
      this.chat.newMsg = [...this.sendEmoji].join(" ");
    }

  },

  watch: {
    layoutType: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.copyToClipboard();
          this.replyMessage();
        }
      },
    },
  },
  components: {
    
    
    
    SimpleBar,
    EmojiPicker
  }
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center gy-3">
        <BCol cols="sm">
          <PageHeader title="Chat" pagetitle="Chat" />
        </BCol>
        <BCol sm="auto" class="ms-auto">
          <div class="hstack gap-2 flex-wrap">
            <div class="search-box">
              <input type="text" class="form-control bg-light border-light" placeholder="Search here...">
              <i class="ri-search-2-line search-icon"></i>
            </div>
            <RightBar />
          </div>
        </BCol>
      </BRow>
    </div>

    <BCard no-body>
      <BCardBody class="p-0">
        <div class="chat-wrapper d-lg-flex">
          <div class="chat-leftsidebar">
            <BCardBody>
              <div class="d-flex align-items-center mb-4">
                <div class="flex-grow-1">
                  <h5 class="mb-0">Connections</h5>
                </div>
                <div class="flex-shrink-0">
                  <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Add Contact">
                    <!-- Button trigger modal -->
                    <BButton type="button" variant="subtle-primary" size="sm"
                      @click="inviteMembersModal = !inviteMembersModal">
                      <i class="ri-add-line align-bottom"></i>
                    </BButton>
                  </div>
                </div>
              </div>

              <BTabs navClass="bg-light nav-justified rounded-pill p-1 mb-3" activeNavItemClass="rounded-pill" pills>
                <BTab title="Connections" active>
                  <SimpleBar class="chat-room-list">
                    <div class="chat-message-list">
                      <ul class="list-unstyled chat-list chat-user-list" id="userList">
                        <li v-for="(contact, index) of connections" :key="index" :id="`contact-id-${contact.id}`"
                          data-name="direct-message" :class="(username == contact.name) ? 'active' : ''"
                          @click="chatUsername(contact.name, contact.image, 'users', contact)">
                          <BLink href="javascript: void(0);" :class="{ 'unread-msg-user': contact.Channels }">
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 chat-user-img align-self-center me-2 ms-0"
                                :class="{ 'online': contact.status == 'online', 'away': contact.status == 'offline' }">
                                <div class="avatar-xs" v-if="contact.image">
                                  <img :src="contact.image" class="rounded-circle img-fluid userprofile" alt=""><span
                                    class="user-status"></span>
                                </div>
                                <div class="avatar-xs" v-if="contact.isImg">
                                  <div class="avatar-title rounded-circle bg-primary text-white fs-xxs">{{ contact.profile
                                  }}</div><span class="user-status"></span>
                                </div>
                              </div>
                              <div class="flex-grow-1 overflow-hidden me-2">
                                <h6 class="text-truncate mb-1 lh-base">{{ contact.name }}</h6>
                                <p class="text-truncate text-muted fs-xs fw-normal mb-0">{{ contact.msg }}</p>
                              </div>
                              <div class="flex-shrink-0 fs-2xs align-self-start text-end" v-if="!contact.Channels"> {{
                                contact.date }} </div>
                              <div class="flex-shrink-0 fs-2xs align-self-start text-end" v-if="contact.Channels"> {{
                                contact.date }}
                                <div class="mt-1">
                                  <span
                                    class="badge bg-danger p-0 d-flex align-items-center justify-content-center ms-auto">{{
                                      contact.Channels }}</span>
                                </div>
                              </div>
                            </div>
                          </BLink>
                        </li>
                      </ul>
                    </div>

                    <BCardBody class="py-0 d-flex align-items-center my-2">
                      <div class="flex-grow-1">
                        <h4 class="mb-0 fs-xs text-muted text-uppercase">Connection Groups</h4>
                      </div>
                      <div class="flex-shrink-0">
                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom"
                          title="Create group">
                          <!-- Button trigger modal -->
                          <BButton type="button" variant="subtle-success" size="sm">
                            <i class="ri-add-line align-bottom"></i>
                          </BButton>
                        </div>
                      </div>
                    </BCardBody>

                    <div class="chat-message-list">
                      <ul class="list-unstyled chat-list chat-user-list mb-0" id="channelList">
                        <li v-for="(channel, index) of ChannelsData" :key="index" :id="`contact-id-${channel.id}`"
                          @click="chatUsername(channel.name, channel.image, 'channel', channel)"
                          :class="(username == channel.name) ? 'active' : ''" data-name="channel">
                          <BLink href="javascript: void(0);" :class="{ 'unread-msg-user': channel.Channels }">
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 chat-user-img align-self-center me-2 ms-0">
                                <div class="avatar-xxs">
                                  <div class="avatar-title bg-light rounded-circle text-body">#</div>
                                </div>
                              </div>
                              <div class="flex-grow-1 overflow-hidden">
                                <p class="text-truncate mb-0">{{ channel.name }}</p>
                              </div>
                              <div v-if="channel.Channels">
                                <div class="flex-shrink-0 ms-2">
                                  <span
                                    class="badge bg-dark-subtle text-body rounded p-0 d-flex align-items-center justify-content-center">{{
                                      channel.Channels }}</span>
                                </div>
                              </div>
                            </div>
                          </BLink>
                        </li>
                      </ul>
                    </div>
                    <!-- End chat-message-list -->
                  </SimpleBar>
                </BTab>
                <BTab title="Favorites">
                  <SimpleBar class="chat-room-list">
                    <ul class="list-unstyled chat-list chat-user-list" id="userList">
                      <li v-for="(contact, index) of connections" :key="index" :id="`contact-id-${contact.id}`"
                        data-name="direct-message" :class="(username == contact.name) ? 'active' : ''"
                        @click="chatUsername(contact.name, contact.image, 'users', contact)">
                        <BLink href="javascript: void(0);" :class="{ 'unread-msg-user': contact.Channels }">
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 chat-user-img align-self-center me-2 ms-0"
                              :class="{ 'online': contact.status == 'online', 'away': contact.status == 'offline' }">
                              <div class="avatar-xs" v-if="contact.image">
                                <img :src="contact.image" class="rounded-circle img-fluid userprofile" alt=""><span
                                  class="user-status"></span>
                              </div>
                              <div class="avatar-xs" v-if="contact.isImg">
                                <div class="avatar-title rounded-circle bg-primary text-white fs-xxs">{{ contact.profile
                                }}
                                </div><span class="user-status"></span>
                              </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden me-2">
                              <h6 class="text-truncate mb-1 lh-base">{{ contact.name }}</h6>
                              <p class="text-truncate text-muted fs-xs fw-normal mb-0">{{ contact.msg }}</p>
                            </div>
                            <div class="flex-shrink-0 fs-2xs align-self-start text-end" v-if="!contact.Channels"> {{
                              contact.date }} </div>
                            <div class="flex-shrink-0 fs-2xs align-self-start text-end" v-if="contact.Channels"> {{
                              contact.date }}
                              <div class="mt-1">
                                <span
                                  class="badge bg-danger p-0 d-flex align-items-center justify-content-center ms-auto">{{
                                    contact.Channels }}</span>
                              </div>
                            </div>
                          </div>
                        </BLink>
                      </li>
                    </ul>
                  </SimpleBar>
                </BTab>
              </BTabs>
            </BCardBody>
          </div>
          <!-- end chat leftsidebar -->

          <!-- Start User chat -->
          <div class="user-chat border-start w-100 overflow-hidden">

            <div class="chat-content d-lg-flex">
              <!-- start chat conversation section -->
              <div class="w-100 overflow-hidden position-relative">
                <!-- conversation user -->
                <div class="position-relative">

                  <div v-if="currentSelectedChat == 'users'" class="position-relative" id="users-chat">
                    <div class="p-3 user-chat-topbar border-bottom">
                      <BRow class="row align-items-center flex-nowrap">
                        <BCol sm="4" col>
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 d-block d-lg-none me-3">
                              <BLink href="javascript: void(0);" class="user-chat-remove fs-lg p-1" @click="closeChatbox">
                                <i class="ri-arrow-left-s-line align-bottom"></i>
                              </BLink>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                              <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                  <img :src="userAvatar" class="rounded-circle avatar-xs" alt="">
                                  <span class="user-status"></span>
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                  <h5 class="text-truncate mb-1 fs-lg">
                                    <BLink class="text-reset username" @click="userProfileCanvas = !userProfileCanvas"
                                      aria-controls="userProfileCanvasExample">{{ username }}</BLink>
                                  </h5>
                                  <p class="text-truncate text-muted fs-md mb-0 userStatus"><small>Online</small></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCol>
                        <BCol sm="8" cols="auto">
                          <ul class="list-inline user-chat-nav text-end mb-0">
                            <li class="list-inline-item m-0">
                              <BDropdown variant="link" toggle-class="btn btn-ghost-secondary btn-icon arrow-none"
                                menu-class="p-0 dropdown-menu-end dropdown-menu-lg" auto-close="outside">
                                <template #button-content> <i class="bi bi-search"></i> </template>
                                <div class="p-2">
                                  <div class="search-box">
                                    <input type="text" class="form-control bg-light border-light" autocomplete="off"
                                      placeholder="Search here..." v-model="searchMessages" id="searchMessage">
                                    <i class="ri-search-2-line search-icon"></i>
                                  </div>
                                </div>
                              </BDropdown>
                            </li>

                            <li class="list-inline-item d-none d-lg-inline-block m-0">
                              <router-link to="/chat/video-conference"
                                class="btn btn-ghost-secondary fs-lg btn-icon video-icon">
                                <i class="bi bi-camera-video"></i>
                              </router-link>
                            </li>

                            <li class="list-inline-item d-none d-lg-inline-block m-0">
                              <BButton type="button" variant="ghost-secondary" class="fs-lg btn-icon"
                                @click="exampleModal = !exampleModal">
                                <i class=" bi bi-telephone"></i>
                              </BButton>
                            </li>

                            <li class="list-inline-item m-0">
                              <BDropdown variant="link" toggle-class="btn btn-ghost-secondary fs-lg btn-icon arrow-none"
                                menu-class="dropdown-menu-end">
                                <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                                <BDropdownItem class="d-block d-lg-none user-profile-show"><i
                                    class="ri-user-2-fill align-bottom text-muted me-2"></i> View Profile</BDropdownItem>
                                <BDropdownItem><i class="ri-inbox-archive-line align-bottom text-muted me-2"></i> Archive
                                </BDropdownItem>
                                <BDropdownItem><i class="ri-mic-off-line align-bottom text-muted me-2"></i> Muted
                                </BDropdownItem>
                                <BDropdownItem><i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i> Delete
                                </BDropdownItem>
                              </BDropdown>
                            </li>
                          </ul>
                        </BCol>
                      </BRow>

                    </div>
                    <!-- end chat user head -->
                    <SimpleBar class="chat-conversation p-3 p-lg-4" id="chat-conversation">
                      <div id="elmLoader" v-if="loader">
                        <div class="spinner-border text-primary avatar-sm" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                      <ul class="list-unstyled chat-conversation-list" id="users-conversation">
                        <li v-for="(msg, index) of resultQuery" :key="index" class="chat-list" :class="{ right: `${msg.align}` === 'right', left: `${msg.align}` !== 'right' }
                          " :id="msg.id" style="">
                          <div class="conversation-list">
                            <div class="chat-avatar" v-if="msg.align !== 'right'">
                              <img :src="userAvatar ? userAvatar : require('@/assets/images/users/user-dummy-img.jpg')"
                                alt="">
                            </div>
                            <div class="user-chat-content">
                              <div class="ctext-wrap" v-for="(innerMsg, index) of msg.message" :key="index">
                                <div class="ctext-wrap-content" :id="innerMsg.msg_id">

                                  <div class="replymessage-block mb-0 d-flex align-items-start"
                                    v-if="innerMsg.reply_username">
                                    <div class="flex-grow-1">
                                      <h5 class="conversation-name">{{ innerMsg.reply_username }}</h5>
                                      <p class="mb-0">{{ innerMsg.reply_msg }}</p>
                                    </div>
                                  </div>

                                  <p class="mt-1 ctext-content" :class="{ 'mb-0': !msg.progess }">{{ innerMsg.msg }}</p>
                                  <img :src="innerMsg.img" v-if="innerMsg.img" height="150">

                                  <div v-if="msg.progess">
                                    <BProgress v-for="(  prog, index  ) of msg.progess" :key="index"
                                      :value="prog.progressbar" class="progress-xl mb-2 bg-body-secondary">
                                      <BProgressBar :value="prog.progressbar">
                                        <span>{{ prog.title }}</span>
                                      </BProgressBar>
                                    </BProgress>
                                  </div>

                                  <div v-if="msg.isIncomingCall" class="d-flex flex-wrap align-items-center gap-2">
                                    <div class="avatar-sm flex-shrink-0">
                                      <div class="avatar-title bg-body-secondary rounded text-primary fs-4">
                                        <i class="ph ph-phone-call"></i>
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                      <h6 class="ctext-content text-truncate">Incoming Calling...</h6>
                                      <p class="text-truncate text-muted mb-0">Not answered yet.</p>
                                    </div>
                                    <div>
                                      <BButton variant="success" size="sm" class="me-1">Answer</BButton>
                                      <BButton variant="danger" size="sm">Reject</BButton>
                                    </div>
                                  </div>
                                </div>
                                <BDropdown variant="link" class="align-self-start message-box-drop"
                                  toggle-class="arrow-none">
                                  <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                                  <BDropdownItem class="reply-message"><i class="bi bi-reply me-2 text-muted"></i>Reply
                                  </BDropdownItem>
                                  <BDropdownItem><i class="bi bi-share me-2 text-muted"></i>Forward </BDropdownItem>
                                  <BDropdownItem class="copy-message"><i
                                      class="bi bi-clipboard-check me-2 text-muted"></i>Copy </BDropdownItem>
                                  <BDropdownItem><i class="bi bi-bookmarks me-2 text-muted"></i>Bookmark </BDropdownItem>
                                  <BDropdownItem class="delete-item" @click="deleteMsg"><i
                                      class="bi bi-trash3 me-2 text-muted"></i>Delete </BDropdownItem>
                                </BDropdown>
                              </div>
                              <div v-if="msg.has_reactEmoji" class="ctext-reply-emoji d-flex gap-1 flex-wrap mb-2">
                                <BLink v-for="(  emoji, index  ) of   msg.has_reactEmoji  " :key="index" href="#!"
                                  class="badge bg-light text-body"><span>{{ emoji.reactIcon }}</span><span>{{
                                    emoji.reactNum }}</span></BLink>
                              </div>
                              <div class="conversation-name"><span class="d-none name">{{ msg.sender
                              }}</span><small class="text-muted time">{{ msg.createdAt }}</small>
                                <span class="text-success check-message-icon"><i class="bx bx-check-double"></i></span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <!-- end chat-conversation-list -->
                    </SimpleBar>
                    <BAlert :model-value="true" variant="warning"
                      class="alert-dismissible copyclipboard-alert px-8 fade show " id="copyClipBoard" role="alert">
                      Message copied
                    </BAlert>
                  </div>

                  <div v-if="currentSelectedChat == 'channel'" class="position-relative" id="channel-chat">
                    <div class="p-3 user-chat-topbar border-bottom">
                      <BRow class="align-items-center flex-nowrap">
                        <BCol sm="4" col>
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 d-block d-lg-none me-3">
                              <BLink href="javascript: void(0);" class="user-chat-remove fs-lg p-1" @click="closeChatbox">
                                <i class="ri-arrow-left-s-line align-bottom"></i>
                              </BLink>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                              <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                  <img :src="userAvatar" class="rounded-circle avatar-xs" alt="">
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                  <h5 class="text-truncate mb-0 fs-lg">
                                    <BLink class="text-reset username" @click="userProfileCanvas = !userProfileCanvas">{{
                                      username }}</BLink>
                                  </h5>
                                  <p class="text-truncate text-muted fs-md mb-0 userStatus"><small>24 Members</small></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCol>
                        <BCol sm="8" cols="auto">
                          <ul class="list-inline user-chat-nav text-end mb-0">
                            <li class="list-inline-item m-0">
                              <BDropdown variant="link" toggle-class="btn btn-ghost-secondary btn-icon arrow-none"
                                menu-class="p-0 dropdown-menu-end dropdown-menu-lg">
                                <template #button-content> <i class="bi bi-search"></i> </template>
                                <div class="p-2">
                                  <div class="search-box">
                                    <input type="text" class="form-control bg-light border-light" autocomplete="off"
                                      placeholder="Search here..." v-model="searchMessages" id="searchMessage">
                                    <i class="ri-search-2-line search-icon"></i>
                                  </div>
                                </div>
                              </BDropdown>
                            </li>

                            <li class="list-inline-item d-none d-lg-inline-block m-0">
                              <button type="button" class="btn btn-ghost-secondary btn-icon" data-bs-toggle="offcanvas"
                                data-bs-target="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">
                                <i class="bi bi-info-circle"></i>
                              </button>
                            </li>

                            <li class="list-inline-item m-0">

                              <BDropdown variant="link" toggle-class="btn btn-ghost-secondary fs-lg btn-icon arrow-none"
                                menu-class="dropdown-menu-end">
                                <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                                <BDropdownItem class="d-block d-lg-none user-profile-show"><i
                                    class="ri-user-2-fill align-bottom text-muted me-2"></i> View Profile</BDropdownItem>
                                <BDropdownItem><i class="ri-inbox-archive-line align-bottom text-muted me-2"></i> Archive
                                </BDropdownItem>
                                <BDropdownItem><i class="ri-mic-off-line align-bottom text-muted me-2"></i> Muted
                                </BDropdownItem>
                                <BDropdownItem><i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i> Delete
                                </BDropdownItem>
                              </BDropdown>
                            </li>
                          </ul>
                        </BCol>
                      </BRow>

                    </div>
                    <!-- end chat user head -->
                    <SimpleBar class="chat-conversation p-3 p-lg-4" id="chat-conversation">
                      <ul class="list-unstyled chat-conversation-list" id="channel-conversation">
                        <li v-for="(  msg, index  ) of   channelMessage  " :key="index" class="chat-list"
                          :class="(msg.isRight == true) ? 'right' : 'left'" :id="msg.id" style="">
                          <div class="conversation-list">
                            <div class="chat-avatar" v-if="msg.image">
                              <img :src="msg.image" alt="">
                            </div>
                            <div class="user-chat-content">
                              <div class="ctext-wrap" v-for="(  innerMsg, index  ) of   msg.message  " :key="index">
                                <div class="ctext-wrap-content" :id="innerMsg.msg_id">
                                  <p class="mb-0 ctext-content">{{ innerMsg.msg }}</p>
                                </div>
                                <BDropdown variant="link" class="align-self-start message-box-drop"
                                  toggle-class="arrow-none">
                                  <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                                  <BDropdownItem class="reply-messag"><i class="bi bi-reply me-2 text-muted"></i>Reply
                                  </BDropdownItem>
                                  <BDropdownItem><i class="bi bi-share me-2 text-muted"></i>Forward</BDropdownItem>
                                  <BDropdownItem class="copy-message"><i
                                      class="bi bi-clipboard-check me-2 text-muted"></i>Copy</BDropdownItem>
                                  <BDropdownItem><i class="bi bi-bookmarks me-2 text-muted"></i>Bookmark</BDropdownItem>
                                  <BDropdownItem class="delete-item"><i class="bi bi-trash3 me-2 text-muted"></i>Delete
                                  </BDropdownItem>
                                </BDropdown>
                              </div>
                              <div class="conversation-name"><span class="d-none name">{{ msg.sender
                              }}</span><small class="text-muted time">{{ msg.createdAt }}</small>
                                <span class="text-success check-message-icon"><i class="bx bx-check-double"></i></span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <!-- end chat-conversation-list -->

                    </SimpleBar>
                    <BAlert :model-value="true" variant="warning"
                      class="alert-dismissible copyclipboard-alert px-4 fade show " id="copyClipBoardChannel"
                      role="alert">Message copied</BAlert>
                  </div>

                  <!-- end chat-conversation -->

                  <div class="chat-input-section p-3 border-top">

                    <form @submit.prevent="formSubmit" id="chatinput-form" enctype="multipart/form-data">
                      <BRow class="g-0 align-items-center">
                        <BCol cols="auto">
                          <div class="chat-input-links me-2">
                            <div class="links-list-item">
                              <BButton type="button" variant="ghost-danger" class="emoji-btn" id="emoji-btn"
                                :class="{ active: isOpen }" @click="isOpen = !isOpen">
                                <i class="bx bx-smile align-middle"></i>
                                <EmojiPicker v-if="isOpen" hide-search="hide" :native="true" @select="onSelectEmoji" :style="emojiPickerStyle" />
                              </BButton>

                            </div>
                          </div>
                        </BCol>

                        <BCol col>
                          <div class="chat-input-feedback">
                            Please Enter a Message
                          </div>
                          <input ref="inputRef" type="text" v-model="chat.newMsg"
                            class="form-control chat-input bg-light border-light" id="chat-input"
                            placeholder="Type your message..." autocomplete="off" @keydown.enter="text = ''">
                        </BCol>
                        <BCol cols="auto">
                          <BCol cols="auto" class="d-flex align-items-center justify-content-end gap-2">
                            <div class="chat-input-links ms-2">
                              <button type="button" id="startButton" :class="[startButtonClass]" @click="startRecognition"
                                class="btn btn-ghost-success btn-icon"><i class="bi bi-mic"></i></button>
                              <button type="button" id="recordInProgressButton"
                                class="btn btn-link btn-icon link-danger d-none"><i class="bi bi-mic-mute"></i></button>
                            </div>
                            <div class="chat-input-links">
                              <label for="imageInput" class="btn btn-ghost-primary btn-icon"><i
                                  class="bi bi-image"></i></label>
                              <input type="file" id="imageInput" class="d-none" accept="image/png, image/gif, image/jpeg">
                            </div>
                            <BButton type="submit" variant="dark" class="chat-send waves-effect waves-light">
                              <i class="ph-paper-plane-right align-middle"></i>
                            </BButton>
                          </BCol>
                        </BCol>

                      </BRow>
                    </form>
                  </div>

                  <div class="replyCard">
                    <BCard no-body class="mb-0">
                      <BCardBody>
                        <div class="replymessage-block mb-0 d-flex align-items-start">
                          <div class="flex-grow-1">
                            <h5 class="conversation-name"></h5>
                            <p class="mb-0"></p>
                            <p class="mb-0">
                              <img id="tempImgFile" :src="sendMsg" width="150">
                            </p>
                          </div>
                          <div class="flex-shrink-0">
                            <BButton type="button" id="close_toggle" variant="link" size="sm" class="mt-n2 me-n3 fs-lg"
                              @click="closeReply">
                              <i class="bx bx-x align-middle"></i>
                            </BButton>
                          </div>
                        </div>
                      </BCardBody>
                    </BCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end chat-wrapper -->
      </BCardBody>
    </BCard>

    <BModal v-model="inviteMembersModal" hide-footer content-class="border-0" header-class="p-3 ps-4 bg-primary-subtle"
      title="Add Participant" class="fade" id="inviteMembersModal" tabindex="-1" aria-labelledby="inviteMembersModalLabel"
      aria-hidden="true" centered="">
      <BModalBody class="p-4">
        <div class="search-box mb-3">
          <input type="text" class="form-control bg-light border-light" placeholder="Search here...">
          <i class="ri-search-line search-icon"></i>
        </div>

        <div class="mb-4 d-flex align-items-center">
          <div class="me-2">
            <h5 class="mb-0 fs-md">Members :</h5>
          </div>
          <div class="avatar-group justify-content-center">
            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover"
              data-bs-placement="top" title="Tonya Noble">
              <div class="avatar-xs">
                <img src="https://img.themesbrand.com/steemx/users/avatar-10.jpg" alt="" class="rounded-circle img-fluid">
              </div>
            </BLink>
            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover"
              data-bs-placement="top" title="Thomas Taylor">
              <div class="avatar-xs">
                <img src="https://img.themesbrand.com/steemx/users/avatar-8.jpg" alt="" class="rounded-circle img-fluid">
              </div>
            </BLink>
            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover"
              data-bs-placement="top" title="Nancy Martino">
              <div class="avatar-xs">
                <img src="https://img.themesbrand.com/steemx/users/avatar-2.jpg" alt="" class="rounded-circle img-fluid">
              </div>
            </BLink>
          </div>
        </div>
        <SimpleBar class="mx-n4 px-4" style="max-height: 225px;">
          <div class="vstack gap-3">
            <div class="d-flex align-items-center">
              <div class="avatar-xs flex-shrink-0 me-2">
                <img src="https://img.themesbrand.com/steemx/users/avatar-2.jpg" alt="" class="img-fluid rounded-circle">
              </div>
              <div class="flex-grow-1">
                <h5 class="fs-md mb-0">
                  <BLink href="javascript:void(0);" class="text-body d-block">Nancy Martino</BLink>
                </h5>
              </div>
              <div class="flex-shrink-0">
                <BButton type="button" variant="light" size="sm">Add</BButton>
              </div>
            </div>
            <!-- end member item -->
            <div class="d-flex align-items-center">
              <div class="avatar-xs flex-shrink-0 me-2">
                <div class="avatar-title bg-danger-subtle text-danger rounded-circle">
                  HB
                </div>
              </div>
              <div class="flex-grow-1">
                <h5 class="fs-md mb-0">
                  <BLink href="javascript:void(0);" class="text-body d-block">Henry Baird</BLink>
                </h5>
              </div>
              <div class="flex-shrink-0">
                <BButton type="button" variant="light" size="sm">Add</BButton>
              </div>
            </div>
            <!-- end member item -->
            <div class="d-flex align-items-center">
              <div class="avatar-xs flex-shrink-0 me-2">
                <img src="https://img.themesbrand.com/steemx/users/avatar-3.jpg" alt="" class="img-fluid rounded-circle">
              </div>
              <div class="flex-grow-1">
                <h5 class="fs-md mb-0">
                  <BLink href="javascript:void(0);" class="text-body d-block">Frank Hook</BLink>
                </h5>
              </div>
              <div class="flex-shrink-0">
                <BButton type="button" variant="light" size="sm">Add</BButton>
              </div>
            </div>
            <!-- end member item -->
            <div class="d-flex align-items-center">
              <div class="avatar-xs flex-shrink-0 me-2">
                <img src="https://img.themesbrand.com/steemx/users/avatar-4.jpg" alt="" class="img-fluid rounded-circle">
              </div>
              <div class="flex-grow-1">
                <h5 class="fs-md mb-0">
                  <BLink href="javascript:void(0);" class="text-body d-block">Jennifer Carter</BLink>
                </h5>
              </div>
              <div class="flex-shrink-0">
                <BButton type="button" variant="light" size="sm">Add</BButton>
              </div>
            </div>
            <!-- end member item -->
            <div class="d-flex align-items-center">
              <div class="avatar-xs flex-shrink-0 me-2">
                <div class="avatar-title bg-success-subtle text-success rounded-circle">
                  AC
                </div>
              </div>
              <div class="flex-grow-1">
                <h5 class="fs-md mb-0">
                  <BLink href="javascript:void(0);" class="text-body d-block">Alexis Clarke</BLink>
                </h5>
              </div>
              <div class="flex-shrink-0">
                <BButton type="button" variant="light" size="sm">Add</BButton>
              </div>
            </div>
            <!-- end member item -->
            <div class="d-flex align-items-center">
              <div class="avatar-xs flex-shrink-0 me-2">
                <img src="https://img.themesbrand.com/steemx/users/avatar-7.jpg" alt="" class="img-fluid rounded-circle">
              </div>
              <div class="flex-grow-1">
                <h5 class="fs-md mb-0">
                  <BLink href="javascript:void(0);" class="text-body d-block">Joseph Parker</BLink>
                </h5>
              </div>
              <div class="flex-shrink-0">
                <BButton type="button" variant="light" size="sm">Add</BButton>
              </div>
            </div>
            <!-- end member item -->
          </div>
          <!-- end list -->
        </SimpleBar>
      </BModalBody>
      <div class="text-end">
        <BButton type="button" variant="light" class="w-xs me-2" @click="inviteMembersModal = false">Cancel</BButton>
        <BButton type="button" variant="primary" class="w-xs">Add Participant</BButton>
      </div>
    </BModal>

    <BOffcanvas v-model="userProfileCanvas" body-class="profile-offcanvas p-0" title="Contact Info" title-class="mb-0"
      header-class="bg-light" placement="end" class="border-0" tabindex="-1" id="userProfileCanvasExample">
      <div class="text-center p-4">
        <img src="https://img.themesbrand.com/steemx/users/avatar-2.jpg" alt=""
          class="avatar-xl img-thumbnail rounded-circle mx-auto profile-img">
        <div class="mt-3">
          <h5 class="mb-1">
            <BLink href="javascript:void(0);" class="link-primary username">{{ username }}</BLink>
          </h5>
          <p class="text-muted"><i class="ri-checkbox-blank-circle-fill me-1 align-bottom fs-2xs text-success"></i>Online
          </p>
        </div>

        <div class="d-flex gap-2 justify-content-center">
          <button type="button" class="btn avatar-xs p-0" v-b-tooltip="'Message'">
            <span class="avatar-title rounded bg-danger-subtle text-danger">
              <i class="ri-question-answer-line"></i>
            </span>
          </button>

          <button type="button" class="btn avatar-xs p-0" v-b-tooltip="'Favorite'">
            <span class="avatar-title rounded bg-warning-subtle text-warning">
              <i class="ri-star-line"></i>
            </span>
          </button>

          <button type="button" class="btn avatar-xs p-0" v-b-tooltip="'Phone'">
            <span class="avatar-title rounded bg-secondary-subtle text-secondary">
              <i class="ri-phone-line"></i>
            </span>
          </button>

          <BDropdown variant="link" toggle-class="btn avatar-xs p-0 arrow-none" menu-class="dropdown-menu-end">
            <template #button-content> <span class="avatar-title bg-light text-body rounded"> <i class="ri-more-fill"></i>
              </span> </template>
            <BDropdownItem><i class="ri-inbox-archive-line align-bottom text-muted me-2"></i>Archive</BDropdownItem>
            <BDropdownItem><i class="ri-mic-off-line align-bottom text-muted me-2"></i>Muted</BDropdownItem>
            <BDropdownItem><i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i>Delete</BDropdownItem>
          </BDropdown>
        </div>
      </div>

      <div class="border-top border-2 border-top-dashed p-3">
        <h5 class="fs-lg mb-3">Personal Information</h5>
        <div class="d-flex align-items-center gap-2 mb-2">
          <div class="avatar-xs flex-shrink-0">
            <div class="avatar-title bg-light text-body rounded">
              <i class="bi bi-telephone"></i>
            </div>
          </div>
          <div class="flex-grow-1">
            <p class="text-muted fw-medium fs-xs mb-1">Number</p>
            <h6 class="fs-sm">+(256) 2451 8974</h6>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2 mb-2">
          <div class="avatar-xs flex-shrink-0">
            <div class="avatar-title bg-light text-body rounded">
              <i class="bi bi-envelope"></i>
            </div>
          </div>
          <div class="flex-grow-1">
            <p class="text-muted fw-medium fs-xs mb-1">Email</p>
            <h6 class="fs-sm">joelbird@gmail.com</h6>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2 mb-2">
          <div class="avatar-xs flex-shrink-0">
            <div class="avatar-title bg-light text-body rounded">
              <i class="bi bi-skype"></i>
            </div>
          </div>
          <div class="flex-grow-1">
            <p class="text-muted fw-medium fs-xs mb-1">Skype</p>
            <h6 class="fs-sm">@joel_bird</h6>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <div class="avatar-xs flex-shrink-0">
            <div class="avatar-title bg-light text-body rounded">
              <i class="bi bi-geo-alt"></i>
            </div>
          </div>
          <div class="flex-grow-1">
            <p class="text-muted fw-medium fs-xs mb-1">Location</p>
            <h6 class="fs-sm">California, USA</h6>
          </div>
        </div>
      </div>

      <div class="border-top border-2 border-top-dashed p-3">
        <BLink href="#!" class="text-muted float-end">See All</BLink>
        <h5 class="fs-md mb-3">Media</h5>

        <BRow class="g-2">
          <BCol cols="3">
            <BLink href="#!"><img src="https://img.themesbrand.com/steemx/small/img-1.jpg" alt=""
                class="img-thumbnail border-1"></BLink>
          </BCol>
          <BCol cols="3">
            <BLink href="#!"><img src="https://img.themesbrand.com/steemx/small/img-2.jpg" alt=""
                class="img-thumbnail border-1"></BLink>
          </BCol>
          <BCol cols="3">
            <BLink href="#!"><img src="https://img.themesbrand.com/steemx/small/img-3.jpg" alt=""
                class="img-thumbnail border-1"></BLink>
          </BCol>
        </BRow>
      </div>

      <div class="border-top border-2 border-top-dashed p-3">
        <BLink href="#!" class="text-muted float-end">See All</BLink>
        <h5 class="fs-md mb-3">Recent Files <span class="badge bg-success-subtle text-success align-middle ms-1">8</span>
        </h5>

        <div class="vstack gap-2">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 avatar-xs me-2">
              <div class="avatar-title bg-danger rounded">
                <i class="bi bi-file-earmark-richtext"></i>
              </div>
            </div>
            <div class="flex-grow-1 overflow-hidden">
              <h5 class="fs-sm fw-medium text-truncate mb-1">App pages.zip</h5>
              <p class="text-muted fs-xs mb-0">2.5 MB</p>
            </div>

            <div class="flex-shrink-0 ms-3">
              <div class="d-flex gap-2">
                <div>
                  <BLink href="#" class="text-muted px-1">
                    <i class="bi bi-download"></i>
                  </BLink>
                </div>
                <BDropdown variant="link" toggle-class="text-muted px-1 arrow-none" menu-class="dropdown-menu-end">
                  <template #button-content> <i class="bi bi-three-dots"></i> </template>
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Share <i
                      class="bi bi-share ms-2 text-muted"></i></BDropdownItem>
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Bookmark <i
                      class="bi bi-bookmarks text-muted ms-2"></i></BDropdownItem>
                  <BDropdownDivider />
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Delete <i
                      class="bi bi-trash3 ms-2 text-muted"></i></BDropdownItem>
                </BDropdown>
              </div>
            </div>
          </div>


          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 avatar-xs me-2">
              <div class="avatar-title bg-secondary rounded">
                <i class="bi bi-file-earmark-richtext"></i>
              </div>
            </div>
            <div class="flex-grow-1 overflow-hidden">
              <h5 class="fs-sm fw-medium text-truncate mb-1">SteemX admin.ppt</h5>
              <p class="text-muted fs-xs mb-0">2.4 MB</p>
            </div>

            <div class="flex-shrink-0 ms-3">
              <div class="d-flex gap-2">
                <div>
                  <BLink href="#" class="text-muted px-1">
                    <i class="bi bi-download"></i>
                  </BLink>
                </div>
                <BDropdown variant="link" toggle-class="text-muted px-1 arrow-none" menu-class="dropdown-menu-end">
                  <template #button-content> <i class="bi bi-three-dots"></i> </template>
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Share <i
                      class="bi bi-share ms-2 text-muted"></i></BDropdownItem>
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Bookmark <i
                      class="bi bi-bookmarks text-muted ms-2"></i></BDropdownItem>
                  <BDropdownDivider />
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Delete <i
                      class="bi bi-trash3 ms-2 text-muted"></i></BDropdownItem>
                </BDropdown>
              </div>
            </div>
          </div>

          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 avatar-xs me-2">
              <div class="avatar-title bg-warning rounded">
                <i class="bi bi-file-earmark-richtext"></i>
              </div>
            </div>
            <div class="flex-grow-1 overflow-hidden">
              <h5 class="fs-sm fw-medium text-truncate mb-1">Images.zip</h5>
              <p class="text-muted fs-xs mb-0">1.2MB</p>
            </div>

            <div class="flex-shrink-0 ms-3">
              <div class="d-flex gap-2">
                <div>
                  <BLink href="#" class="text-muted px-1">
                    <i class="bi bi-download"></i>
                  </BLink>
                </div>
                <BDropdown variant="link" toggle-class="text-muted px-1 arrow-none" menu-class="dropdown-menu-end">
                  <template #button-content> <i class="bi bi-three-dots"></i> </template>
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Share <i
                      class="bi bi-share ms-2 text-muted"></i></BDropdownItem>
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Bookmark <i
                      class="bi bi-bookmarks text-muted ms-2"></i></BDropdownItem>
                  <BDropdownDivider />
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Delete <i
                      class="bi bi-trash3 ms-2 text-muted"></i></BDropdownItem>
                </BDropdown>
              </div>
            </div>
          </div>

          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 avatar-xs me-2">
              <div class="avatar-title bg-success rounded">
                <i class="bi bi-file-earmark-richtext"></i>
              </div>
            </div>
            <div class="flex-grow-1 overflow-hidden">
              <h5 class="fs-sm fw-medium text-truncate mb-1">bg-pattern.png</h5>
              <p class="text-muted fs-xs mb-0">2.97MB</p>
            </div>

            <div class="flex-shrink-0 ms-3">
              <div class="d-flex gap-2">
                <div>
                  <BLink href="#" class="text-muted px-1">
                    <i class="bi bi-download"></i>
                  </BLink>
                </div>
                <BDropdown variant="link" toggle-class="text-muted px-1 arrow-none" menu-class="dropdown-menu-end">
                  <template #button-content> <i class="bi bi-three-dots"></i> </template>
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Share <i
                      class="bi bi-share ms-2 text-muted"></i></BDropdownItem>
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Bookmark <i
                      class="bi bi-bookmarks text-muted ms-2"></i></BDropdownItem>
                  <BDropdownDivider />
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Delete <i
                      class="bi bi-trash3 ms-2 text-muted"></i></BDropdownItem>
                </BDropdown>
              </div>
            </div>
          </div>

          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 avatar-xs me-2">
              <div class="avatar-title bg-primary rounded">
                <i class="bi bi-image"></i>
              </div>
            </div>
            <div class="flex-grow-1 overflow-hidden">
              <h5 class="fs-sm fw-medium text-truncate mb-1">steex-demo.png</h5>
              <p class="text-muted fs-xs mb-0">0.87MB</p>
            </div>

            <div class="flex-shrink-0 ms-3">
              <div class="d-flex gap-2">
                <div>
                  <BLink href="#" class="text-muted px-1">
                    <i class="bi bi-download"></i>
                  </BLink>
                </div>
                <BDropdown variant="link" toggle-class="text-muted px-1 arrow-none" menu-class="dropdown-menu-end">
                  <template #button-content> <i class="bi bi-three-dots"></i> </template>
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Share <i
                      class="bi bi-share ms-2 text-muted"></i></BDropdownItem>
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Bookmark <i
                      class="bi bi-bookmarks text-muted ms-2"></i></BDropdownItem>
                  <BDropdownDivider />
                  <BDropdownItem class="d-flex align-items-center justify-content-between">Delete <i
                      class="bi bi-trash3 ms-2 text-muted"></i></BDropdownItem>
                </BDropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BOffcanvas>
  </Layout>

  <BModal v-model="exampleModal" hide-footer no-body hide-header class="modal fade" id="exampleModal" centered
    body-class="py-5 backImage" content-class="border-0 overflow-hidden" size="sm">
    <div class="bg-overlay bg-primary bg-opacity-75"></div>
    <div class="d-flex align-items-center justify-content-center h-100">
      <div class="position-relative text-center">
        <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-lg mx-auto d-block rounded-circle">
        <div class="mt-4">
          <h4 class="text-white">Sophia Bethany</h4>
          <p class="text-white text-opacity-75">Calling ...</p>
          <div class="hstack gap-2 justify-content-center" id="incomingCall">
            <button class="btn btn-danger btn-icon rounded-circle" data-bs-dismiss="modal"
              @click="disconnectSimpleCall"><i class="ph ph-phone-disconnect"></i></button>
            <button class="btn btn-success btn-icon rounded-circle" id="joinSimpleCall" @click="recieveCall"><i
                class="bi bi-telephone"></i></button>
          </div>
          <div class="hstack gap-2 justify-content-center d-none" id="recieveCall">
            <button class="btn btn-light btn-icon rounded-circle"><i class="bi bi-mic-mute"></i></button>
            <button class="btn btn-light btn-icon rounded-circle"><i class="bi bi-volume-up"></i></button>
            <button class="btn btn-danger btn-icon rounded-circle" data-bs-dismiss="modal" id="disconnectSimpleCall"><i
                class="ph ph-phone-disconnect"></i></button>
            <button class="btn btn-light btn-icon rounded-circle"><i class="bi bi-person-plus"></i></button>
            <button class="btn btn-light btn-icon rounded-circle"><i class="bi bi-record2"></i></button>
          </div>
        </div>
      </div>
    </div>
  </BModal>
</template>

<style>
.backImage {
  background-image: url('@/assets/images/small/img-2.jpg');
  height: 400px;
  background-size: cover;
}
</style>

