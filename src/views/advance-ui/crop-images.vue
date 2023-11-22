<script>
import img1 from "../../assets/images/small/img-1.jpg";
import { Cropper, Preview } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

export default {
    data() {
        return {
            img1: img1,

            coordinates: {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
            },
            image: null,

            result: {
                coordinates: null,
                img1: null
            }
        };
    },
    methods: {
        crop() {
            const { coordinates, canvas, } = this.$refs.cropper.getResult();
            this.coordinates = coordinates;
            this.image = canvas.toDataURL();
        },

        onChange({ coordinates, image }) {
            this.result = {
                coordinates,
                image
            };
        },
    },
    components: {
        Cropper,
        Preview,
    },
};
</script>

<template>
    <Layout>
        <div class="page-title-box">
            <BRow class="align-items-center">
                <BCol md="5">
                    <PageHeader title="Crop Images" pagetitle="Advance UI" />
                </BCol>
                <BCol md="auto" class="ms-auto">
                    <RightBar />
                </BCol>
            </BRow>
        </div>
        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Cropper with a range of aspect ratio</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div>
                            <cropper :src="img1" />
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Crop a round image</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div class="crop-rounded">
                            <cropper :src="img1" ref="cropper" :stencil-props="{ aspectRatio: 6 / 9 }" />
                            <h5 class="fs-lg mt-4">Crop Images Result</h5>
                            <button type="button" class="btn btn-primary" id="cropButtonResult" @click="crop"> Crop
                            </button>
                            <div id="resultRoundImages"></div>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle tag="h6" class="mb-0">Customize preview for Cropper</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="g-3">
                            <BCol cols="5">
                                <cropper :src="img1" @change="onChange" :debounce="false"
                                    :stencil-props="{ aspectRatio: 1 }" alt="Picture" class="img-fluid" />
                            </BCol>
                            <BCol cols="3">
                                <preview :width="325" :height="200" :image="result.image" :coordinates="result.coordinates"
                                    class="preview overflow-hidden" />
                            </BCol>
                            <BCol cols="2">
                                <preview :width="215" :height="150" :image="result.image" :coordinates="result.coordinates"
                                    class="preview overflow-hidden" />
                            </BCol>
                            <BCol cols="1">
                                <preview :width="150" :height="100" :image="result.image" :coordinates="result.coordinates"
                                    class="preview overflow-hidden" />
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>