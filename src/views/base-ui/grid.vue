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
          <PageHeader title="Grid" pagetitle="Bootstrap UI" />
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
                  <BCardTitle class="mb-1">Grid Options</BCardTitle>
                  <p class="text-muted mb-0">See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
              </BCardHeader>
              <BCardBody class="pb-0">
                  <div class="table-responsive">
                      <table class="table table-bordered table-nowrap mb-0">
                          <thead>
                              <tr>
                                  <th scope="col"></th>
                                  <th scope="col" class="text-center">
                                      xs<br>
                                      <span class="fw-normal">&lt;576px</span>
                                  </th>
                                  <th scope="col" class="text-center">
                                      sm<br>
                                      <span class="fw-normal">≥576px</span>
                                  </th>
                                  <th scope="col" class="text-center">
                                      md<br>
                                      <span class="fw-normal">≥768px</span>
                                  </th>
                                  <th scope="col" class="text-center">
                                      lg<br>
                                      <span class="fw-normal">≥992px</span>
                                  </th>
                                  <th scope="col" class="text-center">
                                      xl<br>
                                      <span class="fw-normal">≥1200px</span>
                                  </th>
                                  <th scope="col" class="text-center">
                                      xxl<br>
                                      <span class="fw-normal">≥1400px</span>
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <th class="text-nowrap" scope="row">Grid behavior</th>
                                  <td>Horizontal at all times</td>
                                  <td colspan="5">Collapsed to start, horizontal above breakpoints</td>
                              </tr>
                              <tr>
                                  <th class="text-nowrap" scope="row">Max container width</th>
                                  <td>None (auto)</td>
                                  <td>540px</td>
                                  <td>720px</td>
                                  <td>960px</td>
                                  <td>1140px</td>
                                  <td>1320px</td>
                              </tr>
                              <tr>
                                  <th class="text-nowrap" scope="row">Class prefix</th>
                                  <td><code>col-</code></td>
                                  <td><code>col-sm-</code></td>
                                  <td><code>col-md-</code></td>
                                  <td><code>col-lg-</code></td>
                                  <td><code>col-xl-</code></td>
                                  <td><code>col-xxl-</code></td>
                              </tr>
                              <tr>
                                  <th class="text-nowrap" scope="row"># of columns</th>
                                  <td colspan="6">12</td>
                              </tr>
                              <tr>
                                  <th class="text-nowrap" scope="row">Gutter width</th>
                                  <td colspan="6">1.25rem (.625rem on each side of a column)</td>
                              </tr>
                              <tr>
                                  <th class="text-nowrap" scope="row">Custom gutters</th>
                                  <td colspan="6">Yes</td>
                              </tr>
                              <tr>
                                  <th class="text-nowrap" scope="row">Nestable</th>
                                  <td colspan="6">Yes</td>
                              </tr>
                              <tr>
                                  <th class="text-nowrap" scope="row">Offsets</th>
                                  <td colspan="6">Yes</td>
                              </tr>
                              <tr>
                                  <th class="text-nowrap" scope="row">Column ordering</th>
                                  <td colspan="6">Yes</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </BCardBody>
          </BCard>
      </BCol>
  </BRow>

  <BRow>
      <BCol lg="12">
          <BCard no-body>
            <CardHeader title="Vertical alignment (align-items-start)" content="Use <code>align-items-start</code> class to vertically align-items at the start."/>
              <BCardBody class="tab-content" id="showCodeContent">
                  <div class="tab-pane show active" id="verticalAlignmentPreview" role="tabpanel" aria-labelledby="verticalAlignmentPreview-tab" tabindex="0">
                      <div class="bg-body p-3 text-center">
                          <BRow class="align-items-start" style="min-height: 6rem;">
                              <BCol sm="4">
                                  <div class="bg-primary-subtle text-primary rounded p-2">
                                      col-sm-4
                                  </div>
                              </BCol>
                              <BCol sm="4">
                                  <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                      col-sm-4
                                  </div>
                              </BCol>
                              <BCol sm="4">
                                  <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                      col-sm-4
                                  </div>
                              </BCol>
                          </BRow>
                      </div>
                  </div>
                  <div class="tab-pane" id="verticalAlignmentCode" role="tabpanel" aria-labelledby="verticalAlignmentCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup">
<code>&lt;!-- Vertical alignment (align-items-start) --&gt;
&lt;div class=&quot;row align-items-start&quot;&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
...
&lt;/div&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
...
&lt;/div&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
...
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
      </BCol>
  </BRow>

  <BRow>
      <BCol lg="12">
          <BCard no-body>
            <CardHeader title="Vertical alignment (align-items-start)" content="Use <code>align-items-center</code> class to vertically align-items at the center."/>
              <BCardBody class="tab-content" id="showCodeContent">
                  <div class="tab-pane show active" id="verticalAlignmentCenterPreview" role="tabpanel" aria-labelledby="verticalAlignmentCenterPreview-tab" tabindex="0">
                      <div class="bg-body p-3 text-center">
                          <BRow class="align-items-center" style="min-height: 6rem;">
                              <BCol sm="4">
                                  <div class="bg-primary-subtle text-primary rounded p-2">
                                      col-sm-4
                                  </div>
                              </BCol>
                              <BCol sm="4">
                                  <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                      col-sm-4
                                  </div>
                              </BCol>
                              <BCol sm="4">
                                  <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                      col-sm-4
                                  </div>
                              </BCol>
                          </BRow>
                      </div>
                  </div>
                  <div class="tab-pane" id="verticalAlignmentCenterCode" role="tabpanel" aria-labelledby="verticalAlignmentCenterCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup">
<code>&lt;!-- Vertical alignment (align-items-center) --&gt;
&lt;div class=&quot;row align-items-center&quot;&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
...
&lt;/div&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
...
&lt;/div&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
...
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
      </BCol>
  </BRow>

  <BRow>
      <BCol lg="12">
          <BCard no-body>
            <CardHeader title="Vertical alignment (align-items-end)" content="Use <code>align-items-end</code> class to vertically align-items at the end."/>
                <BCardBody class="tab-content" id="showCodeContent">
                  <div class="tab-pane show active" id="verticalAlignmentEndPreview" role="tabpanel" aria-labelledby="verticalAlignmentEndPreview-tab" tabindex="0">
                      <div class="bg-body p-3 text-center">
                          <BRow class="align-items-end" style="min-height: 6rem;">
                              <BCol sm="4">
                                  <div class="bg-primary-subtle text-primary rounded p-2">
                                      col-sm-4
                                  </div>
                              </BCol>
                              <BCol sm="4">
                                  <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                      col-sm-4
                                  </div>
                              </BCol>
                              <BCol sm="4">
                                  <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                      col-sm-4
                                  </div>
                              </BCol>
                          </BRow>
                      </div>
                  </div>
                  <div class="tab-pane" id="verticalAlignmentEndCode" role="tabpanel" aria-labelledby="verticalAlignmentEndCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup">
<code>&lt;!-- Vertical alignment (align-items-end) --&gt;
&lt;div class=&quot;row align-items-end&quot;&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
...
&lt;/div&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
...
&lt;/div&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
...
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
      </BCol>
  </BRow>

  <BRow>
      <BCol lg="12">
          <BCard no-body>
            <CardHeader title="Align Self" content="Use the <code>align-self-start</code>,<code>align-self-center</code>, or <code>align-self-end</code> class respectively to vertically align items with a different position."/>
              <BCardBody class="tab-content" id="showCodeContent">
                  <div class="tab-pane show active" id="alignSelfStartPreview" role="tabpanel" aria-labelledby="alignSelfStartPreview-tab" tabindex="0">
                      <div class="bg-body p-3 text-center">
                          <BRow class="g-2" style="min-height: 9rem;">
                              <BCol sm="4" class="align-self-start">
                                  <div class="bg-primary-subtle text-primary rounded p-2">
                                      align-self-start
                                  </div>
                              </BCol>
                              <BCol sm="4" class="align-self-center">
                                  <div class="bg-primary-subtle text-primary rounded p-2">
                                      align-self-center
                                  </div>
                              </BCol>
                              <BCol sm="4" class="align-self-end">
                                  <div class="bg-primary-subtle text-primary rounded p-2">
                                      align-self-end
                                  </div>
                              </BCol>
                          </BRow>
                      </div>
                  </div>
                  <div class="tab-pane" id="alignSelfStartCode" role="tabpanel" aria-labelledby="alignSelfStartCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup"><code>&lt;!-- Align Self --&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;div class=&quot;col-sm-4 align-self-start&quot;&gt;
...
&lt;/div&gt;
&lt;div class=&quot;col-sm-4 align-self-center&quot;&gt;
...
&lt;/div&gt;
&lt;div class=&quot;col-sm-4 align-self-end&quot;&gt;
...
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
      </BCol>
  </BRow>

  <BRow>
      <BCol lg="12">
          <BCard no-body>
            <CardHeader title="Horizontal Alignment" content="Use the <code>justify-content-start</code>,<code>justify-content-center</code>, or <code>justify-content-end</code> class respectively to horizontally align items with a different position." />
              <BCardBody class="tab-content" id="showCodeContent">
                  <div class="tab-pane show active" id="horizontalAlignmentPreview" role="tabpanel" aria-labelledby="horizontalAlignmentPreview-tab" tabindex="0">
                      <div class="bg-body p-3 text-center">
                          <BRow class="justify-content-start">
                              <BCol sm="4">
                                  <div class="bg-primary-subtle text-primary rounded p-2">
                                      justify-content-start
                                  </div>
                              </BCol>
                          </BRow>
                          <BRow class="justify-content-center">
                              <BCol sm="4">
                                  <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                      justify-content-center
                                  </div>
                              </BCol>
                          </BRow>
                          <BRow class="justify-content-end">
                              <BCol sm="4">
                                  <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                      justify-content-end
                                  </div>
                              </BCol>
                          </BRow>
                      </div>
                  </div>
                  <div class="tab-pane" id="horizontalAlignmentCode" role="tabpanel" aria-labelledby="horizontalAlignmentCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup"><code>&lt;!-- Horizontal Alignment --&gt;
&lt;div class=&quot;row justify-content-start&quot;&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
...
&lt;/div&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;row justify-content-center&quot;&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
...
&lt;/div&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;row justify-content-end&quot;&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
...
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
      </BCol>
  </BRow>
  </Layout>
</template>