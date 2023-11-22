<script>



export default {
  data() {
    return {
      show: false
    };
  },

};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Dropdowns" pagetitle="Bootstrap UI" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Single Button Dropdown"
            content="Use <code>btn</code> class at to create a dropdown toggle with button element." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="singleButtonDropdownPreview" role="tabpanel"
              aria-labelledby="singleButtonDropdownPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-3">
                <BDropdown text="Dropdown button" variant="secondary">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                </BDropdown>

                <BDropdown text="Dropdown link" variant="secondary" toggle-tag="a">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                </BDropdown>
              </div>
            </div>
            <div class="tab-pane" id="singleButtonDropdownCode" role="tabpanel"
              aria-labelledby="singleButtonDropdownCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Single Button Dropdown --&gt;
&lt;div class=&quot;dropdown&quot;&gt;
&lt;button class=&quot;btn btn-secondary dropdown-toggle&quot; type=&quot;button&quot; id=&quot;dropdownMenuButton&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;
Dropdown button 
&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot; aria-labelledby=&quot;dropdownMenuButton&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;dropdown&quot;&gt;
&lt;a href=&quot;#&quot; class=&quot;btn btn-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;
Dropdown link 
&lt;/a&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
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
          <CardHeader title="Dropdown Color Variant"
            content="Use <code>btn-</code> class with below mentioned variation to color dropdown toggle." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="colorVariantDropdownPreview" role="tabpanel"
              aria-labelledby="colorVariantDropdownPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-3">
                <div>
                  <BDropdown variant="primary" class="me-3">
                    <template v-slot:button-content> Primary </template>
                    <BDropdownItem>Action</BDropdownItem>
                    <BDropdownItem>Another action</BDropdownItem>
                    <BDropdownItem>Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem>Separated link</BDropdownItem>
                  </BDropdown>

                  <BDropdown variant="success" class="me-3">
                    <template v-slot:button-content> Success </template>
                    <BDropdownItem>Action</BDropdownItem>
                    <BDropdownItem>Another action</BDropdownItem>
                    <BDropdownItem>Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem>Separated link</BDropdownItem>
                  </BDropdown>

                  <BDropdown variant="light" class="me-3">
                    <template v-slot:button-content> Light </template>
                    <BDropdownItem>Action</BDropdownItem>
                    <BDropdownItem>Another action</BDropdownItem>
                    <BDropdownItem>Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem>Separated link</BDropdownItem>
                  </BDropdown>

                  <BDropdown variant="info" class="me-3">
                    <template v-slot:button-content> Info </template>
                    <BDropdownItem>Action</BDropdownItem>
                    <BDropdownItem>Another action</BDropdownItem>
                    <BDropdownItem>Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem>Separated link</BDropdownItem>
                  </BDropdown>

                  <BDropdown variant="secondary" class="me-3">
                    <template v-slot:button-content> Secondary </template>
                    <BDropdownItem>Action</BDropdownItem>
                    <BDropdownItem>Another action</BDropdownItem>
                    <BDropdownItem>Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem>Separated link</BDropdownItem>
                  </BDropdown>

                  <BDropdown variant="warning" class="me-3">
                    <template v-slot:button-content> Warning </template>
                    <BDropdownItem>Action</BDropdownItem>
                    <BDropdownItem>Another action</BDropdownItem>
                    <BDropdownItem>Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem>Separated link</BDropdownItem>
                  </BDropdown>

                  <BDropdown variant="danger" class="me-3">
                    <template v-slot:button-content> Danger </template>
                    <BDropdownItem>Action</BDropdownItem>
                    <BDropdownItem>Another action</BDropdownItem>
                    <BDropdownItem>Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem>Separated link</BDropdownItem>
                  </BDropdown>

                  <BDropdown variant="dark" class="me-3">
                    <template v-slot:button-content> Dark </template>
                    <BDropdownItem>Action</BDropdownItem>
                    <BDropdownItem>Another action</BDropdownItem>
                    <BDropdownItem>Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem>Separated link</BDropdownItem>
                  </BDropdown>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="colorVariantDropdownCode" role="tabpanel"
              aria-labelledby="colorVariantDropdownCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Dropdown Variant --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Primary&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Success&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Light&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-info dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Info&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Secondary&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Warning&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Danger&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-dark dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Dark&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Split Button Dropdown"
            content="Use <code>dropdown-toggle-split</code> to create split button dropdowns as a single button dropdown." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="splitButtonDropdownPreview" role="tabpanel"
              aria-labelledby="splitButtonDropdownPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-3">
                <BDropdown split text="Primary" variant="primary">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here...</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
                <BDropdown split text="Success" variant="success">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here...</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
                <BDropdown split text="Light" variant="light">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here...</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
                <BDropdown split text="Info" variant="info">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here...</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
                <BDropdown split text="Secondary" variant="secondary">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here...</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
                <BDropdown split text="Warning" variant="warning">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here...</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
                <BDropdown split text="Danger" variant="danger">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here...</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
                <BDropdown split text="Dark" variant="dark">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here...</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
              </div>
            </div>
            <div class="tab-pane" id="splitButtonDropdownCode" role="tabpanel"
              aria-labelledby="splitButtonDropdownCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Split Button Dropdown --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Primary&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary dropdown-toggle dropdown-toggle-split&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success&quot;&gt;Success&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success dropdown-toggle dropdown-toggle-split&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;Light&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light dropdown-toggle dropdown-toggle-split&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot;&gt;Info&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-info dropdown-toggle dropdown-toggle-split&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>


<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot;&gt;Secondary&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary dropdown-toggle dropdown-toggle-split&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning&quot;&gt;Warning&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning dropdown-toggle dropdown-toggle-split&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger&quot;&gt;Danger&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger dropdown-toggle dropdown-toggle-split&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;Dark&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-dark dropdown-toggle dropdown-toggle-split&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- /btn-group --&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Dropdown Sizing" content="Use <code>btn-lg</code> class to create a large size dropdown button and
            <code>btn-sm</code> to create a small size dropdown button." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="sizingDropdownPreview" role="tabpanel"
              aria-labelledby="sizingDropdownPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-3 align-items-center">
                <!-- Large button groups (default and split) -->
                <BDropdown size="lg" variant="primary">
                  <template v-slot:button-content>
                    Large button
                  </template>
                  <BDropdownItemButton>Action</BDropdownItemButton>
                  <BDropdownItemButton>Another action</BDropdownItemButton>
                  <BDropdownItemButton>Something else here</BDropdownItemButton>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>

                <BDropdown size="lg" split text="Large split button" variant="light">
                  <BDropdownItemButton>Action</BDropdownItemButton>
                  <BDropdownItemButton>Another action</BDropdownItemButton>
                  <BDropdownItemButton>Something else here</BDropdownItemButton>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>

                <BDropdown size="sm" variant="primary">
                  <template v-slot:button-content>
                    Small button
                  </template>
                  <BDropdownItemButton>Action</BDropdownItemButton>
                  <BDropdownItemButton>Another action</BDropdownItemButton>
                  <BDropdownItemButton>Something else here</BDropdownItemButton>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>

                <BDropdown split text="Small split button" size="sm" variant="light">
                  <BDropdownItemButton>Action</BDropdownItemButton>
                  <BDropdownItemButton>Another action</BDropdownItemButton>
                  <BDropdownItemButton>Something else here</BDropdownItemButton>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
              </div>
            </div>
            <div class="tab-pane" id="sizingDropdownCode" role="tabpanel" aria-labelledby="sizingDropdownCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Dropdown Sizing --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button class=&quot;btn btn-primary btn-lg dropdown-toggle&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
Large button
&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button class=&quot;btn btn-light btn-lg&quot; type=&quot;button&quot;&gt;
Large split button
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-lg btn-light dropdown-toggle dropdown-toggle-split&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button class=&quot;btn btn-primary btn-sm dropdown-toggle&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
Small button
&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button class=&quot;btn btn-light btn-sm&quot; type=&quot;button&quot;&gt;
Small split button
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-sm btn-light dropdown-toggle dropdown-toggle-split&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
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
          <CardHeader title="Dark Dropdowns" content="Use <code>dropdown-menu-dark</code> class onto an existing dropdown-menu to
            create dropdown items dark." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="darkDropdownPreview" role="tabpanel"
              aria-labelledby="darkDropdownPreview-tab" tabindex="0">
              <div class="dropdown">
                <BDropdown text="Dropdown button" menu-class="dropdown-menu-dark">
                  <BDropdownItemButton>Action</BDropdownItemButton>
                  <BDropdownItemButton>Another action</BDropdownItemButton>
                  <BDropdownItemButton>Something else here</BDropdownItemButton>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItemButton>Separated link</BDropdownItemButton>
                </BDropdown>
              </div>
            </div>
            <div class="tab-pane" id="darkDropdownCode" role="tabpanel" aria-labelledby="darkDropdownCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;!-- Dark Dropdowns --&gt;
&lt;div class=&quot;dropdown&quot;&gt;
&lt;button class=&quot;btn btn-secondary dropdown-toggle&quot; type=&quot;button&quot; id=&quot;dropdownMenuButton2&quot; data-bs-toggle=&quot;dropdown&quot;
aria-expanded=&quot;false&quot;&gt;
Dropdown button
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu dropdown-menu-dark&quot; aria-labelledby=&quot;dropdownMenuButton2&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item active&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;
&lt;hr class=&quot;dropdown-divider&quot;&gt;
&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Alignment Options"
            content="Dropdown demo with various <code>dropdown alignment</code> options." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="alignmentOptionDropdownPreview" role="tabpanel"
              aria-labelledby="alignmentOptionDropdownPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-3">
                <BDropdown text="Dropdown" variant="secondary">
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                </BDropdown>

                <BDropdown text="Right-aligned menu" right variant="secondary">
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                </BDropdown>

                <BDropdown text="Left-aligned, right-aligned lg" right toggle-class="dropdown-menu-lg-end"
                  variant="secondary">
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                </BDropdown>

                <BDropdown text="Right-aligned, left-aligned lg" toggle-class="dropdown-menu-lg-start"
                  variant="secondary">
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                </BDropdown>

                <BDropdown text="Dropstart" dropleft variant="secondary">
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                </BDropdown>

                <BDropdown text="Dropend" dropright variant="secondary">
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                </BDropdown>

                <BDropdown text="Dropup" dropup variant="secondary">
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                </BDropdown>
              </div>
            </div>
            <div class="tab-pane" id="alignmentOptionDropdownCode" role="tabpanel"
              aria-labelledby="alignmentOptionDropdownCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Alignment options --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button class=&quot;btn btn-secondary dropdown-toggle&quot; type=&quot;button&quot; id=&quot;dropdownMenuButton&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;
Dropdown
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;dropdownMenuButton&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;
Right-aligned menu
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu dropdown-menu-end&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; data-bs-display=&quot;static&quot;
aria-expanded=&quot;false&quot;&gt;
Left-aligned, right-aligned lg
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu dropdown-menu-lg-end&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; data-bs-display=&quot;static&quot;
aria-expanded=&quot;false&quot;&gt;
Right-aligned, left-aligned lg
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu dropdown-menu-end dropdown-menu-lg-start&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;btn-group dropstart&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;
Dropstart
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;btn-group dropend&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;
Dropend
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;btn-group dropup&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;
Dropup
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Dropdown Options"
            content="Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change the position of the dropdown." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="OptionDropdownPreview" role="tabpanel"
              aria-labelledby="OptionDropdownPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-3">
                <BDropdown id="dropdown-offset" variant="secondary" offset="10, 20" text="Offset" class="me-1">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                </BDropdown>

                <BDropdown variant="secondary" v-model="show" split text="Reference">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here...</BDropdownItem>
                  <BDropdownDivider />
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
              </div>
            </div>
            <div class="tab-pane" id="OptionDropdownCode" role="tabpanel" aria-labelledby="OptionDropdownCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Dropdown Options --&gt;
&lt;div class=&quot;dropdown&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary dropdown-toggle&quot; id=&quot;dropdownMenuOffset&quot;
data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot; data-bs-offset=&quot;10,20&quot;&gt;
Offset
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;dropdownMenuOffset&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code>
                      
<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot;&gt;Reference&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary dropdown-toggle dropdown-toggle-split&quot; id=&quot;dropdownMenuReference&quot;
data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot; data-bs-reference=&quot;parent&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Toggle Dropdown&lt;/span&gt;
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;dropdownMenuReference&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;
&lt;hr class=&quot;dropdown-divider&quot;&gt;
&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Auto Close Behavior"
            content="By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the <code>autoClose</code> option to change this behavior of the dropdown." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="autoCloseBehaviorDropdownPreview" role="tabpanel"
              aria-labelledby="autoCloseBehaviorDropdownPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-3">
                <BDropdown text="Default dropdown" variant="light">
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                </BDropdown>

                <BDropdown text="Clickable outside" variant="light" auto-close="inside">
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                </BDropdown>

                <BDropdown text="Clickable inside" variant="light" auto-close="outside">
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                </BDropdown>

                <BDropdown text="Manual close" variant="light" :auto-close="false">
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                  <BDropdownItem>Menu item</BDropdownItem>
                </BDropdown>
              </div>
            </div>
            <div class="tab-pane" id="autoCloseBehaviorDropdownCode" role="tabpanel"
              aria-labelledby="autoCloseBehaviorDropdownCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Default dropdown --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button class=&quot;btn btn-light dropdown-toggle&quot; type=&quot;button&quot; id=&quot;defaultDropdown&quot; data-bs-toggle=&quot;dropdown&quot; data-bs-auto-close=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
Default dropdown
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;defaultDropdown&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Clickable outside dropdown --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button class=&quot;btn btn-light dropdown-toggle&quot; type=&quot;button&quot; id=&quot;dropdownMenuClickableOutside&quot; data-bs-toggle=&quot;dropdown&quot; data-bs-auto-close=&quot;inside&quot; aria-expanded=&quot;false&quot;&gt;
Clickable outside
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;dropdownMenuClickableOutside&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Clickable inside dropdown --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button class=&quot;btn btn-light dropdown-toggle&quot; type=&quot;button&quot; id=&quot;dropdownMenuClickableInside&quot; data-bs-toggle=&quot;dropdown&quot; data-bs-auto-close=&quot;outside&quot; aria-expanded=&quot;false&quot;&gt;
Clickable inside
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;dropdownMenuClickableInside&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Clickable inside dropdown --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button class=&quot;btn btn-light dropdown-toggle&quot; type=&quot;button&quot; id=&quot;dropdownMenuClickable&quot; data-bs-toggle=&quot;dropdown&quot; data-bs-auto-close=&quot;false&quot; aria-expanded=&quot;false&quot;&gt;
Manual close
&lt;/button&gt;
&lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;dropdownMenuClickable&quot;&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;javascript:void(0);&quot;&gt;Menu item&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Dropdown Menu Item Color" content="Example of dropdown menu and dropdown item color." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="menuItemColorDropdownPreview" role="tabpanel"
              aria-labelledby="menuItemColorDropdownPreview-tab" tabindex="0">
              <BRow>
                <BCol xxl="3">
                  <div>
                    <h6 class="font-size-13 mb-3">Dropdown Menu Success link example
                    </h6>
                    <div class="clearfix">
                      <div class="dropdown-menu d-inline-block position-relative dropdownmenu-success" style="z-index: 1">
                        <BLink class="dropdown-item" href="javascript:void(0)">Action</BLink>
                        <BLink class="dropdown-item" href="javascript:void(0)">Another action</BLink>
                        <BLink class="dropdown-item active" href="javascript:void(0)">Something else here</BLink>
                        <div class="dropdown-divider"></div>
                        <BLink class="dropdown-item" href="javascript:void(0)">Separated link</BLink>
                      </div>
                    </div>
                  </div>
                </BCol>

                <BCol lg="9">
                  <div class="mt-lg-0 mt-3">
                    <h6 class="font-size-13 mb-0">Dropdown Menu link Color example</h6>
                    <div>
                      <BRow>
                        <BCol lg="4" sm="6">
                          <div class="mt-3">
                            <p class="font-size-13 mb-2">Dropdown menu Primary link</p>
                            <BDropdown text="Primary" variant="primary" menu-class="dropdownmenu-primary">
                              <BDropdownItem>Action</BDropdownItem>
                              <BDropdownItem>Another action</BDropdownItem>
                              <BDropdownItem>Something else here</BDropdownItem>
                              <BDropdownDivider></BDropdownDivider>
                              <BDropdownItem>Separated link</BDropdownItem>
                            </BDropdown>
                          </div>
                        </BCol>
                        <BCol lg="4" sm="6">
                          <div class="mt-3">
                            <p class="font-size-13 mb-2">Dropdown menu Secondary link</p>
                            <BDropdown text="Secondary" variant="secondary" menu-class="dropdownmenu-secondary">
                              <BDropdownItem>Action</BDropdownItem>
                              <BDropdownItem>Another action</BDropdownItem>
                              <BDropdownItem>Something else here</BDropdownItem>
                              <BDropdownDivider></BDropdownDivider>
                              <BDropdownItem>Separated link</BDropdownItem>
                            </BDropdown>
                          </div>
                        </BCol>
                        <BCol lg="4" sm="6">
                          <div class="mt-3">
                            <p class="font-size-13 mb-2">Dropdown menu Success link</p>
                            <BDropdown text="Success" variant="success" menu-class="dropdownmenu-success">
                              <BDropdownItem>Action</BDropdownItem>
                              <BDropdownItem>Another action</BDropdownItem>
                              <BDropdownItem>Something else here</BDropdownItem>
                              <BDropdownDivider></BDropdownDivider>
                              <BDropdownItem>Separated link</BDropdownItem>
                            </BDropdown>
                          </div>
                        </BCol>
                        <BCol lg="4" sm="6">
                          <div class="mt-3">
                            <p class="font-size-13 mb-2">Dropdown menu Warning link</p>
                            <BDropdown text="Warning" variant="warning" menu-class="dropdownmenu-warning">
                              <BDropdownItem>Action</BDropdownItem>
                              <BDropdownItem>Another action</BDropdownItem>
                              <BDropdownItem>Something else here</BDropdownItem>
                              <BDropdownDivider></BDropdownDivider>
                              <BDropdownItem>Separated link</BDropdownItem>
                            </BDropdown>
                          </div>
                        </BCol>
                        <BCol lg="4" sm="6">
                          <div class="mt-3">
                            <p class="font-size-13 mb-2">Dropdown menu Info link</p>
                            <BDropdown text="Info" variant="info" menu-class="dropdownmenu-info">
                              <BDropdownItem>Action</BDropdownItem>
                              <BDropdownItem>Another action</BDropdownItem>
                              <BDropdownItem>Something else here</BDropdownItem>
                              <BDropdownDivider></BDropdownDivider>
                              <BDropdownItem>Separated link</BDropdownItem>
                            </BDropdown>
                          </div>
                        </BCol>
                        <BCol lg="4" sm="6">
                          <div class="mt-3">
                            <p class="font-size-13 mb-2">Dropdown menu Danger link</p>
                            <BDropdown text="Danger" variant="danger" menu-class="dropdownmenu-danger">
                              <BDropdownItem>Action</BDropdownItem>
                              <BDropdownItem>Another action</BDropdownItem>
                              <BDropdownItem>Something else here</BDropdownItem>
                              <BDropdownDivider></BDropdownDivider>
                              <BDropdownItem>Separated link</BDropdownItem>
                            </BDropdown>
                          </div>
                        </BCol>
                      </BRow>

                    </div>
                  </div>
                </BCol>
              </BRow>

            </div>
            <div class="tab-pane" id="menuItemColorDropdownCode" role="tabpanel"
              aria-labelledby="menuItemColorDropdownCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Dropdown Menu Item Color --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Primary&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-primary&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Secondary&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-secondary&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Success&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-success&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Warning&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-warning&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-info dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Info&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-info&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Danger&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-danger&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>



    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Menu Content"
            content="Example of dropdown menu containing <code>Headers, Text and Forms</code> content." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="menuContentDropdownPreview" role="tabpanel"
              aria-labelledby="menuContentDropdownPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <!-- Header -->
                <BDropdown variant="primary" text="Header">
                  <BDropdown-header> Welcome Jessie! </BDropdown-header>
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>

                <!-- Text -->
                <BDropdown variant="success" text="Text" menu-class="dropdown-menu-md p-3">
                  <p>Some example text that's free-flowing within the dropdown menu.</p>
                  <p class="mb-0">And this is more example text.</p>
                </BDropdown>

                <!-- Forms -->
                <BDropdown variant="light" text="Forms" menu-class="dropdown-menu-md p-4">
                  <form>
                    <div class="mb-2">
                      <label class="form-label" for="exampleDropdownFormEmail">Email address</label>
                      <input type="email" class="form-control" id="exampleDropdownFormEmail"
                        placeholder="email@example.com" />
                    </div>
                    <div class="mb-2">
                      <label class="form-label" for="exampleDropdownFormPassword">Password</label>
                      <input type="password" class="form-control" id="exampleDropdownFormPassword"
                        placeholder="Password" />
                    </div>
                    <div class="mb-2">
                      <div class="form-check custom-checkbox">
                        <input type="checkbox" class="form-check-input" id="rememberdropdownCheck" />
                        <label class="form-check-label" for="rememberdropdownCheck">Remember me</label>
                      </div>
                    </div>
                    <BButton variant="primary" type="submit"> Sign in </BButton>
                  </form>
                </BDropdown>
              </div>
            </div>
            <div class="tab-pane" id="menuContentDropdownCode" role="tabpanel"
              aria-labelledby="menuContentDropdownCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Menu Content --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
Header 
&lt;/button&gt;
&lt;div class=&quot;dropdown-menu&quot;&gt;
&lt;div class=&quot;dropdown-header noti-title&quot;&gt;
&lt;h5 class=&quot;font-size-13 text-muted text-truncate mn-0&quot;&gt;Welcome Jessie!&lt;/h5&gt;
&lt;/div&gt;
&lt;!-- item--&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- text Content --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
Text 
&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdown-menu-md p-3&quot;&gt;
&lt;p&gt;
Some example text that's free-flowing within the dropdown menu.
&lt;/p&gt;
&lt;p class=&quot;mb-0&quot;&gt;
And this is more example text.
&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Forms Content --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
Forms 
&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdown-menu-md p-4&quot;&gt;
&lt;form&gt;
&lt;div class=&quot;mb-2&quot;&gt;
&lt;label class=&quot;form-label&quot; for=&quot;exampleDropdownFormEmail&quot;&gt;Email address&lt;/label&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormEmail&quot; placeholder=&quot;email@example.com&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-2&quot;&gt;
&lt;label class=&quot;form-label&quot; for=&quot;exampleDropdownFormPasswo  rd&quot;&gt;Password&lt;/label&gt;
&lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormPassword&quot; placeholder=&quot;Password&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-2&quot;&gt;
&lt;div class=&quot;form-check custom-checkbox&quot;&gt;
  &lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;rememberdropdownCheck&quot;&gt;
  &lt;label class=&quot;form-check-label&quot; for=&quot;rememberdropdownCheck&quot;&gt;Remember me&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Sign in&lt;/button&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>

  </Layout>
</template>