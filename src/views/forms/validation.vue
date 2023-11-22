<script>



export default {
  data() {
    return {
      firstName: 'Mark',
      lastName: 'Otto',
      username: '',
      city: '',
      state: null,
      zip: '',
      agreedToTerms: false,
      onSubmit: false,
      customValidation: false
    };
  },
  methods: {
    submitTooltipForm() {
      this.onSubmit = true;
    },
    submitCustomForm() {
      this.customValidation = true;
    }
  },

};
</script>

<template>
  <Layout>
    <div class="page-title-box">
        <BRow class="align-items-center">
            <BCol md="5">
                <PageHeader title="Form Validation" pagetitle="Forms" />
            </BCol>
            <BCol md="auto" class="ms-auto">
                <RightBar />
            </BCol>
        </BRow>
    </div>
    <BRow>
      <BCol lg="12">
          <BCard no-body>
            <CardHeader title="Browser default" content="Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript." />
              <BCardBody class="tab-content">
                  <div class="tab-pane show active" id="defaultBrowserPreview" role="tabpanel" aria-labelledby="defaultBrowserPreview-tab" tabindex="0">
                    <BForm @submit="submitForm" class="row g-3">
                      <BCol md="4">
                        <label for="validationDefault01" class="form-label">First name</label>
                        <BFormInput v-model="firstName" id="validationDefault01" required></BFormInput>
                      </BCol>
                      <BCol md="4">
                        <label for="validationDefault02" class="form-label">Last name</label>
                        <BFormInput v-model="lastName" id="validationDefault02" required></BFormInput>
                      </BCol>
                      <BCol md="4">
                        <label for="validationDefaultUsername" class="form-label">Username</label>
                        <BInputGroup>
                          <BInputGroupPrepend is-text>@</BInputGroupPrepend>
                          <BFormInput v-model="username" id="validationDefaultUsername" required></BFormInput>
                        </BInputGroup>
                      </BCol>
                      <BCol md="6">
                        <label for="validationDefault03" class="form-label">City</label>
                        <BFormInput v-model="city" id="validationDefault03" required></BFormInput>
                      </BCol>
                      <BCol md="3">
                        <label for="validationDefault04" class="form-label">State</label>
                        <BFormSelect v-model="state" id="validationDefault04" required>
                          <option disabled value="">Choose...</option>
                          <option>...</option>
                        </BFormSelect>
                      </BCol>
                      <BCol md="3">
                        <label for="validationDefault05" class="form-label">Zip</label>
                        <BFormInput v-model="zip" id="validationDefault05" required></BFormInput>
                      </BCol>
                      <BCol cols="12">
                        <BFormCheckbox v-model="agreedToTerms" id="invalidCheck2" required>
                          Agree to terms and conditions
                        </BFormCheckbox>
                      </BCol>
                      <BCol cols="12">
                        <BButton type="submit" variant="primary">Submit form</BButton>
                      </BCol>
                    </BForm>
                  </div>
                  <div class="tab-pane" id="defaultBrowserCode" role="tabpanel" aria-labelledby="defaultBrowserCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
<pre class="language-markup" style="height: 352px"><code>&lt;form class=&quot;row g-3&quot;&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;validationDefault01&quot; class=&quot;form-label&quot;&gt;First name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationDefault01&quot; value=&quot;Mark&quot; required&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;validationDefault02&quot; class=&quot;form-label&quot;&gt;Last name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationDefault02&quot; value=&quot;Otto&quot; required&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;validationDefaultUsername&quot; class=&quot;form-label&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group&quot;&gt;
&lt;span class=&quot;input-group-text&quot; id=&quot;inputGroupPrepend2&quot;&gt;@&lt;/span&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationDefaultUsername&quot; aria-describedby=&quot;inputGroupPrepend2&quot;
required&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6&quot;&gt;
&lt;label for=&quot;validationDefault03&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationDefault03&quot; required&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-3&quot;&gt;
&lt;label for=&quot;validationDefault04&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
&lt;select class=&quot;form-select&quot; id=&quot;validationDefault04&quot; required&gt;
&lt;option selected disabled value=&quot;&quot;&gt;Choose...&lt;/option&gt;
&lt;option&gt;...&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-3&quot;&gt;
&lt;label for=&quot;validationDefault05&quot; class=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationDefault05&quot; required&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;invalidCheck2&quot; required&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;invalidCheck2&quot;&gt;
Agree to terms and conditions
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;button class=&quot;btn btn-primary&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
      </BCol> 
    </BRow>
  

  <BRow>
      <BCol lg="12">
          <BCard no-body>
            <CardHeader title="Custom Styles" content="For custom Bootstrap form validation messages, you’ll need to add the <code>novalidate</code> boolean attribute to your <code>form</code>. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you’ll see the <code>:invalid</code> and <code>:valid</code> styles applied to your form controls." />
              <BCardBody class="tab-content">
                  <div class="tab-pane show active" id="customStylesPreview" role="tabpanel" aria-labelledby="customStylesPreview-tab" tabindex="0">
                    <BForm @submit="submitCustomForm" class="row g-3" :validated="customValidation" :novalidate="true">
                      <BCol md="4">
                        <label for="validationCustom01" class="form-label">First name</label>
                        <BFormInput v-model="firstName" id="validationCustom01" required></BFormInput>
                        <BFormInvalidFeedback>Please provide a valid first name.</BFormInvalidFeedback>
                        <BFormValidFeedback>Looks good!</BFormValidFeedback>
                      </BCol>
                      <BCol md="4">
                        <label for="validationCustom02" class="form-label">Last name</label>
                        <BFormInput v-model="lastName" id="validationCustom02" required></BFormInput>
                        <BFormInvalidFeedback>Please provide a valid last name.</BFormInvalidFeedback>
                        <BFormValidFeedback>Looks good!</BFormValidFeedback>
                      </BCol>
                      <BCol md="4">
                        <label for="validationCustomUsername" class="form-label">Username</label>
                        <BInputGroup>
                          <BInputGroupPrepend is-text>@</BInputGroupPrepend>
                          <BFormInput v-model="username" id="validationCustomUsername" required></BFormInput>
                          <BFormInvalidFeedback>Please choose a username.</BFormInvalidFeedback>
                        </BInputGroup>
                      </BCol>
                      <BCol md="6">
                        <label for="validationCustom03" class="form-label">City</label>
                        <BFormInput v-model="city" id="validationCustom03" required></BFormInput>
                        <BFormInvalidFeedback>Please provide a valid city.</BFormInvalidFeedback>
                      </BCol>
                      <BCol md="3">
                        <label for="validationCustom04" class="form-label">State</label>
                        <BFormSelect v-model="state" id="validationCustom04" required>
                          <option disabled value="">Choose...</option>
                          <option>...</option>
                        </BFormSelect>
                        <BFormInvalidFeedback>Please select a valid state.</BFormInvalidFeedback>
                      </BCol>
                      <BCol md="3">
                        <label for="validationCustom05" class="form-label">Zip</label>
                        <BFormInput v-model="zip" id="validationCustom05" required></BFormInput>
                        <BFormInvalidFeedback>Please provide a valid zip.</BFormInvalidFeedback>
                      </BCol>
                      <BCol cols="12">
                        <BFormCheckbox v-model="agreedToTerms" id="invalidCheck" required>
                          Agree to terms and conditions
                        </BFormCheckbox>
                        <BFormInvalidFeedback>You must agree before submitting.</BFormInvalidFeedback>
                      </BCol>
                      <BCol cols="12">
                        <BButton type="submit" variant="primary">Submit form</BButton>
                      </BCol>
                    </BForm>
                  </div>
                  <div class="tab-pane" id="customStylesCode" role="tabpanel" aria-labelledby="customStylesCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
<pre class="language-markup" style="height: 310px;"><code>&lt;form class=&quot;row g-3 needs-validation&quot; novalidate&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;validationCustom01&quot; class=&quot;form-label&quot;&gt;First name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationCustom01&quot; value=&quot;Mark&quot; required&gt;
&lt;div class=&quot;valid-feedback&quot;&gt;
Looks good!
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;validationCustom02&quot; class=&quot;form-label&quot;&gt;Last name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationCustom02&quot; value=&quot;Otto&quot; required&gt;
&lt;div class=&quot;valid-feedback&quot;&gt;
Looks good!
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;validationCustomUsername&quot; class=&quot;form-label&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group has-validation&quot;&gt;
&lt;span class=&quot;input-group-text&quot; id=&quot;inputGroupPrepend&quot;&gt;@&lt;/span&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationCustomUsername&quot; aria-describedby=&quot;inputGroupPrepend&quot;
required&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;
Please choose a username.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6&quot;&gt;
&lt;label for=&quot;validationCustom03&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationCustom03&quot; required&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;
Please provide a valid city.
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-3&quot;&gt;
&lt;label for=&quot;validationCustom04&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
&lt;select class=&quot;form-select&quot; id=&quot;validationCustom04&quot; required&gt;
&lt;option selected disabled value=&quot;&quot;&gt;Choose...&lt;/option&gt;
&lt;option&gt;...&lt;/option&gt;
&lt;/select&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;
Please select a valid state.
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-3&quot;&gt;
&lt;label for=&quot;validationCustom05&quot; class=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationCustom05&quot; required&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;
Please provide a valid zip.
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;invalidCheck&quot; required&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;invalidCheck&quot;&gt;
Agree to terms and conditions
&lt;/label&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;
You must agree before submitting.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;button class=&quot;btn btn-primary&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
      </BCol> 

      <BRow>
          <BCol lg="12">
              <BCard no-body>
                  <BCardHeader class="d-flex gap-3">
                      <div class="flex-grow-1">
                          <BCardTitle class="mb-1">Supported Elements</BCardTitle>
                          <p class="text-muted mb-0">Block-level or inline-level form text can be created using <code>.form-text</code>.</p>
                      </div>
                      <div class="flex-shrink-0">
                          <div class="nav nav-pills code-menu bg-light p-1 rounded" role="tablist">
                              <button class="nav-link active" id="supportedElementsPreview-tab" data-bs-toggle="pill" data-bs-target="#supportedElementsPreview" type="button" role="tab" aria-controls="supportedElementsPreview" aria-selected="true">Preview</button>
                              <button class="nav-link" id="supportedElementsCode-tab" data-bs-toggle="pill" data-bs-target="#supportedElementsCode" type="button" role="tab" aria-controls="supportedElementsCode" aria-selected="false">HTML</button>
                          </div>
                      </div>
                  </BCardHeader>
                  <BCardBody class="tab-content">
                      <div class="tab-pane show active" id="supportedElementsPreview" role="tabpanel" aria-labelledby="supportedElementsPreview-tab" tabindex="0">
                          <form class="was-validated">
                              <div class="mb-3">
                                  <label for="validationTextarea" class="form-label">Textarea</label>
                                  <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                                  <div class="invalid-feedback">
                                  Please enter a message in the textarea.
                                  </div>
                              </div>

                              <div class="form-check mb-3">
                                  <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
                                  <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
                                  <div class="invalid-feedback">Example invalid feedback text</div>
                              </div>

                              <div class="form-check">
                                  <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required>
                                  <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
                              </div>
                              <div class="form-check mb-3">
                                  <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required>
                                  <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
                                  <div class="invalid-feedback">More example invalid feedback text</div>
                              </div>

                              <div class="mb-3">
                                  <select class="form-select" required aria-label="select example">
                                      <option value="">Open this select menu</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </select>
                                  <div class="invalid-feedback">Example invalid select feedback</div>
                              </div>

                              <div class="mb-3">
                                  <input type="file" class="form-control" aria-label="file example" required>
                                  <div class="invalid-feedback">Example invalid form file feedback</div>
                              </div>

                              <div class="mb-0">
                                  <button class="btn btn-primary" type="submit" disabled>Submit form</button>
                              </div>
                          </form>
                      </div>
                      <div class="tab-pane" id="supportedElementsCode" role="tabpanel" aria-labelledby="supportedElementsCode-tab" tabindex="0">
                          <h5 class="fs-sm text-muted">HTML Preview</h5>
<pre class="language-markup" style="height: 352px"><code>&lt;form class=&quot;was-validated&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;validationTextarea&quot; class=&quot;form-label&quot;&gt;Textarea&lt;/label&gt;
&lt;textarea class=&quot;form-control is-invalid&quot; id=&quot;validationTextarea&quot; placeholder=&quot;Required example textarea&quot;
required&gt;&lt;/textarea&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;
Please enter a message in the textarea.
&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;form-check mb-3&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;validationFormCheck1&quot; required&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;validationFormCheck1&quot;&gt;Check this checkbox&lt;/label&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;Example invalid feedback text&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;form-check&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;form-check-input&quot; id=&quot;validationFormCheck2&quot; name=&quot;radio-stacked&quot; required&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;validationFormCheck2&quot;&gt;Toggle this radio&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;form-check mb-3&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;form-check-input&quot; id=&quot;validationFormCheck3&quot; name=&quot;radio-stacked&quot; required&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;validationFormCheck3&quot;&gt;Or toggle this other radio&lt;/label&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;More example invalid feedback text&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;mb-3&quot;&gt;
&lt;select class=&quot;form-select&quot; required aria-label=&quot;select example&quot;&gt;
&lt;option value=&quot;&quot;&gt;Open this select menu&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;Example invalid select feedback&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;mb-3&quot;&gt;
&lt;input type=&quot;file&quot; class=&quot;form-control&quot; aria-label=&quot;file example&quot; required&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;Example invalid form file feedback&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;mb-3&quot;&gt;
&lt;button class=&quot;btn btn-primary&quot; type=&quot;submit&quot; disabled&gt;Submit form&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                      </div>
                  </BCardBody>
              </BCard>
          </BCol> 
      </BRow>
      

      <BRow>
          <BCol lg="12">
              <BCard no-body>
                <CardHeader title="Tooltips" content="If your form layout allows it, you can swap the <code>.{valid|invalid}-feedback</code> classes for <code>.{valid|invalid}-tooltip</code> classes to display validation feedback in a styled tooltip. Be sure to have a parent with <code>position: relative</code> on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup." />
                  <BCardBody class="tab-content">
                      <div class="tab-pane show active" id="tooltipsPreview" role="tabpanel" aria-labelledby="tooltipsPreview-tab" tabindex="0">
                        <BForm @submit="submitTooltipForm" class="row g-3" :validated="onSubmit" :novalidate="true">
                          <BCol md="4" class="position-relative">
                            <label for="validationTooltip01" class="form-label">First name</label>
                            <BFormInput v-model="firstName" id="validationTooltip01" required></BFormInput>
                            <BFormValidFeedback :tooltip="true">Looks good!</BFormValidFeedback>
                          </BCol>
                          <BCol md="4" class="position-relative">
                            <label for="validationTooltip02" class="form-label">Last name</label>
                            <BFormInput v-model="lastName" id="validationTooltip02" required></BFormInput>
                            <BFormValidFeedback :tooltip="true">Looks good!</BFormValidFeedback>
                          </BCol>
                          <BCol md="4" class="position-relative">
                            <label for="validationTooltipUsername" class="form-label">Username</label>
                            <BInputGroup>
                              <BInputGroupPrepend is-text>@</BInputGroupPrepend>
                              <BFormInput v-model="username" id="validationTooltipUsername" required></BFormInput>
                              <BFormInvalidFeedback :tooltip="true">Please choose a unique and valid username.</BFormInvalidFeedback>
                            </BInputGroup>
                          </BCol>
                          <BCol md="6" class="position-relative">
                            <label for="validationTooltip03" class="form-label">City</label>
                            <BFormInput v-model="city" id="validationTooltip03" required></BFormInput>
                            <BFormInvalidFeedback :tooltip="true">Please provide a valid city.</BFormInvalidFeedback>
                          </BCol>
                          <BCol md="3" class="position-relative">
                            <label for="validationTooltip04" class="form-label">State</label>
                            <BFormSelect v-model="state" id="validationTooltip04" required>
                              <option disabled value="">Choose...</option>
                              <option>...</option>
                            </BFormSelect>
                            <BFormInvalidFeedback :tooltip="true">Please select a valid state.</BFormInvalidFeedback>
                          </BCol>
                          <BCol md="3" class="position-relative">
                            <label for="validationTooltip05" class="form-label">Zip</label>
                            <BFormInput v-model="zip" id="validationTooltip05" required></BFormInput>
                            <BFormInvalidFeedback :tooltip="true">Please provide a valid zip.</BFormInvalidFeedback>
                          </BCol>
                          <BCol cols="12">
                            <BButton type="submit" variant="primary">Submit form</BButton>
                          </BCol>
                        </BForm>
                      </div>
                      <div class="tab-pane" id="tooltipsCode" role="tabpanel" aria-labelledby="tooltipsCode-tab" tabindex="0">
                          <h5 class="fs-sm text-muted">HTML Preview</h5>
<pre class="language-markup" style="height: 310px;"><code>&lt;form class=&quot;row g-3 needs-validation&quot; novalidate&gt;
&lt;div class=&quot;col-md-4 position-relative&quot;&gt;
&lt;label for=&quot;validationTooltip01&quot; class=&quot;form-label&quot;&gt;First name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationTooltip01&quot; value=&quot;Mark&quot; required&gt;
&lt;div class=&quot;valid-tooltip&quot;&gt;
Looks good!
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4 position-relative&quot;&gt;
&lt;label for=&quot;validationTooltip02&quot; class=&quot;form-label&quot;&gt;Last name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationTooltip02&quot; value=&quot;Otto&quot; required&gt;
&lt;div class=&quot;valid-tooltip&quot;&gt;
Looks good!
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4 position-relative&quot;&gt;
&lt;label for=&quot;validationTooltipUsername&quot; class=&quot;form-label&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group has-validation&quot;&gt;
&lt;span class=&quot;input-group-text&quot; id=&quot;validationTooltipUsernamePrepend&quot;&gt;@&lt;/span&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationTooltipUsername&quot;
aria-describedby=&quot;validationTooltipUsernamePrepend&quot; required&gt;
&lt;div class=&quot;invalid-tooltip&quot;&gt;
Please choose a unique and valid username.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6 position-relative&quot;&gt;
&lt;label for=&quot;validationTooltip03&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationTooltip03&quot; required&gt;
&lt;div class=&quot;invalid-tooltip&quot;&gt;
Please provide a valid city.
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-3 position-relative&quot;&gt;
&lt;label for=&quot;validationTooltip04&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
&lt;select class=&quot;form-select&quot; id=&quot;validationTooltip04&quot; required&gt;
&lt;option selected disabled value=&quot;&quot;&gt;Choose...&lt;/option&gt;
&lt;option&gt;...&lt;/option&gt;
&lt;/select&gt;
&lt;div class=&quot;invalid-tooltip&quot;&gt;
Please select a valid state.
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-3 position-relative&quot;&gt;
&lt;label for=&quot;validationTooltip05&quot; class=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationTooltip05&quot; required&gt;
&lt;div class=&quot;invalid-tooltip&quot;&gt;
Please provide a valid zip.
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;button class=&quot;btn btn-primary&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                      </div>
                  </BCardBody>
              </BCard>
          </BCol> 

      </BRow>
      

    </BRow>
</Layout>
</template>