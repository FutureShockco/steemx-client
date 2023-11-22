<script>




import { basicScatterChart, dateTimeScatterChart, scatterImagesChart, } from "./data";

export default {
    data() {
        return {
            basicScatterChart: basicScatterChart,
            dateTimeScatterChart: dateTimeScatterChart,
            scatterImagesChart: scatterImagesChart,
            title: "Scatter Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Scatter Charts",
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
                    <PageHeader title="Scatter Charts" pagetitle="Apexcharts" />
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
                        <BCardTitle class="mb-0">Basic Scatter Chart</BCardTitle>

                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicScatterChart.series"
                            :options="basicScatterChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Scatter - Datetime Chart</BCardTitle>

                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="dateTimeScatterChart.series"
                            :options="dateTimeScatterChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Scatter Images Chart</BCardTitle>

                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="scatterImagesChart.series"
                            :options="scatterImagesChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>