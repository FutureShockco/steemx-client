<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import RightBar from "@/components/right-bar.vue";
import CardHeader from "@/components/card-header.vue";

import { ref } from "vue";

export default {
  data() {
    return {
      ex3CurrentPage: ref(2),
      ex3Rows: ref(100),
      ex4CurrentPage: ref(2),
      ex4Rows: ref(100),
    };
  },
  components: {
    Layout,
    PageHeader,
    RightBar,
    CardHeader,
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="General" pagetitle="Bootstrap UI" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Popovers" content="Popovers example are available with following options , Directions are mirrored
          when using Bootstrap in RTL." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="popoversPreview" role="tabpanel" aria-labelledby="popoversPreview-tab"
              tabindex="0">
              <div class="hstack flex-wrap gap-2">

                <BButton variant="light" id="popover-button-top">
                  Popover on top
                </BButton>
                <BPopover target="popover-button-top" triggers="click" placement="top" title="Top Popover"
                  content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                </BPopover>
                <BButton variant="light" id="popover-button-right">
                  Popover on right
                </BButton>
                <BPopover target="popover-button-right" triggers="click" placement="right" title="Right Popover"
                  content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                </BPopover>
                <BButton variant="light" id="popover-button-bottom">
                  Popover on bottom
                </BButton>
                <BPopover target="popover-button-bottom" triggers="click" placement="bottom" title="Bottom Popover"
                  content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                </BPopover>
                <BButton variant="light" id="popover-button-left">
                  Popover on left
                </BButton>
                <BPopover target="popover-button-left" triggers="click" placement="left" title="Left Popover"
                  content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                </BPopover>
                <BButton variant="success" id="popover-button-variant" href="#" tabindex="0">Dismissible
                  popover
                </BButton>
                <BPopover target="popover-button-variant" variant="danger" triggers="click" placement="right"
                  title="Dismissible Popover" content=" And here some amazing content. Its very engaging. Right?">
                  And here some amazing content. Its very engaging. Right?
                </BPopover>

              </div>
            </div>
            <div class="tab-pane" id="popoversCode" role="tabpanel" aria-labelledby="popoversCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 250px;"><code>&lt;div class=&quot;hstack flex-wrap
                gap-2&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot; data-bs-container=&quot;body&quot;
                data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;top&quot; data-bs-content=&quot;Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus.&quot;&gt;
                Popover on top
                &lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot; data-bs-container=&quot;body&quot;
                data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;right&quot; data-bs-content=&quot;Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus.&quot;&gt;
                Popover on right
                &lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot; data-bs-container=&quot;body&quot;
                data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;bottom&quot; data-bs-content=&quot;Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus.&quot;&gt;
                Popover on bottom
                &lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot; data-bs-container=&quot;body&quot;
                data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;left&quot; data-bs-content=&quot;Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus.&quot;&gt;
                Popover on left
                &lt;/button&gt;
                &lt;button tabindex=&quot;0&quot; class=&quot;btn btn-success&quot; role=&quot;button&quot;
                data-bs-toggle=&quot;popover&quot; data-bs-trigger=&quot;focus&quot; title=&quot;Dismissible
                popover&quot; data-bs-content=&quot;And here's some amazing content. It's very engaging.
                Right?&quot;&gt;Dismissible popover&lt;/button&gt;
                &lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Tooltips" content="Tooltip example are available with following options, Directions are mirrored
          when using Bootstrap in RTL." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="tooltipsPreview" role="tabpanel" aria-labelledby="tooltipsPreview-tab"
              tabindex="0">
              <div class="hstack flex-wrap gap-2">
                <BButton variant="light" placement="top" v-b-tooltip="'Tooltip on top'"> Tooltip on top</BButton>
                <BButton variant="light" placement="right" v-b-tooltip.right="'Tooltip on right'"> Tooltip on right
                </BButton>
                <BButton variant="light" placement="bottom" v-b-tooltip.bottom="'Tooltip on bottom'"> Tooltip onbottom
                </BButton>
                <BButton variant="light" placement="left" v-b-tooltip.left="'Tooltip on left'"> Tooltip on left</BButton>
                <BButton type="button" class="btn btn-primary" variant="primary"
                  v-b-tooltip="'<em>Tooltip</em> <u>with</u> <b>HTML</b>'" data-bs-html="true"
                  title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
                  Tooltip with HTML
                </BButton>
              </div>
            </div>
            <div class="tab-pane" id="tooltipsCode" role="tabpanel" aria-labelledby="tooltipsCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 250px;"><code>&lt;!-- Tooltips --&gt;
                &lt;div class=&quot;hstack flex-wrap gap-2&quot;&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot; data-bs-toggle=&quot;tooltip&quot;
                data-bs-placement=&quot;top&quot; title=&quot;Tooltip on top&quot;&gt;
                Tooltip on top
                &lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot; data-bs-toggle=&quot;tooltip&quot;
                data-bs-placement=&quot;right&quot; title=&quot;Tooltip on right&quot;&gt;
                Tooltip on right
                &lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot; data-bs-toggle=&quot;tooltip&quot;
                data-bs-placement=&quot;bottom&quot; title=&quot;Tooltip on bottom&quot;&gt;
                Tooltip on bottom
                &lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot; data-bs-toggle=&quot;tooltip&quot;
                data-bs-placement=&quot;left&quot; title=&quot;Tooltip on left&quot;&gt;
                Tooltip on left
                &lt;/button&gt;
                &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; data-bs-toggle=&quot;tooltip&quot;
                data-bs-html=&quot;true&quot; title=&quot;&lt;em&gt;Tooltip&lt;/em&gt; &lt;u&gt;with&lt;/u&gt;
                &lt;b&gt;HTML&lt;/b&gt;&quot;&gt;
                Tooltip with HTML
                &lt;/button&gt;
                &lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>



    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Tooltips Custom Colors" content="Use the <code>data-bs-custom-class='*-tooltip' </code> attributes to make a
            custom tooltip colors." />
          <BCardBody class="tab-content custom-tooltip">
            <div class="tab-pane show active" id="tooltipsCustomColorsPreview" role="tabpanel"
              aria-labelledby="tooltipsCustomColorsPreview-tab" tabindex="0">
              <div class="hstack flex-wrap gap-2">

                <BButton type="button" variant="primary" v-b-tooltip="'Tooltip primary'" data-bs-toggle="tooltip" html
                  placement="top">

                  Primary Tooltip
                </BButton>
                <BButton type="button" variant="secondary" v-b-tooltip="'Tooltip secondary'" data-bs-toggle="tooltip" html
                  placement="top">
                  Secondary Tooltip
                </BButton>
                <BButton type="button" variant="success" v-b-tooltip="'Tooltip success'" data-bs-toggle="tooltip" html
                  placement="top">
                  Success Tooltip
                </BButton>

                <BButton type="button" variant="danger" v-b-tooltip="'Tooltip danger'" data-bs-toggle="tooltip" html

                  placement="top">
                  Danger Tooltip
                </BButton>
                <BButton type="button" variant="info" v-b-tooltip="'Tooltip info'" data-bs-toggle="tooltip" html
                  placement="top">
                  Info Tooltip
                </BButton>
                <BButton type="button" variant="warning" v-b-tooltip="'Tooltip warning'" data-bs-toggle="tooltip" html
                  placement="top">
                  Warning Tooltip
                </BButton>
                <BButton type="button" variant="dark" v-b-tooltip="'Tooltip dark'" data-bs-toggle="tooltip" html
                  placement="top">
                  Dark Tooltip
                </BButton>

              </div>
            </div>
            <div class="tab-pane" id="tooltipsCustomColorsCode" role="tabpanel"
              aria-labelledby="tooltipsCustomColorsCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 250px;"><code>&lt;button type=&quot;button&quot; class=&quot;btn
                btn-primary&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;primary-tooltip&quot;
                data-bs-placement=&quot;top&quot; title=&quot;Tooltip primary&quot;&gt;
                Primary Tooltip
                &lt;/button&gt;</code>
              <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot;
                data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;secondary-tooltip&quot;
                data-bs-placement=&quot;top&quot; title=&quot;Tooltip secondary&quot;&gt;
                Secondary Tooltip
                &lt;/button&gt;</code>
              <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success&quot;
                data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;success-tooltip&quot;
                data-bs-placement=&quot;top&quot; title=&quot;Tooltip success&quot;&gt;
                Success Tooltip
                &lt;/button&gt;</code>
              <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-danger&quot;
                data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;danger-tooltip&quot;
                data-bs-placement=&quot;top&quot; title=&quot;Tooltip danger&quot;&gt;
                Danger Tooltip
                &lt;/button&gt;</code>
              <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot; data-bs-toggle=&quot;tooltip&quot;
                data-bs-custom-class=&quot;info-tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Tooltip
                info&quot;&gt;
                Info Tooltip
                &lt;/button&gt;</code>
              <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-warning&quot;
                data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;warning-tooltip&quot;
                data-bs-placement=&quot;top&quot; title=&quot;Tooltip warning&quot;&gt;
                Warning Tooltip
                &lt;/button&gt;</code>
              <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot; data-bs-toggle=&quot;tooltip&quot;
                data-bs-custom-class=&quot;dark-tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Tooltip
                dark&quot;&gt;
                Dark Tooltip
                &lt;/button&gt;</code>
              <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;
                data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;primary-tooltip&quot;
                data-bs-placement=&quot;top&quot; title=&quot;Tooltip primary&quot;&gt;
                Primary Tooltip
                &lt;/button&gt;</code>
              <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot;
                data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;secondary-tooltip&quot;
                data-bs-placement=&quot;top&quot; title=&quot;Tooltip secondary&quot;&gt;
                Secondary Tooltip
                &lt;/button&gt;</code>
              <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success&quot;
                data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;success-tooltip&quot;
                data-bs-placement=&quot;top&quot; title=&quot;Tooltip success&quot;&gt;
                Success Tooltip
                &lt;/button&gt;</code>
              <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-danger&quot;
                data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;danger-tooltip&quot;
                data-bs-placement=&quot;top&quot; title=&quot;Tooltip danger&quot;&gt;
                Danger Tooltip
                &lt;/button&gt;</code>
              <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot; data-bs-toggle=&quot;tooltip&quot;
                data-bs-custom-class=&quot;info-tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Tooltip
                info&quot;&gt;
                Info Tooltip
                &lt;/button&gt;</code>
              <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-warning&quot;
                data-bs-toggle=&quot;tooltip&quot; data-bs-custom-class=&quot;warning-tooltip&quot;
                data-bs-placement=&quot;top&quot; title=&quot;Tooltip warning&quot;&gt;
                Warning Tooltip
                &lt;/button&gt;</code>
              <code>&lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot; data-bs-toggle=&quot;tooltip&quot;
                data-bs-custom-class=&quot;dark-tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Tooltip
                dark&quot;&gt;
                Dark Tooltip
                &lt;/button&gt;</code>
            </pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>



    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Breadcrumb" content="Indicate the current page’s location within a navigational hierarchy" />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="breaadcrumbPreview" role="tabpanel"
              aria-labelledby="breaadcrumbPreview-tab" tabindex="0">
              <div>
                <BBreadcrumb class="p-3 py-2 bg-light mb-3">
                  <BBreadcrumbItem href="#home"> Home </BBreadcrumbItem>
                </BBreadcrumb>

                <BBreadcrumb class="p-3 py-2 bg-light mb-3">
                  <BBreadcrumbItem href="#home"> Home </BBreadcrumbItem>
                  <BBreadcrumbItem href="#library"> Library </BBreadcrumbItem>
                </BBreadcrumb>

                <BBreadcrumb class="p-3 py-2 bg-light mb-3">
                  <BBreadcrumbItem href="#home"> Home </BBreadcrumbItem>
                  <BBreadcrumbItem href="#base-ui"> Base UI </BBreadcrumbItem>
                  <BBreadcrumbItem href="#general"> General </BBreadcrumbItem>
                </BBreadcrumb>

                <BBreadcrumb class="p-3 py-2 bg-light ">
                  <BBreadcrumbItem href="#home"> <i class="ri-home-5-fill"></i> </BBreadcrumbItem>
                  <BBreadcrumbItem href="#base-ui"> Base UI </BBreadcrumbItem>
                  <BBreadcrumbItem href="#general"> General </BBreadcrumbItem>
                </BBreadcrumb>

              </div>
            </div>
            <div class="tab-pane" id="breaadcrumbCode" role="tabpanel" aria-labelledby="breaadcrumbCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 250px;"><code>&lt;nav aria-label=&quot;breadcrumb&quot;&gt;
                &lt;ol class=&quot;breadcrumb&quot;&gt;
                &lt;li class=&quot;breadcrumb-item active&quot; aria-current=&quot;page&quot;&gt;Home&lt;/li&gt;
                &lt;/ol&gt;
                &lt;/nav&gt;

                &lt;nav aria-label=&quot;breadcrumb&quot;&gt;
                &lt;ol class=&quot;breadcrumb&quot;&gt;
                &lt;li class=&quot;breadcrumb-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;breadcrumb-item active&quot; aria-current=&quot;page&quot;&gt;Library&lt;/li&gt;
                &lt;/ol&gt;
                &lt;/nav&gt;

                &lt;nav aria-label=&quot;breadcrumb&quot;&gt;
                &lt;ol class=&quot;breadcrumb&quot;&gt;
                &lt;li class=&quot;breadcrumb-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;breadcrumb-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;Base UI&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;breadcrumb-item active&quot; aria-current=&quot;page&quot;&gt;General&lt;/li&gt;
                &lt;/ol&gt;
                &lt;/nav&gt;

                &lt;nav aria-label=&quot;breadcrumb&quot;&gt;
                &lt;ol class=&quot;breadcrumb&quot;&gt;
                &lt;li class=&quot;breadcrumb-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;&lt;i
                class=&quot;ri-home-5-fill&quot;&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;breadcrumb-item&quot;&gt;&lt;a href=&quot;#&quot;&gt;Base UI&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;breadcrumb-item active&quot; aria-current=&quot;page&quot;&gt;General&lt;/li&gt;
                &lt;/ol&gt;
                &lt;/nav&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Pagination" content="" />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="paginationPreview" role="tabpanel"
              aria-labelledby="paginationPreview-tab" tabindex="0">
              <div>
                <BRow>
                  <BCol lg="6">
                    <h5 class="fs-base">Default Pagination</h5>
                    <p class="text-muted">Use <code>pagination</code> class to ul element to indicate a series of related
                      content exists across multiple pages.</p>
                    <nav aria-label="Page navigation example">
                      <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" prev-text="Previous"
                        next-text="Next"></BPagination>
                      <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true">
                        <template #prev-text>← &nbsp; Prev</template>
                        <template #next-text>Next &nbsp; →</template>
                      </BPagination>
                    </nav>
                  </BCol>


                  <BCol lg="6">
                    <div class="mt-4 mt-lg-0">
                      <h5 class="fs-base">Disabled and Active states</h5>
                      <p class="text-muted">Use <code>disabled</code> class to links that appear un-clickable and
                        <code>active</code> class to indicate the current page.
                      </p>

                      <!-- Pagination Disabled & Active -->
                      <nav aria-label="...">
                        <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true">
                          <template #prev-text>← &nbsp; Prev</template>
                          <template #next-text>Next &nbsp; →</template>
                        </BPagination>
                        <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true">
                          <template #prev-text>&lt; &nbsp; </template>
                          <template #next-text> &nbsp; &gt;</template>
                        </BPagination>
                      </nav>


                    </div>
                  </BCol>

                </BRow>

                <BRow>
                  <BCol lg="6">
                    <div class="mt-4">
                      <h5 class="fs-base">Sizing</h5>
                      <p class="text-muted">Use <code>pagination-lg</code> or <code>pagination-sm</code> to set different
                        pagination sizes.</p>
                      <!-- Pagination Large -->
                      <nav aria-label="...">
                        <!-- Pagination Large -->
                        <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" size="lg"
                          class="d-flex-wrap">
                          <template #prev-text>← Prev</template>
                          <template #next-text>Next &nbsp; →</template>
                        </BPagination>

                        <!-- Pagination Small -->
                        <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" size="sm">
                          <template #prev-text>← Prev</template>
                          <template #next-text>Next &nbsp; →</template>
                        </BPagination>
                      </nav>
                    </div>

                  </BCol>

                  <BCol lg="6">
                    <div class="mt-4">
                      <h5 class="fs-base">Alignment</h5>

                      <p class="text-muted">Use <code>justify-content-start</code>, <code>justify-content-center</code>,
                        or <code>justify-content-end</code>, class to pagination class to change the alignment of
                        pagination respectively.</p>
                      <!-- Pagination Alignment -->

                      <!-- Center Alignment -->
                      <nav aria-label="Page navigation example">
                        <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" align="center">
                          <template #prev-text>← &nbsp; Prev</template>
                          <template #next-text>Next &nbsp; →</template>
                        </BPagination>


                        <!-- Right Alignment -->
                        <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" align="end">
                          <template #prev-text>← &nbsp; Prev</template>
                          <template #next-text>Next &nbsp; →</template>
                        </BPagination>
                      </nav>
                    </div>
                  </BCol>
                </BRow>

                <BRow>
                  <BCol lg="6">
                    <div class="mt-4">
                      <h5 class="fs-base">Custom Separated Pagination</h5>
                      <p class="text-muted">Use <code>pagination-separated</code> class to pagination class to set custom
                        separated pagination.</p>
                      <BPagination v-model="ex3CurrentPage" :total-rows="ex3Rows" size="lg" prev-text="←" next-text="→"
                        hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"> </BPagination>
                      <BPagination v-model="ex3CurrentPage" :total-rows="ex3Rows" prev-text="←" next-text="→"
                        hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"> </BPagination>
                      <BPagination v-model="ex3CurrentPage" :total-rows="ex3Rows" size="sm" prev-text="←" next-text="→"
                        hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"> </BPagination>

                    </div>
                  </BCol>

                  <BCol lg="6">
                    <div class="mt-4">
                      <h5 class="fs-base">Custom Rounded Pagination</h5>
                      <p class="text-muted">Use <code>pagination-rounded</code> class to pagination class to set custom
                        rounded pagination.</p>
                      <BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg" prev-text="←"
                        next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap">
                      </BPagination>
                      <BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" prev-text="←" next-text="→"
                        hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"> </BPagination>
                      <BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm" prev-text="←"
                        next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap">
                      </BPagination>

                    </div>
                  </BCol>
                </BRow>
              </div>
            </div>
            <div class="tab-pane" id="paginationCode" role="tabpanel" aria-labelledby="paginationCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 250px;"><code>&lt;nav aria-label=&quot;Page navigation
                example&quot;&gt;
                &lt;ul class=&quot;pagination&quot;&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;Previous&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;Next&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
                &lt;/nav&gt;</code>

              <code>&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
                &lt;ul class=&quot;pagination&quot;&gt;
                &lt;li class=&quot;page-item&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot; aria-label=&quot;Previous&quot;&gt;
                &lt;i class=&quot;bi bi-chevron-left&quot;&gt;&lt;/i&gt;
                &lt;/a&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot; aria-label=&quot;Next&quot;&gt;
                &lt;i class=&quot;bi bi-chevron-right&quot;&gt;&lt;/i&gt;
                &lt;/a&gt;
                &lt;/li&gt;
                &lt;/ul&gt;
                &lt;/nav&gt;</code>


              <code>&lt;!-- Pagination Disabled &amp; Active --&gt;
                &lt;nav aria-label=&quot;...&quot;&gt;
                &lt;ul class=&quot;pagination&quot;&gt;
                &lt;li class=&quot;page-item disabled&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item active&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2 &lt;span
                class=&quot;visually-hidden&quot;&gt;(current)&lt;/span&gt;&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
                &lt;/li&gt;
                &lt;/ul&gt;
                &lt;/nav&gt;</code>

              <code>&lt;nav aria-label=&quot;...&quot;&gt;
                &lt;ul class=&quot;pagination&quot;&gt;
                &lt;li class=&quot;page-item disabled&quot;&gt;
                &lt;span class=&quot;page-link&quot;&gt;&lt;i class=&quot;bi
                bi-chevron-left&quot;&gt;&lt;/i&gt;&lt;/span&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item active&quot;&gt;
                &lt;span class=&quot;page-link&quot;&gt;
                2
                &lt;span class=&quot;visually-hidden&quot;&gt;(current)&lt;/span&gt;
                &lt;/span&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;&lt;i class=&quot;bi
                bi-chevron-right&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                &lt;/li&gt;
                &lt;/ul&gt;
                &lt;/nav&gt;</code>


              <code>&lt;!-- Pagination sizing --&gt;

                &lt;!-- Pagination Large --&gt;
                &lt;nav aria-label=&quot;...&quot;&gt;
                &lt;ul class=&quot;pagination pagination-lg&quot;&gt;
                &lt;li class=&quot;page-item disabled&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
                &lt;/li&gt;
                &lt;/ul&gt;
                &lt;/nav&gt;</code>

              <code>&lt;!-- Pagination Small --&gt;
                &lt;nav aria-label=&quot;...&quot;&gt;
                &lt;ul class=&quot;pagination pagination-sm&quot;&gt;
                &lt;li class=&quot;page-item disabled&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
                &lt;/li&gt;
                &lt;/ul&gt;
                &lt;/nav&gt;</code>


              <code>&lt;!-- Pagination Alignment --&gt;

                &lt;!-- Center Alignment --&gt;
                &lt;nav aria-label=&quot;Page navigation example&quot;&gt;
                &lt;ul class=&quot;pagination justify-content-center&quot;&gt;
                &lt;li class=&quot;page-item disabled&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
                &lt;/li&gt;
                &lt;/ul&gt;
                &lt;/nav&gt;</code>

              <code>&lt;!-- Right Alignment --&gt;
                &lt;nav aria-label=&quot;Page navigation example&quot;&gt;
                &lt;ul class=&quot;pagination justify-content-end&quot;&gt;
                &lt;li class=&quot;page-item disabled&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot;
                href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;
                &lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
                &lt;/li&gt;
                &lt;/ul&gt;
                &lt;/nav&gt;</code>

              <code>&lt;!-- Pagination Rounded --&gt;
                &lt;ul class=&quot;pagination pagination-rounded&quot;&gt;
                &lt;li class=&quot;page-item disabled&quot;&gt;
                &lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;&lt;i class=&quot;bi
                bi-chevron-left&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;
                &lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;1&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item active&quot;&gt;
                &lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;2&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;
                &lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;3&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;
                &lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;4&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;
                &lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;5&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class=&quot;page-item&quot;&gt;
                &lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;&lt;i class=&quot;bi
                bi-chevron-right&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                &lt;/li&gt;
                &lt;/ul&gt;</code>
            </pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Spinners" content="" />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="spinnersPreview" role="tabpanel" aria-labelledby="spinnersPreview-tab"
              tabindex="0">
              <div>
                <BRow>
                  <BCol lg="6">
                    <div>
                      <h5 class="fs-base">Border spinner</h5>
                      <p class="text-muted">Use <code>spinner-border</code> class for a lightweight loading indicator.</p>
                      <div class="d-flex flex-wrap gap-3 mb-2">
                        <!-- Border spinner -->
                        <BSpinner variant="primary" />
                        <BSpinner variant="secondary" />
                        <BSpinner variant="success" />
                        <BSpinner variant="info" />
                        <BSpinner variant="warning" />
                        <BSpinner variant="danger" />
                        <BSpinner variant="dark" />
                        <BSpinner variant="light" />
                      </div>
                    </div>
                  </BCol>


                  <BCol lg="6">
                    <div>
                      <h5 class="fs-base">Growing spinner</h5>
                      <p class="text-muted">Use <code>spinner-grow</code> class for a lightweight spinner with growing
                        effect.</p>
                      <div class="d-flex flex-wrap gap-3 mb-2">
                        <!-- Growing spinner -->
                        <BSpinner type="grow" variant="primary" />
                        <BSpinner type="grow" variant="secondary" />
                        <BSpinner type="grow" variant="success" />
                        <BSpinner type="grow" variant="info" />
                        <BSpinner type="grow" variant="warning" />
                        <BSpinner type="grow" variant="danger" />
                        <BSpinner type="grow" variant="dark" />
                        <BSpinner type="grow" variant="light" />
                      </div>
                    </div>
                  </BCol>

                </BRow>

              </div>
            </div>
            <div class="tab-pane" id="spinnersCode" role="tabpanel" aria-labelledby="spinnersCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 250px;"><code>&lt;!-- Border spinner --&gt;
                &lt;div class=&quot;spinner-border text-primary&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-border text-secondary&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-border text-success&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-border text-info&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-border text-warning&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-border text-danger&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-border text-dark&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-border text-light&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;</code>

              <code>&lt;!-- Growing spinner --&gt;
                &lt;div class=&quot;spinner-grow text-primary&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-grow text-secondary&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-grow text-success&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-grow text-info&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-grow text-warning&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-grow text-danger&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-grow text-dark&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;spinner-grow text-light&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;</code>
            </pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Spinners Size" content="Add <code>.spinner-border-sm</code> and <code>.spinner-grow-sm</code> to make a
            smaller spinner that can quickly be used within other components." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="spinnersSizesPreview" role="tabpanel"
              aria-labelledby="spinnersSizesPreview-tab" tabindex="0">
              <div class="d-flex gap-4">
                <BSpinner small />
                <BSpinner type="grow" small />
                <BSpinner style="width: 3rem; height: 3rem;" label="Large Spinner" />
                <BSpinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow" />
              </div>
            </div>
            <div class="tab-pane" id="spinnersSizesCode" role="tabpanel" aria-labelledby="spinnersSizesCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;div class=&quot;spinner-border spinner-border-sm&quot;
                role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;</code>
              <code>&lt;div class=&quot;spinner-grow spinner-grow-sm&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;</code>
              <code>&lt;div class=&quot;spinner-border&quot; style=&quot;width: 3rem; height: 3rem;&quot;
                role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;</code>
              <code>&lt;div class=&quot;spinner-grow&quot; style=&quot;width: 3rem; height: 3rem;&quot;
                role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/div&gt;</code>
            </pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Spinners Buttons" content="Use spinners within buttons to indicate an action is currently processing or
          taking place. You may also swap the text out of the spinner element and utilize button text as needed." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="spinnersButtonsPreview" role="tabpanel"
              aria-labelledby="spinnersButtonsPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="primary" disabled>
                  <BSpinner small />
                  <span class="visually-hidden">Loading...</span>
                </BButton>

                <BButton variant="primary" disabled>
                  <BSpinner small />
                  Loading...
                </BButton>
                <BButton variant="primary" disabled>
                  <BSpinner small type="grow" />
                  <span class="visually-hidden">Loading...</span>
                </BButton>

                <BButton variant="primary" disabled>
                  <BSpinner small type="grow" />
                  Loading...
                </BButton>
              </div>
            </div>
            <div class="tab-pane" id="spinnersButtonsCode" role="tabpanel" aria-labelledby="spinnersButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;button class=&quot;btn btn-primary&quot; type=&quot;button&quot;
                disabled&gt;
                &lt;span class=&quot;spinner-border spinner-border-sm&quot; role=&quot;status&quot;
                aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/button&gt;</code>
              <code>&lt;button class=&quot;btn btn-primary&quot; type=&quot;button&quot; disabled&gt;
                &lt;span class=&quot;spinner-border spinner-border-sm&quot; role=&quot;status&quot;
                aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; Loading...
                &lt;/button&gt;</code>
              <code>&lt;button class=&quot;btn btn-primary&quot; type=&quot;button&quot; disabled&gt;
                &lt;span class=&quot;spinner-grow spinner-grow-sm&quot; role=&quot;status&quot;
                aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
                &lt;/button&gt;</code>
              <code>&lt;button class=&quot;btn btn-primary&quot; type=&quot;button&quot; disabled&gt;
                &lt;span class=&quot;spinner-grow spinner-grow-sm&quot; role=&quot;status&quot;
                aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; Loading...
                &lt;/button&gt;</code>
            </pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>

  </Layout>
</template>


<style lang="scss">

// this scss only for Tooltips Custom Colors
.custom-tooltip {
  .tooltip {
    top: 45px !important;
  }

  // primary tooltip
  .btn-primary+span .tooltip-inner {
    background-color: #573ff7
  }

  .btn-primary+span .tooltip-arrow::before {
    border-top-color: #573ff7;
  }

  // secondary tooltip
  .btn-secondary+span .tooltip-inner {
    background-color: #3281f3
  }

  .btn-secondary+span .tooltip-arrow::before {
    border-top-color: #3281f3;
  }

  // success tooltip
  .btn-success+span .tooltip-inner {
    background-color: #1dcf7a
  }

  .btn-success+span .tooltip-arrow::before {
    border-top-color: #1dcf7a;
  }

  // danger tooltip
  .btn-danger+span .tooltip-inner {
    background-color: #f56665
  }

  .btn-danger+span .tooltip-arrow::before {
    border-top-color: #f56665;
  }

  // info tooltip
  .btn-info+span .tooltip-inner {
    background-color: #34bcd9
  }

  .btn-info+span .tooltip-arrow::before {
    border-top-color: #34bcd9;
  }

  // warning tooltip
  .btn-warning+span .tooltip-inner {
    background-color: #f7d24b
  }

  .btn-warning+span .tooltip-arrow::before {
    border-top-color: #f7d24b;
  }

  // dark tooltip
  .btn-dark+span .tooltip-inner {
    background-color: #091124
  }

  .btn-dark+span .tooltip-arrow::before {
    border-top-color: #091124;
  }
}
</style>