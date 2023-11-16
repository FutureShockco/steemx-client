<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import RightBar from "@/components/right-bar.vue";
import CardHeader from "@/components/card-header.vue";
export default {
  data() {
    return {
    };
  },
  components: {
    Layout,
    PageHeader,
    RightBar,
    CardHeader
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Embed Video" pagetitle="Bootstrap UI" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Ratio Video 16:9" content="Wrap any embed in<code> iframe </code> tag, in a parent element, use
            <code>ratio-16x9</code> class to set aspect ratio 16:9." />
          <BCardBody>
            <div>
              <!-- 16:9 aspect ratio -->
              <div class="ratio ratio-16x9">
                <iframe class="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video"
                  allowfullscreen></iframe>
              </div>
            </div>
          </BCardBody>
        </BCard>

        <BCard no-body >
          <CardHeader title="Ratio Video 4:3" content="Use <code>ratio-4x3</code> class to set aspect ratio 4:3." />
          <BCardBody>
            <!-- 4:3 aspect ratio -->
            <div class="ratio ratio-4x3">
              <iframe class="rounded" src="https://www.youtube.com/embed/PHcgN1GTjdU" title="YouTube video"
                allowfullscreen></iframe>
            </div>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <CardHeader title="Custom Ratios" content="Use <code>--tb-aspect-ratio: 50%</code> to style element to set aspect ratio 2:1." />
          <BCardBody>
            <!-- 16:9 aspect ratio -->
            <div class="ratio" style="--tb-aspect-ratio: 50%;">
              <iframe class="rounded" src="https://www.youtube.com/embed/2RZQN_ko0iU" title="YouTube video"
                allowfullscreen></iframe>
            </div>
          </BCardBody>
        </BCard>

      </BCol>


      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Ratio Video 21:9" content="Use <code>ratio-21x9</code> class to set aspect ratio 21:9." />
          <BCardBody>
            <!-- 21:9 aspect ratio -->
            <div class="ratio ratio-21x9">
              <iframe class="rounded" src="https://www.youtube.com/embed/Z-fV2lGKnnU" title="YouTube video"
                allowfullscreen></iframe>
            </div>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <CardHeader title="Ratio Video 1:1" content="Use <code>ratio-1x1</code> class to set aspect ratio 1:1." />
        <BCardBody>
          <!-- 1:1 aspect ratio -->
          <div class="ratio ratio-1x1">
            <iframe class="rounded" src="https://www.youtube.com/embed/GfSZtaoc5bw" title="YouTube video"
              allowfullscreen></iframe>
          </div>
        </BCardBody>
      </BCard>
    </BCol>

  </BRow>
</Layout></template>