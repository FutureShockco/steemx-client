<script>




import { basicPolarareaChart, polarAreaMonochromeChart } from "./data";

export default {
    data() {
        return {
            basicPolarareaChart: basicPolarareaChart,
            polarAreaMonochromeChart: polarAreaMonochromeChart,
            title: "Polararea Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Polararea Charts",
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
                    <PageHeader title="Polararea Charts" pagetitle="Apexcharts" />
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
                        <BCardTitle class="mb-0">Basic Polararea Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="320" dir="ltr" :series="basicPolarareaChart.series"
                            :options="basicPolarareaChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">PolarArea Monochrome</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="320" dir="ltr" :series="polarAreaMonochromeChart.series"
                            :options="polarAreaMonochromeChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>