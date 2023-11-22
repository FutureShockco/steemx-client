<script>

export default {
    data() {
        return {
        };
    },
    mounted() {
        // document.querySelector("html").setAttribute('dir', 'rtl');
    }
};
</script>

<template>
    <div id="layout-wrapper">
        <NavBar />
        <div class="main-content">
            <div class="page-content">
                <BContainer fluid>
                    <slot />
                </BContainer>
            </div>
            <Footer />
        </div>
    </div>
</template>