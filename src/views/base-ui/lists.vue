<script>



export default {
  data() {
    return {
    };
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
          <PageHeader title="Lists" pagetitle="Bootstrap UI" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol xxl="4" xl="6">
        <BCard no-body>
          <CardHeader title="Default List" content="Use <code>list-group</code> class in an unordered list and
            <code>list-group-item</code> class to create a default list group." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="defaultListPreview" role="tabpanel"
              aria-labelledby="defaultListPreview-tab" tabindex="0">
              <div>
                <BListGroup tag="ul">
                  <BListGroupItem tag="li"><i class="ri-bill-line align-middle me-2"></i> Send the billing
                      agreement</BListGroupItem>
                  <BListGroupItem tag="li"><i class="ri-file-copy-2-line align-middle me-2"></i>Send over
                      all the documentation.</BListGroupItem>
                  <BListGroupItem tag="li"><i class="ri-question-answer-line align-middle me-2"></i>Meeting
                      with daron to review the intake form</BListGroupItem>
                  <BListGroupItem tag="li"><i class="ri-secure-payment-line align-middle me-2"></i>Check
                      uikings theme and give customer support</BListGroupItem>
              </BListGroup>
               
              </div>
            </div>
            <div class="tab-pane" id="defaultListCode" role="tabpanel" aria-labelledby="defaultListCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;ul class=&quot;list-group&quot;&gt;
&lt;li class=&quot;list-group-item&quot;&gt;&lt;i class=&quot;ri-bill-line align-middle me-2&quot;&gt;&lt;/i&gt; Send the billing agreement&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;&lt;i class=&quot;ri-file-copy-2-line align-middle me-2&quot;&gt;&lt;/i&gt;Send over all the documentation.&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;&lt;i class=&quot;ri-question-answer-line align-middle me-2&quot;&gt;&lt;/i&gt;Meeting with daron to review the intake form&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;&lt;i class=&quot;ri-secure-payment-line align-middle me-2&quot;&gt;&lt;/i&gt;Check uikings theme and give customer support&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="4" xl="6">
        <BCard no-body>
          <CardHeader title="Active Item" content="Use <code>active</code> class to <code>list-group-item</code> to indicate the
            current active selection." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listsActiveItemPreview" role="tabpanel"
              aria-labelledby="listsActiveItemPreview-tab" tabindex="0">
              <div>
                <BListGroup tag="ul">
                  <BListGroupItem tag="li" active>Send the billing agreement</BListGroupItem>
                  <BListGroupItem tag="li">Send over all the documentation.</BListGroupItem>
                  <BListGroupItem tag="li">Meeting with daron to review the intake form</BListGroupItem>
                  <BListGroupItem tag="li">Check uikings theme and give customer
                      support</BListGroupItem>
                  <BListGroupItem tag="li">Start making a presentation</BListGroupItem>
              </BListGroup>
              </div>
            </div>
            <div class="tab-pane" id="listsActiveItemCode" role="tabpanel" aria-labelledby="listsActiveItemCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;ul class=&quot;list-group&quot;&gt;
&lt;li class=&quot;list-group-item active&quot; aria-current=&quot;true&quot;&gt;Send the billing agreement&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Send over all the documentation.&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Meeting with daron to review the intake form&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Check uikings theme and give customer support&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Start making a presentation&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="4" xl="6">
        <BCard no-body>
          <CardHeader title="Disabled Items" content="Use <code>disabled</code> class to <code>list-group-item</code> to make it
            <em>appear</em> disabled." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listsDisabledItemsPreview" role="tabpanel"
              aria-labelledby="listsDisabledItemsPreview-tab" tabindex="0">
              <BListGroup tag="ul">
                <BListGroupItem tag="li" disabled>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                            <img src="@/assets/images/users/avatar-1.jpg" alt=""
                                class="avatar-xs rounded-circle">
                        </div>
                        <div class="flex-grow-1 ms-2">
                            James Ballard
                        </div>
                    </div>
                </BListGroupItem>
                <BListGroupItem tag="li">
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                            <img src="@/assets/images/users/avatar-2.jpg" alt=""
                                class="avatar-xs rounded-circle">
                        </div>
                        <div class="flex-grow-1 ms-2">
                            Nancy Martino
                        </div>
                    </div>
                </BListGroupItem>
                <BListGroupItem tag="li">
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                            <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                class="avatar-xs rounded-circle">
                        </div>
                        <div class="flex-grow-1 ms-2">
                            Henry Baird
                        </div>
                    </div>
                </BListGroupItem>
                <BListGroupItem tag="li">
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                            <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                class="avatar-xs rounded-circle">
                        </div>
                        <div class="flex-grow-1 ms-2">
                            Erica Kernan
                        </div>
                    </div>
                </BListGroupItem>
            </BListGroup>
            </div>
            <div class="tab-pane" id="listsDisabledItemsCode" role="tabpanel" aria-labelledby="listsDisabledItemsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height:200px;"><code>&lt;ul class=&quot;list-group&quot;&gt;
&lt;li class=&quot;list-group-item disabled&quot; aria-disabled=&quot;true&quot;&gt;
&lt;div class=&quot;d-flex align-items-center&quot;&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;img src=&quot;@/assets/images/users/avatar-1.jpg&quot; alt=&quot;&quot; class=&quot;avatar-xs rounded-circle&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1 ms-2&quot;&gt;
James Ballard
&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;
&lt;div class=&quot;d-flex align-items-center&quot;&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; alt=&quot;&quot; class=&quot;avatar-xs rounded-circle&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1 ms-2&quot;&gt;
Nancy Martino
&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;
&lt;div class=&quot;d-flex align-items-center&quot;&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; alt=&quot;&quot; class=&quot;avatar-xs rounded-circle&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1 ms-2&quot;&gt;
Henry Baird
&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;
&lt;div class=&quot;d-flex align-items-center&quot;&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; alt=&quot;&quot; class=&quot;avatar-xs rounded-circle&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1 ms-2&quot;&gt;
Erica Kernan
&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="4" xl="6">
        <BCard no-body>
          <CardHeader title="List with Link" content="Use <code>&lt;a&gt;</code> tag to create actionable list group items with hover,
            disabled, and active states by adding list-group-item-action." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listWithLinkPreview" role="tabpanel"
              aria-labelledby="listWithLinkPreview-tab" tabindex="0">
              <BListGroup>
                <BListGroupItem href="#" active> <i class="ri-download-2-fill align-middle me-2"></i>Category
                    Download </BListGroupItem>
                <BListGroupItem href="#"> <i class="ri-shield-check-line align-middle me-2"></i>Security
                    Access </BListGroupItem>
                <BListGroupItem href="#"> <i class="ri-database-2-line align-middle me-2"></i>Storage folder
                </BListGroupItem>
                <BListGroupItem href="#"> <i class="ri-notification-3-line align-middle me-2"></i>Push
                    Notification </BListGroupItem>
                <BListGroupItem href="#" disabled> <i class="ri-moon-fill align-middle me-2"></i>Dark Mode
                </BListGroupItem>
            </BListGroup>
            </div>
            <div class="tab-pane" id="listWithLinkCode" role="tabpanel" aria-labelledby="listWithLinkCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;div class=&quot;list-group list-group-fill-success&quot;&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action active&quot;&gt;&lt;i class=&quot;ri-download-2-fill align-middle me-2&quot;&gt;&lt;/i&gt;Category Download&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;&lt;i class=&quot;ri-shield-check-line align-middle me-2&quot;&gt;&lt;/i&gt;Security Access&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;&lt;i class=&quot;ri-database-2-line align-middle me-2&quot;&gt;&lt;/i&gt;Storage folder&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;&lt;i class=&quot;ri-notification-3-line align-middle me-2&quot;&gt;&lt;/i&gt;Push Notification&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action disabled&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;&lt;i class=&quot;ri-moon-fill align-middle me-2&quot;&gt;&lt;/i&gt;Dark Mode&lt;/a&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="4" xl="6">
        <BCard no-body>
          <CardHeader title="List with Button" content="Use <code>button</code> tag to create actionable list group items with
            hover, disabled, and active states by adding list-group-item-action." />
         <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listWithButtonPreview" role="tabpanel"
              aria-labelledby="listWithButtonPreview-tab" tabindex="0">
              <BListGroup>
                <BListGroupItem button active> <i class="ri-reply-fill align-middle me-2"></i>Reply
                </BListGroupItem>
                <BListGroupItem button> <i class="ri-share-forward-fill align-middle me-2"></i>Forward
                    Message </BListGroupItem>
                <BListGroupItem button> <i class="ri-equalizer-line align-middle me-2"></i>Filter Message
                </BListGroupItem>
                <BListGroupItem button> <i class="ri-delete-bin-5-line align-middle me-2"></i>Delete Message
                </BListGroupItem>
                <BListGroupItem button disabled> <i class="ri-forbid-line align-middle me-2"></i>Block "Mark
                    Spencer </BListGroupItem>
            </BListGroup>
            </div>
            <div class="tab-pane" id="listWithButtonCode" role="tabpanel" aria-labelledby="listWithButtonCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;div class=&quot;list-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;list-group-item list-group-item-action active&quot; aria-current=&quot;true&quot;&gt;&lt;i class=&quot;ri-reply-fill align-middle me-2&quot;&gt;&lt;/i&gt;Reply&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;&lt;i class=&quot;ri-share-forward-fill align-middle me-2&quot;&gt;&lt;/i&gt;Forward Message&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;&lt;i class=&quot;ri-equalizer-line align-middle me-2&quot;&gt;&lt;/i&gt;Filter Message&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line align-middle me-2&quot;&gt;&lt;/i&gt;Delete Message&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;list-group-item list-group-item-action&quot; disabled&gt;&lt;i class=&quot;ri-forbid-line align-middle me-2&quot;&gt;&lt;/i&gt;Block &quot;Mark Spencer&lt;/button&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="4" xl="6">
        <BCard no-body>
          <CardHeader title="Flush List" content="Use <code>list-group-flush</code> class to remove some borders and rounded
            corners to render list group items." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listFlushPreview" role="tabpanel" aria-labelledby="listFlushPreview-tab"
              tabindex="0">
              <BListGroup tag="ul" flush>
                <BListGroupItem tag="li">Send the billing agreement</BListGroupItem>
                <BListGroupItem tag="li">Send over all the documentation.</BListGroupItem>
                <BListGroupItem tag="li">Meeting with daron to review the intake form</BListGroupItem>
                <BListGroupItem tag="li">Check uikings theme and give customer support</BListGroupItem>
                <BListGroupItem tag="li">Start making a presentation</BListGroupItem>
            </BListGroup>
            </div>
            <div class="tab-pane" id="listFlushCode" role="tabpanel" aria-labelledby="listFlushCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;ul class=&quot;list-group list-group-flush&quot;&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Send the billing agreement&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Send over all the documentation.&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Meeting with daron to review the intake form&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Check uikings theme and give customer support&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Start making a presentation&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol xl="12">
        <BCard no-body>
          <CardHeader title="Horizontal List" content="Use <code>list-group-horizontal</code> class to change the layout of list group
            items from vertical to horizontal across all breakpoints." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listHorizontalPreview" role="tabpanel"
              aria-labelledby="listHorizontalPreview-tab" tabindex="0">
              <div>
                <BListGroup tag="ul" horizontal="md" class="mb-3">
                  <BListGroupItem tag="li">Inbox</BListGroupItem>
                  <BListGroupItem tag="li">Work</BListGroupItem>
                  <BListGroupItem tag="li">Shopping</BListGroupItem>
              </BListGroup>
              <BListGroup tag="ul" horizontal="md" class="justify-content-center mb-3">
                  <BListGroupItem tag="li">Inbox</BListGroupItem>
                  <BListGroupItem tag="li">Work</BListGroupItem>
                  <BListGroupItem tag="li">Shopping</BListGroupItem>
              </BListGroup>
              <BListGroup tag="ul" horizontal="md" class="justify-content-end">
                  <BListGroupItem tag="li">Inbox</BListGroupItem>
                  <BListGroupItem tag="li">Work</BListGroupItem>
                  <BListGroupItem tag="li">Shopping</BListGroupItem>
              </BListGroup>
              </div>
            </div>
            <div class="tab-pane" id="listHorizontalCode" role="tabpanel" aria-labelledby="listHorizontalCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Start Alignment --&gt;
&lt;ul class=&quot;list-group list-group-horizontal-md&quot;&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Inbox&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Work&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Shopping&lt;/li&gt;
&lt;/ul&gt;</code>

<code>&lt;!-- Center Alignment --&gt;
&lt;ul class=&quot;list-group list-group-horizontal-md justify-content-center&quot;&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Inbox&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Work&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Shopping&lt;/li&gt;
&lt;/ul&gt;</code>

<code>&lt;!-- Right Alignment --&gt;
&lt;ul class=&quot;list-group list-group-horizontal-md justify-content-end&quot;&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Inbox&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Work&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Shopping&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Contextual Classes" content="Use contextual classes to style list items with a stateful background and color." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listContextualClassesPreview" role="tabpanel"
              aria-labelledby="listContextualClassesPreview-tab" tabindex="0">
              <BListGroup tag="ul">
                <BListGroupItem tag="li">Dapibus ac facilisis in</BListGroupItem>
                <BListGroupItem tag="li" variant="primary">A simple primary list group
                    item</BListGroupItem>
                <BListGroupItem tag="li" variant="secondary">A simple secondary list group
                    item</BListGroupItem>
                <BListGroupItem tag="li" variant="success">A simple success list group
                    item</BListGroupItem>
                <BListGroupItem tag="li" variant="danger">A simple danger list group item</BListGroupItem>
                <BListGroupItem tag="li" variant="warning">A simple warning list group
                    item</BListGroupItem>
                <BListGroupItem tag="li" variant="info">A simple info list group item</BListGroupItem>
                <BListGroupItem tag="li" variant="light">A simple light list group item</BListGroupItem>
                <BListGroupItem tag="li" variant="dark">A simple dark list group item</BListGroupItem>
            </BListGroup>
            </div>
            <div class="tab-pane" id="listContextualClassesCode" role="tabpanel"
              aria-labelledby="listContextualClassesCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;ul class=&quot;list-group&quot;&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
&lt;li class=&quot;list-group-item list-group-item-primary&quot;&gt;A simple primary list group item&lt;/li&gt;
&lt;li class=&quot;list-group-item list-group-item-secondary&quot;&gt;A simple secondary list group item&lt;/li&gt;
&lt;li class=&quot;list-group-item list-group-item-success&quot;&gt;A simple success list group item&lt;/li&gt;
&lt;li class=&quot;list-group-item list-group-item-danger&quot;&gt;A simple danger list group item&lt;/li&gt;
&lt;li class=&quot;list-group-item list-group-item-warning&quot;&gt;A simple warning list group item&lt;/li&gt;
&lt;li class=&quot;list-group-item list-group-item-info&quot;&gt;A simple info list group item&lt;/li&gt;
&lt;li class=&quot;list-group-item list-group-item-light&quot;&gt;A simple light list group item&lt;/li&gt;
&lt;li class=&quot;list-group-item list-group-item-dark&quot;&gt;A simple dark list group item&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Contextual Classes with Link" content="Contextual classes also work with <code>.list-group-item-action</code>. Note the
            addition of the hover styles here not present in the previous example." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listContextualClassesWithLinkPreview" role="tabpanel"
              aria-labelledby="listContextualClassesWithLinkPreview-tab" tabindex="0">
              <div class="live-preview">
                <BListGroup>
                  <BListGroupItem href="#">A simple default list group item</BListGroupItem>
                  <BListGroupItem href="#" variant="primary">A simple primary list group
                      item</BListGroupItem>
                  <BListGroupItem href="#" variant="secondary">A simple secondary list group
                      item</BListGroupItem>
                  <BListGroupItem href="#" variant="success">A simple success list group
                      item</BListGroupItem>
                  <BListGroupItem href="#" variant="danger">A simple danger list group
                      item</BListGroupItem>
                  <BListGroupItem href="#" variant="warning">A simple warning list group
                      item</BListGroupItem>
                  <BListGroupItem href="#" variant="info">A simple info list group item</BListGroupItem>
                  <BListGroupItem href="#" variant="light">A simple light list group
                      item</BListGroupItem>
                  <BListGroupItem href="#" variant="dark">A simple dark list group item</BListGroupItem>
              </BListGroup>
              </div>
            </div>
            <div class="tab-pane" id="listContextualClassesWithLinkCode" role="tabpanel"
              aria-labelledby="listContextualClassesWithLinkCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;div class=&quot;list-group&quot;&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;A simple default list group item&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-primary&quot;&gt;A simple primary list group item&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-secondary&quot;&gt;A simple secondary list group item&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-success&quot;&gt;A simple success list group item&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-danger&quot;&gt;A simple danger list group item&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-warning&quot;&gt;A simple warning list group item&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-info&quot;&gt;A simple info list group item&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-light&quot;&gt;A simple light list group item&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-dark&quot;&gt;A simple dark list group item&lt;/a&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol xl="12">
        <BCard no-body>
          <CardHeader title="Custom Content" content='Add nearly any HTML within, even for linked list groups like the one below, with
          the help of <a href="https://getbootstrap.com/docs/5.1/utilities/flex/">flexbox utilities</a>.' />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listCustomContentPreview" role="tabpanel"
              aria-labelledby="listCustomContentPreview-tab" tabindex="0">
              <BListGroup>
                <BListGroupItem href="#" active>
                    <div class="float-end"> Pending </div>
                    <div class="d-flex mb-2 align-items-center">
                        <div class="flex-shrink-0"> <img src="@/assets/images/users/avatar-1.jpg" alt=""
                                class="avatar-sm rounded-circle"> </div>
                        <div class="flex-grow-1 ms-3">
                            <h5 class="list-title fs-base mb-1">Charlie Pritchard</h5>
                            <p class="list-text mb-0 fs-xs">12 min Ago</p>
                        </div>
                    </div>
                    <p class="list-text mb-0">They all have something to say beyond the words on the page. They
                        can come across as casual or neutral, exotic or graphic. That's why it's important to
                        think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui
                        irure terry richardson ex squid.</p>
                </BListGroupItem>
                <BListGroupItem href="#">
                    <div class="float-end"> Pending </div>
                    <div class="d-flex mb-2 align-items-center">
                        <div class="flex-shrink-0"> <img src="@/assets/images/users/avatar-2.jpg" alt=""
                                class="avatar-sm rounded-circle"> </div>
                        <div class="flex-grow-1 ms-3">
                            <h5 class="list-title fs-base mb-1">Dominic Charlton</h5>
                            <p class="list-text mb-0 fs-xs">12 min Ago</p>
                        </div>
                    </div>
                    <p class="list-text mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art
                        party before they sold out master cleanse gluten-free squid scenester freegan cosby
                        sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo
                        park Austin.</p>
                </BListGroupItem>
                <BListGroupItem href="#">
                    <div class="float-end"> Rejected </div>
                    <div class="d-flex mb-2 align-items-center">
                        <div class="flex-shrink-0"> <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                class="avatar-sm rounded-circle"> </div>
                        <div class="flex-grow-1 ms-3">
                            <h5 class="list-title fs-base mb-1">Declan Long</h5>
                            <p class="list-text mb-0 fs-xs">12 min Ago</p>
                        </div>
                    </div>
                    <p class="list-text mb-0">Big July earthquakes confound zany experimental vow. My girl wove
                        six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to
                        waltz. try again until it looks right, and each assumenda labore aes Homo nostrud
                        organic, assumenda labore aesthetic magna elements, buttons, everything.</p>
                </BListGroupItem>
                <BListGroupItem href="#">
                    <div class="float-end"> Successful </div>
                    <div class="d-flex mb-2 align-items-center">
                        <div class="flex-shrink-0"> <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                class="avatar-sm rounded-circle"> </div>
                        <div class="flex-grow-1 ms-3">
                            <h5 class="list-title fs-base mb-1">Angela Bernier</h5>
                            <p class="list-text mb-0 fs-xs">5 days Ago</p>
                        </div>
                    </div>
                    <p class="list-text mb-0">Just like in the image where we talked about using multiple fonts,
                        you can see that the background in this graphic design is blurred. Whenever you put text
                        on top of an image, it’s important that your viewers can understand the text, and
                        sometimes that means applying a gaussian readable.</p>
                </BListGroupItem>
            </BListGroup>
            </div>
            <div class="tab-pane" id="listCustomContentCode" role="tabpanel" aria-labelledby="listCustomContentCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;div class=&quot;list-group&quot;&gt;
&lt;a href=&quot;javascript:void(0);&quot; class=&quot;list-group-item list-group-item-action active&quot;&gt;
&lt;div class=&quot;float-end&quot;&gt;
Pending 
&lt;/div&gt;
&lt;div class=&quot;d-flex mb-2 align-items-center&quot;&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;img src=&quot;@/assets/images/users/avatar-1.jpg&quot; alt=&quot;&quot; class=&quot;avatar-sm rounded-circle&quot; /&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1 ms-3&quot;&gt;
&lt;h5 class=&quot;list-title fs-base mb-1&quot;&gt;Charlie Pritchard&lt;/h5&gt;
&lt;p class=&quot;list-text mb-0 fs-xs&quot;&gt;12 min Ago&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;p class=&quot;list-text mb-0&quot;&gt;They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid.&lt;/p&gt;
&lt;/a&gt;</code>
<code>&lt;a href=&quot;javascript:void(0);&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;
&lt;div class=&quot;float-end&quot;&gt;
Pending 
&lt;/div&gt;
&lt;div class=&quot;d-flex mb-2 align-items-center&quot;&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; alt=&quot;&quot; class=&quot;avatar-sm rounded-circle&quot; /&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1 ms-3&quot;&gt;
&lt;h5 class=&quot;list-title fs-base mb-1&quot;&gt;Dominic Charlton&lt;/h5&gt;
&lt;p class=&quot;list-text mb-0 fs-xs&quot;&gt;12 min Ago&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;p class=&quot;list-text mb-0&quot;&gt;Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin.&lt;/p&gt;
&lt;/a&gt;</code>
<code>&lt;a href=&quot;javascript:void(0);&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;
&lt;div class=&quot;float-end&quot;&gt;
Rejected 
&lt;/div&gt;
&lt;div class=&quot;d-flex mb-2 align-items-center&quot;&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; alt=&quot;&quot; class=&quot;avatar-sm rounded-circle&quot; /&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1 ms-3&quot;&gt;
&lt;h5 class=&quot;list-title fs-base mb-1&quot;&gt;Declan Long&lt;/h5&gt;
&lt;p class=&quot;list-text mb-0 fs-xs&quot;&gt;12 min Ago&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;p class=&quot;list-text mb-0&quot;&gt;Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.&lt;/p&gt;
&lt;/a&gt;</code>
<code>&lt;a href=&quot;javascript:void(0);&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;
&lt;div class=&quot;float-end&quot;&gt;
Successful 
&lt;/div&gt;
&lt;div class=&quot;d-flex mb-2 align-items-center&quot;&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;img src=&quot;@/assets/images/users/avatar-4.jpg&quot; alt=&quot;&quot; class=&quot;avatar-sm rounded-circle&quot; /&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1 ms-3&quot;&gt;
&lt;h5 class=&quot;list-title fs-base mb-1&quot;&gt;Angela Bernier&lt;/h5&gt;
&lt;p class=&quot;list-text mb-0 fs-xs&quot;&gt;5 days Ago&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;p class=&quot;list-text mb-0&quot;&gt;Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it&rsquo;s important that your viewers can understand the text, and sometimes that means applying a gaussian readable.&lt;/p&gt;
&lt;/a&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol xxl="4" xl="6">
        <BCard no-body>
          <CardHeader title="List with Badges" content='Use badges to any list group item to show unread counts, activity, and more with
          the help of some <router-link to="https://getbootstrap.com/docs/5.1/utilities/">utilities</router-link>..' />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listWithBadgePreview" role="tabpanel"
              aria-labelledby="listWithBadgePreview-tab" tabindex="0">
              <BListGroup tag="ul">
                <BListGroupItem tag="li"
                    class="list-group-item d-flex justify-content-between align-items-center"> Send the billing
                    agreement <span class="badge bg-success">High</span> </BListGroupItem>
                <BListGroupItem tag="li"
                    class="list-group-item d-flex justify-content-between align-items-center"> Send over all the
                    documentation </BListGroupItem>
                <BListGroupItem tag="li"
                    class="list-group-item d-flex justify-content-between align-items-center"> Meeting with
                    daron to review the intake form <span class="badge bg-danger">Low</span>
                </BListGroupItem>
                <BListGroupItem tag="li"
                    class="list-group-item d-flex justify-content-between align-items-center"> Check uikings
                    theme and give customer support <span class="badge bg-secondary">Medium</span>
                </BListGroupItem>
                <BListGroupItem tag="li"
                    class="list-group-item d-flex justify-content-between align-items-center"> Start making a
                    presentation <span class="badge bg-success">High</span> </BListGroupItem>
            </BListGroup>
            </div>
            <div class="tab-pane" id="listWithBadgeCode" role="tabpanel" aria-labelledby="listWithBadgeCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 222px;"><code>&lt;ul class=&quot;list-group&quot;&gt;
&lt;li class=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt;
Send the billing agreement &lt;span class=&quot;badge bg-success&quot;&gt;High&lt;/span&gt;
&lt;/li&gt;
&lt;li class=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt;
Send over all the documentation 
&lt;/li&gt;
&lt;li class=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt;
Meeting with daron to review the intake form &lt;span class=&quot;badge bg-danger&quot;&gt;Low&lt;/span&gt;
&lt;/li&gt;
&lt;li class=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt;
Check uikings theme and give customer support &lt;span class=&quot;badge bg-secondary&quot;&gt;Medium&lt;/span&gt;
&lt;/li&gt;
&lt;li class=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt;
Start making a presentation &lt;span class=&quot;badge bg-success&quot;&gt;High&lt;/span&gt;
&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="4" xl="6">
        <BCard no-body>
          <CardHeader title="List with Checkboxes" content="Use Bootstrap’s checkboxes within list group items and customize as needed."/>
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listWithCheckboxesPreview" role="tabpanel"
              aria-labelledby="listWithCheckboxesPreview-tab" tabindex="0">
              <BListGroup>
                <BListGroupItem tag="label"> <input class="form-check-input me-1" type="checkbox" value="">
                    Declined Payment </BListGroupItem>
                <BListGroupItem tag="label"> <input class="form-check-input me-1" type="checkbox" value=""
                        checked> Delivery Error </BListGroupItem>
                <BListGroupItem tag="label"> <input class="form-check-input me-1" type="checkbox" value=""
                        checked> Wrong Amount </BListGroupItem>
                <BListGroupItem tag="label"> <input class="form-check-input me-1" type="checkbox" value="">
                    Wrong Address </BListGroupItem>
                <BListGroupItem tag="label"> <input class="form-check-input me-1" type="checkbox" value="">
                    Wrong UX/UI Solution </BListGroupItem>
            </BListGroup>
            </div>
            <div class="tab-pane" id="listWithCheckboxesCode" role="tabpanel" aria-labelledby="listWithCheckboxesCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 200px;"><code>&lt;div class=&quot;list-group&quot;&gt;
&lt;label class=&quot;list-group-item&quot;&gt;
&lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot;&quot;&gt;
Declined Payment
&lt;/label&gt;
&lt;label class=&quot;list-group-item&quot;&gt;
&lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot;&quot; checked&gt;
Delivery Error
&lt;/label&gt;
&lt;label class=&quot;list-group-item&quot;&gt;
&lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot;&quot; checked&gt;
Wrong Amount
&lt;/label&gt;
&lt;label class=&quot;list-group-item&quot;&gt;
&lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot;&quot;&gt;
Wrong Address
&lt;/label&gt;
&lt;label class=&quot;list-group-item&quot;&gt;
&lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot;&quot;&gt;
Wrong UX/UI Solution
&lt;/label&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="4" xl="6">
        <BCard no-body>
          <CardHeader title="List with Radios" content="Use Bootstrap’s radios within list group items and customize as needed."/>
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listWithRadiosPreview" role="tabpanel"
              aria-labelledby="listWithRadiosPreview-tab" tabindex="0">
              <BListGroup>
                <BListGroupItem tag="label"><input class="form-check-input fs-md mt-0 align-middle me-1"
                        name="exampleRadios" type="radio" value=""> Declined Payment </BListGroupItem>
                <BListGroupItem tag="label"><input class="form-check-input fs-md mt-0 align-middle me-1"
                        name="exampleRadios" type="radio" value="" checked> Delivery Error </BListGroupItem>
                <BListGroupItem tag="label"><input class="form-check-input fs-md mt-0 align-middle me-1"
                        name="exampleRadios" type="radio" value=""> Wrong Amount </BListGroupItem>
                <BListGroupItem tag="label"><input class="form-check-input fs-md mt-0 align-middle me-1"
                        name="exampleRadios" type="radio" value=""> Wrong Address </BListGroupItem>
                <BListGroupItem tag="label"><input class="form-check-input fs-md mt-0 align-middle me-1"
                        name="exampleRadios" type="radio" value=""> Wrong UX/UI Solution </BListGroupItem>
            </BListGroup>
            </div>
            <div class="tab-pane" id="listWithRadiosCode" role="tabpanel" aria-labelledby="listWithRadiosCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 200px;"><code>&lt;div class=&quot;list-group&quot;&gt;
&lt;label class=&quot;list-group-item&quot;&gt;
&lt;input class=&quot;form-check-input me-1&quot; name=&quot;exampleRadios&quot; type=&quot;radio&quot; value=&quot;&quot;&gt;
Declined Payment
&lt;/label&gt;
&lt;label class=&quot;list-group-item&quot;&gt;
&lt;input class=&quot;form-check-input me-1&quot; name=&quot;exampleRadios&quot; type=&quot;radio&quot; value=&quot;&quot; checked&gt;
Delivery Error
&lt;/label&gt;
&lt;label class=&quot;list-group-item&quot;&gt;
&lt;input class=&quot;form-check-input me-1&quot; name=&quot;exampleRadios&quot; type=&quot;radio&quot; value=&quot;&quot;&gt;
Wrong Amount
&lt;/label&gt;
&lt;label class=&quot;list-group-item&quot;&gt;
&lt;input class=&quot;form-check-input me-1&quot; name=&quot;exampleRadios&quot; type=&quot;radio&quot; value=&quot;&quot;&gt;
Wrong Address
&lt;/label&gt;
&lt;label class=&quot;list-group-item&quot;&gt;
&lt;input class=&quot;form-check-input me-1&quot; name=&quot;exampleRadios&quot; type=&quot;radio&quot; value=&quot;&quot;&gt;
Wrong UX/UI Solution
&lt;/label&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="4" xl="6">
        <BCard no-body>
          <CardHeader title="List with Icon" content="Use icons to any list group item to show icons to list group items."/>
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listWithIconPreview" role="tabpanel"
              aria-labelledby="listWithIconPreview-tab" tabindex="0">
              <BListGroup tag="ul">
                    <BListGroupItem tag="li"><i class="bi bi-check align-middle lh-1 me-2"></i> Send the
                        billing agreement</BListGroupItem>
                    <BListGroupItem tag="li"><i class="bi bi-check align-middle lh-1 me-2"></i> Send over
                        all the documentation.</BListGroupItem>
                    <BListGroupItem tag="li"><i class="bi bi-check align-middle lh-1 me-2"></i> Meeting
                        with daron to review the intake form</BListGroupItem>
                    <BListGroupItem tag="li"><i class="bi bi-check align-middle lh-1 me-2"></i> Check
                        uikings theme and give customer support</BListGroupItem>
                    <BListGroupItem tag="li"><i class="bi bi-check align-middle lh-1 me-2"></i> Start
                        making a presentation</BListGroupItem>
                </BListGroup>
            </div>
            <div class="tab-pane" id="listWithIconCode" role="tabpanel" aria-labelledby="listWithIconCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;ul class=&quot;list-group&quot;&gt;
&lt;li class=&quot;list-group-item&quot;&gt;&lt;i class=&quot;bi bi-check align-middle lh-1 me-2&quot;&gt;&lt;/i&gt; Send the billing agreement&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;&lt;i class=&quot;bi bi-check align-middle lh-1 me-2&quot;&gt;&lt;/i&gt; Send over all the documentation.&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;&lt;i class=&quot;bi bi-check align-middle lh-1 me-2&quot;&gt;&lt;/i&gt; Meeting with daron to review the intake form&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;&lt;i class=&quot;bi bi-check align-middle lh-1 me-2&quot;&gt;&lt;/i&gt; Check uikings theme and give customer support&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;&lt;i class=&quot;bi bi-check align-middle lh-1 me-2&quot;&gt;&lt;/i&gt; Start making a presentation&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="4" xl="6">
        <BCard no-body>
          <CardHeader title="List with Numbered" content="Use <code>list-group-numbered</code> class (optionally use an
            <code>&lt;ol&gt;</code> element) to show numbered list group items."/>
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listWithNumberedPreview" role="tabpanel"
              aria-labelledby="listWithNumberedPreview-tab" tabindex="0">
              <BListGroup tag="ol" class="list-group-numbered">
                <BListGroupItem tag="li">Send the billing agreement</BListGroupItem>
                <BListGroupItem tag="li">Send over all the documentation.</BListGroupItem>
                <BListGroupItem tag="li">Meeting with daron to review the intake form</BListGroupItem>
                <BListGroupItem tag="li">Check uikings theme and give customer support</BListGroupItem>
                <BListGroupItem tag="li">Start making a presentation</BListGroupItem>
            </BListGroup>
            </div>
            <div class="tab-pane" id="listWithNumberedCode" role="tabpanel" aria-labelledby="listWithNumberedCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 128px;"><code>&lt;ol class=&quot;list-group list-group-numbered&quot;&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Send the billing agreement&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Send over all the documentation.&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Meeting with daron to review the intake form&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Check uikings theme and give customer support&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;Start making a presentation&lt;/li&gt;
&lt;/ol&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="4" xl="6">
        <BCard no-body>
          <CardHeader title="Custom Content Lists" content='Add nearly any HTML within, even for linked list groups like the one below, with
          the help of <router-link to="https://getbootstrap.com/docs/5.1/utilities/flex/">flexbox utilities</router-link>.'/>
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="listcustomContentListPreview" role="tabpanel"
              aria-labelledby="listcustomContentListPreview-tab" tabindex="0">
              <div data-simplebar style="max-height: 215px;">
                <BListGroup tag="ul" class="mb-1">
                  <BListGroupItem tag="li">
                      <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                              <div class="d-flex">
                                  <div class="flex-shrink-0 avatar-xs">
                                      <div class="avatar-title bg-danger-subtle text-danger rounded">
                                          <i class="ri-netflix-fill"></i>
                                      </div>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                      <h6 class="fs-md mb-0">Netfilx</h6>
                                      <small class="text-muted">2 min Ago</small>
                                  </div>
                              </div>
                          </div>
                          <div class="flex-shrink-0">
                              <span class="text-danger">-$25.50</span>
                          </div>
                      </div>
                  </BListGroupItem>
                  <BListGroupItem tag="li">
                      <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                              <div class="d-flex">
                                  <div class="flex-shrink-0 avatar-xs">
                                      <div class="avatar-title bg-success-subtle text-success rounded">
                                          <i class="ri-spotify-fill"></i>
                                      </div>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                      <h6 class="fs-md mb-0">Spotify</h6>
                                      <small class="text-muted">5 days Ago</small>
                                  </div>
                              </div>
                          </div>
                          <div class="flex-shrink-0">
                              <span class="text-success">$48.25</span>
                          </div>
                      </div>
                  </BListGroupItem>
                  <BListGroupItem tag="li">
                      <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                              <div class="d-flex">
                                  <div class="flex-shrink-0">
                                      <img src="@/assets/images/users/avatar-2.jpg" alt=""
                                          class="avatar-xs rounded">
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                      <h6 class="fs-md mb-0">Emily Slater</h6>
                                      <small class="text-muted">8 days Ago</small>
                                  </div>
                              </div>
                          </div>
                          <div class="flex-shrink-0">
                              <span class="text-success">$354.90</span>
                          </div>
                      </div>
                  </BListGroupItem>
                  <BListGroupItem tag="li">
                      <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                              <div class="d-flex">
                                  <div class="flex-shrink-0 avatar-xs">
                                      <div class="avatar-title bg-secondary-subtle text-secondary rounded">
                                          <i class="ri-paypal-fill"></i>
                                      </div>
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                      <h6 class="fs-md mb-0">Paypal</h6>
                                      <small class="text-muted">1 month Ago</small>
                                  </div>
                              </div>
                          </div>
                          <div class="flex-shrink-0">
                              <span class="text-danger">-$12.22</span>
                          </div>
                      </div>
                  </BListGroupItem>
                  <BListGroupItem tag="li">
                      <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                              <div class="d-flex">
                                  <div class="flex-shrink-0">
                                      <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                          class="avatar-xs rounded">
                                  </div>
                                  <div class="flex-shrink-0 ms-2">
                                      <h6 class="fs-md mb-0">Harvey Wells</h6>
                                      <small class="text-muted">4 month Ago</small>
                                  </div>
                              </div>
                          </div>
                          <div class="flex-shrink-0">
                              <span class="text-success">-$459.78</span>
                          </div>
                      </div>
                  </BListGroupItem>
              </BListGroup>
            </div>
          </div>
          <div class="tab-pane" id="listcustomContentListCode" role="tabpanel"
            aria-labelledby="listcustomContentListCode-tab" tabindex="0">
            <h5 class="fs-sm text-muted">HTML Preview</h5>
            <pre class="language-markup" style="height: 200px;"><code>&lt;div data-simplebar style=&quot;max-height: 215px;&quot;&gt; 
&lt;ul class=&quot;list-group&quot;&gt;
&lt;li class=&quot;list-group-item&quot;&gt;
&lt;div class=&quot;d-flex align-items-center&quot;&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;div class=&quot;d-flex&quot;&gt;
  &lt;div class=&quot;flex-shrink-0 avatar-xs&quot;&gt;
      &lt;div class=&quot;avatar-title bg-danger-subtle text-danger rounded&quot;&gt;
          &lt;i class=&quot;ri-netflix-fill&quot;&gt;&lt;/i&gt;
      &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;flex-shrink-0 ms-2&quot;&gt;
      &lt;h6 class=&quot;fs-md mb-0&quot;&gt;Netfilx&lt;/h6&gt;
      &lt;small class=&quot;text-muted&quot;&gt;2 min Ago&lt;/small&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;span class=&quot;text-danger&quot;&gt;-$25.50&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;
&lt;div class=&quot;d-flex align-items-center&quot;&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;div class=&quot;d-flex&quot;&gt;
  &lt;div class=&quot;flex-shrink-0 avatar-xs&quot;&gt;
      &lt;div class=&quot;avatar-title bg-success-subtle text-success rounded&quot;&gt;
          &lt;i class=&quot;ri-spotify-fill&quot;&gt;&lt;/i&gt;
      &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;flex-shrink-0 ms-2&quot;&gt;
      &lt;h6 class=&quot;fs-md mb-0&quot;&gt;Spotify&lt;/h6&gt;
      &lt;small class=&quot;text-muted&quot;&gt;5 days Ago&lt;/small&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;span class=&quot;text-success&quot;&gt;$48.25&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;
&lt;div class=&quot;d-flex align-items-center&quot;&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;div class=&quot;d-flex&quot;&gt;
  &lt;div class=&quot;flex-shrink-0&quot;&gt;
      &lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; alt=&quot;&quot; class=&quot;avatar-xs rounded&quot; /&gt;
  &lt;/div&gt;
  &lt;div class=&quot;flex-shrink-0 ms-2&quot;&gt;
      &lt;h6 class=&quot;fs-md mb-0&quot;&gt;Emily Slater&lt;/h6&gt;
      &lt;small class=&quot;text-muted&quot;&gt;8 days Ago&lt;/small&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;span class=&quot;text-success&quot;&gt;$354.90&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;
&lt;div class=&quot;d-flex align-items-center&quot;&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;div class=&quot;d-flex&quot;&gt;
  &lt;div class=&quot;flex-shrink-0 avatar-xs&quot;&gt;
      &lt;div class=&quot;avatar-title bg-secondary-subtle text-secondary rounded&quot;&gt;
          &lt;i class=&quot;ri-paypal-fill&quot;&gt;&lt;/i&gt;
      &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;flex-shrink-0 ms-2&quot;&gt;
      &lt;h6 class=&quot;fs-md mb-0&quot;&gt;Paypal&lt;/h6&gt;
      &lt;small class=&quot;text-muted&quot;&gt;1 month Ago&lt;/small&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;span class=&quot;text-danger&quot;&gt;-$12.22&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li class=&quot;list-group-item&quot;&gt;
&lt;div class=&quot;d-flex align-items-center&quot;&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;div class=&quot;d-flex&quot;&gt;
  &lt;div class=&quot;flex-shrink-0&quot;&gt;
      &lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; alt=&quot;&quot; class=&quot;avatar-xs rounded&quot; /&gt;
  &lt;/div&gt;
  &lt;div class=&quot;flex-shrink-0 ms-2&quot;&gt;
      &lt;h6 class=&quot;fs-md mb-0&quot;&gt;Harvey Wells&lt;/h6&gt;
      &lt;small class=&quot;text-muted&quot;&gt;4 month Ago&lt;/small&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;span class=&quot;text-success&quot;&gt;-$459.78&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code></pre>
          </div>
        </BCardBody>
      </BCard>

    </BCol>
  </BRow>
</Layout></template>