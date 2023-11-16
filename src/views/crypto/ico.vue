<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import RightBar from "@/components/right-bar.vue";

import { icoList } from "@/common/data";

export default {
  data() {
    return {
      page: 1,
      perPage: 16,
      pages: [],
      icoList: icoList
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.icoList);
    },
  },
  watch: {
    icoList() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.icoList.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }

      if (this.pages.length < this.page) {
        this.page = this.pages.length;
      }
    },
    paginate(icoList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return icoList.slice(from, to);
    }
  },
  components: {
    Layout,
    PageHeader,
    RightBar,
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center gy-3">
        <BCol cols="md">
          <PageHeader title="ICO Listing" pagetitle="Crypto" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow id="ico-list">
      <BCol xl="3" lg="4" sm="6" v-for="(data, index) of displayedPosts" :key="index">
        <BCard no-body>
          <BCardBody>
            <div class="d-flex gap-2 mb-4"> <img :src="data.logoImg" alt="" class="avatar-xs">
              <div class="flex-grow-1"> 
                <router-link to="/crypto/coin-overview" class="stretched-link">
                  <h6 class="fs-md mb-1">{{ data.name }}</h6>
                </router-link>
                <p class="text-muted mb-0">{{ data.category }}</p>
              </div>
              <div>
                <span class="badge bg-success-subtle text-success" v-if="data.status === 'Active'">{{ data.status
                }}</span>
                <span class="badge bg-warning-subtle text-warning" v-if="data.status === 'Upcoming'">{{ data.status
                }}</span>
                <span class="badge bg-danger-subtle text-danger" v-if="data.status === 'Ended'">{{ data.status }}</span>
              </div>
            </div>
            <div class="d-flex gap-2">
              <div class="flex-grow-1">
                <p class="text-muted fw-semibold fs-md mb-1" v-if="data.current"> <span
                    class="text-primary">{{ data.current }}</span>/ {{ data.price }}</p>
                <p class="text-muted fw-semibold fs-md mb-1" v-if="!data.current"> {{ data.price }}</p>
                <p class="text-muted mb-0">Token</p>
              </div>
              <div class="flex-shrink-0 text-end">
                <p class="text-primary fw-semibold fs-md mb-1">{{ data.percentage }}</p>
                <p class="text-muted mb-0">{{ data.days }}</p>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow class="mb-4 align-items-center" id="pagination-element">
      <BCol cols="sm">
        <div class="text-muted text-center text-sm-start">
          Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span class="fw-semibold">{{ icoList.length }}</span> Results
        </div>
      </BCol>

      <BCol sm="auto" class="mt-3 mt-sm-0">
        <div
          class="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0" v-if="pages.length > 1">
          <div class="page-item">
            <BLink href="javascript:void(0);" class="page-link" id="page-prev" :disabled="page <= 1" @click="page--">Previous</BLink>
          </div>
          <span id="page-num" class="pagination">
            <div class="page-item" :class="{ active: pageNumber == page, disabled: pageNumber == '...', }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
              <BLink class="page-link clickPageNumber" href="javascript:void(0);">{{ pageNumber }}</BLink>
            </div>
          </span>
          <div class="page-item">
            <BLink href="javascript:void(0);" class="page-link" id="page-next" :disabled="page >= pages.length" @click="page++">Next</BLink>
          </div>
        </div>
      </BCol>
  </BRow>
</Layout></template>