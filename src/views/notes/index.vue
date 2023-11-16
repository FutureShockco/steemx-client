<script>
import Layout from "@/layouts";
import RightBar from "@/components/right-bar.vue";

import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

// Editors
import { reactive } from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { notesList } from "@/common/data";

export default {
  setup() {
    const state = reactive({
      content:
        "<h3><span class='ql-size-large;'>Hello World!</span></h3><p><br></p><h3>This is an simple editable area.</h3><p><br></p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p><br></p><p>End of simple area</p>",
      _content: "",
      disabled: false,
    });
    return { state };
  },
  data() {
    return {
      page: 1,
      perPage: 8,
      pages: [],
      notesList: notesList,

      // Editors
      editor: ClassicEditor,
      editorData: "",
      content: "<h1>Some initial content</h1>",
      plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor",
      ],
      toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
      options: {
        height: 300,
        style_formats: [
          { title: "Bold text", inline: "b" },
          { title: "Red text", inline: "span", styles: { color: "#ff0000" } },
          { title: "Red header", block: "h1", styles: { color: "#ff0000" } },
          { title: "Example 1", inline: "span", classes: "example1" },
          { title: "Example 2", inline: "span", classes: "example2" },
          { title: "Table styles" },
          { title: "Table row 1", selector: "tr", classes: "tablerow1" },
        ],
      },

      //
      submitted: false,

      showModal: false,
      dataEdit: false,
      deleteModal: false,
      editData: "",
      event: {
        id: "",
        category: "",
        title: "",
        description: "",
        img: "",
        name: "",
        date: "",
        lock: "",
      },
      //
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.notesList);
    },
  },
  watch: {
    notesList() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.notesList.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }

      if (this.pages.length < this.page) {
        this.page = this.pages.length;
      }
    },
    
    paginate(notesList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return notesList.slice(from, to);
    },

    // 
    handleSubmit() {
      if (this.dataEdit) {
        this.submitted = true;
        if (this.submitted && (this.event.title && this.event.category && this.event.description)) {
          this.notesList = this.notesList.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
          this.showModal = false;
        }
      } else {
        this.submitted = true;
        if (this.submitted && (this.event.title && this.event.category && this.event.description)) {
          const data = {
            id: (Math.floor(Math.random() * 100 + 20) - 20),
            img: require("@/assets/images/users/avatar-1.jpg"),
            date: new Date().toUTCString().slice(5, 16),
            lock: false,
            ...this.event
          };
          this.notesList = [data, ...this.notesList];
          this.showModal = false;
        }
      }
    },

    editDetails(data) {
      this.dataEdit = true;
      this.showModal = true;
      this.event = { ...data };

      this.submitted = false;
    },

    toggleModal() {
      this.showModal = true;
      this.dataEdit = false;
      this.event = {};

      this.submitted = false;
    },

    deleteModalToggle(data) {
      this.deleteModal = true;
      this.event.id = data.id;
    },

    deleteData() {
      if (this.event.id) {
        this.notesList = this.notesList.filter((item) => {
          return item.id != this.event.id;
        });
        this.deleteModal = false;
      }
    }
    //
  },
  components: {
    Layout,
    RightBar,
    ckeditor: CKEditor.component,
    Multiselect
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center gy-3">
        <BCol cols="md">
          <h5 class="page-title mb-0">Notes <span class="text-secondary">(246)</span></h5>
        </BCol>
        <BCol md="auto" class="ms-auto d-flex align-items-center gap-2">
          <button class="btn btn-primary" @click="toggleModal">Add New Note</button>
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow id="notes-list">
      <BCol xl="3" lg="4" sm="6" v-for="(data, index) of displayedPosts" :key="index">
        <BCard no-body class="card-height-100">
          <BCardBody class="d-flex flex-column">
            <div class="d-flex align-items-center gap-2 mb-3">
              <div class="flex-grow-1 text-danger" v-if="data.category == 'Management'"><i
                  class="bi bi-circle align-baseline me-1 fs-xs"></i>{{ data.category }}</div>
              <div class="flex-grow-1 text-primary" v-if="data.category == 'Prototyping'"><i
                  class="bi bi-circle align-baseline me-1 fs-xs"></i>{{ data.category }}</div>
              <div class="flex-grow-1 text-secondary" v-if="data.category == 'Global'"><i
                  class="bi bi-circle align-baseline me-1 fs-xs"></i>{{ data.category }}</div>
              <div class="flex-grow-1 text-success" v-if="data.category == 'UI UX Design'"><i
                  class="bi bi-circle align-baseline me-1 fs-xs"></i>{{ data.category }}</div>
              <div class="flex-grow-1 text-info" v-if="data.category == 'Development'"><i
                  class="bi bi-circle align-baseline me-1 fs-xs"></i>{{ data.category }}</div>
              <div class="flex-grow-1 text-warning" v-if="data.category == 'Ideas'"><i
                  class="bi bi-circle align-baseline me-1 fs-xs"></i>{{ data.category }}</div>
              <div class="flex-grow-1 text-success" v-if="data.category == 'Skills'"><i
                  class="bi bi-circle align-baseline me-1 fs-xs"></i>{{ data.category }}</div>
              <div class="flex-shrink-0 text-muted">
                <i class="bi bi-lock" v-if="data.lock"></i>
              </div>
            </div>
            <BCardTitle tag="h5">{{ data.title }}</BCardTitle>
            <div class="text-muted">
              <p v-html="data.description"></p>
            </div>
            <div class="d-flex align-items-center gap-2 mt-auto"> <img :src="data.img" alt=""
                class="avatar-xs rounded-circle">
              <div class="flex-grow-1"> <BLink href="#!">
                  <h6 class="mb-1 fs-sm">{{ data.name }}</h6>
                </BLink>
                <p class="text-muted fs-xs fw-normal mb-0">{{ data.date }}</p>
              </div>
              <div class="flex-shrink-0">
                <BDropdown variant="link" toggle-class="m-n3 arrow-none" menu-class="dropdown-menu-end" dropstart>
                  <template #button-content> <button class="btn btn-subtle-secondary btn-sm dropdown" type="button"> <i
                        class="ri-more-fill align-middle"></i> </button> </template>
                  <BDropdownItem class="view-item-btn">View</BDropdownItem>
                  <BDropdownItem class="edit-item-btn" @click="editDetails(data)">Edit</BDropdownItem>
                  <BDropdownItem class="remove-item-btn" @click="deleteModalToggle(data)">Delete</BDropdownItem>
                </BDropdown>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <div class="align-items-center mb-3 justify-content-between row text-center text-sm-start" id="pagination-element">
      <BCol cols="sm">
        <div class="text-muted">
          Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span class="fw-semibold">{{
            notesList.length }}</span> Results
        </div>
      </BCol>
      <BCol sm="auto" class="mt-3 mt-sm-0">
        <div
          class="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0"
          v-if="pages.length > 1">
          <div class="page-item">
            <BLink href="javascript:void(0);" class="page-link" id="page-prev" :disabled="page <= 1" @click="page--">
              Previous</BLink>
          </div>
          <span id="page-num" class="pagination">
            <div class="page-item" :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
              v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
              <BLink class="page-link clickPageNumber" href="javascript:void(0);">{{ pageNumber }}</BLink>
            </div>
          </span>
          <div class="page-item">
            <BLink href="javascript:void(0);" class="page-link" id="page-next" :disabled="page >= pages.length"
              @click="page++">Next</BLink>
          </div>
        </div>
      </BCol>
    </div>
  </Layout>


  <BModal v-model="showModal" id="showModal" hide-footer title-class="fs-5"
    :title="dataEdit ? 'Edit Note' : 'Create Note'" size="lg">
    <BForm action="#" class="create-form" autocomplete="off">
      <input type="hidden" id="id-field" />
      <div class="mb-3">
        <label for="noteTitle-input" class="form-label">Author Name</label>
        <input type="text" class="form-control" id="noteAuthor-input" placeholder="Enter Author Name" v-model="event.name" :class="{ 'is-invalid': submitted && !event.name }">
        <div class="invalid-feedback">Please enter title.</div>
      </div>

      <div class="mb-3">
        <label for="noteTitle-input" class="form-label">Note title</label>
        <input type="text" class="form-control" id="noteTitle-input" placeholder="Enter Note Title" v-model="event.title"
          :class="{ 'is-invalid': submitted && !event.title }">
        <div class="invalid-feedback">Please enter title.</div>
      </div>

      <div class="mb-3">
        <label for="category-input" class="form-label">Category</label>
        <Multiselect :close-on-select="true" :searchable="true" :create-option="false"
          :options="[{ value: 'Development', label: 'Development' }, { value: 'Global', label: 'Global' }, { value: 'Ideas', label: 'Ideas' }, { value: 'Management', label: 'Management' }, { value: 'Prototyping', label: 'Prototyping' }, { value: 'Skills', label: 'Skills' }, { value: 'UI UX Design', label: 'UI UX Design' }]"
          v-model="event.category" :class="{ 'is-invalid': submitted && !event.category }" />
        <div class="invalid-feedback">Please select a category.</div>
      </div>

      <div class="mb-3">
        <label class="form-label">Note Details</label>
        <ckeditor :editor="editor" v-model="event.description" :class="{ 'is-invalid': submitted && !event.description }">
        </ckeditor>
        <div class="invalid-feedback">Please enter a Note details.</div>
      </div>
      <div class="hstack gap-2 justify-content-end">
        <BButton type="button" id="closemodal" variant="secondary" @click="showModal = false">
          Close
        </BButton>
        <BButton type="button" variant="primary" @click="handleSubmit">
          {{ dataEdit ? 'Update' : 'Add Notes' }}
        </BButton>
      </div>
    </BForm>
  </BModal>

  <!-- delete modal -->
  <BModal v-model="deleteModal" modal-class="zoomIn" body-class="p-md-5" hide-footer centered>
    <div class="text-center">
      <div class="text-danger">
        <i class="bi bi-trash display-5"></i>
      </div>
      <div class="mt-4">
        <h4 class="mb-2">Are you sure ?</h4>
        <p class="text-muted mx-3 mb-0">Are you sure you want to remove this record ?</p>
      </div>
    </div>
    <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
      <button type="button" class="btn w-sm btn-light" @click="deleteModal = false">Close</button>
      <button type="button" class="btn w-sm btn-danger" id="delete-record" @click="deleteData">Yes, Delete It!</button>
    </div>
  </BModal>
</template>