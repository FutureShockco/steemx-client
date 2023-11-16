<script>
import NavBar from "@/components/nav-bar";
import ImagePattern from "@/components/pattern.vue";
import FooterComponents from "@/components/footer";

export default {
    data() {
        return {
        };
    },
    mounted() {
        // document.querySelector("html").setAttribute('dir', 'rtl');
    },
    components: {
        NavBar,
        ImagePattern,
        FooterComponents,
    },
};
</script>

<template>
    <div id="layout-wrapper">
        <NavBar />
        <ImagePattern />
        <div class="main-content">
            <div class="page-content">
                <BContainer fluid>
                    <slot />
                </BContainer>
            </div>
            <FooterComponents />
        </div>
    </div>
</template>