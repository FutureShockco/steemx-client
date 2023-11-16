<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import RightBar from "@/components/right-bar.vue";
import Basic from "./basic.vue";
import Mapline from "./mapline.vue";
import Pacific from "./pacific.vue"

/**
 * amcharts-map component
 */
export default {
  components: {
    Layout,
    PageHeader,
    RightBar,
    Basic,
    Mapline,
    Pacific
  },
  data() {
    return {
    };
  }
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Maps" pagetitle="Amcharts Maps" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Vector With Point</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <Basic />
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Line With Point</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <Mapline />
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Pacific Map</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <Pacific />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>