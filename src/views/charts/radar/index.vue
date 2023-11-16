<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header";
import RightBar from "@/components/right-bar.vue";

import { basicRadarChart, radarMultiseriesChart, polygonRadarChart } from "./data";

export default {
    data() {
        return {
            basicRadarChart: basicRadarChart,
            radarMultiseriesChart: radarMultiseriesChart,
            polygonRadarChart: polygonRadarChart,
            title: "Radar Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Radar Charts",
                    active: true,
                },
            ],
        };
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
                    <PageHeader title="Radar Charts" pagetitle="Apexcharts" />
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
                  <BCardTitle class="mb-0">Basic Radar Chart</BCardTitle>
                </BCardHeader>
                <BCardBody>
                  <apexchart class="apex-charts" height="350" dir="ltr" :series="basicRadarChart.series"
                    :options="basicRadarChart.chartOptions"></apexchart>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol xl="6">
              <BCard no-body>
                <BCardHeader>
                  <BCardTitle class="mb-0">Radar Chart - Multiple series</BCardTitle>
                </BCardHeader>
                <BCardBody>
                  <apexchart class="apex-charts" height="350" dir="ltr" :series="radarMultiseriesChart.series"
                    :options="radarMultiseriesChart.chartOptions"></apexchart>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
      
          <BRow>
            <BCol xl="6">
              <BCard no-body>
                <BCardHeader>
                  <BCardTitle class="mb-0">Radar Chart - Polygon Fill</BCardTitle>
                </BCardHeader>
                <BCardBody>
                  <apexchart class="apex-charts" height="350" dir="ltr" :series="polygonRadarChart.series"
                    :options="polygonRadarChart.chartOptions"></apexchart>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
    </Layout>
</template>