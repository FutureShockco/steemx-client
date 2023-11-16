<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header";
import RightBar from "@/components/right-bar.vue";

import { boxChart, boxplotScatterChart, horizontalBoxplotChart } from "./data";

export default {
    data() {
        return {
            boxChart: boxChart,
            boxplotScatterChart: boxplotScatterChart,
            horizontalBoxplotChart: horizontalBoxplotChart,
            title: "Boxplot Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Boxplot Charts",
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
                    <PageHeader title="Boxplot Charts" pagetitle="Apexcharts" />
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
                        <BCardTitle class="mb-0">Basic Box Chart</BCardTitle>

                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="boxChart.series"
                            :options="boxChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Boxplot with Scatter Chart</BCardTitle>

                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="boxplotScatterChart.series" :options="boxplotScatterChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Horizontal BoxPlot</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="horizontalBoxplotChart.series" :options="horizontalBoxplotChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>