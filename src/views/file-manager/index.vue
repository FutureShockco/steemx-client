<script>
import Layout from "@/layouts";
import RightBar from "@/components/right-bar.vue";
import flatPickr from "vue-flatpickr-component";

import { storageDetailsChart } from "./data";
import { allTableList, folder, folderData } from "@/common/data";

export default {
  data() {
    return {
      page: 1,
      perPage: 7,
      pages: [],
      storageDetailsChart: storageDetailsChart,
      allTableList: allTableList,
      folder: folder,
      folderData: folderData,

      fileManagerModal: false,

      config: {
        dateFormat: 'd M, Y'
      },
      //
      submitted: false,

      filesModal: false,
      dataEdit: false,
      deleteModal: false,
      editData: "",
      event: {
        id: "",
        document_name: "",
        docs_type: "",
        file_item: "",
        size: "",
        date: "",
      },
      //

      // Folder CRUD
      folderModal: false,
      folderEvent: {
        id: "",
        text: "",
        color: "",
        iconClass: ""
      },

      // direction
      direction: "asc"


    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.allTableList);
    },
  },
  watch: {
    allTableList() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  mounted() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.allTableList.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }

      if (this.pages.length < this.page) {
        this.page = this.pages.length;
      }
    },
    paginate(allTableList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return allTableList.slice(from, to);
    },

    windowResize() {
      var windowSize = document.documentElement.clientWidth;
      if (windowSize < 1400) {
        document.body.classList.remove("file-detail-show");
      } else {
        document.body.classList.add("file-detail-show");
      }
    },

    hidesidebar() {
      document.body.classList.remove("file-detail-show");
    },

    showsidebar() {
      document.body.classList.add("file-detail-show");
    },

    // 
    handleSubmit() {
      let fileType;
      if (this.event.document_name.includes(".")) {
        fileType = this.event.document_name.split(".")[1];
      }

      if (this.dataEdit) {
        this.submitted = true;
        if (this.submitted && (this.event.document_name) && (this.event.file_item) && (this.event.size) && (this.event.date)) {
          this.allTableList = this.allTableList.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event, docs_type: fileType || "word" } : item);
          this.filesModal = false;
        }
      } else {
        this.submitted = true;

        if (this.submitted && (this.event.document_name) && (this.event.file_item) && (this.event.size) && (this.event.date)) {
          const data = {
            id: (Math.floor(Math.random() * 100 + 20) - 20),
            docs_type: fileType || "word",
            ...this.event
          };

          this.allTableList = [data, ...this.allTableList];
          this.filesModal = false;
        }
      }
    },

    editDetails(data) {
      this.dataEdit = true;
      this.filesModal = true;
      this.event = { ...data };

      this.submitted = false;
    },

    toggleModal() {
      this.filesModal = true;
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
        this.allTableList = this.allTableList.filter((item) => {
          return item.id != this.event.id;
        });
        this.deleteModal = false;
      }
    },
    //

    // Folder CRUD
    folderHandleSubmit() {
      this.submitted = true;
      if (this.submitted && this.folderEvent.text) {
        const data = {
          id: (Math.floor(Math.random() * 100 + 20) - 20),
          color: this.folderData[Math.floor(Math.random() * this.folderData.length)].color,
          iconClass: this.folderData[Math.floor(Math.random() * this.folderData.length)].iconClass,
          ...this.folderEvent
        };
        this.folder = [data, ...this.folder];
        this.folderModal = false;
      }
    },

    folderToggleModal() {
      this.folderEvent = {};
      this.folderModal = true;
      this.submitted = false;
    },

    // Table Sort
    onSort(column) {
      this.direction = this.direction === 'asc' ? 'desc' : 'asc';
      const sortedArray = [...this.allTableList];
      sortedArray.sort((a, b) => {
        const res = a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
        return this.direction === 'asc' ? res : -res;
      });
      this.allTableList = sortedArray;
    }
  },
  components: {
    Layout,
    RightBar,
    flatPickr
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center gy-3">
        <BCol cols="md">
          <h3 class="page-title text-capitalize fw-medium fs-2xl"><span>Welcome</span> to MyFolder</h3>
          <p class="mb-0 page-sub-title">Manage your files with best way by SteemX</p>
        </BCol>
        <BCol md="auto" class="ms-auto">
          <div class="hstack gap-2 flex-wrap">
            <button type="button" class="btn btn-primary" @click="folderToggleModal"><i
                class="bi bi-folder align-baseline me-1"></i> Create Folder</button>
            <RightBar />
          </div>
        </BCol>
      </BRow>
    </div>

    <BRow>
      <BCol lg="12">
        <BTabs nav-class="crypto-marketplace-nav mb-5" nav-wrapper-class="col-lg" pills>
          <BTab title="My Storage" active>
            <BRow class="align-items-start">
              <BCol cols="lg">
                <div class="d-flex align-items-center mb-3">
                  <h5 class="flex-grow-1 mb-0">My Cloud</h5>
                  <BLink href="#!" class="text-decoration-underline flex-shrink-0">Upgrade Plan <i
                      class="bi bi-arrow-right"></i></BLink>
                </div>
                <BRow>
                  <BCol lg="4" sm="6">
                    <BCard no-body>
                      <BCardBody>

                        <div class="d-flex justify-content-between mb-4">
                          <div class="avatar-sm">
                            <div class="avatar-title bg-success-subtle rounded">
                              <img src="@/assets/images/brands/google-drive.png" alt="" class="avatar-xs">
                            </div>
                          </div>
                          <BDropdown variant="link" class="flex-shrink-0"
                            toggle-class="text-reset d-inline-block arrow-none" menu-class="dropdown-menu-end" dropstart>
                            <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                            <BDropdownItem><i class="ph ph-folder-open me-1 align-middle"></i> Open Folder</BDropdownItem>
                            <BDropdownItem><i class="ph ph-download-simple me-1 align-middle"></i> Import</BDropdownItem>
                            <BDropdownItem><i class="ph ph-export me-1 align-middle"></i> Export</BDropdownItem>
                          </BDropdown>
                        </div>
                        <h5 class="fs-lg">
                          <BLink href="#!" class="text-reset">Google Drive</BLink>
                        </h5>
                        <p class="text-muted mb-0">205.32GB / 500GB</p>
                      </BCardBody>
                    </BCard>
                  </BCol>
                  <BCol lg="4" sm="6">
                    <BCard no-body>
                      <BCardBody>
                        <div class="d-flex justify-content-between mb-4">
                          <div class="avatar-sm">
                            <div class="avatar-title bg-info-subtle rounded">
                              <img src="@/assets/images/brands/dropbox.png" alt="" class="avatar-xs">
                            </div>
                          </div>
                          <BDropdown variant="link" class="flex-shrink-0"
                            toggle-class="text-reset d-inline-block arrow-none" menu-class="dropdown-menu-end" dropstart>
                            <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                            <BDropdownItem><i class="ph ph-folder-open me-1 align-middle"></i> Open Folder</BDropdownItem>
                            <BDropdownItem><i class="ph ph-download-simple me-1 align-middle"></i> Import</BDropdownItem>
                            <BDropdownItem><i class="ph ph-export me-1 align-middle"></i> Export</BDropdownItem>
                          </BDropdown>
                        </div>
                        <h5 class="fs-lg">
                          <BLink href="#!" class="text-reset">Dropbox</BLink>
                        </h5>
                        <p class="text-muted mb-0">198.16GB / 800GB</p>
                      </BCardBody>
                    </BCard>
                  </BCol>
                  <BCol lg="4" sm="6">
                    <BCard no-body>
                      <BCardBody>
                        <div class="d-flex justify-content-between mb-4">
                          <div class="avatar-sm">
                            <div class="avatar-title bg-secondary-subtle rounded">
                              <img src="@/assets/images/brands/cloud-computing.png" alt="" class="avatar-xs">
                            </div>
                          </div>
                          <BDropdown variant="link" class="flex-shrink-0"
                            toggle-class="text-reset d-inline-block arrow-none" menu-class="dropdown-menu-end" dropstart>
                            <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                            <BDropdownItem><i class="ph ph-folder-open me-1 align-middle"></i> Open Folder</BDropdownItem>
                            <BDropdownItem><i class="ph ph-download-simple me-1 align-middle"></i> Import</BDropdownItem>
                            <BDropdownItem><i class="ph ph-export me-1 align-middle"></i> Export</BDropdownItem>
                          </BDropdown>
                        </div>
                        <h5 class="fs-lg">
                          <BLink href="#!" class="text-reset">One Drive</BLink>
                        </h5>
                        <p class="text-muted mb-0">364.71GB / 800GB</p>
                      </BCardBody>
                    </BCard>
                  </BCol>
                </BRow>

                <h5 class="mb-3">Folders</h5>
                <BRow>
                  <BCol lg="3" sm="6" v-for="(data, index) of folder" :key="index">
                    <BCard no-body class="p-2 text-center card-animate">
                      <BCardBody :class="`py-4 rounded-1 bg-${data.color}-subtle`">
                        <div class="avatar-md mx-auto my-3">
                          <div
                            :class="`avatar-title bg-opacity-10 fs-3 rounded-circle bg-${data.color} text-${data.color}`">
                            <i :class="data.iconClass"></i>
                          </div>
                        </div>
                      </BCardBody>
                      <BLink href="#!" class="stretched-link">
                        <h5 class="fs-md mb-2 pt-3">{{ data.text }}</h5>
                      </BLink>
                    </BCard>
                  </BCol>
                </BRow>

                <div id="allFiles" class="mt-2">
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <BCardTitle tag="h6" class="flex-grow-1 mb-0">All Files</BCardTitle>
                    <BDropdown variant="link" class="sortable-dropdown flex-shrink-0"
                      toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end">
                      <template #button-content> <span class="fw-semibold text-uppercase">Sort by: </span><span
                          class="text-muted dropdown-title">Docs Type</span> <i
                          class="bi bi-chevron-down ms-1 align-baseline"></i> </template>
                      <BDropdownItem @click="onSort('docs_type')"><i class="ph ph-folder-open me-1 align-middle"></i> Docs
                        Type</BDropdownItem>
                      <BDropdownItem @click="onSort('size')"><i class="ph ph-download-simple me-1 align-middle"></i> Size
                      </BDropdownItem>
                      <BDropdownItem @click="onSort('date')"><i class="ph ph-export me-1 align-middle"></i> Date
                      </BDropdownItem>
                    </BDropdown>
                    <button class="btn btn-subtle-danger d-none" id="remove-actions" onclick="deleteMultiple()">
                      <i class="ri-delete-bin-2-line"></i>
                    </button>
                    <button class="btn btn-primary createFile-modal" @click="toggleModal"><i
                        class="ri-add-line align-bottom me-1"></i> Create
                      File</button>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-borderless table-custom table-centered align-middle table-nowrap mb-0">
                      <thead class="text-muted">
                        <tr>
                          <th>
                            <div class="form-check checkbox-product-list">
                              <input class="form-check-input" type="checkbox" value="1" id="checkbox-1">
                              <label class="form-check-label" for="checkbox-1"></label>
                            </div>
                          </th>
                          <th scope="col" class="sort cursor-pointer" data-sort="docs_type" @click="onSort('docs_type')">
                            Type </th>
                          <th scope="col" class="sort cursor-pointer" data-sort="document_name"
                            @click="onSort('document_name')">Document Name</th>
                          <th scope="col" class="sort cursor-pointer" data-sort="file_item" @click="onSort('file_item')">
                            File Item</th>
                          <th scope="col" class="sort cursor-pointer" data-sort="size" @click="onSort('size')">Size</th>
                          <th scope="col" class="sort cursor-pointer" data-sort="date" @click="onSort('date')">Last
                            Modified</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody class="list" id="file-list">

                        <tr v-for="(data, index) of displayedPosts" :key="index">
                          <th>
                            <div class="form-check checkbox-product-list">
                              <input class="form-check-input" type="checkbox" value="2" id="checkbox-2">
                              <label class="form-check-label" for="checkbox-2"></label>
                            </div>
                          </th>
                          <td class="docs_type">
                            <i class="bi bi-filetype-svg text-secondary-emphasis fs-4" v-if="data.docs_type == 'svg'"></i>
                            <i class="bi bi-file-earmark-word text-info-emphasis fs-4"
                              v-if="data.docs_type == 'word'"></i>
                            <i class="bi bi-filetype-pdf text-danger-emphasis fs-4" v-if="data.docs_type == 'pdf'"></i>
                            <i class="bi bi-filetype-psd text-primary-emphasis fs-4" v-if="data.docs_type == 'psd'"></i>
                            <i class="bi bi-filetype-mp4 text-warning-emphasis fs-4" v-if="data.docs_type == 'mp4'"></i>
                            <i class="bi bi-filetype-gif text-success-emphasis fs-4" v-if="data.docs_type == 'gif'"></i>
                            <i class="bi bi-filetype-scss text-danger-emphasis fs-4" v-if="data.docs_type == 'scss'"></i>
                            <i class="bi bi-file-earmark-zip text-dark-emphasis fs-4" v-if="data.docs_type == 'zip'"></i>
                          </td>
                          <td>
                            <BLink href="#!" class="text-reset document_name">{{ data.document_name }}</BLink>
                          </td>
                          <td class="file_item">{{ data.file_item }}</td>
                          <td class="size">
                            {{ data.size }}
                          </td>
                          <td class="date">
                            {{ data.date }}
                          </td>
                          <td>
                            <BDropdown variant="link" class="sortable-dropdown flex-shrink-0"
                              toggle-class="btn btn-subtle-secondary btn-sm arrow-none" menu-class="dropdown-menu-end">
                              <template #button-content> <i class="ri-more-fill align-middle"></i> </template>
                              <BDropdownItem class="view-item-btn" @click="showsidebar"><i
                                  class="ri-eye-fill align-bottom me-2 text-muted"></i>View</BDropdownItem>
                              <BDropdownItem class="edit-item-btn" @click="editDetails(data)"><i
                                  class="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</BDropdownItem>
                              <BDropdownItem class="remove-item-btn" @click="deleteModalToggle(data)"><i
                                  class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</BDropdownItem>
                            </BDropdown>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="noresult" v-if="displayedPosts.length < 1">
                      <div class="text-center">
                        <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop"
                          colors="primary:#405189,secondary:#0ab39c" style="width:75px;height:75px"></lord-icon>
                        <h5 class="mt-2">Sorry! No Result Found</h5>
                        <p class="text-muted mb-0">We've searched more than 150+ files We did not find any files for you
                          search.</p>
                      </div>
                    </div>
                  </div>
                  <div class="align-items-center my-3 justify-content-between row text-center text-sm-start"
                    id="pagination-element" v-if="pages.length > 1">
                    <BCol cols="sm">
                      <div class="text-muted">
                        Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span
                          class="fw-semibold">{{ allTableList.length }}</span> Results
                      </div>
                    </BCol>
                    <BCol sm="auto" class="mt-3 mt-sm-0">
                      <div class="pagination-wrap justify-content-center hstack gap-2">
                        <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--"> Previous
                        </BLink>
                        <ul class="pagination listjs-pagination mb-0">
                          <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                            v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                            <BLink class="page" href="#!">{{ pageNumber }}</BLink>
                          </li>
                        </ul>
                        <BLink class="page-item pagination-next" href="#" :disabled="page >= pages.length"
                          @click="page++">
                          Next
                        </BLink>
                      </div>
                    </BCol>
                  </div>
                </div>
              </BCol>
              <BCol lg="3" class="file-manager-right-wrapper">
                <BCard no-body class="h-100">
                  <div data-simplebar class="h-100">
                    <BCardHeader class="d-flex gap-2 align-items-center">
                      <div>
                      </div>
                      <BCardTitle tag="h6" class="flex-grow-1 mb-0">Storage Details</BCardTitle>
                      <div class="flex-shrink-0">
                        <button type="button" class="btn btn-sm btn-icon btn-subtle-danger close-btn-overview"
                          @click="hidesidebar">
                          <i class="ri-close-fill align-bottom"></i>
                        </button>
                      </div>
                    </BCardHeader>
                    <BCardBody>
                      <apexchart id="simple_dount_chart" class="apex-charts" dir="ltr" height="350"
                        :series="storageDetailsChart.series" :options="storageDetailsChart.chartOptions" />
                      <div class="mt-4 mb-3">
                        <BCardTitle tag="h6" class="mb-0">Pined Items</BCardTitle>
                      </div>
                      <ul class="vstack gap-2 list-unstyled mb-3">
                        <li>
                          <BLink href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                            <div class="d-flex align-items-center gap-2">
                              <div class="avatar-xs flex-shrink-0 ronded">
                                <div class="avatar-title bg-body-secondary text-body">
                                  <i class="bi bi-pin"></i>
                                </div>
                              </div>
                              <div class="flex-grow-1">
                                <h6 class="mb-0">Skote Design file.psd</h6>
                              </div>
                              <div class="flex-shrink-0 text-muted">
                                2.5 MB
                              </div>
                            </div>
                          </BLink>
                        </li>
                        <li>
                          <BLink href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                            <div class="d-flex align-items-center gap-2">
                              <div class="avatar-xs flex-shrink-0 ronded">
                                <div class="avatar-title bg-body-secondary text-body">
                                  <i class="bi bi-pin"></i>
                                </div>
                              </div>
                              <div class="flex-grow-1">
                                <h6 class="mb-0">Trip Photography</h6>
                              </div>
                              <div class="flex-shrink-0 text-muted">
                                276 MB
                              </div>
                            </div>
                          </BLink>
                        </li>
                        <li>
                          <BLink href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                            <div class="d-flex align-items-center gap-2">
                              <div class="avatar-xs flex-shrink-0 ronded">
                                <div class="avatar-title bg-body-secondary text-body">
                                  <i class="bi bi-pin"></i>
                                </div>
                              </div>
                              <div class="flex-grow-1">
                                <h6 class="mb-0">SteemX Admin</h6>
                              </div>
                              <div class="flex-shrink-0 text-muted">
                                631 MB
                              </div>
                            </div>
                          </BLink>
                        </li>
                        <li>
                          <BLink href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                            <div class="d-flex align-items-center gap-2">
                              <div class="avatar-xs flex-shrink-0 ronded">
                                <div class="avatar-title bg-body-secondary text-body">
                                  <i class="bi bi-pin"></i>
                                </div>
                              </div>
                              <div class="flex-grow-1">
                                <h6 class="mb-0">SteemX Docs</h6>
                              </div>
                              <div class="flex-shrink-0 text-muted">
                                32.19 MB
                              </div>
                            </div>
                          </BLink>
                        </li>
                        <li>
                          <BLink href="#!" class="d-block p-2 bg-light bg-opacity-50 rounded">
                            <div class="d-flex align-items-center gap-2">
                              <div class="avatar-xs flex-shrink-0 ronded">
                                <div class="avatar-title bg-body-secondary text-body">
                                  <i class="bi bi-pin"></i>
                                </div>
                              </div>
                              <div class="flex-grow-1">
                                <h6 class="mb-0">Skote Design file.psd</h6>
                              </div>
                              <div class="flex-shrink-0 text-muted">
                                2.5 MB
                              </div>
                            </div>
                          </BLink>
                        </li>
                      </ul>
                      <BCard no-body class="border mb-0 text-center">
                        <BCardBody>

                          <div class="p-5">
                            <img src="@/assets/images/file-manager.png" alt="" class="img-fluid">
                          </div>
                          <h5 class="fs-lg">Upgrade Account</h5>
                          <p class="text-muted">Invite 2 friends and get 5 GB extra space.</p>
                          <router-link to="/pages/pricing" class="stretched-link text-decoration-underline">Upgrade Plan
                            <i class="bi bi-arrow-right align-baseline ms-1"></i></router-link>
                        </BCardBody>
                      </BCard>
                    </BCardBody>
                  </div>
                </BCard>
              </BCol>
            </BRow>
          </BTab>
          <BTab title="Shared with me">
            <div class="d-flex flex-wrap gap-3 align-items-center mb-3">
              <div class="flex-grow-1">
                <h5 class="mb-0">Shared with me</h5>
              </div>
              <div class="flex-shrink-0">
                <button class="btn btn-icon btn-ghost-primary" data-bs-toggle="tooltip" data-bs-placement="top"
                  data-bs-trigger="hover" data-bs-title="Hide for Filter"><i class="bi bi-funnel"></i></button>
                <button class="btn btn-icon btn-ghost-primary" data-bs-toggle="tooltip" data-bs-placement="top"
                  data-bs-trigger="hover" data-bs-title="List Layout"><i class="bi bi-list-task"></i></button>
                <button class="btn btn-icon btn-ghost-primary" data-bs-toggle="tooltip" data-bs-placement="top"
                  data-bs-trigger="hover" data-bs-title="Hide Details"><i
                    class="bi bi-exclamation-circle-fill"></i></button>
              </div>
            </div>

            <BRow>
              <BCol xl="3" lg="4" sm="6">
                <BCard no-body>
                  <BCardBody>
                    <div class="d-flex gap-2 mb-4">
                      <div class="avatar-sm flex-shrink-0">
                        <div class="avatar-title bg-warning-subtle text-warning fs-3xl rounded">
                          <i class="bi bi-folder"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 overflow-hidden">
                        <BLink href="#!">
                          <h5 class="fs-lg text-truncate">Work Presentation</h5>
                        </BLink>
                        <p class="text-muted mb-0">263.97 MB</p>
                      </div>
                      <BDropdown variant="link" class="flex-shrink-0" toggle-class="text-reset d-inline-block arrow-none"
                        menu-class="dropdown-menu-end">
                        <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                        <BDropdownItem><i class="bi bi-exclamation-circle align-baseline me-1"></i> Overview
                        </BDropdownItem>
                        <BDropdownItem><i class="bi bi-download me-1 align-baseline"></i>Download</BDropdownItem>
                        <BDropdownItem><i class="bi bi-trash3 me-1 align-middle"></i> Delete</BDropdownItem>
                      </BDropdown>
                    </div>
                    <div class="avatar-group">
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="marydamron@steemx.com">
                        <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs">
                      </BLink>
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="ronaldashmore@steemx.com">
                        <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs">
                      </BLink>
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="williemoore@steemx.com">
                        <div class="avatar-xs">
                          <div class="avatar-title rounded-circle bg-light text-primary">
                            W
                          </div>
                        </div>
                      </BLink>
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="More Member">
                        <div class="avatar-xs">
                          <div class="avatar-title rounded-circle">
                            2+
                          </div>
                        </div>
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol xl="3" lg="4" sm="6">
                <BCard no-body>
                  <BCardBody>

                    <div class="d-flex gap-2 mb-4">
                      <div class="avatar-sm">
                        <div class="avatar-title bg-danger-subtle text-danger fs-3xl rounded">
                          <i class="bi bi-file-pdf"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 overflow-hidden">
                        <BLink href="#!">
                          <h5 class="fs-lg text-truncate">Steex_invoice.pdf</h5>
                        </BLink>
                        <p class="text-muted mb-0">156.32 KB</p>
                      </div>
                      <BDropdown variant="link" class="flex-shrink-0" toggle-class="text-reset d-inline-block arrow-none"
                        menu-class="dropdown-menu-end">
                        <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                        <BDropdownItem><i class="bi bi-exclamation-circle align-baseline me-1"></i> Overview
                        </BDropdownItem>
                        <BDropdownItem><i class="bi bi-download me-1 align-baseline"></i>Download</BDropdownItem>
                        <BDropdownItem><i class="bi bi-trash3 me-1 align-middle"></i> Delete</BDropdownItem>
                      </BDropdown>
                    </div>
                    <div class="avatar-group">
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="ronaldashmore@steemx.com">
                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="rounded-circle avatar-xs">
                      </BLink>
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="janicegarcia@steemx.com">
                        <img src="@/assets/images/users/avatar-6.jpg" alt="" class="rounded-circle avatar-xs">
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol xl="3" lg="4" sm="6">
                <BCard no-body>
                  <BCardBody>

                    <div class="d-flex gap-2 mb-4">
                      <div class="avatar-sm">
                        <div class="avatar-title bg-secondary-subtle text-secondary fs-3xl rounded">
                          <i class="bi bi-filetype-psd"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 overflow-hidden">
                        <BLink href="#!">
                          <h5 class="fs-lg text-truncate">SteemX_design.psd</h5>
                        </BLink>
                        <p class="text-muted mb-0">64.18 MB</p>
                      </div>
                      <BDropdown variant="link" class="flex-shrink-0" toggle-class="text-reset d-inline-block arrow-none"
                        menu-class="dropdown-menu-end">
                        <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                        <BDropdownItem><i class="bi bi-exclamation-circle align-baseline me-1"></i> Overview
                        </BDropdownItem>
                        <BDropdownItem><i class="bi bi-download me-1 align-baseline"></i>Download</BDropdownItem>
                        <BDropdownItem><i class="bi bi-trash3 me-1 align-middle"></i> Delete</BDropdownItem>
                      </BDropdown>
                    </div>
                    <div class="avatar-group">
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="josephine@steemx.com">
                        <img src="@/assets/images/users/avatar-10.jpg" alt="" class="rounded-circle avatar-xs">
                      </BLink>
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="nicholas@steemx.com">
                        <img src="@/assets/images/users/avatar-8.jpg" alt="" class="rounded-circle avatar-xs">
                      </BLink>
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="marydamron@steemx.com">
                        <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs">
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol xl="3" lg="4" sm="6">
                <BCard no-body>
                  <BCardBody>

                    <div class="d-flex gap-2 mb-4">
                      <div class="avatar-sm">
                        <div class="avatar-title bg-primary-subtle text-primary fs-3xl rounded">
                          <i class="bi bi-file-zip"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 overflow-hidden">
                        <BLink href="#!">
                          <h5 class="fs-lg text-truncate">Velzon Admin</h5>
                        </BLink>
                        <p class="text-muted mb-0">64.18 MB</p>
                      </div>
                      <BDropdown variant="link" class="flex-shrink-0" toggle-class="text-reset d-inline-block arrow-none"
                        menu-class="dropdown-menu-end">
                        <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                        <BDropdownItem><i class="bi bi-exclamation-circle align-baseline me-1"></i> Overview
                        </BDropdownItem>
                        <BDropdownItem><i class="bi bi-download me-1 align-baseline"></i>Download</BDropdownItem>
                        <BDropdownItem><i class="bi bi-trash3 me-1 align-middle"></i> Delete</BDropdownItem>
                      </BDropdown>
                    </div>
                    <div class="avatar-group">
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="jameswilliams@steemx.com">
                        <img src="@/assets/images/users/avatar-7.jpg" alt="" class="rounded-circle avatar-xs">
                      </BLink>
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="almasteve@steemx.com">
                        <div class="avatar-xs">
                          <div class="avatar-title rounded-circle bg-light text-primary">
                            A
                          </div>
                        </div>
                      </BLink>
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="You">
                        <img src="@/assets/images/users/avatar-1.jpg" alt="" class="rounded-circle avatar-xs">
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>

              <BCol xl="3" lg="4" sm="6">
                <BCard no-body>
                  <BCardBody>
                    <div class="d-flex gap-2 mb-4">
                      <div class="avatar-sm">
                        <div class="avatar-title bg-info-subtle text-info fs-3xl rounded">
                          <i class="bi bi-filetype-psd"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 overflow-hidden">
                        <BLink href="#!">
                          <h5 class="fs-lg text-truncate">SteemX Design Kit.psd</h5>
                        </BLink>
                        <p class="text-muted mb-0">234.87 MB</p>
                      </div>
                      <BDropdown variant="link" class="flex-shrink-0" toggle-class="text-reset d-inline-block arrow-none"
                        menu-class="dropdown-menu-end">
                        <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                        <BDropdownItem><i class="bi bi-exclamation-circle align-baseline me-1"></i> Overview
                        </BDropdownItem>
                        <BDropdownItem><i class="bi bi-download me-1 align-baseline"></i>Download</BDropdownItem>
                        <BDropdownItem><i class="bi bi-trash3 me-1 align-middle"></i> Delete</BDropdownItem>
                      </BDropdown>
                    </div>
                    <div class="avatar-group">
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="alvinbrown@steemx.com">
                        <img src="@/assets/images/users/avatar-9.jpg" alt="" class="rounded-circle avatar-xs">
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol xl="3" lg="4" sm="6">
                <BCard no-body>

                  <BCardBody>

                    <div class="d-flex gap-2 mb-4">
                      <div class="avatar-sm">
                        <div class="avatar-title bg-primary-subtle text-primary fs-3xl rounded">
                          <i class="bi bi-file-earmark-word"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 overflow-hidden">
                        <BLink href="#!">
                          <h5 class="fs-lg text-truncate">Figma design system tutorial</h5>
                        </BLink>
                        <p class="text-muted mb-0">7.95 MB</p>
                      </div>
                    </div>
                    <div class="avatar-group">
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="alvinbrown@steemx.com">
                        <img src="@/assets/images/users/avatar-9.jpg" alt="" class="rounded-circle avatar-xs">
                      </BLink>
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="janicegarcia@steemx.com">
                        <img src="@/assets/images/users/avatar-6.jpg" alt="" class="rounded-circle avatar-xs">
                      </BLink>
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="jameswilliams@steemx.com">
                        <img src="@/assets/images/users/avatar-7.jpg" alt="" class="rounded-circle avatar-xs">
                      </BLink>
                      <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                        data-bs-placement="top" data-bs-original-title="More Member">
                        <div class="avatar-xs">
                          <div class="avatar-title rounded-circle">
                            6+
                          </div>
                        </div>
                      </BLink>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
            </BRow>
          </BTab>
          <BTab title="Recent File">
            <BRow>
              <BCol cols="xl">
                <div class="d-flex align-items-center mb-3">
                  <h5 class="flex-grow-1 mb-0">Added Recently</h5>
                  <div class="flex-shrink-0">
                    <BLink href="#!" class="btn btn-primary icon-link btn-sm">View All <i class="bi bi-arrow-right"></i>
                    </BLink>
                  </div>
                </div>
                <BRow>
                  <BCol lg="3" sm="6">
                    <BCard no-body>
                      <BCardBody class="d-flex align-items-center gap-2">
                        <div class="avatar-sm">
                          <div class="avatar-title bg-warning-subtle text-warning fs-3xl rounded">
                            <i class="bi bi-folder"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <BLink href="#!" class="stretched-link">
                            <h5 class="fs-lg">Work Presentation</h5>
                          </BLink>
                          <p class="text-muted mb-0">263.97 MB</p>
                        </div>
                      </BCardBody>
                    </BCard>
                  </BCol>
                  <BCol lg="3" sm="6">
                    <BCard no-body>
                      <BCardBody class="d-flex align-items-center gap-2">
                        <div class="avatar-sm">
                          <div class="avatar-title bg-danger-subtle text-danger fs-3xl rounded">
                            <i class="bi bi-file-pdf"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <BLink href="#!" class="stretched-link">
                            <h5 class="fs-lg">Steex_invoice.pdf</h5>
                          </BLink>
                          <p class="text-muted mb-0">156.32 KB</p>
                        </div>
                      </BCardBody>
                    </BCard>
                  </BCol>
                  <BCol lg="3" sm="6">
                    <BCard no-body>
                      <BCardBody class="d-flex align-items-center gap-2">
                        <div class="avatar-sm">
                          <div class="avatar-title bg-secondary-subtle text-secondary fs-3xl rounded">
                            <i class="bi bi-filetype-psd"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <BLink href="#!" class="stretched-link">
                            <h5 class="fs-lg">SteemX_design.psd</h5>
                          </BLink>
                          <p class="text-muted mb-0">64.18 MB</p>
                        </div>
                      </BCardBody>
                    </BCard>
                  </BCol>
                  <BCol lg="3" sm="6">
                    <BCard no-body>
                      <BCardBody class="d-flex align-items-center gap-2">
                        <div class="avatar-sm">
                          <div class="avatar-title bg-primary-subtle text-primary fs-3xl rounded">
                            <i class="bi bi-file-zip"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <BLink href="#!" class="stretched-link">
                            <h5 class="fs-lg">Steex Admin</h5>
                          </BLink>
                          <p class="text-muted mb-0">64.18 MB</p>
                        </div>
                      </BCardBody>
                    </BCard>
                  </BCol>
                </BRow>

                <div id="recentFiles" class="mt-2">
                  <div class="d-flex align-items-center gap-2 mb-2">
                    <BCardTitle tag="h6" class="flex-grow-1 mb-0">Recent Files</BCardTitle>
                    <BDropdown variant="link" class="sortable-dropdown flex-shrink-0"
                      toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end">
                      <template #button-content> <span class="fw-semibold text-uppercase">Sort by: </span><span
                          class="text-muted dropdown-title">Docs Type</span> <i
                          class="bi bi-chevron-down ms-1 align-baseline"></i> </template>
                      <BDropdownItem @click="onSort('docs_type')"><i class="ph ph-folder-open me-1 align-middle"></i> Docs
                        Type</BDropdownItem>
                      <BDropdownItem @click="onSort('size')"><i class="ph ph-download-simple me-1 align-middle"></i> Size
                      </BDropdownItem>
                      <BDropdownItem @click="onSort('date')"><i class="ph ph-export me-1 align-middle"></i> Date
                      </BDropdownItem>
                    </BDropdown>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-borderless table-custom table-centered align-middle table-nowrap mb-0">
                      <thead class="text-muted">
                        <tr>
                          <th>
                            <div class="form-check checkbox-product-list">
                              <input class="form-check-input" type="checkbox" value="1" id="checkbox-1">
                              <label class="form-check-label" for="checkbox-1"></label>
                            </div>
                          </th>
                          <th scope="col" class="sort cursor-pointer" data-sort="docs_type" @click="onSort('docs_type')">
                            Type</th>
                          <th scope="col" class="sort cursor-pointer" data-sort="document_name"
                            @click="onSort('document_name')">Document Name</th>
                          <th scope="col" class="sort cursor-pointer" data-sort="file_item" @click="onSort('file_item')">
                            File Item</th>
                          <th scope="col" class="sort cursor-pointer" data-sort="size" @click="onSort('size')">Size</th>
                          <th scope="col" class="sort cursor-pointer" data-sort="date" @click="onSort('date')">Last
                            Modified</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody class="list" id="file-list">

                        <tr v-for="(data, index) of displayedPosts" :key="index">
                          <th>
                            <div class="form-check checkbox-product-list">
                              <input class="form-check-input" type="checkbox" value="2" id="checkbox-2">
                              <label class="form-check-label" for="checkbox-2"></label>
                            </div>
                          </th>
                          <td class="docs_type">
                            <i class="bi bi-filetype-svg text-secondary-emphasis fs-4" v-if="data.docs_type == 'svg'"></i>
                            <i class="bi bi-file-earmark-word text-info-emphasis fs-4"
                              v-if="data.docs_type == 'word'"></i>
                            <i class="bi bi-filetype-pdf text-danger-emphasis fs-4" v-if="data.docs_type == 'pdf'"></i>
                            <i class="bi bi-filetype-psd text-primary-emphasis fs-4" v-if="data.docs_type == 'psd'"></i>
                            <i class="bi bi-filetype-mp4 text-warning-emphasis fs-4" v-if="data.docs_type == 'mp4'"></i>
                            <i class="bi bi-filetype-gif text-success-emphasis fs-4" v-if="data.docs_type == 'gif'"></i>
                            <i class="bi bi-filetype-scss text-danger-emphasis fs-4" v-if="data.docs_type == 'scss'"></i>
                            <i class="bi bi-file-earmark-zip text-dark-emphasis fs-4" v-if="data.docs_type == 'zip'"></i>
                          </td>
                          <td>
                            <BLink href="#!" class="text-reset document_name">{{ data.document_name }}</BLink>
                          </td>
                          <td class="file_item">{{ data.file_item }}</td>
                          <td class="size">
                            {{ data.size }}
                          </td>
                          <td class="date">
                            {{ data.date }}
                          </td>
                          <td>
                            <BDropdown variant="link" class="sortable-dropdown flex-shrink-0"
                              toggle-class="btn btn-subtle-secondary btn-sm arrow-none" menu-class="dropdown-menu-end">
                              <template #button-content> <i class="ri-more-fill align-middle"></i> </template>
                              <BDropdownItem class="view-item-btn"><i
                                  class="ri-eye-fill align-bottom me-2 text-muted"></i>View</BDropdownItem>
                              <BDropdownItem class="edit-item-btn"><i
                                  class="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</BDropdownItem>
                              <BDropdownItem class="remove-item-btn"><i
                                  class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</BDropdownItem>
                            </BDropdown>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="noresult" v-if="displayedPosts.length < 1">
                      <div class="text-center">
                        <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop"
                          colors="primary:#405189,secondary:#0ab39c" style="width:75px;height:75px"></lord-icon>
                        <h5 class="mt-2">Sorry! No Result Found</h5>
                        <p class="text-muted mb-0">We've searched more than 150+ files We did not find any files for you
                          search.</p>
                      </div>
                    </div>
                  </div>
                  <div class="align-items-center my-3 justify-content-between row text-center text-sm-start"
                    id="pagination-element" v-if="pages.length > 1">
                    <BCol cols="sm">
                      <div class="text-muted">
                        Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span
                          class="fw-semibold">{{ allTableList.length }}</span> Results
                      </div>
                    </BCol>
                    <BCol sm="auto" class="mt-3 mt-sm-0">
                      <div class="pagination-wrap hstack gap-2">
                        <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                          Previous
                        </BLink>
                        <ul class="pagination listjs-pagination mb-0">
                          <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                            v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                            <BLink class="page" href="#!">{{ pageNumber }}</BLink>
                          </li>
                        </ul>
                        <BLink class="page-item pagination-next" href="#" :disabled="page >= pages.length"
                          @click="page++">
                          Next
                        </BLink>
                      </div>
                    </BCol>
                  </div>
                </div>
              </BCol>
              <BCol xl="3">
                <BCard no-body>
                  <BCardHeader>
                    <div class="d-flex align-items-center gap-2">
                      <div class="flex-grow-1">
                        <BCardTitle tag="h5" class="mb-0">File Preview</BCardTitle>
                      </div>
                      <div class="flex-shrink-0">
                        <button type="button" class="btn btn-sm btn-icon btn-subtle-danger close-btn-overview">
                          <i class="ri-close-fill align-bottom"></i>
                        </button>
                      </div>
                    </div>
                  </BCardHeader>

                  <BCardBody>
                    <div class="p-2 bg-info-subtle fs-1 text-info text-center py-5 rounded">
                      <i class="bi bi-folder"></i>
                    </div>
                    <div class="table-responsive mt-3">
                      <table class="table table-borderless table-nowrap table-sm">
                        <tbody>
                          <tr>
                            <th scope="row" style="width: 35%;">File Name :</th>
                            <td class="file-name">Figma design system tutorial</td>
                          </tr>
                          <tr>
                            <th scope="row">File Type :</th>
                            <td class="file-type">Media</td>
                          </tr>
                          <tr>
                            <th scope="row">Size :</th>
                            <td class="file-size">1.3 MB</td>
                          </tr>
                          <tr>
                            <th scope="row">Created :</th>
                            <td class="create-date">24 May, 2023</td>
                          </tr>
                          <tr>
                            <th scope="row">Path :</th>
                            <td class="file-path">
                              <div class="user-select-all text-truncate">*:\projects\src\assets\images</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <h5 class="fs-xs text-uppercase text-muted mb-2">Share Information:</h5>
                      <div class="table-responsive">
                        <table class="table table-borderless table-nowrap table-sm">
                          <tbody>
                            <tr>
                              <th scope="row" style="width: 35%;">Share Name :</th>
                              <td class="share-name">\\*\Projects</td>
                            </tr>
                            <tr>
                              <th scope="row">Share Path :</th>
                              <td class="share-path">SteemX:\Documents\</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
            </BRow>
          </BTab>
          <BTab title="Starred">
            <div class="d-flex flex-wrap gap-3 align-items-center mb-3">
              <div class="flex-grow-1">
                <h5 class="mb-0">Starred</h5>
              </div>
              <div class="flex-shrink-0">
                <button class="btn btn-icon btn-ghost-primary"><i class="bi bi-funnel"></i></button>
                <button class="btn btn-icon btn-ghost-primary"><i class="bi bi-list-task"></i></button>
                <button class="btn btn-icon btn-ghost-primary"><i class="bi bi-exclamation-circle-fill"></i></button>
              </div>
            </div>
            <div class="text-center">
              <i class="ph ph-star display-6 text-warning"></i>
              <h5 class="mt-3">No starred files or folders</h5>
              <p class="text-muted mb-0">Add stars to things that you want to easily find later</p>
            </div>
          </BTab>
          <BTab title="Trash">
            <div class="d-flex flex-wrap gap-3 align-items-center mb-3">
              <div class="flex-grow-1">
                <h5 class="mb-0">Trash for My Drive</h5>
              </div>
              <div class="flex-shrink-0">
                <button class="btn btn-icon btn-ghost-primary"><i class="bi bi-funnel"></i></button>
                <button class="btn btn-icon btn-ghost-primary"><i class="bi bi-list-task"></i></button>
                <button class="btn btn-icon btn-ghost-primary"><i class="bi bi-exclamation-circle-fill"></i></button>
              </div>
            </div>
            <div class="alert alert-warning mb-4">
              <BLink href="#!" class="float-end text-warning text-decoration-underline">Empty trash</BLink>
              Items in trash are deleted forever after <b>30 days</b>
            </div>
            <div class="text-center">
              <i class="bi bi-trash3 display-6 text-danger"></i>
              <h5 class="mt-3">No Items</h5>
              <p class="text-muted mb-0">Items moved to the trash will appear here</p>
            </div>
          </BTab>
        </BTabs>
      </BCol>
    </BRow>

  </Layout>

  <BModal v-model="fileManagerModal" id="createFolder" hide-footer title="Create Folder">
    <BForm action="#" class="tablelist-form" autocomplete="off">
      <div id="alert-error-msg" class="d-none alert alert-danger py-2"></div>
      <input type="hidden" id="id-field">
      <div class="mb-3">
        <label for="folder-title-input" class="form-label">Folder title <span class="text-danger">*</span></label>
        <input type="text" id="folder-title-input" class="form-control" placeholder="Enter folder title" required="">
      </div>

      <div class="mb-5">
        <label class="form-label">Folder Images</label>
        <div class="dropzone my-dropzone text-center dz-clickable" style="min-height: 180px;">
          <div class="dz-message">
            <div class="mb-3">
              <i class="display-4 text-muted ri-upload-cloud-2-fill"></i>
            </div>

            <h5>Drop files here or click to upload.</h5>
          </div>
        </div>
      </div>
      <div class="hstack gap-2 justify-content-end">
        <button type="button" class="btn btn-ghost-danger" @click="fileManagerModal = false"> <i
            class="bi bi-x-lg align-baseline me-1"></i> Close </button>
        <BButton type="button" variant="primary" id="add-btn"> Add Folder </BButton>
      </div>
    </BForm>
  </BModal>

  <!-- Files Modal -->
  <BModal v-model="filesModal" hide-footer centered no-body header-class="p-3 bg-success-subtle"
    :title="this.dataEdit ? 'Edit File' : 'Create File'" class="modal fade zoomIn" id="createProjectModal">
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <div class=""></div>
        <label for="projectname-input" class="form-label">File Name</label>
        <input type="text" class="form-control" id="projectname-input" placeholder="Enter project name"
          v-model="event.document_name" :class="{ 'is-invalid': submitted && !event.document_name }">
        <div class="invalid-feedback">Please enter a file name.</div>
        <div class="mt-2">
          <label for="fileitem-input" class="form-label">File Item</label>
          <input type="text" class="form-control " id="fileitem-field" placeholder="Enter File Item"
            v-model="event.file_item" :class="{ 'is-invalid': submitted && !event.file_item }">
          <div class="invalid-feedback">Please enter a file item.</div>
        </div>
        <div class="mt-2">
          <label for="filesize-input" class="form-label">size</label>
          <input type="text" class="form-control " id="filesize-field" placeholder="Enter size" v-model="event.size"
            :class="{ 'is-invalid': submitted && !event.size }">
          <div class="invalid-feedback">Please enter a file size.</div>
        </div>
        <div class="mt-2">
          <label for="filedate-input" class="form-label"> Enter Date</label>
          <flat-pickr placeholder="Enter Date" v-model="event.date" :config="config" class="form-control flatpickr-input"
            id="caledate" :class="{ 'is-invalid': submitted && !event.date }"></flat-pickr>

          <div class="invalid-feedback">Please enter a file date.</div>
        </div>
      </div>
      <div class="hstack gap-2 justify-content-end">
        <button type="button" class="btn btn-ghost-success" @click="filesModal = false"><i
            class="ri-close-line align-bottom"></i> Close</button>
        <button type="submit" class="btn btn-primary" id="addNewProject">{{ this.dataEdit ? 'Edit' : 'Add' }}</button>
      </div>
    </form>
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

  <!-- Folder Modal -->
  <BModal v-model="folderModal" hide-footer centered no-body header-class="p-3 bg-success-subtle" title="Create Folder"
    class="modal fade zoomIn" id="createProjectModal">
    <form @submit.prevent="folderHandleSubmit">
      <div class="mb-4">
        <label for="projectname-input" class="form-label">Folder Name</label>
        <input type="text" class="form-control" id="projectname-input" placeholder="Enter project name"
          v-model="folderEvent.text" :class="{ 'is-invalid': submitted && !folderEvent.text }">
        <div class="invalid-feedback">Please enter a folder name.</div>
      </div>
      <div class="hstack gap-2 justify-content-end">
      <button type="button" class="btn btn-ghost-success" @click="folderModal = false"><i
          class="ri-close-line align-bottom"></i> Close</button>
      <button type="submit" class="btn btn-primary" id="addNewProject">Add Folder</button>
    </div>
  </form>
</BModal></template>

