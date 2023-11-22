<script>



import flatPickr from "vue-flatpickr-component";

export default {
  data() {
    return {
    };
  },
  components: {
    flatPickr
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
        <BRow class="align-items-center">
            <BCol md="5">
                <PageHeader title="Form Layout" pagetitle="Forms" />
            </BCol>
            <BCol md="auto" class="ms-auto">
                <RightBar />
            </BCol>
        </BRow>
    </div>
    <BRow>
      <BCol xxl="12">
          <BCard no-body>
            <CardHeader title="Form Grid" content="More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options. <span class='fw-medium'>Requires the <code>$enable-grid-classes</code> Sass variable to be enabled</span> (on by default)." />
              <BCardBody class="tab-content">
                  <div class="tab-pane show active" id="formGridPreview" role="tabpanel" aria-labelledby="formGridPreview-tab" tabindex="0">
                    <BForm action="#">
                      <BRow>
                          <BCol md="6">
                              <div class="mb-3">
                                  <label for="firstNameinput" class="form-label">First Name</label>
                                  <BFormInput type="text" placeholder="Enter your firstname"
                                      id="firstNameinput"></BFormInput>
                              </div>
                          </BCol>
                          <BCol md="6">
                              <div class="mb-3">
                                  <label for="lastNameinput" class="form-label">Last Name</label>
                                  <BFormInput type="text" placeholder="Enter your lastname"
                                      id="lastNameinput"></BFormInput>
                              </div>
                          </BCol>
                          <BCol md="12">
                              <div class="mb-3">
                                  <label for="compnayNameinput" class="form-label">Company Name</label>
                                  <BFormInput type="text" placeholder="Enter company name"
                                      id="compnayNameinput"></BFormInput>
                              </div>
                          </BCol>
                          <BCol md="6">
                              <div class="mb-3">
                                  <label for="phonenumberInput" class="form-label">Phone Number</label>
                                  <BFormInput type="tel" placeholder="+(245) 451 45123"
                                      id="phonenumberInput"></BFormInput>
                              </div>
                          </BCol>
                          <BCol md="6">
                              <div class="mb-3">
                                  <label for="emailidInput" class="form-label">Email Address</label>
                                  <BFormInput type="email" placeholder="example@gamil.com"
                                      id="emailidInput"></BFormInput>
                              </div>
                          </BCol>
                          <BCol md="12">
                              <div class="mb-3">
                                  <label for="address1ControlTextarea" class="form-label">Address</label>
                                  <BFormInput type="text" placeholder="Address 1"
                                      id="address1ControlTextarea"></BFormInput>
                              </div>
                          </BCol>
                          <BCol md="6">
                              <div class="mb-3">
                                  <label for="citynameInput" class="form-label">City</label>
                                  <BFormInput type="text" placeholder="Enter your city"
                                      id="citynameInput"></BFormInput>
                              </div>
                          </BCol>
                          <BCol md="6">
                              <div class="mb-3">
                                  <label for="ForminputState" class="form-label">State</label>
                                  <BFormSelect id="ForminputState" data-choices data-choices-sorting="true">
                                      <option selected>Choose...</option>
                                      <option>...</option>
                                  </BFormSelect>
                              </div>
                          </BCol>
                          <BCol lg="12">
                              <div class="text-end">
                                  <BButton type="submit" variant="primary">Submit</BButton>
                              </div>
                          </BCol>
                      </BRow>
                  </BForm>
                  </div>
                  <div class="tab-pane" id="formGridCode" role="tabpanel" aria-labelledby="formGridCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup" style="height: 375px;"><code>&lt;form action=&quot;javascript:void(0);&quot;&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;firstNameinput&quot; class=&quot;form-label&quot;&gt;First Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Enter your firstname&quot; id=&quot;firstNameinput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;lastNameinput&quot; class=&quot;form-label&quot;&gt;Last Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Enter your lastname&quot; id=&quot;lastNameinput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;compnayNameinput&quot; class=&quot;form-label&quot;&gt;Company Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Enter company name&quot; id=&quot;compnayNameinput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;phonenumberInput&quot; class=&quot;form-label&quot;&gt;Phone Number&lt;/label&gt;
&lt;input type=&quot;tel&quot; class=&quot;form-control&quot; placeholder=&quot;+(245) 451 45123&quot; id=&quot;phonenumberInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;emailidInput&quot; class=&quot;form-label&quot;&gt;Email Address&lt;/label&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; placeholder=&quot;example@gamil.com&quot; id=&quot;emailidInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;address1ControlTextarea&quot; class=&quot;form-label&quot;&gt;Address&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Address 1&quot; id=&quot;address1ControlTextarea&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;citynameInput&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; placeholder=&quot;Enter your city&quot; id=&quot;citynameInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;ForminputState&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
&lt;select id=&quot;ForminputState&quot; class=&quot;form-select&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option&gt;...&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-lg-12&quot;&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;&lt;!--end row--&gt;
&lt;/form&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
      </BCol> 

      <BCol xxl="12">
          <BCard no-body>
            <CardHeader title="Gutters" content="By adding <a href='#' class='text-decoration-underline'>gutter modifier classes</a>, you can have control over the gutter width in as well the inline as block direction. <span class='fw-medium'>Also requires the <code>$enable-grid-classes</code> Sass variable to be enabled</span> (on by default)." />
              <BCardBody class="tab-content">
                  <div class="tab-pane show active" id="formGuttersPreview" role="tabpanel" aria-labelledby="formGuttersPreview-tab" tabindex="0">
                    <BForm action="#" class="row g-3">
                      <BRow>
                          <BCol md="12">
                              <div class="mb-3 mt-3">
                                  <label for="fullnameInput" class="form-label">Name</label>
                                  <BFormInput type="text" id="fullnameInput"
                                      placeholder="Enter your name"></BFormInput>
                              </div>
                          </BCol>
                          <BCol md="6">
                              <div class="mb-3">
                                  <label for="inputEmail4" class="form-label">Email</label>
                                  <BFormInput type="email" id="inputEmail4" placeholder="Email"></BFormInput>
                              </div>
                          </BCol>
                          <BCol md="6">
                              <div class="mb-3">
                                  <label for="inputPassword4" class="form-label">Password</label>
                                  <BFormInput type="password" id="inputPassword4"
                                      placeholder="Password"></BFormInput>
                              </div>
                          </BCol>
                          <BCol cols="12">
                              <div class="mb-3">
                                  <label for="inputAddress" class="form-label">Address</label>
                                  <BFormInput type="text" id="inputAddress"
                                      placeholder="1234 Main St"></BFormInput>
                              </div>
                          </BCol>
                          <BCol cols="12">
                              <div class="mb-3">
                                  <label for="inputAddress2" class="form-label">Address 2</label>
                                  <BFormInput type="text" id="inputAddress2"
                                      placeholder="Apartment, studio, or floor"></BFormInput>
                              </div>
                          </BCol>
                          <BCol md="6">
                              <div class="mb-3">
                                  <label for="inputCity" class="form-label">City</label>
                                  <BFormInput type="text" id="inputCity"
                                      placeholder="Enter your city"></BFormInput>
                              </div>
                          </BCol>
                          <BCol md="4">
                              <div class="mb-3">
                                  <label for="inputState" class="form-label">State</label>
                                  <BFormSelect id="inputState" data-choices data-choices-sorting="true">
                                      <option selected>Choose...</option>
                                      <option>...</option>
                                  </BFormSelect>
                              </div>
                          </BCol>
                          <BCol md="2">
                              <div class="mb-3">
                                  <label for="inputZip" class="form-label">Zip</label>
                                  <BFormInput type="text" id="inputZip" placeholder="Zip code"></BFormInput>
                              </div>
                          </BCol>
                          <BCol cols="12">
                              <div class="form-check mb-3 ps-0">
                                  <BFormCheckbox id="gridCheck" class="form-check-input">Check me
                                      out</BFormCheckbox>
                              </div>
                          </BCol>
                          <BCol cols="12">
                              <div class="text-end">
                                  <BButton type="submit" variant="primary">Sign in</BButton>
                              </div>
                          </BCol>
                      </BRow>
                  </BForm>
                  </div>
                  <div class="tab-pane" id="formGuttersCode" role="tabpanel" aria-labelledby="formGuttersCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup" style="height: 338px;"><code>&lt;form action=&quot;javascript:void(0);&quot; class=&quot;row g-3&quot;&gt;
&lt;div class=&quot;col-md-12&quot;&gt;
&lt;label for=&quot;fullnameInput&quot; class=&quot;form-label&quot;&gt;Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;fullnameInput&quot; placeholder=&quot;Enter your name&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6&quot;&gt;
&lt;label for=&quot;inputEmail4&quot; class=&quot;form-label&quot;&gt;Email&lt;/label&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;inputEmail4&quot; placeholder=&quot;Email&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6&quot;&gt;
&lt;label for=&quot;inputPassword4&quot; class=&quot;form-label&quot;&gt;Password&lt;/label&gt;
&lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;inputPassword4&quot; placeholder=&quot;Password&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;label for=&quot;inputAddress&quot; class=&quot;form-label&quot;&gt;Address&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputAddress&quot; placeholder=&quot;1234 Main St&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;label for=&quot;inputAddress2&quot; class=&quot;form-label&quot;&gt;Address 2&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputAddress2&quot; placeholder=&quot;Apartment, studio, or floor&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6&quot;&gt;
&lt;label for=&quot;inputCity&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputCity&quot; placeholder=&quot;Enter your city&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;inputState&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
&lt;select id=&quot;inputState&quot; class=&quot;form-select&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option&gt;...&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-2&quot;&gt;
&lt;label for=&quot;inputZip&quot; class=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputZip&quot; placeholder=&quot;Zin code&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;gridCheck&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;gridCheck&quot;&gt;
Check me out
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Sign in&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
      </BCol> 
  </BRow>
  

  <BRow>
      <BCol xxl="6">
          <BCard no-body>
            <CardHeader title="Vertical Form" content="Example of vertical form using <code>form-control</code> class. No need to specify row and col class to create vertical form." />
              <BCardBody class="tab-content">
                  <div class="tab-pane show active" id="formVerticalPreview" role="tabpanel" aria-labelledby="formVerticalPreview-tab" tabindex="0">
                    <BForm action="#">
                      <div class="mb-3">
                          <label for="employeeName" class="form-label">Employee Name</label>
                          <BFormInput type="text" id="employeeName"
                              placeholder="Enter employee name"></BFormInput>
                      </div>
                      <div class="mb-3">
                          <label for="employeeUrl" class="form-label">Employee Department URL</label>
                          <BFormInput type="url" id="employeeUrl" placeholder="Enter employee URL"></BFormInput>
                      </div>
                      <div class="mb-3">
                          <label for="StartleaveDate" class="form-label">Start Leave Date</label>
                          <flat-pickr id="StartleaveDate" class="form-control"></flat-pickr>
                      </div>
                      <div class="mb-3">
                          <label for="EndleaveDate" class="form-label">End Leave Date</label>
                          <flat-pickr id="EndleaveDate" class="form-control"></flat-pickr>
                      </div>
                      <div class="mb-3">
                          <label for="VertimeassageInput" class="form-label">Message</label>
                          <BFormTextarea id="VertimeassageInput" rows="3"
                              placeholder="Enter your message"></BFormTextarea>
                      </div>
                      <div class="text-end">
                          <BButton type="submit" variant="primary">Add Leave</BButton>
                      </div>
                  </BForm>
                  </div>
                  <div class="tab-pane" id="formVerticalCode" role="tabpanel" aria-labelledby="formVerticalCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup" style="height: 375px;"><code>&lt;form action=&quot;&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;employeeName&quot; class=&quot;form-label&quot;&gt;Employee Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;employeeName&quot; placeholder=&quot;Enter emploree name&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;employeeUrl&quot; class=&quot;form-label&quot;&gt;Employee Department URL&lt;/label&gt;
&lt;input type=&quot;url&quot; class=&quot;form-control&quot; id=&quot;employeeUrl&quot; placeholder=&quot;Enter emploree url&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;StartleaveDate&quot; class=&quot;form-label&quot;&gt;Start Leave Date&lt;/label&gt;
&lt;input type=&quot;date&quot; class=&quot;form-control&quot; id=&quot;StartleaveDate&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;EndleaveDate&quot; class=&quot;form-label&quot;&gt;End Leave Date&lt;/label&gt;
&lt;input type=&quot;date&quot; class=&quot;form-control&quot; id=&quot;EndleaveDate&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;VertimeassageInput&quot; class=&quot;form-label&quot;&gt;Message&lt;/label&gt;
&lt;textarea class=&quot;form-control&quot; id=&quot;VertimeassageInput&quot; rows=&quot;3&quot; placeholder=&quot;Enter your message&quot;&gt;&lt;/textarea&gt;
&lt;/div&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Add Leave&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
      </BCol>
      <BCol xxl="6">
          <BCard no-body>
            <CardHeader title="Horizontal Form" content="Create horizontal forms with the grid by adding the <code>row</code> class to form groups and using the <code>col-*-*</code> class to specify the width of your labels and controls. Be sure to add <code>col-form-label</code> class to your <code>label</code>s as well so they’re vertically centered with their associated form controls." />
              <BCardBody class="tab-content">
                  <div class="tab-pane show active" id="formHorizontalPreview" role="tabpanel" aria-labelledby="formHorizontalPreview-tab" tabindex="0">
                    <BForm action="#">
                      <BRow class="mb-3">
                          <BCol lg="3">
                              <label for="nameInput" class="form-label">Name</label>
                          </BCol>
                          <BCol lg="9">
                              <BFormInput type="text" id="nameInput" placeholder="Enter your name"></BFormInput>
                          </BCol>
                      </BRow>
                      <BRow class="mb-3">
                          <BCol lg="3">
                              <label for="websiteUrl" class="form-label">Website URL</label>
                          </BCol>
                          <BCol lg="9">
                              <BFormInput type="url" id="websiteUrl" placeholder="Enter your URL"></BFormInput>
                          </BCol>
                      </BRow>
                      <BRow class="mb-3">
                          <BCol lg="3">
                              <label for="dateInput" class="form-label">Date</label>
                          </BCol>
                          <BCol lg="9">
                              <flat-pickr id="dateInput" class="form-control"></flat-pickr>
                          </BCol>
                      </BRow>
                      <BRow class="mb-3">
                          <BCol lg="3">
                              <label for="timeInput" class="form-label">Time</label>
                          </BCol>
                          <BCol lg="9">
                              <flat-pickr id="timeInput" :config="config" class="form-control"></flat-pickr>
                          </BCol>
                      </BRow>
                      <BRow class="mb-3">
                          <BCol lg="3">
                              <label for="leaveemails" class="form-label">Email Id</label>
                          </BCol>
                          <BCol lg="9">
                              <BFormInput type="email" id="leaveemails"
                                  placeholder="Enter your email"></BFormInput>
                          </BCol>
                      </BRow>
                      <BRow class="mb-3">
                          <BCol lg="3">
                              <label for="contactNumber" class="form-label">Contact Number</label>
                          </BCol>
                          <BCol lg="9">
                              <BFormInput type="number" id="contactNumber"
                                  placeholder="+91 9876543210"></BFormInput>
                          </BCol>
                      </BRow>
                      <BRow class="mb-3">
                          <BCol lg="3">
                              <label for="meassageInput" class="form-label">Message</label>
                          </BCol>
                          <BCol lg="9">
                              <BFormTextarea id="meassageInput" rows="3"
                                  placeholder="Enter your message"></BFormTextarea>
                          </BCol>
                      </BRow>
                      <div class="text-end">
                          <BButton type="submit" variant="primary">Add Leave</BButton>
                      </div>
                  </BForm>
                  </div>
                  <div class="tab-pane" id="formHorizontalCode" role="tabpanel" aria-labelledby="formHorizontalCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup" style="height: 360px;"><code>&lt;form action=&quot;&quot;&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;nameInput&quot; class=&quot;form-label&quot;&gt;Name&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;nameInput&quot; placeholder=&quot;Enter your name&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;websiteUrl&quot; class=&quot;form-label&quot;&gt;Website URL&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;input type=&quot;url&quot; class=&quot;form-control&quot; id=&quot;websiteUrl&quot; placeholder=&quot;Enter your url&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;dateInput&quot; class=&quot;form-label&quot;&gt;Date&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;input type=&quot;date&quot; class=&quot;form-control&quot; id=&quot;dateInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;timeInput&quot; class=&quot;form-label&quot;&gt;Time&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;input type=&quot;time&quot; class=&quot;form-control&quot; id=&quot;timeInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;leaveemails&quot; class=&quot;form-label&quot;&gt;Email Id&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;leaveemails&quot; placeholder=&quot;Enter your email&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;contactNumber&quot; class=&quot;form-label&quot;&gt;Contact Number&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;input type=&quot;number&quot; class=&quot;form-control&quot; id=&quot;contactNumber&quot; placeholder=&quot;+91 9876543210&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;meassageInput&quot; class=&quot;form-label&quot;&gt;Message&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;textarea class=&quot;form-control&quot; id=&quot;meassageInput&quot; rows=&quot;3&quot; placeholder=&quot;Enter your message&quot;&gt;&lt;/textarea&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Add Leave&lt;/button&gt;
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
            <CardHeader title="Horizontal Form Label Sizing" content="Use <code>col-form-label-sm</code> class to set small size form label or <code>col-form-label-lg</code> class to set large size form label to label. No such class is required for the default size form label." />
              <BCardBody class="tab-content">
                  <div class="tab-pane show active" id="formHorizontalLabelSizingPreview" role="tabpanel" aria-labelledby="formHorizontalLabelSizingPreview-tab" tabindex="0">
                    <BRow class="align-items-center g-3">
                      <BCol xxl="4">
                          <BRow>
                              <BCol sm="2" class="col-form-label col-form-label-sm">Email</BCol>
                              <BCol sm="10">
                                  <BFormInput type="email" class="form-control form-control-sm" id="colFormLabelSm"
                                      placeholder="col-form-label-sm"></BFormInput>
                              </BCol>
                          </BRow>
                      </BCol>
                      <BCol xxl="4">
                          <BRow>
                              <BCol sm="2" class="col-form-label">Email</BCol>
                              <BCol sm="10">
                                  <BFormInput type="email" class="form-control" id="colFormLabel"
                                      placeholder="col-form-label"></BFormInput>
                              </BCol>
                          </BRow>
                      </BCol>
                      <BCol xxl="4">
                          <BRow>
                              <BCol sm="2" class="col-form-label col-form-label-lg">Email</BCol>
                              <BCol sm="10">
                                  <BFormInput type="email" class="form-control form-control-lg" id="colFormLabelLg"
                                      placeholder="col-form-label-lg"></BFormInput>
                              </BCol>
                          </BRow>
                      </BCol>
                  </BRow>
                  </div>
                  <div class="tab-pane" id="formHorizontalLabelSizingCode" role="tabpanel" aria-labelledby="formHorizontalLabelSizingCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Col Form Label Small --&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;label for=&quot;colFormLabelSm&quot; class=&quot;col-sm-2 col-form-label col-form-label-sm&quot;&gt;Email&lt;/label&gt;
&lt;div class=&quot;col-sm-10&quot;&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control form-control-sm&quot; id=&quot;colFormLabelSm&quot; placeholder=&quot;col-form-label-sm&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Col Form Label Default --&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;label for=&quot;colFormLabel&quot; class=&quot;col-sm-2 col-form-label&quot;&gt;Email&lt;/label&gt;
&lt;div class=&quot;col-sm-10&quot;&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;colFormLabel&quot; placeholder=&quot;col-form-label&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Col Form Label Large --&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;label for=&quot;lg&quot; class=&quot;col-sm-2 col-form-label col-form-label-lg&quot;&gt;Email&lt;/label&gt;
&lt;div class=&quot;col-sm-10&quot;&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control form-control-lg&quot; id=&quot;colFormLabelSm&quot; placeholder=&quot;col-form-label-lg&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
      </BCol> 

      <BCol lg="12">
          <BCard no-body>
            <CardHeader title="Column Sizing" content="Use <code>col-sm-</code> class with required size value to set column size as per your requirement." />
              <BCardBody class="tab-content">
                  <div class="tab-pane show active" id="columnSizingPreview" role="tabpanel" aria-labelledby="columnSizingPreview-tab" tabindex="0">
                    <BRow class="g-3">
                      <BCol sm="6">
                          <BFormInput type="text" class="form-control" placeholder="Firstname"
                              aria-label="First-Name"></BFormInput>
                      </BCol>
                      <BCol sm="6">
                          <BFormInput type="text" class="form-control" placeholder="Lastname"
                              aria-label="Last-Name"></BFormInput>
                      </BCol>
                      <BCol sm="4">
                          <BFormInput type="text" class="form-control" placeholder="Email id"
                              aria-label="Email Id"></BFormInput>
                      </BCol>
                      <BCol sm="4">
                          <BFormInput type="password" class="form-control" placeholder="Password"
                              aria-label="Password"></BFormInput>
                      </BCol>
                      <BCol sm="4">
                          <BFormInput type="password" class="form-control" placeholder="Confirm Password"
                              aria-label="confirm-password"></BFormInput>
                      </BCol>
                      <BCol sm="7">
                          <BFormInput type="text" class="form-control" placeholder="City"
                              aria-label="City"></BFormInput>
                      </BCol>
                      <BCol cols="sm">
                          <BFormInput type="text" class="form-control" placeholder="State"
                              aria-label="State"></BFormInput>
                      </BCol>
                      <BCol cols="sm">
                          <BFormInput type="text" class="form-control" placeholder="Zip"
                              aria-label="Zip"></BFormInput>
                      </BCol>
                  </BRow>
                      
                  </div>
                  <div class="tab-pane" id="columnSizingCode" role="tabpanel" aria-labelledby="columnSizingCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup" style="height: 275px;"><code>&lt;div class=&quot;row g-3&quot;&gt;
&lt;div class=&quot;col-sm-6&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Firstname&quot; aria-label=&quot;First-Name&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-6&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Lastname&quot; aria-label=&quot;Last-Name&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Email id&quot; aria-label=&quot;Email Id&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
&lt;input type=&quot;password&quot; class=&quot;form-control&quot; placeholder=&quot;Password&quot; aria-label=&quot;Password&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
&lt;input type=&quot;password&quot; class=&quot;form-control&quot; placeholder=&quot;Confirm Password&quot; aria-label=&quot;confirm-password&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-7&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;City&quot; aria-label=&quot;City&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;State&quot; aria-label=&quot;State&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Zip&quot; aria-label=&quot;Zip&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;&lt;!--end row--&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
      </BCol> 
  </BRow>

  <BRow>
      <BCol lg="12">
          <BCard no-body>
            <CardHeader title="Auto Sizing" content="Change <code>col</code> class to <code>col-auto</code> class so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents." />
              <BCardBody class="tab-content">
                  <div class="tab-pane show active" id="autoSizingPreview" role="tabpanel" aria-labelledby="autoSizingPreview-tab" tabindex="0">
                    <BForm action="#">
                      <BRow class="gy-2 gx-3 mb-3 align-items-center">
                          <BCol sm="auto">
                              <BFormInput type="text" class="form-control" id="autoSizingInput"
                                  placeholder="Jane Doe"></BFormInput>
                          </BCol>
                          <BCol sm="auto">
                              <BInputGroup>
                                  <BInputGroupPrepend is-text>
                                      @
                                  </BInputGroupPrepend>
                                  <BFormInput type="text" class="form-control" id="autoSizingInputGroup"
                                      placeholder="Username"></BFormInput>
                              </BInputGroup>
                          </BCol>
                          <BCol sm="auto">
                              <BFormSelect class="form-select" data-choices data-choices-sorting="true"
                                  id="autoSizingSelect">
                                  <option selected>Choose...</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                              </BFormSelect>
                          </BCol>
                          <BCol sm="auto">
                              <BFormCheckbox id="autoSizingCheck" v-model="rememberMe">
                                  Remember me
                              </BFormCheckbox>
                          </BCol>
                          <BCol sm="auto">
                              <BButton type="submit" variant="primary">Submit</BButton>
                          </BCol>
                      </BRow>

                  </BForm>

                  <BForm action="#">
                    <BRow class="gx-3 gy-2 align-items-center">
                        <BCol sm="3">
                            <BFormInput type="text" class="form-control" id="specificSizeInputName"
                                placeholder="Jane Doe"></BFormInput>
                        </BCol>
                        <BCol sm="3">
                            <BInputGroup>
                                <BInputGroupPrepend is-text>
                                    @
                                </BInputGroupPrepend>
                                <BFormInput type="text" class="form-control" id="specificSizeInputGroupUsername"
                                    placeholder="Username"></BFormInput>
                            </BInputGroup>
                        </BCol>
                        <BCol sm="3">
                            <BFormSelect class="form-select" data-choices data-choices-sorting="true"
                                id="specificSizeSelect">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </BFormSelect>
                        </BCol>
                        <BCol cols="auto">
                            <BFormCheckbox id="autoSizingCheck2" v-model="rememberMe">
                                Remember me
                            </BFormCheckbox>
                        </BCol>
                        <BCol cols="auto">
                            <BButton type="submit" variant="primary">Submit</BButton>
                        </BCol>
                    </BRow>

                </BForm>
                  </div>
                  <div class="tab-pane" id="autoSizingCode" role="tabpanel" aria-labelledby="autoSizingCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup" style="height: 275px"><code>&lt;form action=&quot;javascript:void(0);&quot;&gt;
&lt;div class=&quot;row gy-2 gx-3 mb-3 align-items-center&quot;&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;autoSizingInput&quot;&gt;Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;autoSizingInput&quot; placeholder=&quot;Jane Doe&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;autoSizingInputGroup&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group&quot;&gt;
&lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;autoSizingInputGroup&quot; placeholder=&quot;Username&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;autoSizingSelect&quot;&gt;Preference&lt;/label&gt;
&lt;select class=&quot;form-select&quot; id=&quot;autoSizingSelect&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;autoSizingCheck&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;autoSizingCheck&quot;&gt;
Remember me
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;&lt;!--end row--&gt;
&lt;/form&gt;</code>

<code>&lt;form&gt;
&lt;div class=&quot;row gx-3 gy-2 align-items-center&quot;&gt;
&lt;div class=&quot;col-sm-3&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;specificSizeInputName&quot;&gt;Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;specificSizeInputName&quot; placeholder=&quot;Jane Doe&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-3&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;specificSizeInputGroupUsername&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group&quot;&gt;
&lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;specificSizeInputGroupUsername&quot; placeholder=&quot;Username&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-3&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;specificSizeSelect&quot;&gt;Preference&lt;/label&gt;
&lt;select class=&quot;form-select&quot; id=&quot;specificSizeSelect&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-auto&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;autoSizingCheck2&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;autoSizingCheck2&quot;&gt;
Remember me
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-auto&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;&lt;!--end col--&gt;
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
            <CardHeader title="Inline Forms" content="Use <code>row-cols-*</code> class to set form inline." />
              <BCardBody class="tab-content">
                  <div class="tab-pane show active" id="inlineFormsPreview" role="tabpanel" aria-labelledby="inlineFormsPreview-tab" tabindex="0">
                    <BForm action="#">
                      <BRow class="row-cols-lg-auto g-3 align-items-center">
                          <BCol cols="12">
                              <BInputGroup>
                                  <BInputGroupPrepend is-text>
                                      @
                                  </BInputGroupPrepend>
                                  <BFormInput type="text" class="form-control" id="inlineFormInputGroupUsername"
                                      placeholder="Username"></BFormInput>
                              </BInputGroup>
                          </BCol>
                          <BCol cols="12">
                              <BFormSelect class="form-select" data-choices data-choices-sorting="true"
                                  id="inlineFormSelectPref">
                                  <option selected>Choose...</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                              </BFormSelect>
                          </BCol>
                          <BCol cols="12">
                              <BFormCheckbox id="inlineFormCheck" v-model="rememberMe">
                                  Remember me
                              </BFormCheckbox>
                          </BCol>
                          <BCol cols="12">
                              <BButton type="submit" variant="primary">Submit</BButton>
                          </BCol>
                      </BRow>
                  </BForm>
                  </div>
                  <div class="tab-pane" id="inlineFormsCode" role="tabpanel" aria-labelledby="inlineFormsCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup" style="height: 275px"><code>&lt;form action=&quot;javascript:void(0);&quot;&gt;
&lt;div class=&quot;row row-cols-lg-auto g-3 align-items-center&quot;&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;inlineFormInputGroupUsername&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group&quot;&gt;
&lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inlineFormInputGroupUsername&quot; placeholder=&quot;Username&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;inlineFormSelectPref&quot;&gt;Preference&lt;/label&gt;
&lt;select class=&quot;form-select&quot; id=&quot;inlineFormSelectPref&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineFormCheck&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineFormCheck&quot;&gt;
Remember me
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;&lt;!--end row--&gt;
&lt;/form&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
          
      </BCol> 
  </BRow>

  <BRow>
      <BCol lg="12">
          <BCard no-body>
            <CardHeader title="Floating Labels" content="Use <code>form-floating</code> class to enable floating labels with Bootstrap’s textual form fields." />
              <BCardBody class="tab-content">
                  <div class="tab-pane show active" id="floatingFormsPreview" role="tabpanel" aria-labelledby="floatingFormsPreview-tab" tabindex="0">
                    <BForm action="#">
                      <BRow class="g-3">
                          <BCol lg="6">
                              <div class="form-floating">
                                  <BFormInput type="text" placeholder="Enter your firstname"></BFormInput>
                                  <label for="firstnamefloatingInput">First Name</label>
                              </div>
                          </BCol>
                          <BCol lg="6">
                              <div class="form-floating">
                                  <BFormInput type="text" placeholder="Enter your Lastname"></BFormInput>
                                  <label for="lastnamefloatingInput">Last Name</label>
                              </div>
                          </BCol>
                          <BCol lg="4">
                              <div class="form-floating">
                                  <BFormInput type="email" placeholder="Enter your email"></BFormInput>
                                  <label for="emailfloatingInput">Email Address</label>
                              </div>
                          </BCol>
                          <BCol lg="4">
                              <div class="form-floating">
                                  <BFormInput type="password" placeholder="Enter your password"></BFormInput>
                                  <label for="passwordfloatingInput">Password</label>
                              </div>
                          </BCol>
                          <BCol lg="4">
                              <div class="form-floating">
                                  <BFormInput type="password" placeholder="Confirm password"></BFormInput>
                                  <label for="passwordfloatingInput1">Confirm Password</label>
                              </div>
                          </BCol>
                          <BCol lg="4">
                              <div class="form-floating">
                                  <BFormInput type="text" placeholder="Enter your city"></BFormInput>
                                  <label for="cityfloatingInput">City</label>
                              </div>
                          </BCol>
                          <BCol lg="4">
                              <div class="form-floating">
                                  <BFormSelect>
                                      <option value="">Choose...</option>
                                      <option value="1">USA</option>
                                      <option value="2">Brazil</option>
                                      <option value="3">France</option>
                                      <option value="4">Germany</option>
                                  </BFormSelect>
                                  <label for="floatingSelect">Country</label>
                              </div>
                          </BCol>
                          <BCol lg="4">
                              <div class="form-floating">
                                  <BFormInput type="number" placeholder="Enter your zipcode"></BFormInput>
                                  <label for="zipfloatingInput">Zipcode</label>
                              </div>
                          </BCol>
                          <BCol lg="12">
                              <div class="text-end">
                                  <BButton type="submit" variant="primary">Submit</BButton>
                              </div>
                          </BCol>
                      </BRow>
                  </BForm>
                  </div>
                  <div class="tab-pane" id="floatingFormsCode" role="tabpanel" aria-labelledby="floatingFormsCode-tab" tabindex="0">
                      <h5 class="fs-sm text-muted">HTML Preview</h5>
                      <pre class="language-markup" style="height: 275px"><code>&lt;form action=&quot;#&quot;&gt;
&lt;div class=&quot;row g-3&quot;&gt;
&lt;div class=&quot;col-lg-6&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;firstnamefloatingInput&quot; placeholder=&quot;Enter your firstname&quot;&gt;
&lt;label for=&quot;firstnamefloatingInput&quot;&gt;First Name&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-6&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;lastnamefloatingInput&quot; placeholder=&quot;Enter your Lastname&quot;&gt;
&lt;label for=&quot;lastnamefloatingInput&quot;&gt;Last Name&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;emailfloatingInput&quot; placeholder=&quot;Enter your email&quot;&gt;
&lt;label for=&quot;emailfloatingInput&quot;&gt;Email Address&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;passwordfloatingInput&quot; placeholder=&quot;Enter your password&quot;&gt;
&lt;label for=&quot;passwordfloatingInput&quot;&gt;Password&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;passwordfloatingInput1&quot; placeholder=&quot;Confirm password&quot;&gt;
&lt;label for=&quot;passwordfloatingInput1&quot;&gt;Confirm Password&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;cityfloatingInput&quot; placeholder=&quot;Enter your city&quot;&gt;
&lt;label for=&quot;cityfloatingInput&quot;&gt;City&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;select class=&quot;form-select&quot; id=&quot;floatingSelect&quot; aria-label=&quot;Floating label select example&quot;&gt;
&lt;option selected&gt;USA&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;Brazil&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;France&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Germany&lt;/option&gt;
&lt;/select&gt;
&lt;label for=&quot;floatingSelect&quot;&gt;Country&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;number&quot; class=&quot;form-control&quot; id=&quot;zipfloatingInput&quot; placeholder=&quot;Enter your zipcode&quot;&gt;
&lt;label for=&quot;zipfloatingInput&quot;&gt;Zipcode&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-12&quot;&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                  </div>
              </BCardBody>
          </BCard>
      </BCol>
  </BRow>
</Layout>
</template>