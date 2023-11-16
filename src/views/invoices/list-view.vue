<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import RightBar from "@/components/right-bar.vue";

import { CountTo } from 'vue3-count-to';

import { invoicesList } from "@/common/data";

export default {
  data() {
    return {
      page: 1,
      perPage: 10,
      pages: [],
      searchQuery: null,
      invoicesList: invoicesList,

      // 
      deleteModal: false,
      event: {
        id: "",
      },
      // 
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.invoicesList);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.invoicesList.filter((data) => {
          return (
            data.customer.toLowerCase().includes(search) ||
            data.status.toLowerCase().includes(search)
          );
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    invoicesList() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.invoicesList.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }

      if (this.pages.length < this.page) {
        this.page = this.pages.length;
      }
    },

    paginate(invoicesList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return invoicesList.slice(from, to);
    },

    // 
    deleteModalToggle(data) {
      this.deleteModal = true;
      this.event.id = data.invoice_no;
    },

    deleteData() {
      if (this.event.id) {
        this.invoicesList = this.invoicesList.filter((item) => {
          return item.invoice_no != this.event.id;
        });
        this.deleteModal = false;
      }
    },
    //

    // Table Sort
    onSort(column) {
      this.direction = this.direction === 'asc' ? 'desc' : 'asc';
      const sortedArray = [...this.invoicesList];
      sortedArray.sort((a, b) => {
        const res = a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
        return this.direction === 'asc' ? res : -res;
      });
      this.invoicesList = sortedArray;
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

    deleteMultiple() {
      document.querySelectorAll("[name='chk_child']").forEach((data) => {
        if (data.checked) {
          this.invoicesList = this.invoicesList.filter((item) => {
            return item.invoice_no != data.value.slice(4);
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
    Layout,
    PageHeader,
    RightBar,
    CountTo
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center gy-3">
        <BCol cols="md">
          <PageHeader title="Invoice List" pagetitle="Invoice" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <div class="d-flex flex-wrap gap-2">
            <router-link to="/invoices/create" class="btn btn-secondary"><i
                class="bi bi-plus-circle align-baseline me-1"></i>
              Add Invoice
            </router-link>
            <RightBar />
          </div>
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol xl="12">
        <BCard no-body>
          <BRow class="g-0 g-sm-4">
            <BCol lg="3" sm="6" class="border-bottom border-bottom-md-0 border-end-sm">
              <BCardBody>
                <div class="d-flex align-items-center gap-2 mb-4">
                  <div class="avatar-xs flex-shrink-0">
                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                      <i class="bi bi-file-earmark-text"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-0">Total Invoices</p>
                  </div>
                </div>
                <h3 class="mb-0">
                  <count-to :startVal="0" :duration="5000" :endVal="8956"></count-to>
                  <small class="text-success fs-xs fw-normal ms-2"> <i class="bi bi-arrow-up align-baseline"></i>
                    12.09%</small>
                </h3>
              </BCardBody>
            </BCol>
            <BCol lg="3" sm="6" class="border-bottom border-bottom-md-0 border-end-lg">
              <BCardBody>
                <div class="d-flex align-items-center gap-2 mb-4">
                  <div class="avatar-xs flex-shrink-0">
                    <div class="avatar-title bg-success-subtle text-success rounded-circle">
                      <i class="bi bi-patch-check"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-0">Paid Invoices</p>
                  </div>
                </div>
                <h3 class="mb-0">
                  <count-to :startVal="0" :duration="5000" :endVal="4519"></count-to>
                  <small class="text-success fs-xs fw-normal ms-2"><i class="bi bi-arrow-up align-baseline"></i>
                    6.57%</small>
                </h3>
              </BCardBody>
            </BCol>
            <BCol lg="3" sm="6" class="border-bottom border-bottom-md-0 border-end-sm">
              <BCardBody>
                <div class="d-flex align-items-center gap-2 mb-4">
                  <div class="avatar-xs flex-shrink-0">
                    <div class="avatar-title bg-warning-subtle text-warning rounded-circle">
                      <i class="bi bi-clock-history"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-0">Pending Invoices</p>
                  </div>
                </div>
                <h3 class="mb-0">
                  <count-to :startVal="0" :duration="5000" :endVal="2648"></count-to>
                  <small class="text-success fs-xs fw-normal ms-2"><i class="bi bi-arrow-up align-baseline"></i>
                    4.07%</small>
                </h3>
              </BCardBody>
            </BCol>
            <BCol lg="3" sm="6">
              <BCardBody>
                <div class="d-flex align-items-center gap-2 mb-4">
                  <div class="avatar-xs flex-shrink-0">
                    <div class="avatar-title bg-danger-subtle text-danger rounded-circle">
                      <i class="bi bi-file-earmark-text"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-0">Overdue Invoices</p>
                  </div>
                </div>
                <h3 class="mb-0">
                  <count-to :startVal="0" :duration="5000" :endVal="871"></count-to>
                  <small class="text-danger fs-xs fw-normal ms-2"><i class="bi bi-arrow-down align-baseline"></i>
                    3.49%</small>
                </h3>
              </BCardBody>
            </BCol>
          </BRow>
        </BCard>
      </BCol>
    </BRow>

    <BRow id="invoiceList">
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BRow class="align-items-center g-3 g-lg-2">
              <BCol lg="3" class="me-auto">
                <BCardTitle tag="h6" class="mb-0">Invoices List</BCardTitle>
              </BCol>
              <BCol xl="3" md="3">
                <div class="search-box">
                  <input type="text" class="form-control search"
                    placeholder="Search for invoice, date, client or something..." v-model="searchQuery">
                  <i class="ri-search-line search-icon"></i>
                </div>
              </BCol>
              <BCol md="auto">
                <button class="btn btn-subtle-danger d-none" id="remove-actions" @click="deleteMultiple"><i
                    class="ri-delete-bin-2-line"></i></button>
              </BCol>
            </BRow>
          </BCardHeader>
          <BCardBody>
            <div class="table-responsive table-card">
              <table class="table table-centered align-middle table-custom-effect table-nowrap mb-0">
                <thead class="table-light">
                  <tr>
                    <th>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkAll" @change="(e) => checkAll(e)">
                        <label class="form-check-label" for="checkAll"></label>
                      </div>
                    </th>
                    <th scope="col" class="sort cursor-pointer" data-sort="invoice_id" @click="onSort('invoice_no')">ID
                    </th>
                    <th scope="col" class="sort cursor-pointer" data-sort="customer_name" @click="onSort('customer')">
                      Customer Name</th>
                    <th scope="col" class="sort cursor-pointer" data-sort="email" @click="onSort('email')">Email</th>
                    <th scope="col" class="sort cursor-pointer" data-sort="create_date" @click="onSort('createDate')">
                      Create Date</th>
                    <th scope="col" class="sort cursor-pointer" data-sort="due_date" @click="onSort('dueDate')">Due Date
                    </th>
                    <th scope="col" class="sort cursor-pointer" data-sort="amount" @click="onSort('invoice_amount')">
                      Amount</th>
                    <th scope="col" class="sort cursor-pointer" data-sort="status" @click="onSort('status')">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody class="list form-check-all" id="invoice-list-data">

                  <tr v-for="(data, index) of resultQuery" :key="index">
                    <td>
                      <div class="form-check"> <input class="form-check-input" type="checkbox" name="chk_child"
                          :value="'#TBS' + data.invoice_no" @change="(e) => checkedCheckbox(e)"> <label
                          class="form-check-label"></label> </div>
                    </td>
                    <td class="invoice_id"><router-link to="/invoices/overview">#TBS{{ data.invoice_no }}</router-link>
                    </td>
                    <td class="customer_name">{{ data.customer }}</td>
                    <td class="email">{{ data.email }}</td>
                    <td class="create_date">{{ data.createDate }}</td>
                    <td class="due_date">{{ data.dueDate }}</td>
                    <td class="amount">${{ data.invoice_amount }}</td>
                    <td class="status">
                      <span class="badge bg-success-subtle text-success" v-if="data.status == 'Paid'">{{ data.status
                      }}</span>
                      <span class="badge bg-warning-subtle text-warning" v-if="data.status == 'Pending'">{{ data.status
                      }}</span>
                      <span class="badge bg-danger-subtle text-danger" v-if="data.status == 'Unpaid'">{{ data.status
                      }}</span>
                      <span class="badge bg-danger-subtle text-danger" v-if="data.status == 'Refund'">{{ data.status
                      }}</span>
                    </td>
                    <td>
                      <ul class="d-flex gap-2 list-unstyled mb-0">
                        <li> <router-link to="/invoices/overview" class="btn btn-subtle-primary btn-icon btn-sm"><i
                              class="ph-eye"></i></router-link> </li>
                        <li> <router-link to="/invoices/create" class="btn btn-subtle-secondary btn-icon btn-sm"><i
                              class="ph-pencil"></i></router-link> </li>
                        <li> <router-link to="#" @click="deleteModalToggle(data)"
                            class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"><i
                              class="ph-trash"></i></router-link>
                        </li>
                      </ul>
                    </td>
                  </tr>

                </tbody>
              </table>
              <div class="noresult" v-if="resultQuery.length < 1">
                <div class="text-center py-4">
                  <i class="ph-magnifying-glass fs-1 text-primary"></i>
                  <h5 class="mt-2">Sorry! No Result Found</h5>
                  <p class="text-muted mb-0">We've searched more than 6+ invoice We did not find any invoice for you
                    search.</p>
                </div>
              </div>
            </div>
            <BRow class="align-items-center mt-4 pt-0" id="pagination-element" v-if="resultQuery.length >= 1">
              <BCol cols="sm">
                <div class="text-muted text-center text-sm-start">
                  Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span class="fw-semibold">{{
                    invoicesList.length }}</span> Results
                </div>
              </BCol>
              <BCol sm="auto" class="mt-3 mt-sm-0">
                <div class="pagination-wrap hstack justify-content-center gap-2" v-if="!searchQuery && pages.length > 1">
                  <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                    Previous
                  </BLink>
                  <ul class="pagination listjs-pagination mb-0">
                    <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                      v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                      <BLink class="page" href="#">{{ pageNumber }}</BLink>
                    </li>
                  </ul>
                  <BLink class="page-item pagination-next" href="#" :disabled="page >= pages.length" @click="page++">
                    Next
                  </BLink>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

  </Layout>

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
</BModal></template>