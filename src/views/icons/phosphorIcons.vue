<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header";
import RightBar from "@/components/right-bar.vue";
import { phosphorIcons } from "../../common/data";

export default {
  data() {
    return {
      icons: phosphorIcons,
      title: "Phosphor",
      items: [
        {
          text: "Icons",
          href: "/",
        },
        {
          text: "Phosphor",
          active: true,
        },
      ],
    };
  },
  mounted() {
    this.loadIconList();
  },
  methods: {
    loadIconList() {
      let icons = '';
      for (const data of Object.keys(this.icons)) {
        icons += `<div class="col-xl-3 col-lg-4 col-sm-6"> <i class="${data}"></i> ${data} </div>`;
      }
        document.getElementById("iconList").innerHTML = icons;
    },

    iconChange(event) {
      const keys = Object.keys(this.icons);
      const selectvalue = event.target.value;
      const filterData = selectvalue ? keys.filter(function (productlist) {
        return productlist.split("-").slice(-1).pop() === selectvalue;
      }) : keys;
      this.loadIconList(filterData);
    }
  },
  components: {
    Layout,
    PageHeader,
    RightBar
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
          <BCol md="5">
              <PageHeader title="Phosphor" pagetitle="Icons" />
          </BCol>
          <BCol md="auto" class="ms-auto">
              <RightBar />
          </BCol>
      </BRow>
  </div>
    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardHeader>
            <div class="d-flex">
              <div class="flex-grow-1">
                <BCardTitle>Examples</BCardTitle>
                <p class="text-muted mb-0">Use <code>&lt;i class="ph-**">&lt;/i></code> class.</p>
              </div>
              <!-- <div class="flex-shrink-0">
                <select class="form-select" id="icon-select" aria-label="Default select example"
                  @change="(e) => iconChange(e)">
                  <option value="">All icons</option>
                  <option value="light">light</option>
                  <option value="thin">thin</option>
                  <option value="bold">bold</option>
                  <option value="fill">fill</option>
                </select>
              </div> -->
            </div>
          </BCardHeader>
          <BCardBody class="pt-0">
            <BRow class="icon-demo-content" id="iconList"></BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>