<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Colored Links" pagetitle="Bootstrap UI" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Link colors" content="You can use the <code>.link-*</code> classes to colorize links. Unlike the <a href='/ui/colors'><code>.text-*</code> classes</a>, these classes have a <code>:hover</code> and <code>:focus</code> state. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="linkColorsPreview" role="tabpanel" aria-labelledby="linkColorsPreview-tab" tabindex="0">
              <div>
                <p>
                  <BLink href="#" class="link-primary">Primary link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-secondary">Secondary link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-success">Success link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-danger">Danger link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-warning">Warning link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-info">Info link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-light">Light link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-dark">Dark link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-body-emphasis mb-0">Emphasis link</BLink>
                </p>
              </div>
            </div>
            <div class="tab-pane" id="linkColorsCode" role="tabpanel" aria-labelledby="linkColorsCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 240px;"><code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-primary&quot;&gt;Primary link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-secondary&quot;&gt;Secondary link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-success&quot;&gt;Success link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-danger&quot;&gt;Danger link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-warning&quot;&gt;Warning link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-info&quot;&gt;Info link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-light&quot;&gt;Light link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-dark&quot;&gt;Dark link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-body-emphasis mb-0&quot;&gt;Emphasis link&lt;/a&gt;&lt;/p&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Link utilities" content="Colored links can also be modified by our link utilities." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="linkUtilitiesPreview" role="tabpanel" aria-labelledby="linkUtilitiesPreview-tab" tabindex="0">
              <div>
                <p>
                  <BLink href="#" class="link-primary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Primary
                    link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-secondary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Secondary
                    link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-success link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Success
                    link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-danger link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Danger
                    link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-warning link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Warning
                    link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-info link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Info
                    link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-light link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Light
                    link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-dark link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Dark
                    link</BLink>
                </p>
                <p>
                  <BLink href="#" class="link-body-emphasis link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-75-hover mb-0">Emphasis
                    link</BLink>
                </p>
              </div>
            </div>
            <div class="tab-pane" id="linkUtilitiesCode" role="tabpanel" aria-labelledby="linkUtilitiesCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 280px;"><code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-primary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Primary link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-secondary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Secondary link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-success link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Success link&lt;/a&gt;&lt;/p&gt;</code>

<Code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-danger link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Danger link&lt;/a&gt;&lt;/p&gt;</Code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-warning link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Warning link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-info link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Info link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-light link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Light link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-dark link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Dark link&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;link-body-emphasis link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-75-hover mb-0&quot;&gt;Emphasis link&lt;/a&gt;&lt;/p&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Link Opacity" content="Change the alpha opacity of the link <code>rgba()</code> color value with utilities. Please be aware that changes to a color’s opacity can lead to links with <a href='https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast' target='_blank'><em>insufficient</em> contrast</a>." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="linkOpacityPreview" role="tabpanel" aria-labelledby="linkOpacityPreview-tab" tabindex="0">
              <div>
                <p>
                  <BLink class="link-opacity-10" href="#">Link opacity 10</BLink>
                </p>
                <p>
                  <BLink class="link-opacity-25" href="#">Link opacity 25</BLink>
                </p>
                <p>
                  <BLink class="link-opacity-50" href="#">Link opacity 50</BLink>
                </p>
                <p>
                  <BLink class="link-opacity-75" href="#">Link opacity 75</BLink>
                </p>
                <p class="mb-0">
                  <BLink class="link-opacity-100" href="#">Link opacity 100</BLink>
                </p>
              </div>
            </div>
            <div class="tab-pane" id="linkOpacityCode" role="tabpanel" aria-labelledby="linkOpacityCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;p&gt;&lt;a class=&quot;link-opacity-10&quot; href=&quot;#&quot;&gt;Link opacity 10&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-opacity-25&quot; href=&quot;#&quot;&gt;Link opacity 25&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-opacity-50&quot; href=&quot;#&quot;&gt;Link opacity 50&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-opacity-75&quot; href=&quot;#&quot;&gt;Link opacity 75&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-opacity-100&quot; href=&quot;#&quot;&gt;Link opacity 100&lt;/a&gt;&lt;/p&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Link Opacity Hover" content="You can even change the opacity level on hover." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="linkOpacityHoverPreview" role="tabpanel" aria-labelledby="linkOpacityHoverPreview-tab" tabindex="0">
              <div>
                <p>
                  <BLink class="link-opacity-10-hover" href="#">Link hover opacity 10</BLink>
                </p>
                <p>
                  <BLink class="link-opacity-25-hover" href="#">Link hover opacity 25</BLink>
                </p>
                <p>
                  <BLink class="link-opacity-50-hover" href="#">Link hover opacity 50</BLink>
                </p>
                <p>
                  <BLink class="link-opacity-75-hover" href="#">Link hover opacity 75</BLink>
                </p>
                <p class="mb-0">
                  <BLink class="link-opacity-100-hover" href="#">Link hover opacity
                    100</BLink>
                </p>
              </div>
            </div>
            <div class="tab-pane" id="linkOpacityHoverCode" role="tabpanel" aria-labelledby="linkOpacityHoverCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 195px;"><code>&lt;p&gt;&lt;a class=&quot;link-opacity-10-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 10&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-opacity-25-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 25&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-opacity-50-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 50&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-opacity-75-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 75&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-opacity-100-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 100&lt;/a&gt;&lt;/p&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol xxl="4">
        <BCard no-body>
          <CardHeader title="Underline color" content="Change the underline’s color independent of the link text color." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="underlineColorPreview" role="tabpanel" aria-labelledby="underlineColorPreview-tab" tabindex="0">
              <div>
                <p>
                  <BLink href="#" class="text-decoration-underline link-underline-primary">Primary
                    underline</BLink>
                </p>
                <p>
                  <BLink href="#" class="text-decoration-underline link-underline-secondary">Secondary
                    underline</BLink>
                </p>
                <p>
                  <BLink href="#" class="text-decoration-underline link-underline-success">Success
                    underline</BLink>
                </p>
                <p>
                  <BLink href="#" class="text-decoration-underline link-underline-danger">Danger
                    underline</BLink>
                </p>
                <p>
                  <BLink href="#" class="text-decoration-underline link-underline-warning">Warning
                    underline</BLink>
                </p>
                <p>
                  <BLink href="#" class="text-decoration-underline link-underline-info">Info
                    underline</BLink>
                </p>
                <p>
                  <BLink href="#" class="text-decoration-underline link-underline-light">Light
                    underline</BLink>
                </p>
                <p class="mb-0">
                  <BLink href="#" class="text-decoration-underline link-underline-dark">Dark
                    underline</BLink>
                </p>
              </div>
            </div>
            <div class="tab-pane" id="underlineColorCode" role="tabpanel" aria-labelledby="underlineColorCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 195px;"><code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-primary&quot;&gt;Primary underline&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-secondary&quot;&gt;Secondary underline&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-success&quot;&gt;Success underline&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-danger&quot;&gt;Danger underline&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-warning&quot;&gt;Warning underline&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-info&quot;&gt;Info underline&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-light&quot;&gt;Light underline&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p class=&quot;mb-0&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-dark&quot;&gt;Dark underline&lt;/a&gt;&lt;/p&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
      <BCol xxl="4">
        <BCard no-body>
          <CardHeader title="Underline opacity" content="Change the underline’s opacity. Requires adding
          <code>.link-underline</code> to first set an <code>rgba()</code> color we use to then modify
          the alpha opacity." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="underlineOpacityPreview" role="tabpanel" aria-labelledby="underlineOpacityPreview-tab" tabindex="0">
              <div>
                <p>
                  <BLink class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-0" href="#">Underline opacity 0</BLink>
                </p>
                <p>
                  <BLink class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-10" href="#">Underline opacity 10</BLink>
                </p>
                <p>
                  <BLink class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-25" href="#">Underline opacity 25</BLink>
                </p>
                <p>
                  <BLink class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-50" href="#">Underline opacity 50</BLink>
                </p>
                <p>
                  <BLink class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-75" href="#">Underline opacity 75</BLink>
                </p>
                <p class="mb-0">
                  <BLink class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-100" href="#">Underline opacity 100</BLink>
                </p>
              </div>
            </div>
            <div class="tab-pane" id="underlineOpacityCode" role="tabpanel" aria-labelledby="underlineOpacityCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;p&gt;&lt;a class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-0&quot; href=&quot;#&quot;&gt;Underline opacity 0&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-10&quot; href=&quot;#&quot;&gt;Underline opacity 10&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-25&quot; href=&quot;#&quot;&gt;Underline opacity 25&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-50&quot; href=&quot;#&quot;&gt;Underline opacity 50&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-75&quot; href=&quot;#&quot;&gt;Underline opacity 75&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p class=&quot;mb-0&quot;&gt;&lt;a class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-100&quot; href=&quot;#&quot;&gt;Underline opacity 100&lt;/a&gt;&lt;/p&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
      <BCol xxl="4">
        <BCard no-body>
            <CardHeader title="Underline offset" content="Change the underline’s distance from your text. Offset is set in
            <code>em</code> units to automatically scale with the element’s current
            <code>font-size</code>." />
         
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="underlineOffsetPreview" role="tabpanel" aria-labelledby="underlineOffsetPreview-tab" tabindex="0">
              <div>
                <p>
                  <BLink href="#">Default link</BLink>
                </p>
                <p>
                  <BLink class="text-decoration-underline link-offset-1" href="#">Offset 1 link</BLink>
                </p>
                <p>
                  <BLink class="text-decoration-underline link-offset-2" href="#">Offset 2 link</BLink>
                </p>
                <p class="mb-0">
                  <BLink class="text-decoration-underline link-offset-3" href="#">Offset 3
                    link</BLink>
                </p>
              </div>
            </div>
            <div class="tab-pane" id="underlineOffsetCode" role="tabpanel" aria-labelledby="underlineOffsetCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;p&gt;&lt;a class=&quot;link-offset-2 link-underline link-underline-opacity-0&quot; href=&quot;#&quot;&gt;Underline opacity 0&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-offset-2 link-underline link-underline-opacity-10&quot; href=&quot;#&quot;&gt;Underline opacity 10&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-offset-2 link-underline link-underline-opacity-25&quot; href=&quot;#&quot;&gt;Underline opacity 25&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-offset-2 link-underline link-underline-opacity-50&quot; href=&quot;#&quot;&gt;Underline opacity 50&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-offset-2 link-underline link-underline-opacity-75&quot; href=&quot;#&quot;&gt;Underline opacity 75&lt;/a&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;a class=&quot;link-offset-2 link-underline link-underline-opacity-100&quot; href=&quot;#&quot;&gt;Underline opacity 100&lt;/a&gt;&lt;/p&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Icon link" content="Take a regular <code>&lt;a&gt;</code> element, add
            <code>.icon-link</code>, and insert an icon on either the left or right of your link
            text.The icon is automatically sized, placed, and colored." />
          
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="iconLinkPreview" role="tabpanel" aria-labelledby="iconLinkPreview-tab" tabindex="0">
              <div class="hstack flex-wrap gap-4">
                <BLink class="icon-link" href="#">
                  <i class="bi bi-box-seam align-baseline"></i> Icon link
                </BLink>

                <BLink class="icon-link" href="#">
                  Icon link <i class="bi bi-arrow-right"></i>
                </BLink>

                <BLink class="icon-link icon-link-hover" href="#">
                  Icon link <i class="bi bi-arrow-right"></i>
                </BLink>
                <BLink class="icon-link icon-link-hover" style="--tb-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
                  <i class="bi bi-clipboard"></i> Icon link
                </BLink>
                <BLink class="icon-link icon-link-hover" style="--tBLink-hover-color-rgb: var(--tb-success-rgb);" href="#">
                  Icon link <i class="bi bi-arrow-right"></i>
                </BLink>
                <BLink class="icon-link icon-link-hover link-success text-decoration-underline link-underline-success link-underline-opacity-25" href="#">
                  Icon link <i class="bi bi-arrow-right"></i>
                </BLink>
              </div>
            </div>
            <div class="tab-pane" id="iconLinkCode" role="tabpanel" aria-labelledby="iconLinkCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;a class=&quot;icon-link&quot; href=&quot;#&quot;&gt;
&lt;i class=&quot;bi bi-box-seam align-baseline&quot;&gt;&lt;/i&gt; Icon link
&lt;/a&gt;</code>

<code>&lt;a class=&quot;icon-link&quot; href=&quot;#&quot;&gt;
Icon link &lt;i class=&quot;bi bi-arrow-right&quot;&gt;&lt;/i&gt;
&lt;/a&gt;</code>

<code>&lt;a class=&quot;icon-link icon-link-hover&quot; href=&quot;#&quot;&gt;
Icon link &lt;i class=&quot;bi bi-arrow-right&quot;&gt;&lt;/i&gt;
&lt;/a&gt;</code>

<code>&lt;a class=&quot;icon-link icon-link-hover&quot; style=&quot;--tb-icon-link-transform: translate3d(0, -.125rem, 0);&quot; href=&quot;#&quot;&gt;
&lt;i class=&quot;bi bi-clipboard&quot;&gt;&lt;/i&gt; Icon link
&lt;/a&gt;</code>

<code>&lt;a class=&quot;icon-link icon-link-hover&quot; style=&quot;--tBLink-hover-color-rgb: var(--tb-success-rgb);&quot; href=&quot;#&quot;&gt;
Icon link &lt;i class=&quot;bi bi-arrow-right&quot;&gt;&lt;/i&gt;
&lt;/a&gt;</code>

<code>&lt;a class=&quot;icon-link icon-link-hover link-success text-decoration-underline link-underline-success link-underline-opacity-25&quot; href=&quot;#&quot;&gt;
Icon link &lt;i class=&quot;bi bi-arrow-right&quot;&gt;&lt;/i&gt;
&lt;/a&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
  </Layout>
</template>