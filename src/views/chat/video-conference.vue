<script>
import Layout from "@/layouts";
import RightBar from "@/components/right-bar.vue";

import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

export default {
  data() {
    return {
      inviteMembersModal: false,
      simpleValue: 10,

      msg: "",
      submitted: false,

      chats: [],

      isCalling: false,
      zoomScale: 1,
      downloadVisible: false,
      localPeerConnection: null,

      chatTime: 0,
      running: false,
      formattedTime: '00:00:00',

      chatsData: [
        {

          id: 1,
          msg: "Good morning 😊",
          img: require("@/assets/images/users/avatar-5.jpg"),
          name: "Nicholas"
        },
        {

          id: 2,
          msg: "Hope all guys joined the meeting right?",
          img: require("@/assets/images/users/avatar-1.jpg"),
          name: "Jennifer"
        },
        {

          id: 3,
          msg: "Yes, Ma'am.",
          img: require("@/assets/images/users/avatar-3.jpg"),
          name: "Alyssa"
        },
        {

          id: 4,
          msg: "Joined",
          img: require("@/assets/images/users/avatar-10.jpg"),
          name: "Phillip"
        },
        {

          id: 5,
          msg: "Cool, Let's start the meet.",
          img: require("@/assets/images/users/avatar-1.jpg"),
          name: "Jennifer"
        },
      ]
    };
  },
  methods: {

    increment() {
      if (this.running) {
        setTimeout(() => {
          this.chatTime++;
          const hours = Math.floor(this.chatTime / 10 / 3600);
          const mins = Math.floor(this.chatTime / 10 / 60);
          const secs = Math.floor(this.chatTime / 10);

          this.formattedTime = `${this.padZero(hours)}:${this.padZero(mins)}:${this.padZero(secs)}`;
          this.increment();
        }, 100);
      }
    },

    padZero(number) {
      return number <= 9 ? `0${number}` : number;
    },
    async getMediaStream() {
      try {
        const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        this.$refs.localVideo.srcObject = localStream;
        return localStream;
      } catch (error) {
        alert(error);
        console.error('Error accessing user media:', error);
      }
    },
    updateZoom() {
      this.$refs.localVideo.style.transform = `scale(${this.zoomScale})`;
      this.$refs.remoteVideo.style.transform = `scale(${this.zoomScale})`;
    },
    captureImage() {
      if (!this.isCalling) {
        console.error('Local stream not available.');
        return;
      }

      if (document.getElementById("hideImgEle")) {
        document.getElementById("hideImgEle").style.display = "none";
      }

      this.$refs.captureCanvas.style.display = 'block';
      this.$refs.captureCanvas.width = 333;
      this.$refs.captureCanvas.height = 229;

      const context = this.$refs.captureCanvas.getContext('2d');
      context.drawImage(this.$refs.localVideo, 0, 0, this.$refs.captureCanvas.width, this.$refs.captureCanvas.height);

      this.$refs.captureCanvas.toDataURL();
      this.downloadVisible = true;
    },
    downloadPhoto() {
      const dataURL = this.$refs.captureCanvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'captured-photo.jpg';
      link.click();
    },
    startCall() {
      if (this.isCalling) {
        console.error('Call already in progress.');
        return;
      }

      this.isCalling = true;
      this.getMediaStream().then(localStream => {
        this.$refs.localVideo.srcObject = localStream;

        this.localPeerConnection = new RTCPeerConnection();
        if (localStream) {
          localStream.getTracks().forEach(track => {
            this.localPeerConnection.addTrack(track, localStream);
          });
        }

        this.localPeerConnection.ontrack = event => {
          this.$refs.remoteVideo.srcObject = event.streams[0];
        };

        this.localPeerConnection.createOffer()
          .then(offer => this.localPeerConnection.setLocalDescription(offer))
          .catch(error => {
            console.error("Error creating offer:", error);
            this.isCalling = false;
          });
      });

      this.increment();
    },
    endCall() {
      if (!this.isCalling) {
        console.error('No call in progress.');
        return;
      }

      this.isCalling = false;

      if (this.localPeerConnection) {
        this.localPeerConnection.close();
        this.localPeerConnection = null;
      }

      if (this.$refs.localVideo.srcObject) {
        this.$refs.localVideo.srcObject.getTracks().forEach(track => track.stop());
        this.$refs.localVideo.srcObject = null;
      }

      if (this.$refs.remoteVideo.srcObject) {
        this.$refs.remoteVideo.srcObject.getTracks().forEach(track => track.stop());
        this.$refs.remoteVideo.srcObject = null;
      }

      this.zoomScale = 1;
      this.downloadVisible = false;
      this.running = false;
    },

    topChats() {
      var msgCount = 0;
      setInterval(() => {
        if (this.chatsData.length > msgCount) {
          this.chats.push(this.chatsData[msgCount]);
          msgCount++;
        }
      }, 1000);
    },

    // Chats
    sendMsg() {
      this.submitted = true;
      if (this.msg) {
        let data = {
          id: (Math.floor(Math.random() * 100 + 20) - 20),
          msg: this.msg,
          img: require("@/assets/images/users/avatar-1.jpg"),
          name: "Jennifer"
        };
        this.chats.push(data);
        this.submitted = false;
        this.msg = "";
      }

      setTimeout(() => {
        this.submitted = false;
      }, [700]);

    },

    // meetingVolume

    meetingVolume() {
      document.getElementById("meetingVolume").classList.remove("d-none");
      setTimeout(() => {
        document.getElementById("meetingVolume").classList.add("d-none");
      }, [3000]);
    }


  },
  mounted() {
    this.topChats();
    this.running = true;
  },

  beforeUnmount() {
    this.running = false;
  },
  components: {
    Layout,
    RightBar,
    Slider
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center gy-3">
        <BCol md="5">
          <h3 class="page-title text-capitalize fw-medium fs-3xl">SteemX - Project Meeting with Jennifer</h3>
          <p class="mb-0 page-sub-title" id="current-time"></p>
        </BCol>
        <BCol md="auto" class="ms-auto">
          <div class="hstack gap-2 flex-wrap">
            <button class="btn btn-secondary" @click="inviteMembersModal = !inviteMembersModal"><i
                class="bi bi-plus me-1 align-baseline"></i> Add
              Participant</button>
            <router-link to="/chat" class="btn btn-icon btn-danger"><i class="bi bi-chat-square-dots"></i></router-link>
            <RightBar />
          </div>
        </BCol>
      </BRow>
    </div>

    <BRow>
      <BCol xl="3" sm="6">
        <BCard no-body class="video-chat shadow-none overflow-hidden border-0">
          <button class="btn btn-icon btn-sm btn-secondary position-absolute m-2 end-0 top-0"><i
              class="bi bi-mic-mute"></i></button>
          <img src="https://img.themesbrand.com/steemx/chat/video-1.jpg" alt="" class="img-fluid rounded">
          <div class="overlay-content position-absolute bottom-0 p-3">
            <BLink href="#!">
              <h6 class="text-white fs-md badge bg-light bg-opacity-25 mb-0"><i
                  class="bi bi-person-fill me-1 align-baseline"></i> Jennifer</h6>
            </BLink>
          </div>
        </BCard>
      </BCol>
      <BCol xl="3" sm="6">
        <BCard no-body class="video-chat shadow-none overflow-hidden border-0">
          <button class="btn btn-icon btn-sm btn-secondary position-absolute m-2 end-0 top-0"><i
              class="bi bi-mic-mute"></i></button>
          <img src="https://img.themesbrand.com/steemx/chat/video-2.jpg" alt="" class="img-fluid rounded">
          <div class="overlay-content position-absolute bottom-0 p-3">
            <BLink href="#!">
              <h6 class="text-white fs-md badge bg-light bg-opacity-25 mb-0"><i
                  class="bi bi-person-fill me-1 align-baseline"></i> Alyssa</h6>
            </BLink>
          </div>
        </BCard>
      </BCol>
      <BCol xl="3" sm="6">
        <BCard no-body class="video-chat shadow-none overflow-hidden border-0">
          <button class="btn btn-icon btn-sm btn-secondary position-absolute m-2 end-0 top-0"><i
              class="bi bi-mic-mute"></i></button>
          <img src="https://img.themesbrand.com/steemx/chat/video-3.jpg" alt="" class="img-fluid rounded">
          <div class="overlay-content position-absolute bottom-0 p-3">
            <BLink href="#!">
              <h6 class="text-white fs-md badge bg-light bg-opacity-25 mb-0"><i
                  class="bi bi-person-fill me-1 align-baseline"></i> Phillipp</h6>
            </BLink>
          </div>
        </BCard>
      </BCol>
      <BCol xl="3" sm="6">
        <BCard no-body class="video-chat shadow-none overflow-hidden border-0">
          <button class="btn btn-icon btn-sm btn-secondary position-absolute m-2 end-0 top-0"><i
              class="bi bi-mic-mute"></i></button>
          <img src="https://img.themesbrand.com/steemx/chat/video-4.jpg" id="hideImgEle" alt="" class="img-fluid rounded">
          <canvas id="captureCanvas" ref="captureCanvas"
            class="card card-height-100 card-body p-0 mb-0 object-fit-cover w-100" style="display: none;"></canvas>
          <div class="overlay-content position-absolute bottom-0 p-3">
            <BLink href="#!">
              <h6 class="text-white fs-md badge bg-light bg-opacity-25 mb-0"><i
                  class="bi bi-person-fill me-1 align-baseline"></i> Nicholas</h6>
            </BLink>
          </div>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol class="lg">
        <BCard class="shadow-none overflow-hidden">
          <div class="ratio ratio-16x9">
            <div class="d-flex align-items-center justify-content-center">
              <div class="text-center">
                <div class="wrapper">
                  <div class="video-main">
                    <div class="promo-video">
                      <div class="waves-block">
                        <div class="waves wave-1"></div>
                        <div class="waves wave-2"></div>
                        <div class="waves wave-3"></div>
                      </div>
                    </div>
                    <img src="@/assets/images/users/avatar-1.jpg" alt=""
                      class="avatar-lg rounded-circle position-relative">
                  </div>
                </div>
              </div>
            </div>
            <video id="localVideo" ref="localVideo" width="100%" autoplay muted></video>
            <video id="remoteVideo" ref="remoteVideo" width="100%" autoplay></video>
          </div>
          <div class="badge bg-danger d-inline-block position-absolute top-0 end-0 m-3 fs-lg fw-normal">
            <i class="bi bi-record2 me-1 align-baseline"></i> <span id="videoChatTime" class="timerClock"
              value="00:00:00">{{ formattedTime }}</span>
          </div>
          <div class="position-absolute bottom-0 mb-4 start-0 end-0 text-center">
            <ul
            class="main-chat-setting-menu list-unstyled gap-2 flex-wrap mb-0 bg-white p-2 rounded d-inline-flex shadow-lg align-items-center">
            <Slider class="form-range px-2 d-none" id="meetingVolume" name="volume" v-model="simpleValue" :tooltips="false" />
              <li>
                <button class="btn btn-success" @click="startCall" :disabled="isCalling" id="startVideoCall">Join
                  Meeting</button>
              </li>
              <li>
                <button @click="captureImage" :disabled="!isCalling" class="btn btn-icon btn-info"
                  id="captureVideoImgButton">
                  <i class="bi bi-image"></i>
                </button>
              </li>
              <li>
                <button @click="endCall" :disabled="!isCalling" id="endVideoCall" class="btn btn-danger">End
                  Meeting</button>
              </li>
              <li>
                <button @click="downloadPhoto" :class="{ 'd-none': !downloadVisible }" class="btn btn-warning"
                  id="downloadButton"><i class='bx bx-download'></i></button>
              </li>
              <li>
                <button class="btn btn-warning d-none" id="downloadButton"><i class='bx bx-download'></i></button>
              </li>
              <li v-if="isCalling" id="zoomRangeStatus">
                <span><i class="ri-zoom-out-line"></i></span>
                <!-- <input type="range" id="zoomRange" min="0.5" max="2" step="0.1" value="1" /> -->
                <input type="range" id="zoomRange" min="1" max="2" step="0.1" v-model="zoomScale" @input="updateZoom" />
                <span><i class="ri-zoom-in-line"></i></span>
              </li>

              <BDropdown variant="link" class="btn btn-icon btn-ghost-dark" toggle-class="text-muted arrow-none"
                menu-class="dropdown-menu-right">
                <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                <BDropdownItem @click="meetingVolume"><i class="bi bi-volume-up align-baseline me-1"></i> Sound
                </BDropdownItem>
                <BDropdownItem><i class="bi bi-chat-left-text align-baseline me-1"></i> Chat</BDropdownItem>
              </BDropdown>
            </ul>
          </div>
        </BCard>
      </BCol>
      <BCol lg="4">
        <BCard no-body class="overflow-hidden">
          <BCardHeader class="align-items-center d-flex bg-primary-subtle text-primary px-3 py-2">
            <div class="flex-grow-1">
              <BCardTitle tag="h5" class="text-primary-emphasis profile-username mb-0"> Top Chats </BCardTitle>
            </div>
            <div class="flex-shrink-0">
              <div class="mt-n1">
                <BDropdown variant="link" class="btn btn-icon" toggle-class="text-muted arrow-none"
                  menu-class="dropdown-menu-right">
                  <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                  <BDropdownItem><i class='bx bx-user-circle align-baseline me-1'></i>
                    Participants</BDropdownItem>
                  <BDropdownItem><i class="bi bi-chat-left-text align-baseline me-1"></i>Chats</BDropdownItem>
                </BDropdown>
              </div>
            </div>
          </BCardHeader>

          <BCardBody class="p-0">
            <div>
              <div class="chat-conversation p-3" data-simplebar style="height: 373px;" id="users-chat">
                <ul class="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
                  <li class="chat-list left" v-for="(data, index) of chats" :key="index">
                    <div class="conversation-list">
                      <div class="chat-avatar">
                        <img :src="data.img" alt="">
                      </div>
                      <div class="user-chat-content">
                        <div class="ctext-wrap">
                          <div class="ctext-wrap-content">
                            <p class="mb-0 ctext-content">{{ data.msg }}</p>
                          </div>
                          <BDropdown variant="link" class="align-self-start message-box-drop" toggle-class="arrow-none">
                            <template #button-content> <i class="ri-more-2-fill"></i> </template>
                            <BDropdownItem><i class="ri-reply-line me-2 text-muted align-bottom"></i>report
                            </BDropdownItem>
                            <BDropdownItem><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>block
                            </BDropdownItem>
                          </BDropdown>
                        </div>
                        <div class="conversation-name"><small class="text-muted time">{{ data.name }}</small>
                          <span class="text-success check-message-icon">
                            <i class="ri-check-double-line align-bottom"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="border-top border-top-dashed">
              <form id="chatinput-form">
                <BRow class="g-2 mx-3 mt-2 mb-3">
                  <BCol>
                    <div class="position-relative">
                      <input type="text" class="form-control border-light bg-light" placeholder="Enter Message..."
                        id="chat-input" v-model="msg" :class="{ 'is-invalid': submitted && !msg }">
                      <div class="invalid-feedback">Please Enter Message.</div>
                    </div>
                  </BCol>
                  <BCol cols="auto">
                    <button type="button" class="btn btn-secondary" @click="sendMsg"><i
                        class="ph-paper-plane-right"></i></button>
                  </BCol>
                </BRow>
              </form>
            </div>
          </BCardBody>
        </BCard>

      </BCol>
    </BRow>
  </Layout>

  <BModal v-model="inviteMembersModal" hide-footer content-class="border-0" header-class="p-3 ps-4 bg-primary-subtle"
    title="Add Participant" class="fade" id="inviteMembersModal" tabindex="-1" aria-labelledby="inviteMembersModalLabel"
    aria-hidden="true" centered>
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
        </div>
        <!-- end list -->
      </SimpleBar>
    </BModalBody>
    <div class="text-end">
      <BButton type="button" variant="light" class="w-xs me-2" @click="inviteMembersModal = false">Cancel</BButton>
      <BButton type="button" variant="primary" class="w-xs">Add Participant</BButton>
    </div>
  </BModal>
</template>