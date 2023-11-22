<script>

import flatPickr from "vue-flatpickr-component";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import { todoList, projects, insights } from "@/common/data";

export default {
  data() {
    return {
      searchQuery: null,
      todoList: todoList,
      projects: projects,
      insights: insights,
      loading: false,

      projectBtn: false,
      // 
      submitted: false,
      createTask: false,
      dataEdit: false,
      deleteModal: false,
      searchStatus: "All",
      event: {
        id: "",
        todo: "",
        status: "",
        priority: "",
        dueDate: ""
      },

      sorting: "",
      // 

      // Projects CRUD
      projectsModal: false,
      projectsEvent: {
        id: "",
        text: "",
        iconClass: ""
      },

      iconclasslist: ["bi bi-bezier", "bi bi-boxes", "bi bi-gem", "bi bi-puzzle"],
      imgValue: null,
      options: [
        { name: 'James Forbes', value: require('@/assets/images/users/avatar-2.jpg') },
        { name: 'John Robles', value: require('@/assets/images/users/avatar-3.jpg') },
        { name: 'Mary Gant', value: require('@/assets/images/users/avatar-4.jpg') },
        { name: 'Curtis Saenz', value: require('@/assets/images/users/avatar-1.jpg') },
        { name: 'Virgie Price', value: require('@/assets/images/users/avatar-5.jpg') },
        { name: 'Anthony Mills', value: require('@/assets/images/users/avatar-10.jpg') },
        { name: 'Marian Angel', value: require('@/assets/images/users/avatar-6.jpg') },
        { name: 'Johnnie Walton', value: require('@/assets/images/users/avatar-7.jpg') },
        { name: 'Donna Weston', value: require('@/assets/images/users/avatar-8.jpg') },
        { name: 'Diego Norris', value: require('@/assets/images/users/avatar-9.jpg') },
      ]
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.todoList.filter((data) => {
          return (
            data.todo.toLowerCase().includes(search) ||
            data.status.toLowerCase().includes(search) ||
            data.priority.toLowerCase().includes(search)
          );
        });
      } else if (this.searchStatus != null && this.searchStatus != "All") {
        return this.todoList.filter((data) => {
          return data.status == this.searchStatus;
        });
      } else {
        return this.todoList;
      }
    },
  },
  methods: {
    // Status Toggle
    todoListStatus(e) {
      this.todoList.filter((item) => {
        if (item.id == e.id) { item.status == 'Completed' ? item.status = 'Inprogress' : item.status = 'Completed'; }
      });
    },

    // 
    handleSubmit() {
      if (this.dataEdit) {
        this.submitted = true;
        if (this.submitted && (this.event.todo && this.event.status && this.event.priority && this.event.dueDate)) {
          this.todoList = this.todoList.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
          this.createTask = false;
          this.createProjectModal = false;
        }
      } else {
        this.submitted = true;
        if (this.submitted && (this.event.todo && this.event.status && this.event.priority && this.event.dueDate && this.event.assignedto)) {
          const data = {
            id: (Math.floor(Math.random() * 100 + 20) - 20),
            ...this.event
          };
          this.todoList = [data, ...this.todoList];
          this.createTask = false;
        }
      }
    },

    editDetails(data) {
      this.dataEdit = true;
      this.createTask = true;
      this.event = { ...data };
      this.imgValue = data.assignedto;
      this.submitted = false;
    },

    toggleModal() {
      this.createTask = true;
      this.dataEdit = false;
      this.event = {};
      this.imgValue = null;

      this.submitted = false;
    },

    deleteModalToggle(data) {
      this.deleteModal = true;
      this.event.id = data.id;
    },

    deleteData() {
      if (this.event.id) {
        this.todoList = this.todoList.filter((item) => {
          return item.id != this.event.id;
        });
        this.deleteModal = false;
      }
    },
    // 

    onChange(selected) {
      this.event.assignedto = [];
      let selected_images;
      selected_images = selected.map(img => {
        return { assigneeImg: img };
      });

      this.event.assignedto = selected_images;
    },

    sortElementsById() {
      if (this.sorting == "By Name") {
        this.todoList = [...this.todoList].sort((a, b) => (a.todo.toLowerCase() < b.todo.toLowerCase()) ? -1 : (a.todo.toLowerCase() > b.todo.toLowerCase()) ? 1 : 0);
      }
      if (this.sorting == "By ID") {
        this.todoList = [...this.todoList].sort((a, b) => (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0);
      }
    },

    // Projects & Insights CRUD

    projectsHandleSubmit() {
      this.submitted = true;
      let data;

      if (this.submitted && this.projectsEvent.text) {
        data = {
          id: (Math.floor(Math.random() * 100 + 20) - 20),
          iconClass: this.iconclasslist[Math.floor(Math.random() * this.iconclasslist.length)],
          ...this.projectsEvent
        };

        if (this.projectBtn) {
          this.insights = [data, ...this.insights];
        } else {
          this.projects = [data, ...this.projects];
        }
        this.projectsModal = false;
        this.projectBtn = false;
      }
    },

    projectsToggleModal(e) {
      const button = e.target.closest(".btn-icon").id;
      if (button) {
        this.projectBtn = true;
      } else {
        this.projectBtn = false;
      }
      this.projectsEvent = {};
      this.projectsModal = true;
      this.submitted = false;
    },

  },
  components: {
    
    
    
    flatPickr,
    Multiselect
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol cols="md">
          <PageHeader title="To Do" pagetitle="Apps" />
        </BCol>
        <BCol md="auto" class="ms-auto mb-n3">
          <div class="d-flex flex-wrap gap-2">
            <button type="button" class="btn btn-subtle-success btn-icon btn-sm todo-menu-btn d-lg-none">
              <i class="ri-menu-2-fill align-bottom"></i>
            </button>
            <router-link to="/pages/pricing" class="btn btn-secondary mb-3">Upgrade</router-link>

            <BDropdown variant="link" toggle-class="d-inline-block p-0 mt-n3 arrow-none" menu-class="dropdown-menu-end p-1">
              <template #button-content> 
                <img src="@/assets/images/users/avatar-7.jpg" alt="" height="39.19" width="39.19" class="rounded-circle"> </template>
              <BDropdownItem href="/pages/profile">Profile</BDropdownItem>
              <BDropdownItem href="/pages/profile">My Settings</BDropdownItem>
              <BDropdownItem href="/pages/privacy">Privacy Policy</BDropdownItem>
              <BDropdownItem href="/auth/logout">Log Out</BDropdownItem>
            </BDropdown>
            <RightBar />
          </div>
        </BCol>
      </BRow>
    </div>

    <BRow>
      <BCol xxl="3" class="todo-sidebar">
        <BCard no-body>
          <BCardBody class="border-bottom">
            <ul class="list-unstyled todo-menu vstack gap-1 mb-0">
              <li>
                <BLink href="#!" class="active"><i class="bi bi-house-door align-baseline me-1"></i> Home</BLink>
              </li>
              <li>
                <BLink href="#!"><i class="bi bi-list-check align-baseline me-1"></i> My Task</BLink>
              </li>
              <li>
                <BLink href="#!"><i class="bi bi-bell align-baseline me-1"></i> Inbox <span
                    class="badge bg-danger rounded-circle align-baseline">5</span></BLink>
              </li>
            </ul>
          </BCardBody>
          <BCardBody>
            <div class="d-flex align-items-center gap-2 mb-2">
              <h6 class="flex-grow-1 mb-0">Insights</h6>
              <div class="flex-shrink-0">
                <button class="btn btn-subtle-primary btn-icon btn-sm" id="btn-insights" @click="projectsToggleModal"><i
                    class="bi bi-plus-circle"></i></button>
              </div>
            </div>
            <ul class="list-unstyled vstack gap-1 todo-menu">
              <li v-for="(data, index) of insights" :key="index">
                <BLink href="#!"> <i class="align-baseline me-1" :class="data.iconClass"></i> {{ data.text }}</BLink>
              </li>
            </ul>
            <div class="d-flex align-items-center gap-2 mb-2">
              <h6 class="flex-grow-1 mb-0">Projects</h6>
              <div class="flex-shrink-0">
                <button class="btn btn-subtle-primary btn-icon btn-sm" @click="projectsToggleModal"><i
                    class="bi bi-plus-circle"></i></button>
              </div>
            </div>
            <ul class="list-unstyled vstack gap-1 todo-menu">
              <li v-for="(data, index) of projects" :key="index">
                <BLink href="#!">
                  <i class="align-baseline me-1" :class="data.iconClass"></i> {{ data.text }}</BLink>
              </li>
            </ul>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol cols="xxl">
        <BCard no-body>
          <BCardHeader>
            <div class="d-flex gap-2 align-items-center">
              <div class="avatar-sm flex-shrink-0">
                <div class="avatar-title bg-secondary-subtle text-secondary rounded fs-3">
                  <i class="bi bi-android"></i>
                </div>
              </div>
              <div class="flex-grow-1">
                <h5 class="fs-lg">SteemX HTML</h5>
                <p class="text-muted mb-0">05 June, 2023</p>
              </div>
              <div class="avatar-group flex-nowrap flex-shrink-0">
                <BLink href="javascript: void(0);" class="avatar-group-item" data-img="@/assets/images/users/avatar-6.jpg"
                  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Marian Angel">
                  <img src="@/assets/images/users/avatar-6.jpg" alt="" class="rounded-circle avatar-xxs">
                </BLink>
                <BLink href="javascript: void(0);" class="avatar-group-item" data-img="@/assets/images/users/avatar-7.jpg"
                  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Johnnie Walton">
                  <img src="@/assets/images/users/avatar-7.jpg" alt="" class="rounded-circle avatar-xxs">
                </BLink>
                <BLink href="javascript: void(0);" class="avatar-group-item" data-img="@/assets/images/users/avatar-8.jpg"
                  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Donna Weston">
                  <img src="@/assets/images/users/avatar-8.jpg" alt="" class="rounded-circle avatar-xxs">
                </BLink>
              </div>
              <div class="flex-shrink-0">
                <button class="btn btn-subtle-primary">Share <i class="bi bi-share align-baseline ms-1"></i></button>
              </div>
            </div>
          </BCardHeader>
          <BCardBody>
            <div class="p-3 bg-light rounded mb-4">
              <BRow class="g-2">
                <BCol lg="auto">
                  <select class="form-control form-select" data-choices data-choices-search-false
                    name="choices-select-sortList" id="choices-select-sortlist" v-model="sorting"
                    @change="sortElementsById">
                    <option value="">Sort</option>
                    <option value="By ID">By ID</option>
                    <option value="By Name">By Name</option>
                  </select>
                </BCol>
                <BCol lg="auto">
                  <select class="form-control form-select" data-choices data-choices-search-false
                    name="choices-select-status" id="choices-select-status" v-model="searchStatus">
                    <option value="All">All Tasks</option>
                    <option value="Completed">Completed</option>
                    <option value="Inprogress">Inprogress</option>
                    <option value="Pending">Pending</option>
                    <option value="New">New</option>
                  </select>
                </BCol>
                <BCol cols="lg">
                  <div class="search-box">
                    <input type="text" id="searchTaskList" class="form-control search" placeholder="Search task name"
                      v-model="searchQuery">
                    <i class="ri-search-line search-icon"></i>
                  </div>
                </BCol>
                <BCol lg="auto">
                  <button class="btn btn-primary createTask" type="button" @click="toggleModal">
                    <i class="ri-add-fill align-bottom"></i> Add Tasks
                  </button>
                </BCol>
              </BRow>
            </div>
            <div class="todo-content position-relative px-4 mx-n4" id="todo-content">
              <div class="todo-task" id="todo-task">
                <div class="table-responsive">
                  <table class="table align-middle position-relative table-nowrap">
                    <thead class="table-active">
                      <tr>
                        <th scope="col">Task Name</th>
                        <th scope="col">Assigned</th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>

                    <tbody id="task-list">

                      <tr v-for="(data, index) of resultQuery" :key="index">
                        <td>
                          <div class="d-flex align-items-start">
                            <div class="flex-shrink-0 me-3">
                              <div class="task-handle px-1 bg-light rounded">: :</div>
                            </div>
                            <div class="flex-grow-1">
                              <div class="form-check"> <input class="form-check-input me-1" type="checkbox" value="15"
                                  id="todo15" :checked="data.status == 'Completed'" @click="() => todoListStatus(data)">
                                <label class="form-check-label" for="todo15">{{ data.todo }}</label>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="avatar-group flex-nowrap">
                            <BLink href="javascript: void(0);" class="avatar-group-item"
                              data-img="https://img.themesbrand.com/steemx/users/avatar-1.jpg" data-bs-toggle="tooltip"
                              data-bs-placement="top" v-for="(data, index) of data.assignedto" :key="index"
                              :data-bs-title="data.assigneeName">
                              <img :src="data.assigneeImg" alt="" class="rounded-circle avatar-xxs">
                            </BLink>
                          </div>
                        </td>
                        <td>{{ data.dueDate }}</td>
                        <td>
                          <span class="badge bg-success-subtle text-success text-uppercase"
                            v-if="data.status == 'Completed'">{{ data.status }}</span>
                          <span class="badge bg-warning-subtle text-warning text-uppercase"
                            v-if="data.status == 'Pending'">{{ data.status }}</span>
                          <span class="badge bg-secondary-subtle text-secondary text-uppercase"
                            v-if="data.status == 'Inprogress'">{{ data.status }}</span>
                          <span class="badge bg-info-subtle text-info text-uppercase" v-if="data.status == 'New'">{{
                            data.status }}</span>
                        </td>
                        <td>
                          <span class="badge bg-danger-subtle text-danger text-uppercase"
                            v-if="data.priority == 'High'">{{ data.priority }}</span>
                          <span class="badge bg-warning-subtle text-warning text-uppercase"
                            v-if="data.priority == 'Medium'">{{ data.priority }}</span>
                          <span class="badge bg-success-subtle text-success text-uppercase"
                            v-if="data.priority == 'Low'">{{ data.priority }}</span>
                        </td>
                        <td>
                          <div class="hstack gap-2">
                            <button class="btn btn-sm btn-subtle-danger remove-list" @click="deleteModalToggle(data)">
                              <i class="ri-delete-bin-5-fill align-bottom"></i>
                            </button>
                            <button class="btn btn-sm btn-subtle-info edit-list" @click="editDetails(data)">
                              <i class="ri-pencil-fill align-bottom"></i>
                            </button>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
              <div id="elmLoader" class="text-center" v-if="loading">
                <div class="spinner-border text-primary avatar-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              <div class="py-4 mt-4 text-center" id="noresult" v-if="resultQuery.length < 1">
                <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop"
                  colors="primary:#405189,secondary:#0ab39c" style="width:72px;height:72px"></lord-icon>
                <h5 class="mt-4">Sorry! No Result Found</h5>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>

  <BModal v-model="createTask" hide-footer content-class="border-0" header-class="p-3 bg-success-subtle"
    :title="dataEdit ? 'Edit Task' : 'Create Task'" class="modal fade" id="createTask" centered>
    <form id="creattask-form" @submit.prevent="handleSubmit">
      <input type="hidden" id="taskid-input" class="form-control">
      <div class="mb-3">
        <label for="task-title-input" class="form-label">Task Title</label>
        <input type="text" id="task-title-input" class="form-control" placeholder="Enter task title" v-model="event.todo"
          :class="{ 'is-invalid': submitted && !event.todo }">
        <div class="invalid-feedback">Please enter a task title.</div>
      </div>
      <div class="mb-3 position-relative">
        <label for="task-assign-input" class="form-label">Assigned To</label>
        <div class="avatar-group justify-content-center" id="assignee-member">
          <span v-for="(img, index) of event.assignedto" :key="index">
            <b-link href="javascript: void(0);" class="avatar-group-item mb-2" data-img="{{img}}" data-bs-toggle="tooltip"
              data-bs-placement="top" title="{{img}}">
              <img :src="img.assigneeImg" alt="" class="rounded-circle avatar-xs" />
            </b-link>
          </span>
        </div>
        <Multiselect v-model="imgValue" :options="options" mode="multiple" :multiple="true" :close-on-select="false"
          :clear-on-select="false" :searchable="false" :create-option="true"
          :class="{ 'is-invalid': submitted && !event.assignedto }" placeholder="Pick some" label="name"
          @input="onChange">
          <template v-slot="{ values, isOpen }">
            <span class="multiselect__single" v-if="values.length && !isOpen">Assigned To<b>{{ values.length }}</b>
              Members</span>
          </template>
        </Multiselect>
        <div class="invalid-feedback">Please select an assignee.</div>
      </div>
      <BRow class="g-4 mb-3">
        <BCol lg="6">
          <label for="task-status" class="form-label">Status</label>
          <select class="form-control form-select" data-choices data-choices-search-false id="task-status-input"
            v-model="event.status" :class="{ 'is-invalid': submitted && !event.status }">
            <option value="">Status</option>
            <option value="New" selected>New</option>
            <option value="Inprogress">Inprogress</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <div class="invalid-feedback">Please select a status.</div>
        </BCol>

        <BCol lg="6">
          <label for="priority-field" class="form-label">Priority</label>
          <select class="form-control form-select" data-choices data-choices-search-false id="priority-field"
            v-model="event.priority" :class="{ 'is-invalid': submitted && !event.priority }">
            <option value="">Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <div class="invalid-feedback">Please select a priority.</div>
        </BCol>

      </BRow>
      <div class="mb-4">
        <label for="task-duedate-input" class="form-label">Due Date:</label>
        <flat-pickr placeholder="Due date" class="form-control" id="task-duedate-input" v-model="event.dueDate"
          :config="config" :class="{ 'is-invalid': submitted && !event.dueDate }"></flat-pickr>
        <div class="invalid-feedback">Please select a date.</div>
      </div>

      <div class="hstack gap-2 justify-content-end">
        <button type="button" class="btn btn-ghost-success" @click="createTask = false"><i
            class="ri-close-fill align-bottom"></i> Close</button>
        <button type="submit" class="btn btn-primary" id="addNewTodo">{{ dataEdit ? "Save" : "Add Task" }}</button>
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

  <!-- Project Modal -->
  <BModal v-model="projectsModal" hide-footer centered no-body header-class="p-3 bg-success-subtle" title="Create Project"
    class="modal fade zoomIn" id="createProjectModal">
    <form @submit.prevent="projectsHandleSubmit">
      <div class="mb-4">
        <label for="projectname-input" class="form-label">Project Name</label>
        <input type="text" class="form-control" id="projectname-input" placeholder="Enter project name"
          v-model="projectsEvent.text" :class="{ 'is-invalid': submitted && !projectsEvent.text }">
        <div class="invalid-feedback">Please enter project title.</div>
      </div>
      <div class="hstack gap-2 justify-content-end">
        <button type="button" class="btn btn-ghost-danger" @click="projectsModal = false"><i
            class="ri-close-line align-bottom"></i> Close</button>
        <button type="submit" class="btn btn-primary" id="addNewProject">Add Project</button>
      </div>
    </form>
  </BModal>
</template>