<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header";
import RightBar from "@/components/right-bar.vue";

import { basicCandlestickChart, comboCandlestickBrushChart, comboCandlestickChart, categoryXaxisChart, candlestickLineChart } from "./data";

export default {
    data() {
        return {
            basicCandlestickChart: basicCandlestickChart,
            comboCandlestickBrushChart: comboCandlestickBrushChart,
            comboCandlestickChart: comboCandlestickChart,
            categoryXaxisChart: categoryXaxisChart,
            candlestickLineChart: candlestickLineChart,
            title: "Candlestick Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Candlestick Charts",
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
                    <PageHeader title="Candlestick Charts" pagetitle="Apexcharts" />
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
                  <BCardTitle class="mb-0">Basic Candlestick Chart</BCardTitle>
                </BCardHeader>
                <BCardBody>
                  <apexchart class="apex-charts" height="350" dir="ltr" :series="basicCandlestickChart.series" :options="basicCandlestickChart.chartOptions"></apexchart>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol xl="6">
              <BCard no-body>
                <BCardHeader>
                  <BCardTitle class="mb-0">Candlestick Synced with Brush Chart (Combo)</BCardTitle>
                </BCardHeader>
                <BCardBody>
                  <apexchart class="apex-charts" height="200" dir="ltr" :series="comboCandlestickBrushChart.series" :options="comboCandlestickBrushChart.chartOptions"></apexchart>
                  <apexchart class="apex-charts" height="150" dir="ltr" :series="comboCandlestickChart.series" :options="comboCandlestickChart.chartOptions"></apexchart>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
      
          <BRow>
            <BCol xl="6">
              <BCard no-body>
                <BCardHeader>
                  <BCardTitle class="mb-0">Category X-Axis</BCardTitle>
                </BCardHeader>
                <BCardBody>
                  <apexchart class="apex-charts" height="350" dir="ltr" :series="categoryXaxisChart.series" :options="categoryXaxisChart.chartOptions"></apexchart>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol xl="6">
              <BCard no-body>
                <BCardHeader>
                  <BCardTitle class="mb-0">Candlestick with line</BCardTitle>
                </BCardHeader>
                <BCardBody>
                  <apexchart class="apex-charts" height="350" dir="ltr" :series="candlestickLineChart.series" :options="candlestickLineChart.chartOptions"></apexchart>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
    </Layout>
</template>