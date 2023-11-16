<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import RightBar from "@/components/right-bar.vue";

import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

export default {
  data() {
    return {
      simpleValue: 10,
      sliderCustomzie: 300,
      sliderWithLabel: {
        value: 45,
        data: [15, 30, 45, 60, 75, 90, 120],
        range: [{
          label: "15 mins",
        },
        {
          label: "30 mins",
          isHide: true,
        },
        {
          label: "45 mins",
        },
        {
          label: "1 hr",
          isHide: true,
        },
        {
          label: "1 hr 15 mins",
        },
        {
          label: "1 hr 30 mins",
          isHide: true,
        },
        {
          label: "2 hrs",
        },
        ],
        rangeValue: {},
      },
      value: [20, 30, 40],
      merge: 10,
      format: {
        prefix: "$",
        decimals: 2,
      },
      loader: null,
      loadingValue: 0,
      customStyle: 50,
      stepData: 10,
      rtlvalue: 50,
      orientation: "vertical",
      direction: "rtl",
    };
  },
  methods: {
    // Range and label slider set range
    callbackRange(val) {
      this.sliderWithLabel.rangeValue = val;
    },

    // Loading slider
    startLoad() {
      this.loader = setInterval(() => {
        this.loadingValue++;
        if (this.loadingValue === 100) {
          clearInterval(this.loader);
        }
      }, 100);
    },
  },
  components: {
    Layout,
    PageHeader,
    RightBar,
    Slider
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Range Slider" pagetitle="Forms" />
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
            <BCardTitle class="mb-0">Bootstrap Range</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <div>
              <div>
                <h5 class="fs-md">Default Range</h5>
                <p class="text-muted">Use <code>type="range"</code> attribute and <code>form-range</code> class to create
                  a default range.</p>
                <!-- Default Range -->
                <input type="range" class="form-range" id="customRange1">
              </div>

              <div class="mt-4">
                <h5 class="fs-md">Disabled</h5>
                <p class="text-muted">Use <code>disabled</code> attribute on an input to give it a grayed out appearance
                  and remove pointer events.</p>

                <!-- Disabled Range -->
                <input type="range" class="form-range" id="disabledRange" disabled>
              </div>

              <div class="mt-4">
                <h5 class="fs-md">Min and Max</h5>
                <p class="text-muted">Use <code>min</code> and <code>max</code> attribute with specified range input
                  respectively.</p>

                <!-- Min and Max -->
                <input type="range" class="form-range" min="0" max="5" id="customRange2">
              </div>

              <div class="mt-4">
                <h5 class="fs-md">Steps</h5>
                <p class="text-muted">By default, range inputs “snap” to integer values. To change this, you can specify a
                  step value. In the example below, we double the number of steps by using <code>step="0.5"</code>
                  attribute.</p>

                <!-- Steps -->
                <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
              </div>
            </div>
          </BCardBody>
          
        </BCard>
        
      </BCol> 
    </BRow>
    
    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Range slider</BCardTitle>
            <p class="card-title-desc">
              Cool, comfortable, responsive and easily customizable range slider
            </p>
            <BRow>
              <BCol md="6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-5 mt-0">Default</h5>
                  <div class="p-3">
                    <Slider class="form-range" v-model="simpleValue" />
                  </div>
                </div>
              </BCol>
              <BCol md="6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-5 mt-0">Min-Max</h5>
                  <div class="p-3">
                    <Slider v-model="sliderCustomzie" :min="100" :max="500" />
                  </div>
                </div>
              </BCol>
            </BRow>
            <BRow>
              <BCol md="6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-5 mt-0">Range and Label</h5>
                  <div class="p-3">
                    <Slider v-model="sliderWithLabel.value" :data="sliderWithLabel.data" :range="sliderWithLabel.range"
                      @callbackRange="callbackRange" />
                  </div>
                </div>
              </BCol>
              <BCol md="6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-5 mt-0">Loading</h5>
                  <div class="p-3">
                    <Slider v-model="loadingValue" :is-disabled="true" class="slider-red" />
                    <br />
                    <BButton size="sm" variant="light" @click="startLoad">Start</BButton>
                  </div>
                </div>
              </BCol>
            </BRow>
            <BRow>
              <BCol md="6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-4 mt-0">Rtl</h5>
                  <div class="p-3">
                    <Slider v-model="rtlvalue" :direction="direction" :orientation="orientation" />
                  </div>
                </div>
              </BCol>
              <BCol md="6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-5 mt-0">Format</h5>
                  <div class="p-3">
                    <Slider v-model="value" :merge="merge" :format="format" />
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

  </Layout>
</template>