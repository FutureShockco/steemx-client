<script>



import { bootstrapIcons } from "../../common/data";

export default {
    data() {
        return {
            icons: bootstrapIcons,
            title: "Bootstrap",
            items: [
                {
                    text: "Icons",
                    href: "/",
                },
                {
                    text: "Bootstrap",
                    active: true,
                },
            ],
        };
    },
    mounted() {
        this.loadIconList();
    },
    methods: {
        loadIconList() {
            let allIcons = '';
            for (const icon of Object.keys(this.icons)) {
                allIcons += `<div class="col-xl-3 col-lg-4 col-sm-6"> <i class="bi bi-${icon}"></i> ${icon} </div>`;
            }
            // Use Vue's ref to access the target element
            document.getElementById("iconList").innerHTML = allIcons;
        }
    },

};
</script>

<template>
    <Layout>
        <div class="page-title-box">
            <BRow class="align-items-center">
                <BCol md="5">
                    <PageHeader title="Bootstrap" pagetitle="Icons" />
                </BCol>
                <BCol md="auto" class="ms-auto">
                    <RightBar />
                </BCol>
            </BRow>
        </div>
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle>Examples</BCardTitle>
                        <p class="text-muted mb-0">Use <code>&lt;i class="bi bi-**">&lt;/i></code> class.</p>
                    </BCardHeader>
                    <BCardBody class="pt-0">
                        <BRow class="icon-demo-content" id="iconList"></BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>