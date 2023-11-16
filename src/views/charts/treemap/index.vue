<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header";
import RightBar from "@/components/right-bar.vue";

import {
    treemapChart,
    multiSeriesChart,
    distributedChart,
    colorRangeChart,
} from "./data";

export default {
    data() {
        return {
            treemapChart: treemapChart,
            multiSeriesChart: multiSeriesChart,
            distributedChart: distributedChart,
            colorRangeChart: colorRangeChart,

            title: "Treemap Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Treemap Charts",
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
                    <PageHeader title="Treemap Charts" pagetitle="Apexcharts" />
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
                        <BCardTitle class="mb-0">Basic Treemap Charts</BCardTitle>

                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="treemapChart.series"
                            :options="treemapChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Multi-Dimensional Treemap Chart</BCardTitle>

                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="multiSeriesChart.series"
                            :options="multiSeriesChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">
                            Distributed Treemap Chart (Different Color for each Cell)
                        </BCardTitle>

                    </BCardHeader>

                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="distributedChart.series"
                            :options="distributedChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Treemap Chart with Color Ranges</BCardTitle>

                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="colorRangeChart.series"
                            :options="colorRangeChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>