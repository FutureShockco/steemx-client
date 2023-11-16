<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header";
import RightBar from "@/components/right-bar.vue";

import { mixedLineChart, yAxisChart, lineAreaChart, lineColumnAreaChart } from "./data";

export default {
    data() {
        return {
            mixedLineChart: mixedLineChart,
            yAxisChart: yAxisChart,
            lineAreaChart: lineAreaChart,
            lineColumnAreaChart: lineColumnAreaChart,
            title: "Mixed Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Mixed Charts",
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
                    <PageHeader title="Mixed Charts" pagetitle="Apexcharts" />
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
                        <BCardTitle class="mb-0">Line & Column Charts</BCardTitle>

                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="mixedLineChart.series"
                            :options="mixedLineChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Multiple Y-Axis Charts</BCardTitle>

                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="yAxisChart.series"
                            :options="yAxisChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Line & Area Charts</BCardTitle>

                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="lineAreaChart.series"
                            :options="lineAreaChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Line, Column & Area Charts</BCardTitle>

                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="lineColumnAreaChart.series"
                            :options="lineColumnAreaChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
    </BRow>
</Layout></template>