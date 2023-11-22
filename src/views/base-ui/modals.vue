<script>



export default {
  data() {
    return {
      modalShow: false,
      modalShow1: false,
      modalShow2: false,
      modalShow3: false,
      modalShow4: false,
      modalShow5: false,
      modalShow6: false,
      modalShow7: false,
      modalShow8: false,
      modalShow9: false,
      modalShow10: false,
      modalShow11: false,
      modalShow12: false,
      modalShow13: false,
      modalShow14: false,
      modalShow15: false,
      modalShow16: false,
      modalShow17: false,
      modalShow18: false,
      modalShow19: false,
      modalShow20: false,
      modalShow21: false,
      modalShow22: false,
      modalShow23: false,
      modalShow24: false,
      modalShow25: false,
      modalShow26: false,
      modalShow27: false,
      modalShow28: false,
      modalShow29: false,
      modalShow30: false,
      modalShow31: false,
    };
  },
  methods: {
    changecustomerName(e) {
      const msg = document.querySelector(".varyingcontentModal");
      const customerName = document.getElementById("customer-name");
      this.modalShow6 = !this.modalShow6,
        msg.innerText = "New message to " + e;
      customerName.value = e;
    },

    toggleModal() {
      this.modalShow30 = !this.modalShow30;
      this.modalShow31 = !this.modalShow31;
    }
  },
  components: {
    
    
    
    CardHeader,
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Modals" pagetitle="Bootstrap UI" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Default Modal" content="Use <code>modal-dialog</code> class to show default modal." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="defaultModalPreview" role="tabpanel"
              aria-labelledby="defaultModalPreview-tab" tabindex="0">
              <div>
                <BButton variant="primary" @click="modalShow = !modalShow">Standard Modal</BButton>
                <BModal v-model="modalShow" hide-footer title="Modal Heading">
                  <h5 class="fs-base">Overflowing text to show scroll behavior</h5>
                  <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                    dreams, he found himself transformed in his bed into a horrible
                    vermin. He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and divided by
                    arches into stiff sections.</p>
                  <p class="text-muted">The bedding was hardly able to cover it and seemed
                    ready to slide off any moment. His many legs, pitifully thin
                    compared with the size of the rest of him, waved about helplessly as
                    he looked. "What's happened to me?" he thought.</p>
                  <p class="text-muted">It wasn't a dream. His room, a proper human room
                    although a little too small, lay peacefully between its four
                    familiar walls.</p>
                  <div class="text-end " style="margin-top: 40px;">
                    <BButton type="button" class="me-2" variant="light" @click="modalShow = false">Close</BButton>
                    <BButton type="button" variant="primary">Save Changes</BButton>
                  </div>
                </BModal>
              </div>
            </div>
            <div class="tab-pane" id="defaultModalCode" role="tabpanel" aria-labelledby="defaultModalCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 120px;"><code>&lt;!-- Default Modals --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary &quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#myModal&quot;&gt;Standard Modal&lt;/button&gt;
&lt;div id=&quot;myModal&quot; class=&quot;modal fade&quot; tabindex=&quot;-1&quot; aria-labelledby=&quot;myModalLabel&quot; aria-hidden=&quot;true&quot; style=&quot;display: none;&quot;&gt;
&lt;div class=&quot;modal-dialog&quot;&gt;
&lt;div class=&quot;modal-content&quot;&gt;
&lt;div class=&quot;modal-header&quot;&gt;
&lt;h5 class=&quot;modal-title&quot; id=&quot;myModalLabel&quot;&gt;Modal Heading&lt;/h5&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt; &lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;modal-body&quot;&gt;
&lt;h5 class=&quot;fs-base&quot;&gt;
Overflowing text to show scroll behavior
&lt;/h5&gt;
&lt;p class=&quot;text-muted&quot;&gt;One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.&lt;/p&gt;
&lt;p class=&quot;text-muted&quot;&gt;The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought.&lt;/p&gt;
&lt;p class=&quot;text-muted&quot;&gt;It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.&lt;/p&gt;
&lt;/div&gt;
&lt;div class=&quot;modal-footer&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot; data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary &quot;&gt;Save Changes&lt;/button&gt;
&lt;/div&gt;

&lt;/div&gt;&lt;!-- /.modal-content --&gt;
&lt;/div&gt;&lt;!-- /.modal-dialog --&gt;
&lt;/div&gt;&lt;!-- /.modal --&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Vertically Centered Modal" content="Use <code>modal-dialog-centered</code> class to show vertically center the modal." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="verticallyCenteredModalPreview" role="tabpanel"
              aria-labelledby="verticallyCenteredModalPreview-tab" tabindex="0">
              <div>
                <BButton variant="primary" @click="modalShow1 = !modalShow1">Center Modal</BButton>
                <BModal v-model="modalShow1" hide-footer hideHeader hide-header-close centered>
                  <div class="modal-body text-center mt-2">
                    <i class="bi bi-exclamation-triangle text-warning display-5"></i>
                    <div class="mt-4">
                      <h4 class="mb-3">Oops something went wrong!</h4>
                      <p class="text-muted mb-4">The transfer was not successfully
                        received by us. the email of the recipient wasn't correct.</p>
                      <div class="hstack gap-2 justify-content-center">
                        <BButton type="button" variant="light" @click="modalShow1 = false">
                          Close</BButton>
                        <BLink href="#" class="btn btn-danger">Try Again
                        </BLink>
                      </div>
                    </div>
                  </div>
                </BModal>
              </div>
            </div>
            <div class="tab-pane" id="verticallyCenteredModalCode" role="tabpanel"
              aria-labelledby="verticallyCenteredModalCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;!-- Vertically Centered --&gt;
&lt;div class=&quot;modal-dialog modal-dialog-centered&quot;&gt;
...
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Grids in Modals" content="Use <code>container-fluid</code> class within the modal-body to utilize the
            Bootstrap grid system within a modal by nesting." />
         <BCardBody class="tab-content">
            <div class="tab-pane show active" id="gridModalPreview" role="tabpanel" aria-labelledby="gridModalPreview-tab"
              tabindex="0">
              <BButton variant="primary" @click="modalShow2 = !modalShow2">Launch Demo Modal</BButton>
              <BModal v-model="modalShow2" hide-footer title="Grid Modals">
                <form action="#">
                  <BRow class="g-3">
                    <BCol xxl="6">
                      <div>
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="Enter firstname" />
                      </div>
                    </BCol>
                    <BCol xxl="6">
                      <div>
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="Enter lastname" />
                      </div>
                    </BCol>
                    <BCol lg="12">
                      <label class="form-label">Gender</label>
                      <div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                            value="option1" />
                          <label class="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2" />
                          <label class="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                            value="option3" />
                          <label class="form-check-label" for="inlineRadio3">Others</label>
                        </div>
                      </div>
                    </BCol>
                    <BCol xxl="6">
                      <label for="emailInput" class="form-label">Email</label>
                      <input type="email" class="form-control" id="emailInput" placeholder="Enter your email" />
                    </BCol>
                    <BCol xxl="6">
                      <label for="passwordInput" class="form-label">Password</label>
                      <input type="password" class="form-control" id="passwordInput" value="451326546"
                        placeholder="Enter password" />
                    </BCol>
                    <BCol lg="12">
                      <div class="hstack gap-2 justify-content-end">
                        <BButton type="button" variant="light" @click="modalShow2 = false">
                          Close</BButton>
                        <BButton type="submit" variant="primary">Submit</BButton>
                      </div>
                    </BCol>
                  </BRow>
                </form>
              </BModal>
            </div>
            <div class="tab-pane" id="gridModalCode" role="tabpanel" aria-labelledby="gridModalCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Grids in modals --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#exampleModalgrid&quot;&gt;
Launch Demo Modal
&lt;/button&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;exampleModalgrid&quot; tabindex=&quot;-1&quot; aria-labelledby=&quot;exampleModalgridLabel&quot; aria-modal=&quot;true&quot;&gt;
&lt;div class=&quot;modal-dialog&quot;&gt;
&lt;div class=&quot;modal-content&quot;&gt;
&lt;div class=&quot;modal-header&quot;&gt;
&lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalgridLabel&quot;&gt;Grid Modals&lt;/h5&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;modal-body&quot;&gt;
&lt;form action=&quot;javascript:void(0);&quot;&gt;
&lt;div class=&quot;row g-3&quot;&gt;
  &lt;div class=&quot;col-xxl-6&quot;&gt;
      &lt;div&gt;
          &lt;label for=&quot;firstName&quot; class=&quot;form-label&quot;&gt;First Name&lt;/label&gt;
          &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;firstName&quot; placeholder=&quot;Enter firstname&quot;&gt;
      &lt;/div&gt;
  &lt;/div&gt;&lt;!--end col--&gt;
  &lt;div class=&quot;col-xxl-6&quot;&gt;
      &lt;div&gt;
          &lt;label for=&quot;lastName&quot; class=&quot;form-label&quot;&gt;Last Name&lt;/label&gt;
          &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;lastName&quot; placeholder=&quot;Enter lastname&quot;&gt;
      &lt;/div&gt;
  &lt;/div&gt;&lt;!--end col--&gt;
  &lt;div class=&quot;col-lg-12&quot;&gt;
      &lt;label for=&quot;genderInput&quot; class=&quot;form-label&quot;&gt;Gender&lt;/label&gt;
      &lt;div&gt;
          &lt;div class=&quot;form-check form-check-inline&quot;&gt;
              &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions&quot; id=&quot;inlineRadio1&quot; value=&quot;option1&quot;&gt;
              &lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio1&quot;&gt;Male&lt;/label&gt;
          &lt;/div&gt;
          &lt;div class=&quot;form-check form-check-inline&quot;&gt;
              &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions&quot; id=&quot;inlineRadio2&quot; value=&quot;option2&quot;&gt;
              &lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio2&quot;&gt;Female&lt;/label&gt;
          &lt;/div&gt;
          &lt;div class=&quot;form-check form-check-inline&quot;&gt;
              &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions&quot; id=&quot;inlineRadio3&quot; value=&quot;option3&quot;&gt;
              &lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio3&quot;&gt;Others&lt;/label&gt;
          &lt;/div&gt;
      &lt;/div&gt;
  &lt;/div&gt;&lt;!--end col--&gt;
  &lt;div class=&quot;col-xxl-6&quot;&gt;
      &lt;div&gt;
          &lt;label for=&quot;emailInput&quot; class=&quot;form-label&quot;&gt;Email&lt;/label&gt;
          &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;emailInput&quot; placeholder=&quot;Enter your email&quot;&gt;
      &lt;/div&gt;
  &lt;/div&gt;&lt;!--end col--&gt;
  &lt;div class=&quot;col-xxl-6&quot;&gt;
      &lt;div&gt;
          &lt;label for=&quot;passwordInput&quot; class=&quot;form-label&quot;&gt;Password&lt;/label&gt;
          &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;passwordInput&quot; value=&quot;451326546&quot;&gt;
      &lt;/div&gt;
  &lt;/div&gt;&lt;!--end col--&gt;
  &lt;div class=&quot;col-lg-12&quot;&gt;
      &lt;div class=&quot;hstack gap-2 justify-content-end&quot;&gt;
          &lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot; data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
          &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
      &lt;/div&gt;
  &lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;&lt;!--end row--&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="6">
        <BCard no-body>
           <CardHeader title="Static Backdrop Modal" content="Use <code>data-bs-backdrop='static'</code> to modal not to close when clicking
            outside the modal." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="staticBackdropPreview" role="tabpanel"
              aria-labelledby="staticBackdropPreview-tab" tabindex="0">
              <div>
                <BButton variant="primary" @click="modalShow3 = !modalShow3">Static Backdrop Modal</BButton>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                  tabindex="-1" role="dialog" aria-hidden="true">
                  <BModal v-model="modalShow3" hide-footer hide-header-close centered no-close-on-backdrop>
                    <div class="modal-body text-center pt-0">
                      <i class="ph ph-confetti display-5 text-success"></i>
                      <div class="mt-4">
                        <h4 class="mb-3">You've made it!</h4>
                        <p class="text-muted mb-4 ">The transfer was not successfully
                          received by us. the email of the recipient wasn't correct.</p>
                        <div class="hstack gap-2 justify-content-center">
                          <BLink href="javascript:void(0);" class="btn btn-link link-danger fw-medium"
                            @click="modalShow3 = false">
                            <i class="ri-close-line me-1 align-middle"></i> Close
                          </BLink>
                          <BLink href="#" class="btn btn-success" >
                            Completed</BLink>
                        </div>
                      </div>
                    </div>
                  </BModal>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="staticBackdropCode" role="tabpanel" aria-labelledby="staticBackdropCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Static Backdrop --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#staticBackdrop&quot;&gt;
Static Backdrop Modal
&lt;/button&gt;
&lt;!-- staticBackdrop Modal --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;staticBackdrop&quot; data-bs-backdrop=&quot;static&quot; data-bs-keyboard=&quot;false&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;staticBackdropLabel&quot; aria-hidden=&quot;true&quot;&gt;
&lt;div class=&quot;modal-dialog modal-dialog-centered&quot; role=&quot;document&quot;&gt;
&lt;div class=&quot;modal-content&quot;&gt;
&lt;div class=&quot;modal-body text-center p-5&quot;&gt;
&lt;i class=&quot;ph ph-confetti display-5 text-success&quot;&gt;&lt;/i&gt;
&lt;div class=&quot;mt-4&quot;&gt;
&lt;h4 class=&quot;mb-3&quot;&gt;You've made it!&lt;/h4&gt;
&lt;p class=&quot;text-muted mb-4&quot;&gt; The transfer was not successfully received by us. the email of the recipient wasn't correct.&lt;/p&gt;
&lt;div class=&quot;hstack gap-2 justify-content-center&quot;&gt;
  &lt;a href=&quot;javascript:void(0);&quot; class=&quot;btn btn-link link-success fw-medium&quot; data-bs-dismiss=&quot;modal&quot;&gt;&lt;i class=&quot;ri-close-line me-1 align-middle&quot;&gt;&lt;/i&gt; Close&lt;/a&gt;
  &lt;a href=&quot;javascript:void(0);&quot; class=&quot;btn btn-success&quot;&gt;Completed&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Toggle Between Modal" content="Toggle between multiple modals with some clever placement of the
          <code>data-bs-target</code> and <code>data-bs-toggle</code> attributes. Please note multiple modals cannot
          be open at the same time. this method simply toggles between two separate modals." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="toggleBetweenPreview" role="tabpanel"
              aria-labelledby="toggleBetweenPreview-tab" tabindex="0">
              <div>
                <BButton variant="primary" @click="modalShow30 = !modalShow30">Open First Modal </BButton>

                <BModal v-model="modalShow30" hide-footer hide-header-close centered>
                  <div class="modal-body text-center pt-0">
                    <i class="bi bi-exclamation-triangle text-warning display-5"></i>
                    <div class="mt-4 pt-4">
                      <h4>Uh oh, something went wrong!</h4>
                      <p class="text-muted">The transfer was not successfully received by
                        us. the email of the recipient wasn't correct.</p>
                      <BButton variant="warning" @click="toggleModal">Continue</BButton>
                    </div>
                  </div>
                </BModal>

                <BModal v-model="modalShow31" hide-footer hide-header-close centered>
                  <div class="modal-body text-center pt-0">
                    <i class="bi bi-people text-primary display-5"></i>
                    <div class="mt-4 pt-3">
                      <h4 class="mb-3">Follow-Up Email</h4>
                      <p class="text-muted mb-4">Hide this modal and show the first with
                        the button below Automatically Send your invitees a follow -Up
                        email.</p>
                      <div class="hstack gap-2 justify-content-center">
                        <BButton variant="subtle-danger" @click="toggleModal"> Back to First
                        </BButton>
                        <BButton type="button" variant="light" @click="modalShow31 = false">
                          Close</BButton>
                      </div>
                    </div>
                  </div>
                </BModal>
              </div>
            </div>
            <div class="tab-pane" id="toggleBetweenCode" role="tabpanel" aria-labelledby="toggleBetweenCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Toggle Between Modals --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary &quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#firstmodal&quot;&gt;Open First Modal&lt;/button&gt;
&lt;!-- First modal dialog --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;firstmodal&quot; aria-hidden=&quot;true&quot; aria-labelledby=&quot;...&quot; tabindex=&quot;-1&quot;&gt;
&lt;div class=&quot;modal-dialog modal-dialog-centered&quot;&gt;
&lt;div class=&quot;modal-content&quot;&gt;
&lt;div class=&quot;modal-body text-center p-5&quot;&gt;
&lt;i class=&quot;bi bi-exclamation-triangle text-warning display-5&quot;&gt;&lt;/i&gt;
&lt;div class=&quot;mt-4 pt-4&quot;&gt;
&lt;h4&gt;Uh oh, something went wrong!&lt;/h4&gt;
&lt;p class=&quot;text-muted&quot;&gt; The transfer was not successfully received by us. the email of the recipient wasn't correct.&lt;/p&gt;
&lt;!-- Toogle to second dialog --&gt;
&lt;button class=&quot;btn btn-warning&quot; data-bs-target=&quot;#secondmodal&quot; data-bs-toggle=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;
  Continue
&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;!-- Second modal dialog --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;secondmodal&quot; aria-hidden=&quot;true&quot; aria-labelledby=&quot;...&quot; tabindex=&quot;-1&quot;&gt;
&lt;div class=&quot;modal-dialog modal-dialog-centered&quot;&gt;
&lt;div class=&quot;modal-content&quot;&gt;
&lt;div class=&quot;modal-body text-center p-5&quot;&gt;
&lt;i class=&quot;bi bi-people text-primary display-5&quot;&gt;&lt;/i&gt;
&lt;div class=&quot;mt-4 pt-3&quot;&gt;
&lt;h4 class=&quot;mb-3&quot;&gt;Follow-Up Email&lt;/h4&gt;
&lt;p class=&quot;text-muted mb-4&quot;&gt;Hide this modal and show the first with the button below Automatically Send your invitees a follow -Up email.&lt;/p&gt;
&lt;div class=&quot;hstack gap-2 justify-content-center&quot;&gt;
  &lt;!-- Toogle to first dialog, `data-bs-dismiss` attribute can be omitted - clicking on link will close dialog anyway --&gt;
  &lt;button class=&quot;btn btn-subtle-danger&quot; data-bs-target=&quot;#firstmodal&quot; data-bs-toggle=&quot;modal&quot; data-bs-dismiss=&quot;modal&quot;&gt;Back to
      First
  &lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot; data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Tooltips and Popovers" content='<a href="https://getbootstrap.com/docs/5.1/components/tooltips/">Tooltips</a> and
            <a href="https://getbootstrap.com/docs/5.1/components/popovers/">Popovers</a> can be placed within modals
            as needed.When modals are closed, any tooltips and popovers within are also automatically dismissed.'/>
          <BCardBody class="tab-content ">
            <div class="tab-pane show active" id="tooltipsAndPopoversPreview" role="tabpanel"
              aria-labelledby="tooltipsAndPopoversPreview-tab" tabindex="0">
              <BButton variant="primary" @click="modalShow4 = !modalShow4">Launch Demo Modal</BButton>
              <BModal v-model="modalShow4" bodyClass="pb-0" hide-footer title="Tooltips and Popovers Modal" >
                <h5 class="fs-16">Popover in a Modal</h5>
                <p class="text-muted">
                  You only need to know a little to make a big
                  <BLink href="#" class="popover-test fw-medium text-decoration-underline link-success"
                    data-bs-toggle="popover" title="Common Types of Fonts"
                    data-bs-content="They're a good choice for more traditional projects." data-bs-container="body"
                    data-bs-placement="bottom" data-bs-original-title="Popover Title">Popover on Click</BLink> you
                  do
                  every day. So let's get started. First, some common types of fonts and
                  what you need to know about them triggers a popover on click.
                </p>
                <h5 class="fs-16">Tooltips in a Modal</h5>
                <p class="text-muted">
                  Opposites attract, and that’s a fact. It’s in our
                  <BLink href="#" class="tooltip-test text-decoration-underline fw-medium" title="Morton Bayer"
                    data-bs-container="#exampleModalPopovers" data-bs-toggle="tooltip"
                    data-bs-original-title="Tooltip title">
                    graphic design</BLink> to be
                  interested in the unusual, and that’s why using
                  <BLink href="#" class="tooltip-test text-decoration-underline" title="Web Developers"
                    data-bs-toggle="tooltip" data-bs-container="#exampleModalPopovers"
                    data-bs-original-title="Tooltip title">design</BLink> contrasting
                  colors
                  in Graphic Design is a must.
                </p>
                <div class="modal-footer">
                  <div class="mx-auto">
                    <BLink href="#" class="btn btn-link fw-medium  mb-0" style="margin-top:20px;">
                      Read More
                      <i class="ri-arrow-right-line ms-1 align-middle"></i>
                    </BLink>
                  </div>
                </div>
              </BModal>
            </div>
            <div class="tab-pane" id="tooltipsAndPopoversCode" role="tabpanel"
              aria-labelledby="tooltipsAndPopoversCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Tooltips and Popovers --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#exampleModalPopovers&quot;&gt;
Launch demo modal
&lt;/button&gt;

&lt;!-- tooltips and popovers modal --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;exampleModalPopovers&quot; tabindex=&quot;-1&quot; aria-labelledby=&quot;exampleModalPopoversLabel&quot; aria-modal=&quot;true&quot;&gt;
&lt;div class=&quot;modal-dialog&quot;&gt;
&lt;div class=&quot;modal-content&quot;&gt;
&lt;div class=&quot;modal-header&quot;&gt;
&lt;h5 class=&quot;modal-title&quot; id=&quot;exampleModalPopoversLabel&quot;&gt;Modal title&lt;/h5&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;modal-body&quot;&gt;
&lt;h5&gt;Popover in a modal&lt;/h5&gt;
&lt;p&gt;This &lt;a href=&quot;#&quot; role=&quot;button&quot; class=&quot;btn btn-secondary popover-test&quot; title=&quot;&quot; data-bs-toggle=&quot;popover&quot; data-bs-content=&quot;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&quot; data-bs-container=&quot;body&quot; data-bs-original-title=&quot;Popover Title&quot;&gt;button&lt;/a&gt; triggers a popover on click.
&lt;/p&gt;
&lt;hr&gt;
&lt;h5&gt;Tooltips in a modal&lt;/h5&gt;
&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;tooltip-test text-decoration-underline&quot; title=&quot;&quot; data-bs-container=&quot;#exampleModalPopovers&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-original-title=&quot;Tooltip title&quot;&gt;This
  link&lt;/a&gt; and &lt;a href=&quot;#&quot; class=&quot;tooltip-test text-decoration-underline&quot; title=&quot;&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-container=&quot;#exampleModalPopovers&quot; data-bs-original-title=&quot;Tooltip title&quot;&gt;that link&lt;/a&gt; have tooltips on
hover.&lt;/p&gt;
&lt;/div&gt;
&lt;div class=&quot;modal-footer&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot; data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save changes&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Scrollable Modal" content="Use<code> modal-dialog-scrollable</code> class to create a modal scrollable." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="scrollableModalPreview" role="tabpanel"
              aria-labelledby="scrollableModalPreview-tab" tabindex="0">
              <div>
                <BButton variant="primary" @click="modalShow5 = !modalShow5">Scrollable Modal</BButton>
                <BModal v-model="modalShow5" okTitle="Save Changes" title="Scrollable Modal" scrollable>
                  <div class="modal-body">
                    <h6 class="fs-15">Give your text a good structure</h6>
                    <div class="d-flex">
                      <div class="flex-shrink-0">
                        <i class="ri-checkbox-circle-fill text-success"></i>
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <p class="text-muted mb-0">
                          Raw denim you probably haven't heard of them jean shorts
                          Austin.
                          Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                        </p>
                      </div>
                    </div>
                    <div class="d-flex mt-2">
                      <div class="flex-shrink-0">
                        <i class="ri-checkbox-circle-fill text-success"></i>
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <p class="text-muted mb-0">Too much or too little spacing, as in
                          the example below, can make things unpleasant for the
                          reader. The goal is to make your text as comfortable to read
                          as possible.</p>
                      </div>
                    </div>
                    <div class="d-flex mt-2">
                      <div class="flex-shrink-0">
                        <i class="ri-checkbox-circle-fill text-success"></i>
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <p class="text-muted mb-0">In some designs, you might adjust
                          your tracking to create a certain artistic effect. It can
                          also help you fix fonts that are poorly spaced to begin
                          with.</p>
                      </div>
                    </div>
                    <div class="d-flex mt-2">
                      <div class="flex-shrink-0">
                        <i class="ri-checkbox-circle-fill text-success"></i>
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <p class="text-muted mb-0">For that very reason, I went on a
                          quest and spoke to many different professional graphic
                          designers and asked them what graphic design tips they live.
                        </p>
                      </div>
                    </div>
                    <div class="d-flex mt-2">
                      <div class="flex-shrink-0">
                        <i class="ri-checkbox-circle-fill text-success"></i>
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <p class="text-muted mb-0">You've probably heard that opposites
                          attract. The same is true for fonts. Don't be afraid to
                          combine font styles that are different but complementary,
                          like sans serif with serif, short with tall, or decorative
                          with simple. Qui photo booth letterpress, commodo enim craft
                          beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                        </p>
                      </div>
                    </div>
                    <div class="d-flex mt-2">
                      <div class="flex-shrink-0">
                        <i class="ri-checkbox-circle-fill text-success"></i>
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <p class="text-muted mb-0">For that very reason, I went on a
                          quest and spoke to many different professional graphic
                          designers and asked them what graphic design tips they live.
                        </p>
                      </div>
                    </div>
                    <h6 class="fs-lg my-3">Graphic Design</h6>
                    <div class="d-flex mt-2">
                      <div class="flex-shrink-0">
                        <i class="ri-checkbox-circle-fill text-success"></i>
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                          It’s in our nature to be interested in the unusual, and
                          that’s why using contrasting colors in Graphic Design is a
                          must. It’s eye-catching, it makes a statement, it’s
                          impressive graphic design. Increase or decrease the letter
                          spacing depending.</p>
                      </div>
                    </div>
                    <div class="d-flex mt-2">
                      <div class="flex-shrink-0">
                        <i class="ri-checkbox-circle-fill text-success"></i>
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                          raw denim keffiyeh etsy art party before they sold out
                          master cleanse gluten-free squid scenester freegan cosby
                          sweater.</p>
                      </div>
                    </div>
                    <div class="d-flex mt-2">
                      <div class="flex-shrink-0">
                        <i class="ri-checkbox-circle-fill text-success"></i>
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <p class="text-muted mb-0">Just like in the image where we
                          talked about using multiple fonts, you can see that the
                          background in this graphic design is blurred. Whenever you
                          put text on top of an image, it’s important that your
                          viewers can understand.</p>
                      </div>
                    </div>
                    <div class="d-flex mt-2">
                      <div class="flex-shrink-0">
                        <i class="ri-checkbox-circle-fill text-success"></i>
                      </div>
                      <div class="flex-grow-1 ms-2">
                        <p class="text-muted mb-0">Keytar raw denim keffiyeh etsy art
                          party before they sold out master cleanse gluten-free squid
                          scenester freegan cosby sweater.</p>
                      </div>
                    </div>
                  </div>
                </BModal>
              </div>
            </div>
            <div class="tab-pane" id="scrollableModalCode" role="tabpanel" aria-labelledby="scrollableModalCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 120px;"><code>&lt;!-- Scrollable Modal --&gt;
&lt;div class=&quot;modal-dialog modal-dialog-scrollable&quot;&gt;
...
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Varying Modal Content" content="Use <code>event.relatedTarget</code> and HTML <code>data-bs-*</code> attributes
            to vary the contents of the modal depending on which button was clicked." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="varyingModalPreview" role="tabpanel"
              aria-labelledby="varyingModalPreview-tab" tabindex="0">
              <div>
                <div class="hstack gap-2 flex-wrap">
                  <BButton variant="primary" @click="changecustomerName('Mary')">Open Modal for Mary </BButton>
                  <BButton variant="primary" @click="changecustomerName('Jennifer')">Open Modal for Jennifer</BButton>
                  <BButton variant="primary" @click="changecustomerName('Roderick')">Open Modal for Roderick</BButton>
                </div>
                <!-- Varying modal content -->
                <BModal v-model="modalShow6" bodyClass="pb-0" hide-footer title="New message" title-class="varyingcontentModal">
                  <form>
                    <div class="mb-3">
                      <label for="customer-name" class="col-form-label">Customer
                        Name:</label>
                      <input type="text" class="form-control" id="customer-name" />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Message:</label>
                      <textarea class="form-control" id="message-text" rows="4"></textarea>
                    </div>
                  </form>
                  <div class="modal-footer mt-5 pe-0">
                    <BButton type="button" variant="light" @click="modalShow6 = false"> Back </BButton>
                    <BButton type="button" variant="primary">Send message</BButton>
                  </div>
                </BModal>
              </div>
            </div>
            <div class="tab-pane" id="varyingModalCode" role="tabpanel" aria-labelledby="varyingModalCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 200px;"><code>&lt;!-- Varying Modal Content --&gt;
&lt;div class=&quot;hstack gap-2 flex-wrap&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#varyingcontentModal&quot; data-bs-whatever=&quot;@mdo&quot;&gt;Open modal for @mdo&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#varyingcontentModal&quot; data-bs-whatever=&quot;@fat&quot;&gt;Open modal for @fat&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#varyingcontentModal&quot; data-bs-whatever=&quot;@getbootstrap&quot;&gt;Open modal for @getbootstrap&lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Varying modal content --&gt;
&lt;div class=&quot;modal fade&quot; id=&quot;varyingcontentModal&quot; tabindex=&quot;-1&quot; aria-labelledby=&quot;varyingcontentModalLabel&quot; aria-hidden=&quot;true&quot;&gt;
&lt;div class=&quot;modal-dialog&quot;&gt;
&lt;div class=&quot;modal-content&quot;&gt;
&lt;div class=&quot;modal-header&quot;&gt;
&lt;h5 class=&quot;modal-title&quot; id=&quot;varyingcontentModalLabel&quot;&gt;New message&lt;/h5&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;modal-body&quot;&gt;
&lt;form&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;recipient-name&quot; class=&quot;col-form-label&quot;&gt;Recipient:&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;recipient-name&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;message-text&quot; class=&quot;col-form-label&quot;&gt;Message:&lt;/label&gt;
&lt;textarea class=&quot;form-control&quot; id=&quot;message-text&quot;&gt;&lt;/textarea&gt;
&lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;div class=&quot;modal-footer&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot; data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Send message&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
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
          <CardHeader title="Optional Sizes" content="Use <code>modal-fullscreen</code>, <code>modal-xl</code>,
            <code>modal-lg</code>,or <code>modal-sm</code> class to modal-dialog class to set different size modal respectively." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="optionalSizesModalPreview" role="tabpanel"
              aria-labelledby="optionalSizesModalPreview-tab" tabindex="0">
              <div>
                <div class="hstack flex-wrap gap-2">
                  <BButton variant="primary" @click="modalShow7 = !modalShow7">Fullscreen Modal </BButton>
                  <BButton variant="info" @click="modalShow8 = !modalShow8">Extra large Modal </BButton>
                  <BButton variant="success" @click="modalShow9 = !modalShow9">Large Modal </BButton>
                  <BButton variant="danger" @click="modalShow10 = !modalShow10">Small Modal </BButton>
                </div>

                <BModal v-model="modalShow7" bodyClass="pb-0" hide-footer title="Fullscreen Modal Heading" fullscreen>
                  <h6 class="fs-15">Give your text a good structure</h6>
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin.
                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Too much or too little spacing, as in
                        the example below, can make things unpleasant for the
                        reader. The goal is to make your text as comfortable to read
                        as possible.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">In some designs, you might adjust
                        your tracking to create a certain artistic effect. It can
                        also help you fix fonts that are poorly spaced to begin
                        with.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">For that very reason, I went on a
                        quest and spoke to many different professional graphic
                        designers and asked them what graphic design tips they live.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">You've probably heard that opposites
                        attract. The same is true for fonts. Don't be afraid to
                        combine font styles that are different but complementary,
                        like sans serif with serif, short with tall, or decorative
                        with simple. Qui photo booth letterpress, commodo enim craft
                        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">For that very reason, I went on a
                        quest and spoke to many different professional graphic
                        designers and asked them what graphic design tips they live.
                      </p>
                    </div>
                  </div>
                  <h6 class="fs-lg my-3">Graphic Design</h6>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                        It’s in our nature to be interested in the unusual, and
                        that’s why using contrasting colors in Graphic Design is a
                        must. It’s eye-catching, it makes a statement, it’s
                        impressive graphic design. Increase or decrease the letter
                        spacing depending.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                        raw denim keffiyeh etsy art party before they sold out
                        master cleanse gluten-free squid scenester freegan cosby
                        sweater.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Just like in the image where we
                        talked about using multiple fonts, you can see that the
                        background in this graphic design is blurred. Whenever you
                        put text on top of an image, it’s important that your
                        viewers can understand.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Keytar raw denim keffiyeh etsy art
                        party before they sold out master cleanse gluten-free squid
                        scenester freegan cosby sweater.</p>
                    </div>
                  </div>
                  <div class="modal-footer fixed-bottom pt-5 mb-0">

                    <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow7 = false">
                      <i class="ri-close-line me-1 align-middle"></i> Close
                    </BLink>
                    <BButton type="button" variant="primary">Save changes</BButton>
                  </div>
                </BModal>

                <BModal v-model="modalShow8" bodyClass="pb-0" hide-footer title="Extra large Modal" size="xl">
                  <h6 class="fs-15">Give your text a good structure</h6>
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin.
                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Too much or too little spacing, as in
                        the example below, can make things unpleasant for the
                        reader. The goal is to make your text as comfortable to read
                        as possible.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">In some designs, you might adjust
                        your tracking to create a certain artistic effect. It can
                        also help you fix fonts that are poorly spaced to begin
                        with.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">For that very reason, I went on a
                        quest and spoke to many different professional graphic
                        designers and asked them what graphic design tips they live.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">You've probably heard that opposites
                        attract. The same is true for fonts. Don't be afraid to
                        combine font styles that are different but complementary,
                        like sans serif with serif, short with tall, or decorative
                        with simple. Qui photo booth letterpress, commodo enim craft
                        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">For that very reason, I went on a
                        quest and spoke to many different professional graphic
                        designers and asked them what graphic design tips they live.
                      </p>
                    </div>
                  </div>
                  <h6 class="fs-lg my-3">Graphic Design</h6>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                        It’s in our nature to be interested in the unusual, and
                        that’s why using contrasting colors in Graphic Design is a
                        must. It’s eye-catching, it makes a statement, it’s
                        impressive graphic design. Increase or decrease the letter
                        spacing depending.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                        raw denim keffiyeh etsy art party before they sold out
                        master cleanse gluten-free squid scenester freegan cosby
                        sweater.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Just like in the image where we
                        talked about using multiple fonts, you can see that the
                        background in this graphic design is blurred. Whenever you
                        put text on top of an image, it’s important that your
                        viewers can understand.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Keytar raw denim keffiyeh etsy art
                        party before they sold out master cleanse gluten-free squid
                        scenester freegan cosby sweater.</p>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <BLink href="javascript:void(0);" class="btn btn-link link-success fw-medium"
                      @click="modalShow8 = false">
                      <i class="ri-close-line me-1 align-middle"></i> Close
                    </BLink>
                    <BButton type="button" variant="primary">Save Changes</BButton>
                  </div>
                </BModal>

                <BModal v-model="modalShow9" hide-footer title="Large Modal" size="lg">
                  <h6 class="fs-15">Give your text a good structure</h6>
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin.
                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Too much or too little spacing, as in
                        the example below, can make things unpleasant for the
                        reader. The goal is to make your text as comfortable to read
                        as possible.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">In some designs, you might adjust
                        your tracking to create a certain artistic effect. It can
                        also help you fix fonts that are poorly spaced to begin
                        with.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">For that very reason, I went on a
                        quest and spoke to many different professional graphic
                        designers and asked them what graphic design tips they live.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">You've probably heard that opposites
                        attract. The same is true for fonts. Don't be afraid to
                        combine font styles that are different but complementary,
                        like sans serif with serif, short with tall, or decorative
                        with simple. Qui photo booth letterpress, commodo enim craft
                        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">For that very reason, I went on a
                        quest and spoke to many different professional graphic
                        designers and asked them what graphic design tips they live.
                      </p>
                    </div>
                  </div>
                  <h6 class="fs-lg my-3">Graphic Design</h6>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                        It’s in our nature to be interested in the unusual, and
                        that’s why using contrasting colors in Graphic Design is a
                        must. It’s eye-catching, it makes a statement, it’s
                        impressive graphic design. Increase or decrease the letter
                        spacing depending.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                        raw denim keffiyeh etsy art party before they sold out
                        master cleanse gluten-free squid scenester freegan cosby
                        sweater.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Just like in the image where we
                        talked about using multiple fonts, you can see that the
                        background in this graphic design is blurred. Whenever you
                        put text on top of an image, it’s important that your
                        viewers can understand.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Keytar raw denim keffiyeh etsy art
                        party before they sold out master cleanse gluten-free squid
                        scenester freegan cosby sweater.</p>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <BLink href="javascript:void(0);" class="btn btn-link link-success fw-medium"
                      @click="modalShow9 = false">
                      <i class="ri-close-line me-1 align-middle"></i> Close
                    </BLink>
                    <BButton type="button" variant="primary">Save Changes</BButton>
                  </div>
                </BModal>

                <BModal v-model="modalShow10" hide-footer title="Small Modal" size="sm">
                  <h6 class="fs-15">Give your text a good structure</h6>
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin.
                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Too much or too little spacing, as in
                        the example below, can make things unpleasant for the
                        reader. The goal is to make your text as comfortable to read
                        as possible.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">In some designs, you might adjust
                        your tracking to create a certain artistic effect. It can
                        also help you fix fonts that are poorly spaced to begin
                        with.</p>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <BLink href="javascript:void(0);" class="btn btn-link link-success fw-medium"
                      @click="modalShow10 = false">
                      <i class="ri-close-line me-1 align-middle"></i> Close
                    </BLink>
                    <BButton type="button" variant="primary">Save Changes</BButton>
                  </div>
                </BModal>
              </div>
            </div>
            <div class="tab-pane" id="optionalSizesModalCode" role="tabpanel" aria-labelledby="optionalSizesModalCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;!-- Optional Modal Sizes --&gt;
&lt;div class=&quot;modal-dialog modal-fullscreen&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal-dialog modal-xl&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal-dialog modal-lg&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal-dialog modal-sm&quot;&gt;...&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Fullscreen Responsive Modals" content="Below mentioned modifier classes are used to show fullscreen modal as per
          minimum screen requirement." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="fullscreenResponsiveModalPreview" role="tabpanel"
              aria-labelledby="fullscreenResponsiveModalPreview-tab" tabindex="0">
              <div>
                <div class="hstack gap-2 flex-wrap">
                  <BButton variant="primary" @click="modalShow16 = !modalShow16"> Fullscreen modal </BButton>
                  <BButton variant="primary" @click="modalShow11 = !modalShow11"> Full Screen Below sm </BButton>
                  <BButton variant="primary" @click="modalShow12 = !modalShow12"> Full Screen Below md </BButton>
                  <BButton variant="primary" @click="modalShow13 = !modalShow13"> Full Screen Below lg </BButton>
                  <BButton variant="primary" @click="modalShow14 = !modalShow14"> Full Screen Below xl </BButton>
                  <BButton variant="primary" @click="modalShow15 = !modalShow15"> Full Screen Below xxl </BButton>
                </div>
                <BModal v-model="modalShow16" hide-footer title="Full screen Modal" fullscreen>
                  <h6 class="fs-15">Give your text a good structure</h6>
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin.
                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Too much or too little spacing, as in
                        the example below, can make things unpleasant for the
                        reader. The goal is to make your text as comfortable to read
                        as possible.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">In some designs, you might adjust
                        your tracking to create a certain artistic effect. It can
                        also help you fix fonts that are poorly spaced to begin
                        with.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">For that very reason, I went on a
                        quest and spoke to many different professional graphic
                        designers and asked them what graphic design tips they live.
                      </p>
                    </div>
                  </div>

                  <h6 class="fs-lg my-3">Graphic Design</h6>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                        It’s in our nature to be interested in the unusual, and
                        that’s why using contrasting colors in Graphic Design is a
                        must. It’s eye-catching, it makes a statement, it’s
                        impressive graphic design. Increase or decrease the letter
                        spacing depending.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                        raw denim keffiyeh etsy art party before they sold out
                        master cleanse gluten-free squid scenester freegan cosby
                        sweater.</p>
                    </div>
                  </div>
                  <div class="modal-footer fixed-bottom mb-0">

                    <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow16 = false">
                      <i class="ri-close-line me-1 align-middle"></i> Close
                    </BLink>
                    <BButton type="button" variant="primary">Save changes</BButton>
                  </div>
                </BModal>

                <BModal v-model="modalShow11" hide-footer title="Full screen below sm"
                  dialog-class="modal-fullscreen-sm-down">
                  <h6 class="fs-15">Give your text a good structure</h6>
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin.
                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Too much or too little spacing, as in
                        the example below, can make things unpleasant for the
                        reader. The goal is to make your text as comfortable to read
                        as possible.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">In some designs, you might adjust
                        your tracking to create a certain artistic effect. It can
                        also help you fix fonts that are poorly spaced to begin
                        with.</p>
                    </div>
                  </div>
                  <div class="modal-footer mt-4 pe-0 pb-0">
                    <BLink href="javascript:void(0);" class="btn btn-link link-success fw-medium"
                      @click="modalShow11 = false">
                      <i class="ri-close-line me-1 align-middle"></i> Close
                    </BLink>
                    <BButton type="button" variant="primary">Save Changes</BButton>
                  </div>
                </BModal>

                <BModal v-model="modalShow12" hide-footer title="Full screen below md"
                  dialog-class="modal-fullscreen-md-down">
                  <h6 class="fs-15">Give your text a good structure</h6>
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin.
                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Too much or too little spacing, as in
                        the example below, can make things unpleasant for the
                        reader. The goal is to make your text as comfortable to read
                        as possible.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">In some designs, you might adjust
                        your tracking to create a certain artistic effect. It can
                        also help you fix fonts that are poorly spaced to begin
                        with.</p>
                    </div>
                  </div>
                  <div class="modal-footer mt-4 pe-0 pb-0">
                    <BLink href="javascript:void(0);" class="btn btn-link link-success fw-medium"
                      @click="modalShow12 = false">
                      <i class="ri-close-line me-1 align-middle"></i> Close
                    </BLink>
                    <BButton type="button" variant="primary">Save Changes</BButton>
                  </div>
                </BModal>

                <BModal v-model="modalShow13" hide-footer title="Full screen below lg"
                  dialog-class="modal-fullscreen-lg-down">
                  <h6 class="fs-15">Give your text a good structure</h6>
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin.
                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Too much or too little spacing, as in
                        the example below, can make things unpleasant for the
                        reader. The goal is to make your text as comfortable to read
                        as possible.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">In some designs, you might adjust
                        your tracking to create a certain artistic effect. It can
                        also help you fix fonts that are poorly spaced to begin
                        with.</p>
                    </div>
                  </div>
                  <div class="modal-footer mt-4 pe-0 pb-0">
                    <BLink href="javascript:void(0);" class="btn btn-link link-success fw-medium"
                      @click="modalShow13 = false">
                      <i class="ri-close-line me-1 align-middle"></i> Close
                    </BLink>
                    <BButton type="button" variant="primary">Save Changes</BButton>
                  </div>
                </BModal>

                <BModal v-model="modalShow14" hide-footer title="Full screen below xl"
                  dialog-class="modal-fullscreen-xl-down">
                  <h6 class="fs-15">Give your text a good structure</h6>
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin.
                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Too much or too little spacing, as in
                        the example below, can make things unpleasant for the
                        reader. The goal is to make your text as comfortable to read
                        as possible.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">In some designs, you might adjust
                        your tracking to create a certain artistic effect. It can
                        also help you fix fonts that are poorly spaced to begin
                        with.</p>
                    </div>
                  </div>
                  <div class="modal-footer mt-4 pe-0 pb-0">
                    <BLink href="javascript:void(0);" class="btn btn-link link-success fw-medium"
                      @click="modalShow14 = false">
                      <i class="ri-close-line me-1 align-middle"></i> Close
                    </BLink>
                    <BButton type="button" variant="primary">Save Changes</BButton>
                  </div>
                </BModal>

                <BModal v-model="modalShow15" hide-footer title="Full screen below xxl"
                  dialog-class="modal-fullscreen-xxl-down">
                  <h6 class="fs-15">Give your text a good structure</h6>
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin.
                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">Too much or too little spacing, as in
                        the example below, can make things unpleasant for the
                        reader. The goal is to make your text as comfortable to read
                        as possible.</p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <div class="flex-shrink-0">
                      <i class="ri-checkbox-circle-fill text-success"></i>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="text-muted mb-0">In some designs, you might adjust
                        your tracking to create a certain artistic effect. It can
                        also help you fix fonts that are poorly spaced to begin
                        with.</p>
                    </div>
                  </div>
                  <div class="modal-footer mt-4 pe-0 pb-0">

                    <BLink href="javascript:void(0);" class="btn btn-link link-success fw-medium"
                      @click="modalShow15 = false">
                      <i class="ri-close-line me-1 align-middle"></i> Close
                    </BLink>
                    <BButton type="button" variant="primary">Save Changes</BButton>

                  </div>
                </BModal>
              </div>
            </div>
            <div class="tab-pane" id="fullscreenResponsiveModalCode" role="tabpanel"
              aria-labelledby="fullscreenResponsiveModalCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;!-- Fullscreen Modals --&gt;
&lt;div class=&quot;modal-dialog modal-fullscreen&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal-dialog modal-fullscreen-sm-down&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal-dialog modal-fullscreen-md-down&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal-dialog modal-fullscreen-lg-down&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal-dialog modal-fullscreen-xl-down&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal-dialog modal-fullscreen-xxl-down&quot;&gt;...&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Animation Modals" content="Use <code>fadeInRight</code>, <code>fadeInLeft</code>, <code>fadeInUp</code>,
            <code>flip</code>, or <code>zoomIn</code> class to modal class to set different modal with animationeffect respectively." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="animationModalPreview" role="tabpanel"
              aria-labelledby="animationModalPreview-tab" tabindex="0">
              <div>
                <div class="hstack gap-2 flex-wrap">
                  <BButton variant="primary" @click="modalShow17 = !modalShow17"> Fade In Right Modal </BButton>
                  <BButton variant="primary" @click="modalShow18 = !modalShow18"> Fade In Left Modal </BButton>
                  <BButton variant="primary" @click="modalShow19 = !modalShow19"> Fade In Up Modal </BButton>
                  <BButton variant="primary" @click="modalShow20 = !modalShow20"> Flip Modal </BButton>
                  <BButton variant="primary" @click="modalShow21 = !modalShow21"> Zoom In Modal </BButton>
                </div>
                <BModal v-model="modalShow17" hide-footer title="Modal Heading" modal-class="fadeInRight" centered>
                  <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                  <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                    dreams, he found himself transformed in his bed into a horrible
                    vermin. He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and divided by
                    arches into stiff sections.</p>
                  <p class="text-muted">The bedding was hardly able to cover it and seemed
                    ready to slide off any moment. His many legs, pitifully thin
                    compared with the size of the rest of him, waved about helplessly as
                    he looked. "What's happened to me?" he thought.</p>
                  <div class="modal-footer mt-4 pe-0 pb-0">
                    <BButton type="button" variant="light" @click="modalShow17 = false">Close
                    </BButton>
                    <BButton type="button" variant="primary">Save Changes</BButton>
                  </div>
                </BModal>

                <BModal v-model="modalShow18" hide-footer title="Modal Heading" modal-class="fadeInLeft" centered>
                  <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                  <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                    dreams, he found himself transformed in his bed into a horrible
                    vermin. He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and divided by
                    arches into stiff sections.</p>
                  <p class="text-muted">The bedding was hardly able to cover it and seemed
                    ready to slide off any moment. His many legs, pitifully thin
                    compared with the size of the rest of him, waved about helplessly as
                    he looked. "What's happened to me?" he thought.</p>
                  <div class="modal-footer mt-4 pe-0 pb-0">
                    <BButton type="button" variant="light" @click="modalShow18 = false">Close
                    </BButton>
                    <BButton type="button" variant="primary">Save Changes</BButton>
                  </div>
                </BModal>

                <BModal v-model="modalShow19" hide-footer title="Modal Heading" modal-class="fadeInUp" centered>
                  <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                  <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                    dreams, he found himself transformed in his bed into a horrible
                    vermin. He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and divided by
                    arches into stiff sections.</p>
                  <p class="text-muted">The bedding was hardly able to cover it and seemed
                    ready to slide off any moment. His many legs, pitifully thin
                    compared with the size of the rest of him, waved about helplessly as
                    he looked. "What's happened to me?" he thought.</p>
                  <div class="modal-footer mt-4 pe-0 pb-0">
                    <BButton type="button" variant="light" @click="modalShow19 = false">Close
                    </BButton>
                    <BButton type="button" variant="primary">Save Changes</BButton>
                  </div>
                </BModal>

                <BModal v-model="modalShow20" hide-footer title="Modal Heading" modal-class="flip" centered>
                  <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                  <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                    dreams, he found himself transformed in his bed into a horrible
                    vermin. He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and divided by
                    arches into stiff sections.</p>
                  <p class="text-muted">The bedding was hardly able to cover it and seemed
                    ready to slide off any moment. His many legs, pitifully thin
                    compared with the size of the rest of him, waved about helplessly as
                    he looked. "What's happened to me?" he thought.</p>
                  <div class="modal-footer mt-4 pe-0 pb-0">
                    <BButton type="button" variant="light" @click="modalShow20 = false">Close
                    </BButton>
                    <BButton type="button" variant="primary">Save Changes</BButton>
                  </div>
                </BModal>

                <BModal v-model="modalShow21" hide-footer title="Modal Heading" modal-class="zoomIn" centered>
                  <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                  <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                    dreams, he found himself transformed in his bed into a horrible
                    vermin. He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and divided by
                    arches into stiff sections.</p>
                  <p class="text-muted">The bedding was hardly able to cover it and seemed
                    ready to slide off any moment. His many legs, pitifully thin
                    compared with the size of the rest of him, waved about helplessly as
                    he looked. "What's happened to me?" he thought.</p>
                  <div class="modal-footer mt-4 pe-0 pb-0">
                    <BButton type="button" variant="light" @click="modalShow21 = false">Close
                    </BButton>
                    <BButton type="button" variant="primary">Save Changes</BButton>
                  </div>
                </BModal>
              </div>
            </div>
            <div class="tab-pane" id="animationModalCode" role="tabpanel" aria-labelledby="animationModalCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;!-- Animation Modals --&gt;
&lt;div class=&quot;modal fade fadeInRight&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal fade fadeInLeft&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal fadeInUp&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal flip&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal zoomIn&quot;&gt;...&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Modal Positions" content="Use <code>modal-dialog-right</code>, <code>modal-dialog-bottom</code>, or
            <code>modal-dialog-bottom-right</code> class to modal-dialog class to set modal at different positions respectively." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="positionsModalPreview" role="tabpanel"
              aria-labelledby="positionsModalPreview-tab" tabindex="0">
              <div>
                <div class="hstack gap-2 flex-wrap">
                  <BButton variant="primary" @click="modalShow22 = !modalShow22">Top Modal</BButton>
                  <BButton variant="secondary" @click="modalShow23 = !modalShow23">Top Right Modal</BButton>
                  <BButton variant="success" @click="modalShow24 = !modalShow24">Bottom Modal</BButton>
                  <BButton variant="danger" @click="modalShow25 = !modalShow25">Bottom Right Modal</BButton>
                </div>
                <BModal v-model="modalShow22" hide-footer hide-header-close>
                  <div class="modal-body text-center">
                    <i class="bi bi-emoji-smile display-5 text-success"></i>
                    <div class="mt-4">
                      <h4 class="mb-3">Your event has been created.</h4>
                      <p class="text-muted mb-4">The transfer was not successfully
                        received by us. the email of the <br>  recipient wasn't correct.</p>
                      <div class="hstack gap-2 justify-content-center">
                        <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow22 = false">
                          <i class="ri-close-line me-1 align-middle"></i> Close
                        </BLink>
                        <BLink href="#" class="btn btn-success">
                          Completed</BLink>
                      </div>
                    </div>
                  </div>
                </BModal>

                <BModal v-model="modalShow23" hide-footer dialog-class="modal-dialog-right" hide-header-close>
                  <div class="modal-body text-center">
                    <i class="bi bi-emoji-smile display-5 text-success"></i>
                    <div class="mt-4">
                      <h4 class="mb-3">Your event has been created.</h4>
                      <p class="text-muted mb-4">The transfer was not successfully
                        received by us. the email of the recipient wasn't correct.</p>
                      <div class="hstack gap-2 justify-content-center">
                        <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow23 = false">
                          <i class="ri-close-line me-1 align-middle"></i> Close
                        </BLink>
                        <BLink href="#" class="btn btn-success">
                          Completed</BLink>
                      </div>
                    </div>
                  </div>
                </BModal>

                <BModal v-model="modalShow24" hide-footer dialog-class="modal-dialog-bottom" hide-header-close>
                  <div class="modal-body text-center">
                    <i class="bi bi-emoji-smile display-5 text-success"></i>
                    <div class="mt-4">
                      <h4 class="mb-3">Your event has been created.</h4>
                      <p class="text-muted mb-4">The transfer was not successfully
                        received by us. the email of the recipient wasn't correct.</p>
                      <div class="hstack gap-2 justify-content-center">
                        <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow24 = false">
                          <i class="ri-close-line me-1 align-middle"></i> Close
                        </BLink>
                        <BLink href="#" class="btn btn-success">
                          Completed</BLink>
                      </div>
                    </div>
                  </div>
                </BModal>

                <BModal v-model="modalShow25" hide-footer dialog-class="modal-dialog-bottom-right" hide-header-close>
                  <div class="modal-body text-center">
                    <i class="bi bi-emoji-smile display-5 text-success"></i>
                    <div class="mt-4">
                      <h4 class="mb-3">Your event has been created.</h4>
                      <p class="text-muted mb-4">The transfer was not successfully
                        received by us. the email of the recipient wasn't correct.</p>
                      <div class="hstack gap-2 justify-content-center">
                        <BLink href="#" class="btn btn-link link-success fw-medium" @click="modalShow25 = false">
                          <i class="ri-close-line me-1 align-middle"></i> Close
                        </BLink>
                        <BLink href="#" class="btn btn-success">
                          Completed</BLink>
                      </div>
                    </div>
                  </div>
                </BModal>
              </div>
            </div>
            <div class="tab-pane" id="positionsModalCode" role="tabpanel" aria-labelledby="positionsModalCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;!-- Animation Modals --&gt;
&lt;div class=&quot;modal-dialog&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal-dialog modal-dialog-right&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal-dialog modal-dialog-bottom&quot;&gt;...&lt;/div&gt;</code>

<code>&lt;div class=&quot;modal-dialog modal-dialog-bottom-right&quot;&gt;...&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    
  </Layout>
</template>