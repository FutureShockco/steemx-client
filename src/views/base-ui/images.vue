<script>



export default {
  data() {
    return {
    };
  },

};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Images" pagetitle="Bootstrap UI" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol xxl="12">
        <BCard no-body>
          <CardHeader title="Image Rounded & Circle" content="Use <code>rounded</code> class and <code>rounded-circle</code> class to show an
            image with a round border and rounded shape respectively."/>
          <BCardBody class="tab-content" id="showCodeContent">
            <div class="tab-pane show active" id="imageRoundedCirclePreview" role="tabpanel"
              aria-labelledby="imageRoundedCirclePreview-tab" tabindex="0">
              <BRow class="align-items-center">
                <BCol md="6">
                  <img class="rounded" alt="200x200" width="200" src="@/assets/images/small/img-4.jpg"
                      data-holder-rendered="true">
              </BCol>
              <BCol md="6">
                  <div class="mt-4 mt-md-0">
                      <img class="rounded-circle avatar-xl" alt="200x200"
                          src="@/assets/images/users/avatar-4.jpg" data-holder-rendered="true">
                  </div>
              </BCol>
              </BRow>
            </div>
            <div class="tab-pane" id="imageRoundedCircleCode" role="tabpanel" aria-labelledby="imageRoundedCircleCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre
                class="language-markup"><code>&lt;!-- Rounded Image --&gt;
&lt;img class=&quot;rounded&quot; alt=&quot;200x200&quot; width=&quot;200&quot; src=&quot;@/assets/images/small/img-4.jpg&quot;&gt;</code>

<code>&lt;!-- Rounded-circle Image --&gt;
&lt;img class=&quot;rounded-circle avatar-xl&quot; alt=&quot;200x200&quot; src=&quot;@/assets/images/users/avatar-4.jpg&quot;&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="12">
        <BCard no-body>
          <CardHeader title="Image Thumbnails" content="Use <code>img-thumbnail</code> class to give an image rounded 1px border
            appearance."/>
          <BCardBody class="tab-content" id="showCodeContent">
            <div class="tab-pane show active" id="imageThumbnailsPreview" role="tabpanel"
              aria-labelledby="imageThumbnailsPreview-tab" tabindex="0">
              <BRow>
                <BCol cols="6">
                    <img class="img-thumbnail" alt="200x200" width="200" src="@/assets/images/small/img-3.jpg"
                        data-holder-rendered="true">
                </BCol>
                <BCol cols="6">
                    <div class="mt-4 mt-md-0">
                        <img class="img-thumbnail rounded-circle avatar-xl" alt="200x200"
                            src="@/assets/images/users/avatar-3.jpg" data-holder-rendered="true">
                    </div>
                </BCol>
            </BRow>
            </div>
            <div class="tab-pane" id="imageThumbnailsCode" role="tabpanel" aria-labelledby="imageThumbnailsCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre
                class="language-markup"><code>&lt;!-- Thumbnails Images --&gt;
&lt;img class=&quot;img-thumbnail&quot; alt=&quot;200x200&quot; width=&quot;200&quot; src=&quot;@/assets/images/small/img-3.jpg&quot;&gt;</code>

<code>&lt;img class=&quot;img-thumbnail rounded-circle avatar-xl&quot; alt=&quot;200x200&quot; src=&quot;@/assets/images/users/avatar-3.jpg&quot;&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Image Sizes" content="Use <code>avatar-xxs</code>, <code>avatar-xs</code>, <code>avatar-sm</code>,
            <code>avatar-md</code>, <code>avatar-lg</code>, <code>avatar-xl</code> class for different image sizes."/>
          <BCardBody class="tab-content" id="showCodeContent">
            <div class="tab-pane show active" id="imageSizesPreview" role="tabpanel"
              aria-labelledby="imageSizesPreview-tab" tabindex="0">
              <BRow>
                <BCol md="12">
                    <BRow class="g-3">
                        <BCol xxl="2" md="4" sm="6">
                            <div>
                                <img src="@/assets/images/users/avatar-2.jpg" alt="" class="rounded avatar-xxs">
                                <p class="mt-2 mb-lg-0"><code>avatar-xxs</code></p>
                            </div>
                        </BCol>
                        <BCol xxl="2" md="4" sm="6">
                            <div>
                                <img src="@/assets/images/users/avatar-10.jpg" alt="" class="rounded avatar-xs">
                                <p class="mt-2 mb-lg-0"><code>avatar-xs</code></p>
                            </div>
                        </BCol>
                        <BCol xxl="2" md="4" sm="6">
                            <div>
                                <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded avatar-sm">
                                <p class="mt-2 mb-lg-0"><code>avatar-sm</code></p>
                            </div>
                        </BCol>
                        <BCol xxl="2" md="4" sm="6">
                            <div>
                                <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded avatar-md">
                                <p class="mt-2  mb-lg-0"><code>avatar-md</code></p>
                            </div>
                        </BCol>
                        <BCol xxl="2" md="4" sm="6">
                            <div>
                                <img src="@/assets/images/users/avatar-5.jpg" alt="" class="rounded avatar-lg">
                                <p class="mt-2 mb-lg-0"><code>avatar-lg</code></p>
                            </div>
                        </BCol>
                        <BCol xxl="2" md="4" sm="6">
                            <div>
                                <img src="@/assets/images/users/avatar-8.jpg" alt="" class="rounded avatar-xl">
                                <p class="mt-2 mb-lg-0"><code>avatar-xl</code></p>
                            </div>
                        </BCol>
                    </BRow>
                </BCol>

                <BCol md="12">
                    <BRow class="g-3 mt-5">
                        <BCol xxl="2" md="4" sm="6">
                            <div>
                                <img src="@/assets/images/users/avatar-2.jpg" alt=""
                                    class="rounded-circle avatar-xxs">
                                <p class="mt-2 mb-lg-0"><code>avatar-xxs</code></p>
                            </div>
                        </BCol>
                        <BCol xxl="2" md="4" sm="6">
                            <div>
                                <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                    class="rounded-circle avatar-xs">
                                <p class="mt-2 mb-lg-0"><code>avatar-xs</code></p>
                            </div>
                        </BCol>
                        <BCol xxl="2" md="4" sm="6">
                            <div>
                                <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                    class="rounded-circle avatar-sm">
                                <p class="mt-2 mb-lg-0"><code>avatar-sm</code></p>
                            </div>
                        </BCol>
                        <BCol xxl="2" md="4" sm="6">
                            <div>
                                <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                    class="rounded-circle avatar-md">
                                <p class="mt-2  mb-lg-0"><code>avatar-md</code></p>
                            </div>
                        </BCol>
                        <BCol xxl="2" md="4" sm="6">
                            <div>
                                <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                    class="rounded-circle avatar-lg">
                                <p class="mt-2 mb-lg-0"><code>avatar-lg</code></p>
                            </div>
                        </BCol>
                        <BCol xxl="2" md="4" sm="6">
                            <div>
                                <img src="@/assets/images/users/avatar-8.jpg" alt=""
                                    class="rounded-circle avatar-xl">
                                <p class="mt-2 mb-lg-0"><code>avatar-xl</code></p>
                            </div>
                        </BCol>
                    </BRow>
                </BCol>
            </BRow>
            </div>
            <div class="tab-pane" id="imageSizesCode" role="tabpanel" aria-labelledby="imageSizesCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"
                style="height: 240px;"><code>&lt;!-- Image Sizes --&gt;
&lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; alt=&quot;&quot; class=&quot;rounded avatar-xxs&quot;&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-10.jpg&quot; alt=&quot;&quot; class=&quot;rounded avatar-xs&quot;&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; alt=&quot;&quot; class=&quot;rounded avatar-sm&quot;&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-4.jpg&quot; alt=&quot;&quot; class=&quot;rounded avatar-md&quot;&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-5.jpg&quot; alt=&quot;&quot; class=&quot;rounded avatar-lg&quot;&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-8.jpg&quot; alt=&quot;&quot; class=&quot;rounded avatar-xl&quot;&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; alt=&quot;&quot; class=&quot;rounded-circle avatar-xxs&quot;&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-10.jpg&quot; alt=&quot;&quot; class=&quot;rounded-circle avatar-xs&quot;&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; alt=&quot;&quot; class=&quot;rounded-circle avatar-sm&quot;&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-4.jpg&quot; alt=&quot;&quot; class=&quot;rounded-circle avatar-md&quot;&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-5.jpg&quot; alt=&quot;&quot; class=&quot;rounded-circle avatar-lg&quot;&gt;</code>

<code>&lt;img src=&quot;@/assets/images/users/avatar-8.jpg&quot; alt=&quot;&quot; class=&quot;rounded-circle avatar-xl&quot;&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>


    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Avatar With Content" content="Use <code>avatar-xxs, avatar-xs,avatar-sm,avatar-md,avatar-lg,avatar-xl</code>
            class to set different avatar content."/>
          <BCardBody class="tab-content" id="showCodeContent">
            <div class="tab-pane show active" id="avatarWithContentPreview" role="tabpanel"
              aria-labelledby="avatarWithContentPreview-tab" tabindex="0">
              <BRow class="g-3">
                <BCol xxl="2" md="4" sm="6">
                    <div class="avatar-xxs mt-3">
                        <div class="avatar-title rounded bg-primary-subtle text-primary fs-3xs">
                            XXS
                        </div>
                    </div>
                </BCol>
                <BCol xxl="2" md="4" sm="6">
                    <div class="avatar-xs mt-3">
                        <div class="avatar-title rounded bg-secondary-subtle text-secondary">
                            XS
                        </div>
                    </div>
                </BCol>
                <BCol xxl="2" md="4" sm="6">
                    <div class="avatar-sm mt-3">
                        <div class="avatar-title rounded bg-success-subtle text-success fs-md">
                            SM
                        </div>
                    </div>
                </BCol>
                <BCol xxl="2" md="4" sm="6">
                    <div class="avatar-md mt-3">
                        <div class="avatar-title rounded bg-info-subtle text-info fs-lg">
                            MD
                        </div>
                    </div>
                </BCol>
                <BCol xxl="2" md="4" sm="6">
                    <div class="avatar-lg mt-3">
                        <div class="avatar-title rounded bg-warning-subtle text-warning fs-3xl">
                            LG
                        </div>
                    </div>
                </BCol>
                <BCol xxl="2" md="4" sm="6">
                    <div class="avatar-xl mt-3">
                        <div class="avatar-title rounded bg-danger-subtle text-danger fs-4xl">
                            XL
                        </div>
                    </div>
                </BCol>
            </BRow>
            </div>
            <div class="tab-pane" id="avatarWithContentCode" role="tabpanel" aria-labelledby="avatarWithContentCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 240px;">
<code>&lt;!-- Avatar With Content --&gt;
&lt;div class=&quot;avatar-xxs&quot;&gt;
&lt;div class=&quot;avatar-title rounded bg-primary-subtle text-primary&quot;&gt;
XXS
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;avatar-xs&quot;&gt;
&lt;div class=&quot;avatar-title rounded bg-secondary-subtle text-secondary&quot;&gt;
XS
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;avatar-sm&quot;&gt;
&lt;div class=&quot;avatar-title rounded bg-success-subtle text-success&quot;&gt;
Sm
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;avatar-md&quot;&gt;
&lt;div class=&quot;avatar-title rounded bg-info-subtle text-info&quot;&gt;
Md
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;avatar-lg&quot;&gt;
&lt;div class=&quot;avatar-title rounded bg-warning-subtle text-warning&quot;&gt;
Lg
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;avatar-xl&quot;&gt;
&lt;div class=&quot;avatar-title rounded bg-danger-subtle text-danger&quot;&gt;
Xl
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
          <CardHeader title="Avatar Group" content="Use <code>avatar-group</code> class to show avatar images with the
            group."/>
         
          <BCardBody class="tab-content" id="showCodeContent">
            <div class="tab-pane show active" id="avatarGroupPreview" role="tabpanel"
              aria-labelledby="avatarGroupPreview-tab" tabindex="0">
              <BRow>
                <BCol lg="6">
                    <div class="mt-lg-0 mt-3">
                        <div class="avatar-group">
                            <div class="avatar-group-item">
                                <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                    class="rounded-circle avatar-sm">
                            </div>
                            <div class="avatar-group-item">
                                <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                    class="rounded-circle avatar-sm">
                            </div>
                            <div class="avatar-group-item">
                                <div class="avatar-sm">
                                    <div class="avatar-title rounded-circle bg-light text-primary">
                                        A
                                    </div>
                                </div>
                            </div>
                            <div class="avatar-group-item">
                                <img src="@/assets/images/users/avatar-2.jpg" alt=""
                                    class="rounded-circle avatar-sm">
                            </div>
                        </div>
                    </div>
                </BCol>
                

                <BCol lg="6">
                    <div class="mt-lg-0 mt-3">
                        <p class="text-muted">Use <code>avatar-group</code> class with
                            <code>data-bs-toggle="tooltip"</code> to show avatar group images with tooltip.</p>
                        <div class="avatar-group">
                            <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                data-bs-placement="top" title="Christi">
                                <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                    class="rounded-circle avatar-sm">
                            </BLink>
                            <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                data-bs-placement="top" title="Frank Hook">
                                <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                    class="rounded-circle avatar-sm">
                            </BLink>
                            <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                data-bs-placement="top" title="Christi">
                                <div class="avatar-sm">
                                    <div class="avatar-title rounded-circle bg-light text-primary">
                                        C
                                    </div>
                                </div>
                            </BLink>
                            <BLink href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                data-bs-placement="top" title="mORE">
                                <div class="avatar-sm">
                                    <div class="avatar-title rounded-circle">
                                        2+
                                    </div>
                                </div>
                            </BLink>
                        </div>
                    </div>
                </BCol>
                
            </BRow>
              
            </div>
            <div class="tab-pane" id="avatarGroupCode" role="tabpanel" aria-labelledby="avatarGroupCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 240px;">
<code>&lt;!-- Simple Group --&gt;
&lt;div class=&quot;avatar-group&quot;&gt;
&lt;div class=&quot;avatar-group-item&quot;&gt;
&lt;img src=&quot;@/assets/images/users/avatar-4.jpg&quot; alt=&quot;&quot; class=&quot;rounded-circle avatar-sm&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;avatar-group-item&quot;&gt;
&lt;img src=&quot;@/assets/images/users/avatar-5.jpg&quot; alt=&quot;&quot; class=&quot;rounded-circle avatar-sm&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;avatar-group-item&quot;&gt;
&lt;div class=&quot;avatar-sm&quot;&gt;
&lt;div class=&quot;avatar-title rounded-circle bg-light text-primary&quot;&gt;
A
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;avatar-group-item&quot;&gt;
&lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; alt=&quot;&quot; class=&quot;rounded-circle avatar-sm&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Avatar Group with Tooltip --&gt;
&lt;div class=&quot;avatar-group&quot;&gt;
&lt;a href=&quot;javascript: void(0);&quot; class=&quot;avatar-group-item&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Christi&quot;&gt;
&lt;img src=&quot;@/assets/images/users/avatar-4.jpg&quot; alt=&quot;&quot; class=&quot;rounded-circle avatar-sm&quot;&gt;
&lt;/a&gt;
&lt;a href=&quot;javascript: void(0);&quot; class=&quot;avatar-group-item&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Frank Hook&quot;&gt;
&lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; alt=&quot;&quot; class=&quot;rounded-circle avatar-sm&quot;&gt;
&lt;/a&gt;
&lt;a href=&quot;javascript: void(0);&quot; class=&quot;avatar-group-item&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Christi&quot;&gt;
&lt;div class=&quot;avatar-sm&quot;&gt;
&lt;div class=&quot;avatar-title rounded-circle bg-light text-primary&quot;&gt;
C
&lt;/div&gt;
&lt;/div&gt;
&lt;/a&gt;
&lt;a href=&quot;javascript: void(0);&quot; class=&quot;avatar-group-item&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;more&quot;&gt;
&lt;div class=&quot;avatar-sm&quot;&gt;
&lt;div class=&quot;avatar-title rounded-circle&quot;&gt;
2+
&lt;/div&gt;
&lt;/div&gt;
&lt;/a&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol> 
    </BRow> 

    <BRow>
      <BCol xl="8">
        <BCard no-body>
          <CardHeader title="Figures" content="Use the included <code>figure</code>, <code>figure-img</code> and
            <code>figure-caption</code> classes to provide some baseline styles for the HTML5
            <code> figure </code> and <code> figcaption </code> elements."/>
          <BCardBody class="tab-content" id="showCodeContent">
            <div class="tab-pane show active" id="figuresPreview" role="tabpanel" aria-labelledby="figuresPreview-tab"
              tabindex="0">
              <BRow class="g-3">
                <BCol sm="6">
                    <figure class="figure mb-0">
                        <img src="@/assets/images/small/img-4.jpg" class="figure-img img-fluid rounded"
                            alt="...">
                        <figcaption class="figure-caption">A caption for the above image.</figcaption>
                    </figure>
                </BCol>
                <BCol sm="6">
                    <figure class="figure mb-0">
                        <img src="@/assets/images/small/img-5.jpg" class="figure-img img-fluid rounded"
                            alt="...">
                        <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
                    </figure>
                </BCol>
            </BRow>
            </div>
          <div class="tab-pane" id="figuresCode" role="tabpanel" aria-labelledby="figuresCode-tab" tabindex="0">
            <h5 class="fs-sm text-muted">HTML Preview</h5>
            <pre class="language-markup"><code>&lt;!-- figures Images --&gt;
&lt;figure class=&quot;figure&quot;&gt;
&lt;img src=&quot;@/assets/images/small/img-4.jpg&quot; class=&quot;figure-img img-fluid rounded&quot; alt=&quot;...&quot;&gt;
&lt;figcaption class=&quot;figure-caption&quot;&gt;A caption for the above image.&lt;/figcaption&gt;
&lt;/figure&gt;</code>

<code>&lt;figure class=&quot;figure mb-0&quot;&gt;
&lt;img src=&quot;@/assets/images/small/img-5.jpg&quot; class=&quot;figure-img img-fluid rounded&quot; alt=&quot;...&quot;&gt;
&lt;figcaption class=&quot;figure-caption text-end&quot;&gt;A caption for the above image.&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
          </div>
        </BCardBody>
      </BCard>
    </BCol>

    <BCol xl="4">
      <BCard no-body>
        <CardHeader title="Responsive Images" content="Responsive Images with <code>img-fluid,max-width: 100%; and height: auto;</code>
          to the image so that it scales with the parent width."/>
        <BCardBody class="tab-content" id="showCodeContent">
          <div class="tab-pane show active" id="responsiveImagesPreview" role="tabpanel"
            aria-labelledby="responsiveImagesPreview-tab" tabindex="0">
            <img src="@/assets/images/small/img-2.jpg" class="img-fluid" alt="Responsive image">
          </div>
          <div class="tab-pane" id="responsiveImagesCode" role="tabpanel" aria-labelledby="responsiveImagesCode-tab"
            tabindex="0">
            <h5 class="fs-sm text-muted">HTML Preview</h5>
            <pre
              class="language-markup"><code>&lt;!-- Responsive Images --&gt;
&lt;img src=&quot;@/assets/images/small/img-2.jpg&quot; class=&quot;img-fluid&quot; alt=&quot;Responsive image&quot;&gt;</code></pre>
          </div>
        </BCardBody>
      </BCard>
    </BCol>

  </BRow>
  
</Layout></template>