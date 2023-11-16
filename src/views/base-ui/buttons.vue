<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import CardHeader from "@/components/card-header.vue";
import RightBar from "@/components/right-bar.vue";

export default {
  data() {
    return {
    };
  },
  mounted() {
    const toggleBtn = document.getElementsByClassName("custom-toggle");
    Array.from(toggleBtn).forEach(ele => {
      ele.addEventListener("click", () => {
        if (ele.classList.contains("active")) {
          ele.classList.remove("active");
        } else {
          ele.classList.add("active");
        }
      });
    });
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
          <PageHeader title="Buttons" pagetitle="Bootstrap UI" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Default Buttons"
            content="Use the<code> btn</code> class to show the default button style." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="defaultButtonsPreview" role="tabpanel"
              aria-labelledby="defaultButtonsPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="primary">Primary</BButton>
                <BButton variant="secondary">Secondary</BButton>
                <BButton variant="success">Success</BButton>
                <BButton variant="info">Info</BButton>
                <BButton variant="warning">Warning</BButton>
                <BButton variant="danger">Danger</BButton>
                <BButton variant="dark">Dark</BButton>
                <BButton variant="link">Link</BButton>
                <BButton variant="light">Light</BButton>
              </div>
            </div>
            <div class="tab-pane" id="defaultButtonsCode" role="tabpanel" aria-labelledby="defaultButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Base Buttons --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Primary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot;&gt;Secondary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success&quot;&gt;Success&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot;&gt;Info&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-warning&quot;&gt;Warning&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-danger&quot;&gt;Danger&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;Dark&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;Light&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Outline Buttons" content="Use <code>btn-outline-</code> class with the below-mentioned variation to create
            a button with the outline." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="outlineButtonsPreview" role="tabpanel"
              aria-labelledby="outlineButtonsPreview-tab" tabindex="0">
              <p class="text-muted"></p>
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="outline-primary">Primary</BButton>
                <BButton variant="outline-secondary">Secondary</BButton>
                <BButton variant="outline-success">Success</BButton>
                <BButton variant="outline-info">Info</BButton>
                <BButton variant="outline-warning">Warning</BButton>
                <BButton variant="outline-danger">Danger</BButton>
                <BButton variant="outline-dark">Dark</BButton>
                <BButton variant="outline-light">Light</BButton>
              </div>
            </div>
            <div class="tab-pane" id="outlineButtonsCode" role="tabpanel" aria-labelledby="outlineButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Outline Buttons --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Primary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary&quot;&gt;Secondary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-success&quot;&gt;Success&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-info&quot;&gt;Info&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-warning&quot;&gt;Warning&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-danger&quot;&gt;Danger&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-dark&quot;&gt;Dark&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-light&quot;&gt;Light&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Rounded Buttons"
            content="Use the <code>rounded-pill </code>class to make a rounded button." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="roundedButtonsPreview" role="tabpanel"
              aria-labelledby="roundedButtonsPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BButton pill variant="primary">Primary</BButton>
                <BButton pill variant="secondary">Secondary</BButton>
                <BButton pill variant="success">Success</BButton>
                <BButton pill variant="info">Info</BButton>
                <BButton pill variant="warning">Warning</BButton>
                <BButton pill variant="danger">Danger</BButton>
                <BButton pill variant="dark">Dark</BButton>
                <BButton pill variant="light">Light</BButton>
              </div>
            </div>
            <div class="tab-pane" id="roundedButtonsCode" role="tabpanel" aria-labelledby="roundedButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"
                style="height: 240px;"><code>&lt;!-- Rounded Buttons --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn rounded-pill btn-primary&quot;&gt;Primary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn rounded-pill btn-secondary&quot;&gt;Secondary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn rounded-pill btn-success&quot;&gt;Success&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn rounded-pill btn-info&quot;&gt;Info&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn rounded-pill btn-warning&quot;&gt;Warning&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn rounded-pill btn-danger&quot;&gt;Danger&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn rounded-pill btn-dark&quot;&gt;Dark&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn rounded-pill btn-light&quot;&gt;Light&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Subtle Buttons" content="Use <code>btn-subtle-</code> class with the below-mentioned variation to create a
            button with the subtle background." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="subtleButtonsPreview" role="tabpanel"
              aria-labelledby="subtleButtonsPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="subtle-primary">Primary</BButton>
                <BButton variant="subtle-secondary">Secondary</BButton>
                <BButton variant="subtle-success">Success</BButton>
                <BButton variant="subtle-info">Info</BButton>
                <BButton variant="subtle-warning">Warning</BButton>
                <BButton variant="subtle-danger">Danger</BButton>
                <BButton variant="subtle-dark">Dark</BButton>
              </div>
            </div>
            <div class="tab-pane" id="subtleButtonsCode" role="tabpanel" aria-labelledby="subtleButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Subtle Buttons --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-subtle-primary&quot;&gt;Primary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-subtle-secondary&quot;&gt;secondary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-subtle-success&quot;&gt;Success&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-subtle-info&quot;&gt;Info&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-subtle-warning&quot;&gt;Warning&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-subtle-danger&quot;&gt;Danger&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-subtle-dark&quot;&gt;Dark&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Ghost Buttons" content="Use <code>btn-ghost-</code> class with the below-mentioned variation to create a
            button with the transparent background." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="ghostButtonsPreview" role="tabpanel"
              aria-labelledby="ghostButtonsPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="ghost-primary">Primary</BButton>
                <BButton variant="ghost-secondary">Secondary</BButton>
                <BButton variant="ghost-success">Success</BButton>
                <BButton variant="ghost-info">Info</BButton>
                <BButton variant="ghost-warning">Warning</BButton>
                <BButton variant="ghost-danger">Danger</BButton>
                <BButton variant="ghost-dark">Dark</BButton>

              </div>
            </div>
            <div class="tab-pane" id="ghostButtonsCode" role="tabpanel" aria-labelledby="ghostButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 240px;"><code>&lt;!-- ghost Buttons --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-ghost-primary&quot;&gt;Primary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-ghost-secondary&quot;&gt;secondary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-ghost-success&quot;&gt;Success&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-ghost-info&quot;&gt;Info&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-ghost-warning&quot;&gt;Warning&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-ghost-danger&quot;&gt;Danger&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-ghost-dark&quot;&gt;Dark&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Gradient Buttons"
            content="Use <code>bg-gradient </code>class to create a gradient button." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="gradientButtonsPreview" role="tabpanel"
              aria-labelledby="gradientButtonsPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BButton class="bg-gradient" variant="primary">Primary</BButton>
                <BButton class="bg-gradient" variant="secondary">Secondary</BButton>
                <BButton class="bg-gradient" variant="success">Success</BButton>
                <BButton class="bg-gradient" variant="info">Info</BButton>
                <BButton class="bg-gradient" variant="warning">Warning</BButton>
                <BButton class="bg-gradient" variant="danger">Danger</BButton>
                <BButton class="bg-gradient" variant="dark">Dark</BButton>
                <BButton class="bg-gradient" variant="light">Light</BButton>
              </div>
            </div>
            <div class="tab-pane" id="gradientButtonsCode" role="tabpanel" aria-labelledby="gradientButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"
                style="height: 240px;"><code>&lt;!-- Gradient Buttons --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary bg-gradient&quot;&gt;Primary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary bg-gradient&quot;&gt;Secondary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success bg-gradient&quot;&gt;Success&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-info bg-gradient&quot;&gt;Info&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-warning bg-gradient&quot;&gt;Warning&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-danger bg-gradient&quot;&gt;Danger&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-dark bg-gradient&quot;&gt;Dark&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-light bg-gradient&quot;&gt;Light&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Buttons with Label"
            content="Use <code>btn-label </code>class to create a button with the label." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="labelWithButtonsPreview" role="tabpanel"
              aria-labelledby="labelWithButtonsPreview-tab" tabindex="0">
              <BRow>
                <BCol lg="4">
                  <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                    <BButton type="button" variant="primary" class="btn-label"><i
                        class="ri-user-smile-line label-icon align-middle fs-lg me-2"></i> Primary</BButton>
                    <BButton type="button" variant="success" class="btn-label"><i
                        class="ri-check-double-line label-icon align-middle fs-lg me-2"></i> Success</BButton>
                    <BButton type="button" variant="warning" class="btn-label"><i
                        class="ri-error-warning-line label-icon align-middle fs-lg me-2 "></i> Warning</BButton>

                  </div>
                </BCol>

                <BCol lg="4">
                  <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                    <BButton type="button" variant="primary" pill class="btn-label"><i
                        class="ri-user-smile-line label-icon align-middle rounded-pill fs-lg me-2"></i> Primary</BButton>
                    <BButton type="button" variant="success" pill class="btn-label"><i
                        class="ri-check-double-line label-icon align-middle rounded-pill fs-lg me-2"></i> Success
                    </BButton>
                    <BButton type="button" variant="warning" pill class="btn-label"><i
                        class="ri-error-warning-line label-icon align-middle rounded-pill fs-lg me-2 "></i> Warning
                    </BButton>

                  </div>
                </BCol>

                <BCol lg="4">
                  <div class="d-flex flex-wrap gap-2">
                    <BButton type="button" variant="primary" class="btn-label right"><i
                        class="ri-user-smile-line label-icon align-middle fs-lg ms-2"></i> Primary</BButton>
                    <BButton type="button" variant="success" pill class="btn-label right"><i
                        class="ri-check-double-line label-icon align-middle rounded-pill fs-lg ms-2"></i> Success
                    </BButton>

                  </div>
                </BCol>

              </BRow>

            </div>
            <div class="tab-pane" id="labelWithButtonsCode" role="tabpanel" aria-labelledby="labelWithButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"
                style="height: 240px;"><code>&lt;!-- Buttons with Label --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-label&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle fs-lg me-2&quot;&gt;&lt;/i&gt; Primary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success btn-label&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle fs-lg me-2&quot;&gt;&lt;/i&gt; Success&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-warning btn-label&quot;&gt;&lt;i class=&quot;ri-error-warning-line label-icon align-middle fs-lg me-2&quot;&gt;&lt;/i&gt; Warning&lt;/button&gt;</code>

<code>&lt;!-- Rounded with Label --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-label rounded-pill&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle rounded-pill fs-lg me-2&quot;&gt;&lt;/i&gt; Primary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success btn-label rounded-pill&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle rounded-pill fs-lg me-2&quot;&gt;&lt;/i&gt; Success&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-warning btn-label rounded-pill&quot;&gt;&lt;i class=&quot;ri-error-warning-line label-icon align-middle rounded-pill fs-lg me-2&quot;&gt;&lt;/i&gt; Warning&lt;/button&gt;</code>

<code>&lt;!-- Buttons with Label Right --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-label right&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle fs-lg ms-2&quot;&gt;&lt;/i&gt; Primary&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success btn-label right rounded-pill&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle rounded-pill fs-lg ms-2&quot;&gt;&lt;/i&gt; Success&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Load More Buttons" content="Example of loading buttons." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="loadMoreButtonsPreview" role="tabpanel"
              aria-labelledby="loadMoreButtonsPreview-tab" tabindex="0">
              <BRow>
                <BCol lg="6">
                  <div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                    <BButton type="button" variant="outline-primary" class="btn-load">
                      <span class="d-flex align-items-center">
                        <BSpinner />
                        <span class="flex-grow-1 ms-2">
                          Loading...
                        </span>
                      </span>
                    </BButton>
                    <BButton type="button" variant="success" class="btn-load">
                      <span class="d-flex align-items-center">
                        <BSpinner />
                        <span class="flex-grow-1 ms-2">
                          Loading...
                        </span>
                      </span>
                    </BButton>
                    <BButton type="button" variant="outline-secondary" class="btn-load">
                      <span class="d-flex align-items-center">
                        <BSpinner type="grow" />
                        <span class="flex-grow-1 ms-2">
                          Loading...
                        </span>
                      </span>
                    </BButton>
                    <BButton type="button" variant="danger" class="btn-load">
                      <span class="d-flex align-items-center">
                        <BSpinner type="grow" />
                        <span class="flex-grow-1 ms-2">
                          Loading...
                        </span>
                      </span>
                    </BButton>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                    <BButton variant="outline-primary" class="btn-load">
                      <span class="d-flex align-items-center">
                        <span class="flex-grow-1 me-2">
                          Loading...
                        </span>
                        <BSpinner />
                      </span>
                    </BButton>
                    <BButton type="button" variant="success" class="btn-load">
                      <span class="d-flex align-items-center">
                        <span class="flex-grow-1 me-2">
                          Loading...
                        </span>
                        <BSpinner />
                      </span>
                    </BButton>
                    <BButton type="button" variant="outline-warning" class="btn-load">
                      <span class="d-flex align-items-center">
                        <span class="flex-grow-1 me-2">
                          Loading...
                        </span>
                        <BSpinner type="grow" />
                      </span>
                    </BButton>
                    <BButton type="button" variant="info" class="btn-load">
                      <span class="d-flex align-items-center">
                        <span class="flex-grow-1 me-2">
                          Loading...
                        </span>
                        <BSpinner type="grow" />
                      </span>
                    </BButton>
                  </div>
                </BCol>

              </BRow>

            </div>
            <div class="tab-pane" id="loadMoreButtonsCode" role="tabpanel" aria-labelledby="loadMoreButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Load More Buttons --&gt;
&lt;div class=&quot;hstack flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
&lt;button class=&quot;btn btn-outline-primary btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
&lt;button class=&quot;btn btn-outline-primary btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-warning btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-info btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;/span&gt;
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
          <CardHeader title="Custom Toggle Buttons" content="Example of toggle buttons." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="customToggleButtonsPreview" role="tabpanel"
              aria-labelledby="customToggleButtonsPreview-tab" tabindex="0">
              <BRow>
                <BCol lg="6">
                  <div class="d-flex flex-wrap align-items-center gap-2">
                    <BButton type="button" variant="primary" class="custom-toggle active" data-bs-toggle="button">
                      <span class="icon-on"><i class="ri-alarm-line align-bottom"></i> Active</span>
                      <span class="icon-off">Unactive</span>
                    </BButton>
                    <BButton type="button" variant="secondary" class="custom-toggle active" data-bs-toggle="button">
                      <span class="icon-on"><i class="ri-user-add-line align-bottom me-1"></i> Connect</span>
                      <span class="icon-off"><i class="ri-check-fill align-bottom me-1"></i> Unconnect</span>
                    </BButton>
                    <BButton type="button" variant="success" class="custom-toggle" data-bs-toggle="button">
                      <span class="icon-on"><i class="ri-thumb-up-line align-bottom me-1"></i> Yes</span>
                      <span class="icon-off"><i class="ri-thumb-down-line align-bottom me-1"></i> No</span>
                    </BButton>
                    <BButton type="button" variant="warning" class="custom-toggle active" data-bs-toggle="button">
                      <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
                      <span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                    </BButton>
                    <BButton type="button" variant="danger" class="custom-toggle" data-bs-toggle="button">
                      <span class="icon-on">On</span>
                      <span class="icon-off">Off</span>
                    </BButton>
                    <BButton type="button" variant="dark" class="custom-toggle" data-bs-toggle="button">
                      <span class="icon-on"><i class="ri-bookmark-line align-bottom me-1"></i> Bookmark</span>
                      <span class="icon-off"><i class="ri-bookmark-3-fill align-bottom me-1"></i> Unbookmark</span>
                    </BButton>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="d-flex flex-wrap align-items-center gap-2">
                    <BButton type="button" variant="outline-primary" class="custom-toggle" data-bs-toggle="button">
                      <span class="icon-on">Active</span>
                      <span class="icon-off">Unactive</span>
                    </BButton>
                    <BButton type="button" variant="outline-secondary" class="custom-toggle" data-bs-toggle="button">
                      <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
                      <span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                    </BButton>
                    <BButton type="button" variant="outline-success" class="custom-toggle active" data-bs-toggle="button">
                      <span class="icon-on">On</span>
                      <span class="icon-off">Off</span>
                    </BButton>
                    <BButton type="button" variant="subtle-warning" class="custom-toggle active" data-bs-toggle="button">
                      <span class="icon-on">Follow</span>
                      <span class="icon-off">Unfollow</span>
                    </BButton>
                    <BButton type="button" variant="subtle-danger" class="custom-toggle" data-bs-toggle="button">
                      <span class="icon-on">On</span>
                      <span class="icon-off">Off</span>
                    </BButton>
                    <BButton type="button" variant="dark" class="btn btn-dark custom-toggle active"
                      data-bs-toggle="button">
                      <span class="icon-on"><i class="ri-bookmark-line align-bottom"></i></span>
                      <span class="icon-off"><i class="ri-bookmark-3-fill align-bottom"></i></span>
                    </BButton>
                  </div>
                </BCol>
              </BRow>
            </div>
            <div class="tab-pane" id="customToggleButtonsCode" role="tabpanel"
              aria-labelledby="customToggleButtonsCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Custom Toggle Buttons --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-alarm-line align-bottom&quot;&gt;&lt;/i&gt; Active&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Unactive&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-user-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Connect&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-check-fill align-bottom me-1&quot;&gt;&lt;/i&gt; Unconnect&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-thumb-up-line align-bottom me-1&quot;&gt;&lt;/i&gt; Yes&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-thumb-down-line align-bottom me-1&quot;&gt;&lt;/i&gt; No&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-warning custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Follow&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-user-unfollow-line align-bottom me-1&quot;&gt;&lt;/i&gt; Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-danger custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-dark custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-bookmark-line align-bottom me-1&quot;&gt;&lt;/i&gt; Bookmark&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-bookmark-3-fill align-bottom me-1&quot;&gt;&lt;/i&gt; Unbookmark&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;Active&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Unactive&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Follow&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-user-unfollow-line align-bottom me-1&quot;&gt;&lt;/i&gt; Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-success custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-subtle-warning custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;Follow&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-subtle-danger custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-dark custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-bookmark-line align-bottom&quot;&gt;&lt;/i&gt;&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-bookmark-3-fill align-bottom&quot;&gt;&lt;/i&gt;&lt;/span&gt;
&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Base class" content="Bootstrap has a base <code>.btn</code> class that sets up basic styles such as
            padding and content alignment. By default, <code>.btn</code> controls have a transparent border and
            background color, and lack any explicit focus and hover styles." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="baseClassButtonsPreview" role="tabpanel"
              aria-labelledby="baseClassButtonsPreview-tab" tabindex="0">
              <BButton variant="btn">Base class</BButton>
            </div>
            <div class="tab-pane" id="baseClassButtonsCode" role="tabpanel" aria-labelledby="baseClassButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre
                class="language-markup"><code>&lt;button type=&quot;button&quot; class=&quot;btn&quot;&gt;Base class&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Custom sizing with CSS variables"
            content="You can even roll your own custom sizing with CSS variables:" />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="customSizingWithCssButtonsPreview" role="tabpanel"
              aria-labelledby="customSizingWithCssButtonsPreview-tab" tabindex="0">
              <BButton variant="primary"
                style="--tb-btn-padding-y: .25rem; --tb-btn-padding-x: .5rem; --tb-btn-font-size: .75rem;">
                Custom button
              </BButton>
            </div>
            <div class="tab-pane" id="customSizingWithCssButtonsCode" role="tabpanel"
              aria-labelledby="customSizingWithCssButtonsCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; style=&quot;--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;&quot;&gt;
Custom button
&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Buttons Sizes" content="Use <code>btn-lg</code> class to create a large size button and
            <code>btn-sm</code> class to create a small size button." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="sizeButtonsPreview" role="tabpanel"
              aria-labelledby="sizeButtonsPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap align-items-center gap-2">
                <!-- Large Button -->
                <BButton variant="primary" size="lg">Large Button</BButton>
                <BButton variant="light" size="lg">Large Button</BButton>

                <!-- Small Button -->
                <BButton variant="primary" size="sm">Small Button</BButton>
                <BButton variant="light" size="sm">Small Button</BButton>
              </div>
            </div>
            <div class="tab-pane" id="sizeButtonsCode" role="tabpanel" aria-labelledby="sizeButtonsCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup">
<code>&lt;!-- Large Button --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-lg&quot;&gt;Large button&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-light btn-lg&quot;&gt;Large button&lt;/button&gt;</code>

<code>&lt;!-- Small Button --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-sm&quot;&gt;Small button&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-light btn-sm&quot;&gt;Small button&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Buttons Width" content="Use <code>w-xs,w-sm,w-md,w-lg</code> class to make different sized buttons
            respectively." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="widthButtonsPreview" role="tabpanel"
              aria-labelledby="widthButtonsPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="primary" class="w-xs">Xs</BButton>
                <BButton variant="danger" class="w-sm">Small</BButton>
                <BButton variant="warning" class="w-md">Medium</BButton>
                <BButton variant="success" class="w-lg">Large</BButton>
              </div>
            </div>
            <div class="tab-pane" id="widthButtonsCode" role="tabpanel" aria-labelledby="widthButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup">
<code>&lt;!-- Width Button --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary w-xs&quot;&gt;Xs&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-danger w-sm&quot;&gt;Small&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-warning w-md&quot;&gt;Medium&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success w-lg&quot;&gt;Large&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Buttons Tag" content="Use <code>btn</code> class with different HTML elements. (though some browsers
            may apply a slightly different rendering)" />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="tagButtonsPreview" role="tabpanel"
              aria-labelledby="tagButtonsPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="primary" href="#">Link</BButton>
                <BButton variant="success">Button</BButton>
                <input class="btn btn-info" type="button" value="Input">
                <input class="btn btn-danger" type="submit" value="Submit">
                <input class="btn btn-warning" type="reset" value="Reset">
              </div>
            </div>
            <div class="tab-pane" id="tagButtonsCode" role="tabpanel" aria-labelledby="tagButtonsCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;!-- Tag Button --&gt;
&lt;a class=&quot;btn btn-primary&quot; href=&quot;#&quot; role=&quot;button&quot;&gt;Link&lt;/a&gt;</code>

<code>&lt;button class=&quot;btn btn-success&quot; type=&quot;submit&quot;&gt;Button&lt;/button&gt;</code>

<code>&lt;input class=&quot;btn btn-info&quot; type=&quot;button&quot; value=&quot;Input&quot;&gt;</code>

<code>&lt;input class=&quot;btn btn-danger&quot; type=&quot;submit&quot; value=&quot;Submit&quot;&gt;</code>

<code>&lt;input class=&quot;btn btn-warning&quot; type=&quot;reset&quot; value=&quot;Reset&quot;&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Buttons Toggle Status"
            content="Use <code>data-bs-toggle='button'</code> to toggle a button’s active state." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="toggleStatusButtonsPreview" role="tabpanel"
              aria-labelledby="toggleStatusButtonsPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">

                <BButton v-model:pressed="buttonToggle" variant="primary">Single toggle</BButton>
              </div>
            </div>
            <div class="tab-pane" id="toggleStatusButtonsCode" role="tabpanel"
              aria-labelledby="toggleStatusButtonsCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup">
<code>&lt;!-- Toggle Button Status --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; data-bs-toggle=&quot;button&quot; aria-pressed=&quot;false&quot;&gt;
Single toggle
&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Buttons Grid" content="Use <code>d-grid</code> class to create a full-width block button." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="gridButtonsPreview" role="tabpanel"
              aria-labelledby="gridButtonsPreview-tab" tabindex="0">
              <div class="d-grid gap-2">
                <BButton block variant="subtle-primary"> Button</BButton>
                <BButton block variant="subtle-primary"> Button</BButton>
              </div>
            </div>
            <div class="tab-pane" id="gridButtonsCode" role="tabpanel" aria-labelledby="gridButtonsCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;!-- Buttons Grid --&gt;
&lt;div class=&quot;d-grid gap-2&quot; &gt;
&lt;button class=&quot;btn btn-subtle-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
&lt;button class=&quot;btn btn-subtle-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Checkbox & Radio Buttons" content='Combine button-like <code>checkbox and radio</code> <a
            href="https://getbootstrap.com/docs/5.1/forms/checks-radios/">toggle buttons</a> into a seamless looking
          button group.' />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="checkboxRadioButtonsPreview" role="tabpanel"
              aria-labelledby="checkboxRadioButtonsPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap align-items-center gap-2">
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                  <input type="checkbox" class="btn-check" id="btncheck1" checked="">
                  <label class="btn btn-primary mb-0" for="btncheck1">Checkbox 1</label>

                  <input type="checkbox" class="btn-check" id="btncheck2">
                  <label class="btn btn-primary mb-0" for="btncheck2">Checkbox 2</label>

                  <input type="checkbox" class="btn-check" id="btncheck3">
                  <label class="btn btn-primary mb-0" for="btncheck3">Checkbox 3</label>
                </div>

                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked="">
                  <label class="btn btn-outline-secondary mb-0" for="btnradio1">Radio 1</label>

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
                  <label class="btn btn-outline-secondary mb-0" for="btnradio2">Radio 2</label>

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio3">
                  <label class="btn btn-outline-secondary mb-0" for="btnradio3">Radio 3</label>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="checkboxRadioButtonsCode" role="tabpanel"
              aria-labelledby="checkboxRadioButtonsCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Checkbox Buttons --&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Basic checkbox toggle button group&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck1&quot; autocomplete=&quot;off&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck1&quot;&gt;Checkbox 1&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck2&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck2&quot;&gt;Checkbox 2&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck3&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck3&quot;&gt;Checkbox 3&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Radio Buttons --&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Basic radio toggle button group&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio1&quot; autocomplete=&quot;off&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio1&quot;&gt;Radio 1&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio2&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio2&quot;&gt;Radio 2&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio3&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio3&quot;&gt;Radio 3&lt;/label&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>

        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Buttons Group" content="Use the <code>btn-group </code> class in the parent class to wrap a series of
            buttons." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="groupButtonsPreview" role="tabpanel"
              aria-labelledby="groupButtonsPreview-tab" tabindex="0">
              <BRow>
                <BCol sm="6">
                  <BButtonGroup>
                    <BButton type="button" variant="primary">Left</BButton>
                    <BButton type="button" variant="primary">Middle</BButton>
                    <BButton type="button" variant="primary">Right</BButton>
                  </BButtonGroup>
                </BCol>

                <BCol sm="6">
                  <BButtonGroup class="mt-4 mt-sm-0">
                    <BButton type="button" variant="light" class="btn-icon"><i class="ri-align-right"></i></BButton>
                    <BButton type="button" variant="light" class="btn-icon"><i class="ri-align-center"></i></BButton>
                    <BButton type="button" variant="light" class="btn-icon"><i class="ri-align-left"></i></BButton>
                  </BButtonGroup>
                </BCol>

              </BRow>

            </div>
            <div class="tab-pane" id="groupButtonsCode" role="tabpanel" aria-labelledby="groupButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 200px;">
<code>&lt;!-- Buttons Group --&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Left&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Middle&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Right&lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;btn-group mt-4 mt-md-0&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;&lt;i class=&quot;ri-align-right&quot;&gt;&lt;/i&gt;&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;&lt;i class=&quot;ri-align-center&quot;&gt;&lt;/i&gt;&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;&lt;i class=&quot;ri-align-left&quot;&gt;&lt;/i&gt;&lt;/button&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>


      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Icon Group" content="Use <code>btn-icon</code> class to wrap icon in button" />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="groupIconButtonsPreview" role="tabpanel"
              aria-labelledby="groupIconButtonsPreview-tab" tabindex="0">
              <BRow>
                <BCol sm="6">
                  <div class="hstack gap-2 ">
                    <BButton type="button" variant="primary" class="btn-icon"><i class="ri-map-pin-line"></i></BButton>
                    <BButton type="button" variant="danger" class="btn-icon"><i class="ri-delete-bin-5-line"></i>
                    </BButton>
                    <BButton type="button" variant="success" class="btn-icon"><i class="ri-check-double-line"></i>
                    </BButton>
                    <BButton type="button" variant="light" class="btn-icon"><i class="ri-brush-2-fill"></i></BButton>
                  </div>
                </BCol>

                <BCol sm="6">
                  <div class="hstack gap-2 mt-4 mt-sm-0">
                    <BButton type="button" variant="outline-primary" class="btn-icon"><i class="ri-24-hours-fill"></i>
                    </BButton>
                    <BButton type="button" variant="outline-danger" class="btn-icon"><i
                        class="ri-customer-service-2-line"></i></BButton>
                    <BButton type="button" variant="outline-success" class="btn-icon"><i class="ri-mail-send-line"></i>
                    </BButton>
                    <BButton type="button" variant="outline-warning" class="btn-icon"><i class="ri-menu-2-line"></i>
                    </BButton>
                  </div>
                </BCol>

              </BRow>

            </div>
            <div class="tab-pane" id="groupIconButtonsCode" role="tabpanel" aria-labelledby="groupIconButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 200px;">
<code>&lt;!-- Buttons Group --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;&lt;i class=&quot;ri-map-pin-line&quot;&gt;&lt;/i&gt;&lt;/button&gt;</code>
<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-danger btn-icon&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/button&gt;</code>
<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success btn-icon&quot;&gt;&lt;i class=&quot;ri-check-double-line&quot;&gt;&lt;/i&gt;&lt;/button&gt;</code>
<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-light btn-icon&quot;&gt;&lt;i class=&quot;ri-brush-2-fill&quot;&gt;&lt;/i&gt;&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary btn-icon&quot;&gt;&lt;i class=&quot;ri-24-hours-fill&quot;&gt;&lt;/i&gt;&lt;/button&gt;</code>
<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-danger btn-icon&quot;&gt;&lt;i class=&quot;ri-customer-service-2-line&quot;&gt;&lt;/i&gt;&lt;/button&gt;</code>
<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-success btn-icon&quot;&gt;&lt;i class=&quot;ri-mail-send-line&quot;&gt;&lt;/i&gt;&lt;/button&gt;</code>
<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-warning btn-icon&quot;&gt;&lt;i class=&quot;ri-menu-2-line&quot;&gt;&lt;/i&gt;&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Buttons Toolbar" content="Use <code>btn-toolbar</code> class to combine sets of button groups into more
            complex components." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="toolbarButtonsPreview" role="tabpanel"
              aria-labelledby="toolbarButtonsPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-3">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <BButtonGroup class="me-2">
                    <BButton type="button" variant="light">1</BButton>
                    <BButton type="button" variant="light">2</BButton>
                    <BButton type="button" variant="light">3</BButton>
                    <BButton type="button" variant="light">4</BButton>
                  </BButtonGroup>
                  <BButtonGroup class="me-2">
                    <BButton type="button" variant="light">5</BButton>
                    <BButton type="button" variant="light">6</BButton>
                    <BButton type="button" variant="light">7</BButton>
                  </BButtonGroup>
                  <BButtonGroup>
                    <BButton type="button" variant="light">8</BButton>
                  </BButtonGroup>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="toolbarButtonsCode" role="tabpanel" aria-labelledby="toolbarButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 200px;"><code>&lt;!-- Buttons Toolbar --&gt;
&lt;div class=&quot;btn-toolbar&quot; role=&quot;toolbar&quot; aria-label=&quot;Toolbar with button groups&quot;&gt;
&lt;div class=&quot;btn-group me-2&quot; role=&quot;group&quot; aria-label=&quot;First group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;1&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;2&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;3&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;4&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;btn-group me-2&quot; role=&quot;group&quot; aria-label=&quot;Second group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;5&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;6&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;7&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Third group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;8&lt;/button&gt;
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
          <CardHeader title="Button Group Sizing" content="Use <code>btn-group-</code> class with the below-mentioned variation to set the
            different sizes of button groups." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="groupSizingButtonsPreview" role="tabpanel"
              aria-labelledby="groupSizingButtonsPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap align-items-center gap-2">
                <BButtonGroup size="lg">
                  <BButton type="button" variant="primary">Left</BButton>
                  <BButton type="button" variant="primary">Middle</BButton>
                  <BButton type="button" variant="primary">Right</BButton>
                </BButtonGroup>
                <BButtonGroup class="mt-2">
                  <BButton type="button" variant="light">Left</BButton>
                  <BButton type="button" variant="light">Middle</BButton>
                  <BButton type="button" variant="light">Right</BButton>
                </BButtonGroup>
                <BButtonGroup class="mt-2" size="sm">
                  <BButton type="button" variant="secondary">Left</BButton>
                  <BButton type="button" variant="secondary">Middle</BButton>
                  <BButton type="button" variant="secondary">Right</BButton>
                </BButtonGroup>
              </div>
            </div>
            <div class="tab-pane" id="groupSizingButtonsCode" role="tabpanel" aria-labelledby="groupSizingButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 240px;">
<code>&lt;!-- Group Buttons Sizing --&gt;
&lt;div class=&quot;btn-group btn-group-lg&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Left&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Middle&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Right&lt;/button&gt;
&lt;/div&gt;</code> 

<code>&lt;div class=&quot;btn-group mt-2&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;Left&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;Middle&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;Right&lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;btn-group btn-group-sm mt-2&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot;&gt;Left&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot;&gt;Middle&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot;&gt;Right&lt;/button&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Vertical Variation" content="Make a set of buttons appear <code>vertically</code> stacked .Split button
            dropdowns are not supported here." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="verticalVariationButtonsPreview" role="tabpanel"
              aria-labelledby="verticalVariationButtonsPreview-tab" tabindex="0">
              <BRow class="gy-3">
                <BCol cols="auto">
                  <BButtonGroup>
                    <BButton type="button" variant="primary">1</BButton>
                    <BButton type="button" variant="primary">2</BButton>
                    <BButtonGroup>
                      <BDropdown variant="primary" text="Dropdown">
                        <BDropdownItem>Dropdown link</BDropdownItem>
                        <BDropdownItem>Dropdown link</BDropdownItem>
                      </BDropdown>
                    </BButtonGroup>
                  </BButtonGroup>
                </BCol>

                <BCol cols="auto">
                  <BButtonGroup vertical>
                    <BButton type="button" variant="light">Button</BButton>
                    <BButtonGroup>
                      <BDropdown variant="light" text="Dropdown">
                        <BDropdownItem>Dropdown link</BDropdownItem>
                        <BDropdownItem>Dropdown link</BDropdownItem>
                      </BDropdown>
                    </BButtonGroup>
                    <BButton type="button" variant="light">Button</BButton>
                    <BButton type="button" variant="light">Button</BButton>
                  </BButtonGroup>
                </BCol>
                <BCol cols="auto">
                  <BButtonGroup vertical>
                    <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio1" checked="">
                    <label class="btn btn-outline-secondary" for="vbtn-radio1">Radio 1</label>
                    <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio2">
                    <label class="btn btn-outline-secondary" for="vbtn-radio2">Radio 2</label>
                    <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio3">
                    <label class="btn btn-outline-secondary" for="vbtn-radio3">Radio 3</label>
                  </BButtonGroup>
                </BCol>
              </BRow>
            </div>
            <div class="tab-pane" id="verticalVariationButtonsCode" role="tabpanel"
              aria-labelledby="verticalVariationButtonsCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 240px;">
<code>&lt;!-- Vertical Variation --&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Button group with nested dropdown&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;1&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;2&lt;/button&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot;&gt;
&lt;button id=&quot;btnGroupDrop1&quot; type=&quot;button&quot; class=&quot;btn btn-primary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;
Dropdown
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;btnGroupDrop1&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;btn-group-vertical&quot; role=&quot;group&quot; aria-label=&quot;Vertical button group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;Button&lt;/button&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot;&gt;
&lt;button id=&quot;btnGroupVerticalDrop1&quot; type=&quot;button&quot; class=&quot;btn btn-light dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
Dropdown
&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot; aria-labelledby=&quot;btnGroupVerticalDrop1&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;Button&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;Button&lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;btn-group-vertical&quot; role=&quot;group&quot; aria-label=&quot;Vertical radio toggle button group&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio1&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio1&quot;&gt;Radio 1&lt;/label&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio2&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio2&quot;&gt;Radio 2&lt;/label&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio3&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio3&quot;&gt;Radio 3&lt;/label&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Focus Ring" content="Click directly on the link below to see the focus ring in action, or into the
          example below and then press <kbd>Tab</kbd>." />
          <BCardBody class="tab-content">
            <div class="d-flex gap-3">
              <BLink href="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
                Focus ring
              </BLink>
              <!--custom focus ring color-->
              <BLink href="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                style="--tb-focus-ring-color: rgba(118, 93, 255, .25)">
                Custom focus ring
              </BLink>
              <!---custom blurry offset focus ring-->
              <BLink href="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                style="--tb-focus-ring-x: 10px; --tb-focus-ring-y: 10px; --tb-focus-ring-blur: 4px">
                Blurry offset focus ring
              </BLink>
            </div>
            <div class="tab-pane" id="focusRingButtonsCode" role="tabpanel" aria-labelledby="focusRingButtonsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 240px;"><code>&lt;a href=&quot;#!&quot; class=&quot;d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2&quot;&gt;
Focus ring
&lt;/a&gt;</code>

<code>&lt;!--custom focus ring color--&gt;
&lt;a href=&quot;#!&quot; class=&quot;d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2&quot; style=&quot;--tb-focus-ring-color: rgba(118, 93, 255, .25)&quot;&gt;
Custom focus ring
&lt;/a&gt;</code>

<code>&lt;!---custom blurry offset focus ring--&gt;
&lt;a href=&quot;#!&quot; class=&quot;d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2&quot; style=&quot;--tb-focus-ring-x: 10px; --tb-focus-ring-y: 10px; --tb-focus-ring-blur: 4px&quot;&gt;
Blurry offset focus ring
&lt;/a&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Focus Ring Utilities" content="In addition to <code>.focus-ring</code>, we have several
            <code>.focus-ring-*</code> utilities to modify the helper class defaults. Modify the color with any of our
            <a href='/ui/colors'>theme colors</a>. Note that the light and dark variants may not be visible on all
            background colors given current color mode support." />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="focusRingUtilitiesButtonsPreview" role="tabpanel"
              aria-labelledby="focusRingUtilitiesButtonsPreview-tab" tabindex="0">
              <BRow>
                <BCol lg="6">
                  <p>
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">
                      Primary
                      focus</BLink>
                  </p>
                  <p>
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">
                      Secondary
                      focus</BLink>
                  </p>
                  <p>
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">
                      Success
                      focus</BLink>
                  </p>
                  <p class="mb-lg-0">
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">
                      Danger
                      focus</BLink>
                  </p>
                </BCol>
                <BCol lg="6">
                  <p>
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">
                      Warning
                      focus</BLink>
                  </p>
                  <p>
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">
                      Info
                      focus</BLink>
                  </p>
                  <p>
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">
                      Light
                      focus</BLink>
                  </p>
                  <p class="mb-0">
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">
                      Dark
                      focus</BLink>
                  </p>

                </BCol>
              </BRow>
            </div>
            <div class="tab-pane" id="focusRingUtilitiesButtonsCode" role="tabpanel"
              aria-labelledby="focusRingUtilitiesButtonsCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"
                style="height: 240px;"><code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Primary focus&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Secondary focus&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Success focus&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Danger focus&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Warning focus&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Info focus&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Light focus&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Dark focus&lt;/a&gt;&lt;/p&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>

  </Layout>
</template>