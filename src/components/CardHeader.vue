<script>
import * as Prism from 'prismjs';

export default {
    props: {
        title: {
            type: String,
            default: "",
        },
        content: {
            type: String,
            default: "",
        },
    },
    mounted() {
        Prism.highlightAll();

        const navpillsbtn = document.getElementsByClassName("code-menu");
        Array.from(navpillsbtn).forEach((checkbox) => {
            const navlinkbtn = checkbox.querySelectorAll(".nav-link");
            navlinkbtn.forEach((item) => {
                item.addEventListener("click", () => {
                    const nav = item.closest(".nav");
                    const tabs = item.closest(".card");
                    if (!item.classList.contains("active")) {
                        const navLink = nav.querySelectorAll(".nav-link");
                        navLink.forEach((item) => item.classList.remove("active"));
                        const tabPane = tabs.querySelectorAll(".tab-pane");
                        item.classList.add("active");
                        tabPane.forEach((item) => {
                            if (item.classList.contains("active", "show")) {
                                item.classList.remove("active", "show");
                            } else {
                                item.classList.add("active", "show");
                            }
                        });
                    }
                });

            });
        });
    },
};
</script>

<template>
    <BCardHeader class="d-md-flex gap-3">
        <div class="flex-grow-1">
            <BCardTitle class="mb-1">{{ title }}</BCardTitle>
            <p class="text-muted mb-0" v-html="content"></p>
        </div>
        <div class="flex-shrink-0 mt-3 mt-md-0">
            <div class="nav nav-pills code-menu bg-light p-1 rounded">
                <button class="nav-link active" id="preview-tab" type="button">Preview</button>
                <button class="nav-link" id="code-tab" type="button">HTML</button>
            </div>
        </div>
    </BCardHeader>
</template>
