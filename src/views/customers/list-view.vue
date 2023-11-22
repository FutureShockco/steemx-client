<script>


import { CountTo } from 'vue3-count-to';
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import { customerList } from "@/common/data";

export default {
  data() {
    return {
      page: 1,
      perPage: 10,
      pages: [],
      searchQuery: null,
      customerList: customerList,

      //
      submitted: false,

      customerModal: false,
      dataEdit: false,
      deleteModal: false,
      editData: "",
      event: {
        id: "",
        img: "",
        name: "",
        company_name: "",
        membership: "",
        email: "",
        phone: "",
        create_date: "",
        tags: []
      },
      //
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.customerList);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.customerList.filter((data) => {
          return (
            data.from.toLowerCase().includes(search) ||
            data.to.toLowerCase().includes(search) ||
            data.coin.toLowerCase().includes(search) ||
            data.status.toLowerCase().includes(search) ||
            data.amount.toLowerCase().includes(search)
          );
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    customerList() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.customerList.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }

      if (this.pages.length < this.page) {
        this.page = this.pages.length;
      }
    },
    paginate(customerList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return customerList.slice(from, to);
    },

    // 
    handleSubmit() {
      if (this.dataEdit) {
        this.submitted = true;
        if (this.submitted && (this.event.name && this.event.company_name && this.event.membership && this.event.email && this.event.phone && this.event.tags)) {
          this.customerList = this.customerList.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
          this.customerModal = false;
        }
      } else {
        this.submitted = true;
        if (this.submitted && (this.event.name && this.event.company_name && this.event.membership && this.event.email && this.event.phone && this.event.tags)) {
          const data = {
            id: (Math.floor(Math.random() * 100 + 20) - 20),
            img: this.event.img || require('@/assets/images/users/user-dummy-img.jpg'),
            create_date: new Date().toUTCString().slice(5, 16),
            ...this.event
          };
          this.customerList = [data, ...this.customerList];
          this.customerModal = false;
        }
      }
    },

    editDetails(data) {
      this.dataEdit = true;
      this.customerModal = true;
      this.event = { ...data };

      this.submitted = false;
    },

    toggleModal() {
      this.customerModal = true;
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
        this.customerList = this.customerList.filter((item) => {
          return item.id != this.event.id;
        });
        this.deleteModal = false;
      }
    },
    //

    // Table Sort
    onSort(column) {
      this.direction = this.direction === 'asc' ? 'desc' : 'asc';
      const sortedArray = [...this.customerList];
      sortedArray.sort((a, b) => {
        const res = a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
        return this.direction === 'asc' ? res : -res;
      });
      this.customerList = sortedArray;
    },

    // CheckAll
    checkAll(e) {
      document.querySelectorAll("[name='chk_child']").forEach((item) => {
        if (e.target.checked) {
          item.checked = true;
          item.closest("tr").classList.add("table-active");
          document.getElementById("remove-actions").classList.remove("d-none");
        } else {
          item.checked = false;
          item.closest("tr").classList.remove("table-active");
          document.getElementById("remove-actions").classList.add("d-none");
        }
      });

    },

    checkedCheckbox() {
      document.querySelectorAll("[name='chk_child']").forEach((item) => {
        if (item.checked) {
          item.closest("tr").classList.add("table-active");
        } else {
          item.closest("tr").classList.remove("table-active");
        }
      });

      let checkboxChecked = document.querySelectorAll("[name='chk_child']:checked").length;
      let checkboxUnchecked = document.querySelectorAll("[name='chk_child']").length;

      if (checkboxChecked == checkboxUnchecked) {
        document.getElementById("checkAll").checked = true;
      } else {
        document.getElementById("checkAll").checked = false;
      }

      if (checkboxChecked) {
        document.getElementById("remove-actions").classList.remove("d-none");
      } else {
        document.getElementById("remove-actions").classList.add("d-none");
      }
    },

    handleCustomerImage(event) {
      const file = event.target.files[0];

      if (file) {
        const imageUrl = URL.createObjectURL(file);
        this.event.img = imageUrl;
      }
    },

    deleteMultiple() {
      document.querySelectorAll("[name='chk_child']").forEach((data) => {
        if (data.checked) {
          this.customerList = this.customerList.filter((item) => {
            return item.id != data.value;
          });
        }
        data.checked = false;
        data.closest("tr").classList.remove("table-active");
        document.getElementById("checkAll").checked = false;
        document.getElementById("remove-actions").classList.add("d-none");
      });
    },
  },
  components: {
    
    
    
    CountTo,
    Multiselect
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center gy-3">
        <BCol cols="md">
          <PageHeader title="List View" pagetitle="Customers" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol cols="xl" sm="6">
        <BCard no-body>
          <BCardBody>
            <div class="d-flex align-items-center mb-3">
              <p class="fs-md mb-0 flex-grow-1">Total Customers</p>
              <p class="text-success mb-0"><i class="bi bi-arrow-up align-baseline"></i> 02.5%</p>
            </div>

            <h3 class="fw-semibold mb-0">
              <count-to :startVal="0" :duration="5000" :endVal="10875"></count-to>
            </h3>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol cols="xl" sm="6">
        <BCard no-body>
          <BCardBody>
            <div class="d-flex align-items-center mb-3">
              <p class="fs-md mb-0 flex-grow-1">Members</p>
              <p class="text-danger mb-0"><i class="bi bi-arrow-down align-baseline"></i> 01.7%</p>
            </div>

            <h3 class="fw-semibold mb-0">
              <count-to :startVal="0" :duration="5000" :endVal="7451"></count-to>
            </h3>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol cols="xl" sm="6">
        <BCard no-body>
          <BCardBody>
            <div class="d-flex align-items-center mb-3">
              <p class="fs-md mb-0 flex-grow-1">New/Returning</p>
              <p class="text-success mb-0"><i class="bi bi-arrow-up align-baseline"></i> 07.61%</p>
            </div>

            <h3 class="fw-semibold mb-0">
              <count-to :startVal="0" :duration="5000" :endVal="1254"></count-to>
            </h3>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xl="4" sm="6">
        <BCard no-body>
          <BCardBody>
            <p class="fs-md">Active Members</p>
            <div class="d-flex align-items-center">
              <h3 class="fw-semibold flex-grow-1 mb-0">
                <count-to :startVal="0" :duration="5000" :endVal="3584"></count-to>
              </h3>
              <div class="flex-shrink-0">
                <div class="avatar-group">
                  <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                    data-bs-trigger="hover" data-bs-placement="top" aria-label="Christi" data-bs-original-title="Christi">
                    <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xxs">
                  </BLink>
                  <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                    data-bs-trigger="hover" data-bs-placement="top" aria-label="Frank Hook"
                    data-bs-original-title="Frank Hook">
                    <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xxs">
                  </BLink>
                  <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                    data-bs-trigger="hover" data-bs-placement="top" data-bs-original-title="Christi">
                    <div class="avatar-xxs">
                      <div class="avatar-title rounded-circle bg-light text-primary">
                        C
                      </div>
                    </div>
                  </BLink>
                  <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                    data-bs-trigger="hover" data-bs-placement="top" aria-label="Jennifer"
                    data-bs-original-title="Jennifer">
                    <img src="@/assets/images/users/avatar-7.jpg" alt="" class="rounded-circle avatar-xxs">
                  </BLink>
                  <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                    data-bs-trigger="hover" data-bs-placement="top" data-bs-original-title="More">
                    <div class="avatar-xxs">
                      <div class="avatar-title rounded-circle">
                        2+
                      </div>
                    </div>
                  </BLink>
                </div>
              </div>
            </div>

          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body id="customerList">
          <BCardHeader class="d-flex align-items-center">
            <BCardTitle tag="h5" class="flex-grow-1 mb-0">All Customers</BCardTitle>
            <div class="flex-shrink-0">
              <button class="btn btn-subtle-danger me-1 d-none" id="remove-actions" @click="deleteMultiple"><i
                  class="ri-delete-bin-2-line"></i></button>
              <button class="btn btn-primary add-btn" @click="toggleModal"><i class="bi bi-plus align-baseline"></i> Add
                Customer</button>
            </div>
          </BCardHeader>
          <BCardBody class="pt-2">
            <div class="table-responsive table-card">
              <table class="table table-custom align-middle table-borderless table-custom-effect table-nowrap mb-0">
                <thead class="table-light">
                  <tr>
                    <th>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="option" id="checkAll"
                          @change="(e) => checkAll(e)">
                        <label class="form-check-label" for="checkAll"></label>
                      </div>
                    </th>
                    <th class="sort cursor-pointer" data-sort="name" @click="onSort('name')">Customer</th>
                    <th class="sort cursor-pointer" data-sort="company_name" @click="onSort('company_name')">Company</th>
                    <th class="sort cursor-pointer" data-sort="membership" @click="onSort('membership')">Membership</th>
                    <th class="sort cursor-pointer" data-sort="email_id" @click="onSort('email')">Email</th>
                    <th class="sort cursor-pointer" data-sort="phone" @click="onSort('phone')">Phone No</th>
                    <th class="sort cursor-pointer" data-sort="date" @click="onSort('create_date')">Last Contacted</th>
                    <th class="sort cursor-pointer" data-sort="tags" @click="onSort('tags')">Tags</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                  <tr id="parentDiv" v-for="(data, index) of resultQuery" :key="index">
                    <td>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="chk_child" :value="data.id"
                          @change="(e) => checkedCheckbox(e)">
                        <label class="form-check-label"></label>
                      </div>
                    </td>
                    <td class="id" style="display:none;"><router-link to="/customers/overview"
                        class="fw-medium link-primary">#TB01{{ data.id }}</router-link></td>
                    <td class="name">
                      <div class="d-flex align-items-center gap-2">
                        <div class="flex-shrink-0">
                          <img :src="data.img" alt="" class="avatar-xxs rounded-circle">
                        </div>
                        <router-link to="/customers/overview" class="text-reset">
                          <h6 class="mb-0 flex-grow-1 text-reset contactname">{{ data.name }}</h6>
                        </router-link>
                      </div>
                    </td>
                    <td class="company_name">{{ data.company_name }}</td>
                    <td class="membership">
                      <span class="badge bg-warning" v-if="data.membership == 'Golden'">{{ data.membership }}</span>
                      <span class="badge bg-info" v-if="data.membership == 'Sliver'">{{ data.membership }}</span>
                      <span class="badge bg-secondary" v-if="data.membership == 'Basic'">{{ data.membership }}</span>
                    </td>
                    <td class="email_id">{{ data.email }}</td>
                    <td class="phone">{{ data.phone }}</td>
                    <td class="date">{{ data.create_date }}</td>
                    <td class="tags">
                      <div class="d-flex gap-1">
                        <span class="badge bg-light text-body" v-for="(data, index) of data.tags" :key="index">{{ data
                        }}</span>
                      </div>
                    </td>
                    <td>
                      <BDropdown variant="link"
                        toggle-class="btn btn-icon btn-subtle-secondary btn-sm dropdown-btn arrow-none"
                        menu-class="dropdown-menu-end">
                        <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                        <BDropdownItem href="/customers/overview">Overview</BDropdownItem>
                        <BDropdownItem @click="editDetails(data)">Edit</BDropdownItem>
                        <BDropdownItem @click="deleteModalToggle(data)">Delete</BDropdownItem>
                      </BDropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="noresult" v-if="resultQuery.length < 1">
              <div class="text-center py-4">
                <div class="avatar-md mx-auto mb-4">
                  <div class="avatar-title bg-light text-primary rounded-circle fs-4xl">
                    <i class="bi bi-search"></i>
                  </div>
                </div>
                <h5 class="mt-2">Sorry! No Result Found</h5>
                <p class="text-muted mb-0">We've searched more than 150+ customers We did not find any customers for you
                  search.</p>
              </div>
            </div>
            <BRow class="mt-3 align-items-center" id="pagination-element" v-if="resultQuery.length >= 1">
              <BCol cols="sm">
                <div class="text-muted text-center text-sm-start">
                  Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span class="fw-semibold">{{
                    customerList.length }}</span> Results
                </div>
              </BCol>

              <BCol sm="auto" class="mt-3 mt-sm-0">
                <div class="pagination-wrap hstack gap-2 justify-content-center" v-if="!searchQuery && pages.length > 1">
                  <BLink class="page-item pagination-prev disabled" href="javascript:void(0)" :disabled="page <= 1"
                    @click="page--">Previous</BLink>
                  <ul class="pagination listjs-pagination mb-0">
                    <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                      v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                      <BLink class="page" href="#">{{ pageNumber }}</BLink>
                    </li>
                  </ul>
                  <BLink class="page-item pagination-next" href="javascript:void(0)" :disabled="page >= pages.length"
                    @click="page++">Next</BLink>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>

  <!-- customer modal -->
  <BModal v-model="customerModal" id="showModal" hide-footer :title="dataEdit ? 'Edit Customer' : 'Add Customer'"
    header-class="bg-soft-info p-3" content-class="border-0" centered>
    <BForm action="#" id="addform" class="tablelist-form" autocomplete="off">
      <input type="hidden" id="id-field" />
      <BRow class="g-3 mb-3">
        <BCol lg="12">
          <div class="text-center">
            <div class="position-relative d-inline-block">
              <div class="position-absolute  bottom-0 end-0">
                <label for="customer-image-input" class="mb-0" data-bs-toggle="tooltip" data-bs-placement="right"
                  aria-label="Select Image" data-bs-original-title="Select Image">
                  <div class="avatar-xs cursor-pointer">
                    <div class="avatar-title bg-light border rounded-circle text-muted">
                      <i class="ri-image-fill"></i>
                    </div>
                  </div>
                </label>
                <input class="form-control d-none" value="" id="customer-image-input" type="file"
                  accept="image/png, image/gif, image/jpeg" @change="handleCustomerImage">
              </div>
              <div class="avatar-lg p-1">
                <div class="avatar-title bg-light rounded-circle">
                  <img :src="event.img || require('@/assets/images/users/user-dummy-img.jpg')" id="customer-img"
                    class="avatar-md rounded-circle object-cover">
                </div>
              </div>
            </div>
          </div>
          <div>
            <label for="customername-field" class="form-label">Name</label>
            <input type="text" id="customername-field" class="form-control" placeholder="Enter name" v-model="event.name"
              :class="{ 'is-invalid': submitted && !event.name }">
            <div class="invalid-feedback">Please enter name.</div>
          </div>
        </BCol>
        <BCol lg="12">
          <div>
            <label for="company_name-field" class="form-label">Company Name</label>
            <input type="text" id="company_name-field" class="form-control" placeholder="Enter company name"
              v-model="event.company_name" :class="{ 'is-invalid': submitted && !event.company_name }">
            <div class="invalid-feedback">Please enter a company name.</div>
          </div>
        </BCol>
        <BCol lg="12">
          <div>
            <label for="membership-field" class="form-label">Membership</label>
            <Multiselect :close-on-select="true" :searchable="true" :create-option="false"
              :options="[{ value: 'Basic', label: 'Basic' }, { value: 'Sliver', label: 'Sliver' }, { value: 'Golden', label: 'Golden' }]"
              v-model="event.membership" :class="{ 'is-invalid': submitted && !event.membership }" />
            <div class="invalid-feedback">Please select a membership.</div>
          </div>
        </BCol>
        <BCol lg="12">
          <div>
            <label for="email_id-field" class="form-label">Email ID</label>
            <input type="text" id="email_id-field" class="form-control" placeholder="Enter email" v-model="event.email"
              :class="{ 'is-invalid': submitted && !event.email }">
            <div class="invalid-feedback">Please enter an email.</div>
          </div>
        </BCol>
        <BCol lg="12">
          <div>
            <label for="phone-field" class="form-label">Phone</label>
            <input type="text" id="phone-field" class="form-control" placeholder="Enter phone no" v-model="event.phone"
              :class="{ 'is-invalid': submitted && !event.phone }">
            <div class="invalid-feedback">Please enter an phone.</div>
          </div>
        </BCol>
        <BCol lg="12">
          <div>
            <label for="taginput-choices" class="form-label font-size-13 text-muted">Tags</label>
            <Multiselect mode="tags" :close-on-select="true" :searchable="true" :create-option="false"
              :options="[{ value: 'Design', label: 'Design' }, { value: 'Designer', label: 'Designer' }, { value: 'Exiting', label: 'Exiting' }, { value: 'Lead', label: 'Lead' }, { value: 'Partner', label: 'Partner' }, { value: 'Long Tern', label: 'Long Tern' },]"
              v-model="event.tags" :class="{ 'is-invalid': submitted && !event.tags }" />
            <div class="invalid-feedback">Please select a tags.</div>
          </div>
        </BCol>
      </BRow>
      <div class="hstack gap-2 justify-content-end">
        <BButton type="button" id="closemodal" variant="light" @click="customerModal = false">
          Close
        </BButton>
        <BButton type="button" variant="success" @click="handleSubmit">
          {{ dataEdit ? 'Update' : 'Add Customer' }}
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