<script>



export default {
  data() {
    return {
      defaultSelected1: null,
      defaultSelected2: null,
      defaultSelected3: null,
      selectedMulti: null,
      selectedMulti1: null,

      selectedSm: null,
      selectedMd: null,
      selectedLg: null,
    };
  },

};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Form Select" pagetitle="Forms" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>

    <BRow>
      <BCol lg="12">
        <BCard no-body>

          <CardHeader title="Default Select" content="Use <code>select</code> attribute with numerous options to show value with choice's option." />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="defaultSelectPreview" role="tabpanel"
              aria-labelledby="defaultSelectPreview-tab" tabindex="0">
              <BRow>
                <BCol lg="6">
                  <BFormSelect v-model="defaultSelected1" class="mb-3" aria-label="Default select example">
                    <option :value="null">Select your Status</option>
                    <option value="1">Declined Payment</option>
                    <option value="2">Delivery Error</option>
                    <option value="3">Wrong Amount</option>
                  </BFormSelect>
                </BCol>
                <BCol lg="6">
                  <BFormSelect v-model="defaultSelected2" class="rounded-pill mb-3" aria-label="Default select example">
                    <option :value="null">Search for services</option>
                    <option value="1">Information Architecture</option>
                    <option value="2">UI/UX Design</option>
                    <option value="3">Back End Development</option>
                  </BFormSelect>
                </BCol>
                <BCol lg="6">
                  <BFormSelect v-model="defaultSelected3" class="mb-3" aria-label="Disabled select example" disabled>
                    <option :value="null">Open this select menu (Disabled)</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </BFormSelect>
                </BCol>
              </BRow>
            </div>
            <div class="tab-pane" id="defaultSelectCode" role="tabpanel" aria-labelledby="defaultSelectCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height:250px;"><code> &lt;select class=&quot;form-select mb-3&quot; aria-label=&quot;Default select example&quot;&gt;
&lt;option selected&gt;Open this select menu&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;</code>

<code> &lt;select class=&quot;form-select rounded-pill mb-3&quot; aria-label=&quot;Default select example&quot;&gt;
&lt;option selected&gt;Search for services&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;Information Architecture&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;UI/UX Design&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Back End Development&lt;/option&gt;
&lt;/select&gt;</code>

<code>&lt;select class=&quot;form-select&quot; aria-label=&quot;Disabled select example&quot; disabled&gt;
&lt;option selected&gt;Open this select menu (Disabled)&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol> 
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Menu Size" content="Use <code>multiple</code> attribute to select multiple values and <code>size='your value'</code> attribute to show a number of choice option within a select area." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="MenuSizePreview" role="tabpanel" aria-labelledby="MenuSizePreview-tab"
              tabindex="0">
              <BRow class="gy-4">
                <BCol lg="6">
                  <BFormSelect v-model="selectedMulti" multiple aria-label="multiple select example">
                    <option :value="null">Open this select menu (multiple select option)</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </BFormSelect>
                </BCol>
                <BCol lg="6">
                  <BFormSelect v-model="selectedMulti1" multiple :select-size="3" aria-label="size 3 select example">
                    <option :value="null">Open this select menu (select menu size)</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                  </BFormSelect>
                </BCol>
              </BRow>
            </div>
            <div class="tab-pane" id="MenuSizeCode" role="tabpanel" aria-labelledby="MenuSizeCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 250px;"><code>&lt;select class=&quot;form-select&quot; multiple aria-label=&quot;multiple select example&quot;&gt;
&lt;option selected&gt;Open this select menu (multiple select option)&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;</code>

<code>&lt;select class=&quot;form-select&quot; size=&quot;3&quot; aria-label=&quot;size 3 select example&quot;&gt;
&lt;option selected&gt;Open this select menu (select menu size)&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;option value=&quot;4&quot;&gt;Four&lt;/option&gt;
&lt;option value=&quot;5&quot;&gt;Five&lt;/option&gt;
&lt;/select&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol> 
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Select Size" content="Use <code>form-select-sm</code> class to set small select size and <code>form-select-lg</code> class to form-select class to set large select size. No such class is required for default select size." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="SelectSizePreview" role="tabpanel"
              aria-labelledby="SelectSizePreview-tab" tabindex="0">
              <BRow class="align-items-center g-3">
                <BCol lg="4">
                  <BFormSelect v-model="selectedSm" class="form-select-sm" aria-label=".form-select-sm example">
                    <option :value="null">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </BFormSelect>
                </BCol>
                <BCol lg="4">
                  <BFormSelect v-model="selectedMd" aria-label=".form-select-sm example">
                    <option :value="null">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </BFormSelect>
                </BCol>
                <BCol lg="4">
                  <BFormSelect v-model="selectedLg" class="form-select-lg" aria-label=".form-select-lg example">
                    <option :value="null">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </BFormSelect>
                </BCol>
              </BRow>
            </div>
            <div class="tab-pane" id="SelectSizeCode" role="tabpanel" aria-labelledby="SelectSizeCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 275px;"><code>&lt;select class=&quot;form-select form-select-sm  mb-3&quot; aria-label=&quot;.form-select-sm example&quot;&gt;
&lt;option selected&gt;Open this select menu&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;</code>

<code>&lt;select class=&quot;form-select mb-3&quot; aria-label=&quot;.form-select-lg example&quot;&gt;
&lt;option selected&gt;Open this select menu&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;</code>

<code>&lt;select class=&quot;form-select form-select-lg&quot; aria-label=&quot;.form-select-lg example&quot;&gt;
&lt;option selected&gt;Open this select menu&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>
  </Layout>
</template>