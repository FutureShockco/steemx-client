<script>




import { simpleBubbleChart, bubble3DChart } from "./data";

export default {
    data() {
        return {
            simpleBubbleChart: simpleBubbleChart,
            bubble3DChart: bubble3DChart,
            title: "Bubble Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Bubble Charts",
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
                    <PageHeader title="Bubble Charts" pagetitle="Apexcharts" />
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
                        <BCardTitle class="mb-0">Basic Bubble Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="simpleBubbleChart.series"
                            :options="simpleBubbleChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">3D Bubble Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="bubble3DChart.series"
                            :options="bubble3DChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>