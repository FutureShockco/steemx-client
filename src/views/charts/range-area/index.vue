<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header";
import RightBar from "@/components/right-bar.vue";

import { basicRangeAreaChart, comboChart } from "./data";

/**
 * Mixed chart component
 */
export default {
  components: {
    Layout,
    PageHeader,
    RightBar
  },
  data() {
    return {
      basicRangeAreaChart: basicRangeAreaChart,
      comboChart: comboChart,
      title: "Range Area Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/",
        },
        {
          text: "Range Area Charts",
          active: true,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
            <BRow class="align-items-center">
                <BCol md="5">
                    <PageHeader title="Range Area" pagetitle="Apexcharts" />
                </BCol>
                <BCol md="auto" class="ms-auto">
                    <RightBar />
                </BCol>
            </BRow>
        </div>
    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Basic Range Area Chart</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="basicRangeAreaChart.series"
              :options="basicRangeAreaChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>


      <BCol xl="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Scatter - Datetime Chart</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <div>
              <apexchart class="apex-charts" height="350" dir="ltr" :series="comboChart.series"
              :options="comboChart.chartOptions"></apexchart>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>
  </Layout>
</template>