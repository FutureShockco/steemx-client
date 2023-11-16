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
    CardHeader,

  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Badges" pagetitle="Bootstrap UI" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Default Badges" content="Use the <code>badge</code> class to set a default badge." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="defaultBadgesPreview" role="tabpanel"
              aria-labelledby="defaultBadgesPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BBadge class="badge bg-primary" variant="primary" >Primary</BBadge>
                <BBadge class="badge bg-secondary">Secondary</BBadge>
                <BBadge class="badge bg-success">Success</BBadge>
                <BBadge class="badge bg-info">Info</BBadge>
                <BBadge class="badge bg-warning">Warning</BBadge>
                <BBadge class="badge bg-danger">Danger</BBadge>
                <BBadge class="badge bg-dark">Dark</BBadge>
                <BBadge class="badge bg-light text-body">Light</BBadge>
              </div>
            </div>
            <div class="tab-pane" id="defaultBadgesCode" role="tabpanel" aria-labelledby="defaultBadgesCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 175px;">
<code>&lt;span class=&quot;badge bg-primary&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-secondary&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-success&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-info&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-warning&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-danger&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-dark&quot;&gt;Dark&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-light text-body&quot;&gt;Light&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Rounded Pill Badges" content="Use the <code>rounded-pill</code> class to make badges more rounded with a larger
            border-radius." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="roundedBadgesPreview" role="tabpanel"
              aria-labelledby="roundedBadgesPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BBadge class="badge rounded-pill bg-primary" variant="primary">Primary</BBadge>
                <BBadge class="badge rounded-pill bg-secondary">Secondary</BBadge>
                <BBadge class="badge rounded-pill bg-success">Success</BBadge>
                <BBadge class="badge rounded-pill bg-info">Info</BBadge>
                <BBadge class="badge rounded-pill bg-warning">Warning</BBadge>
                <BBadge class="badge rounded-pill bg-danger">Danger</BBadge>
                <BBadge class="badge rounded-pill bg-dark">Dark</BBadge>
                <BBadge class="badge rounded-pill bg-light text-body">Light</BBadge>
              </div>
            </div>
            <div class="tab-pane" id="roundedBadgesCode" role="tabpanel" aria-labelledby="roundedBadgesCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 175px;">
<code>&lt;span class=&quot;badge rounded-pill bg-primary&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-secondary&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-success&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-info&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-warning&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-danger&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-dark&quot;&gt;Dark&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-light&quot;&gt;Light&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Subtle Badges" content="Use the <code>badge-subtle-</code> class with the below-mentioned variation to
            create a subtle badge." />
          
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="subtleBadgesPreview" role="tabpanel"
              aria-labelledby="subtleBadgesPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BBadge class="badge bg-primary-subtle text-primary">Primary</BBadge>
                <BBadge class="badge bg-secondary-subtle text-secondary">Secondary</BBadge>
                <BBadge class="badge bg-success-subtle text-success">Success</BBadge>
                <BBadge class="badge bg-info-subtle text-info">Info</BBadge>
                <BBadge class="badge bg-warning-subtle text-warning">Warning</BBadge>
                <BBadge class="badge bg-danger-subtle text-danger">Danger</BBadge>
                <BBadge class="badge bg-dark-subtle text-body">Dark</BBadge>
                <BBadge class="badge bg-light-subtle text-body">Light</BBadge>
              </div>
            </div>
            <div class="tab-pane" id="subtleBadgesCode" role="tabpanel" aria-labelledby="subtleBadgesCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 175px;">
<code>&lt;span class=&quot;badge bg-primary-subtle text-primary&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-secondary-subtle text-secondary&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-success-subtle text-success&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-info-subtle text-info&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-warning-subtle text-warning&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-danger-subtle text-danger&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-dark-subtle text-body&quot;&gt;Dark&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-light-subtle text-body&quot;&gt;Light&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Rounded Pill Badges with subtle effect" content="Use the <code>rounded-pill badge-subtle-</code> class with the below-mentioned
            variation to create a badge more rounded with a soft background." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="roundedSubtleBadgesPreview" role="tabpanel"
              aria-labelledby="roundedSubtleBadgesPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BBadge class="badge rounded-pill bg-primary-subtle text-primary">Primary</BBadge>
                <BBadge class="badge rounded-pill bg-secondary-subtle text-secondary">Secondary</BBadge>
                <BBadge class="badge rounded-pill bg-success-subtle text-success">Success</BBadge>
                <BBadge class="badge rounded-pill bg-info-subtle text-info">Info</BBadge>
                <BBadge class="badge rounded-pill bg-warning-subtle text-warning">Warning</BBadge>
                <BBadge class="badge rounded-pill bg-danger-subtle text-danger">Danger</BBadge>
                <BBadge class="badge rounded-pill bg-dark-subtle text-body">Dark</BBadge>
                <BBadge class="badge rounded-pill bg-light-subtle text-body">Light</BBadge>
              </div>
            </div>
            <div class="tab-pane" id="roundedSubtleBadgesCode" role="tabpanel"
              aria-labelledby="roundedSubtleBadgesCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 175px;">
<code>&lt;span class=&quot;badge rounded-pill bg-primary-subtle text-primary&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-secondary-subtle text-secondary&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-success-subtle text-success&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-info-subtle text-info&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-warning-subtle text-warning&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-danger-subtle text-danger&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-dark-subtle text-body&quot;&gt;Dark&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-light-subtle text-body&quot;&gt;Light&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Outline Badges" content="Use the <code>bg-body-secondary</code>, <code>border </code>
            <code>border-*</code>, <code>text-*</code> class with the below-mentioned variation to create a badge with
            the outline." />
         
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="outlineBadgesPreview" role="tabpanel"
              aria-labelledby="outlineBadgesPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BBadge class="badge bg-body-secondary border border-primary text-primary">Primary</BBadge>
                <BBadge class="badge bg-body-secondary border border-secondary text-secondary">Secondary</BBadge>
                <BBadge class="badge bg-body-secondary border border-success text-success">Success</BBadge>
                <BBadge class="badge bg-body-secondary border border-info text-info">Info</BBadge>
                <BBadge class="badge bg-body-secondary border border-warning text-warning">Warning</BBadge>
                <BBadge class="badge bg-body-secondary border border-danger text-danger">Danger</BBadge>
                <BBadge class="badge bg-body-secondary border border-dark text-body">Dark</BBadge>
                <BBadge class="badge bg-body-secondary border border-light text-body">Light</BBadge>
              </div>
            </div>
            <div class="tab-pane" id="outlineBadgesCode" role="tabpanel" aria-labelledby="outlineBadgesCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 175px;">
<code>&lt;span class=&quot;badge bg-body-secondary border border-primary text-primary&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary border border-secondary text-secondary&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary border border-success text-success&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary border border-info text-info&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary border border-warning text-warning&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary border border-danger text-danger&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary border border-dark text-body&quot;&gt;Dark&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary border border-light text-body&quot;&gt;Light&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Outline Pill Badges" content="Use the <code>rounded-pill</code> class with the below-mentioned variation to
            create a outline Pill badge." />
          
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="outlinePillBadgesPreview" role="tabpanel"
              aria-labelledby="outlinePillBadgesPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BBadge class="badge bg-body-secondary rounded-pill border border-primary text-primary">Primary</BBadge>
                <BBadge class="badge bg-body-secondary rounded-pill border border-secondary text-secondary">Secondary</BBadge>
                <BBadge class="badge bg-body-secondary rounded-pill border border-success text-success">Success</BBadge>
                <BBadge class="badge bg-body-secondary rounded-pill border border-info text-info">Info</BBadge>
                <BBadge class="badge bg-body-secondary rounded-pill border border-warning text-warning">Warning</BBadge>
                <BBadge class="badge bg-body-secondary rounded-pill border border-danger text-danger">Danger</BBadge>
                <BBadge class="badge bg-body-secondary rounded-pill border border-dark text-body">Dark</BBadge>
                <BBadge class="badge bg-body-secondary rounded-pill border border-light text-body">Light</BBadge>
              </div>
            </div>
            <div class="tab-pane" id="outlinePillBadgesCode" role="tabpanel" aria-labelledby="outlinePillBadgesCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 175px;">
<code>&lt;span class=&quot;badge bg-body-secondary rounded-pill border border-primary text-primary&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary rounded-pill border border-secondary text-secondary&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary rounded-pill border border-success text-success&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary rounded-pill border border-info text-info&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary rounded-pill border border-warning text-warning&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary rounded-pill border border-danger text-danger&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary rounded-pill border border-dark text-body&quot;&gt;Dark&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-body-secondary rounded-pill border border-light text-body&quot;&gt;Light&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Subtle Border Badges" content="Use the <code>badge-border</code> and <code>badge-subtle-</code> with below
            mentioned modifier classes to make badges with border & subtle background." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="subtleBorderBadgesPreview" role="tabpanel"
              aria-labelledby="subtleBorderBadgesPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BBadge class="badge bg-primary-subtle text-primary badge-border">Primary</BBadge>
                <BBadge class="badge bg-secondary-subtle text-secondary badge-border">Secondary</BBadge>
                <BBadge class="badge bg-success-subtle text-success badge-border">Success</BBadge>
                <BBadge class="badge bg-danger-subtle text-danger badge-border">Danger</BBadge>
                <BBadge class="badge bg-warning-subtle text-warning badge-border">Warning</BBadge>
                <BBadge class="badge bg-info-subtle text-info badge-border">Info</BBadge>
                <BBadge class="badge bg-dark-subtle text-body badge-border">Dark</BBadge>
                <BBadge class="badge bg-light-subtle text-body badge-border">Light</BBadge>
              </div>
            </div>
            <div class="tab-pane" id="subtleBorderBadgesCode" role="tabpanel" aria-labelledby="subtleBorderBadgesCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 175px;">
<code>&lt;span class=&quot;badge bg-primary-subtle text-primary badge-border&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-secondary-subtle text-secondary badge-border&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-success-subtle text-success badge-border&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-info-subtle text-info badge-border&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-warning-subtle text-warning badge-border&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-danger-subtle text-danger badge-border&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-dark-subtle text-body badge-border&quot;&gt;Dark&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-light-subtle text-body badge-border&quot;&gt;Light&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Gradient Badges" content="Use the <code>badge-gradient-*</code> class to create a gradient styled badge." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="gradientBadgesPreview" role="tabpanel"
              aria-labelledby="gradientBadgesPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <BBadge class="badge badge-gradient-primary">Primary</BBadge>
                <BBadge class="badge badge-gradient-secondary">Secondary</BBadge>
                <BBadge class="badge badge-gradient-success">Success</BBadge>
                <BBadge class="badge badge-gradient-danger">Danger</BBadge>
                <BBadge class="badge badge-gradient-warning">Warning</BBadge>
                <BBadge class="badge badge-gradient-info">Info</BBadge>
                <BBadge class="badge badge-gradient-dark">Dark</BBadge>
              </div>
            </div>
            <div class="tab-pane" id="gradientBadgesCode" role="tabpanel" aria-labelledby="gradientBadgesCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 175px;">
<code>&lt;span class=&quot;badge badge-gradient-primary&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge badge-gradient-secondary&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge badge-gradient-success&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge badge-gradient-danger&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge badge-gradient-warning&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge badge-gradient-info&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge badge-gradient-dark&quot;&gt;Dark&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Button Position Badges" content="Use the below utilities to modify a badge and position it in the corner of a link
          or button." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="buttonPositionBadgesPreview" role="tabpanel"
              aria-labelledby="buttonPositionBadgesPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-3">
                <button type="button" class="btn btn-primary position-relative">
                  Mails <BBadge class="position-absolute top-0 start-100 translate-middle rounded-pill bg-success">+99
                    <span class="visually-hidden">unread messages</span></BBadge>
                </button>

                <button type="button" class="btn btn-light position-relative">
                  Alerts <BBadge
                    class="position-absolute top-0 start-100 translate-middle border border-light rounded-circle bg-danger p-1"><span
                      class="visually-hidden">unread messages</span></BBadge>
                </button>

                <button type="button" class="btn btn-primary position-relative p-0 avatar-xs rounded">
                  <BBadge class="avatar-title bg-transparent">
                    <i class="bx bxs-envelope"></i>
                  </BBadge>
                  <BBadge
                    class="position-absolute top-0 start-100 translate-middle border border-light rounded-circle bg-danger p-1"><span
                      class="visually-hidden">unread messages</span></BBadge>
                </button>

                <button type="button" class="btn btn-light position-relative p-0 avatar-xs rounded-circle">
                  <BBadge class="avatar-title bg-transparent text-reset">
                    <i class="bx bx-menu"></i>
                  </BBadge>
                  <BBadge
                    class="position-absolute top-0 start-100 translate-middle border border-light rounded-circle bg-success p-1"><span
                      class="visually-hidden">unread messages</span></BBadge>
                </button>
              </div>
            </div>
            <div class="tab-pane" id="buttonPositionBadgesCode" role="tabpanel"
              aria-labelledby="buttonPositionBadgesCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 175px;">
<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-primary position-relative&quot;&gt;
Mails &lt;span class=&quot;position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success&quot;&gt;+99 &lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-light position-relative&quot;&gt;
Alerts &lt;span class=&quot;position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-primary position-relative p-0 avatar-xs rounded&quot;&gt;
&lt;span class=&quot;avatar-title bg-transparent&quot;&gt;
&lt;i class=&quot;bx bxs-envelope&quot;&gt;&lt;/i&gt;
&lt;/span&gt;
&lt;span class=&quot;position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-light position-relative p-0 avatar-xs rounded-circle&quot;&gt;
&lt;span class=&quot;avatar-title bg-transparent text-reset&quot;&gt;
&lt;i class=&quot;bx bxs-bell&quot;&gt;&lt;/i&gt;
&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-light position-relative p-0 avatar-xs rounded-circle&quot;&gt;
&lt;span class=&quot;avatar-title bg-transparent text-reset&quot;&gt;
&lt;i class=&quot;bx bx-menu&quot;&gt;&lt;/i&gt;
&lt;/span&gt;
&lt;span class=&quot;position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;&lt;/span&gt;
&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Badges With Button" content="Badges can be used as part of buttons to provide a counter." />
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="buttonWithBadgesPreview" role="tabpanel"
              aria-labelledby="buttonWithBadgesPreview-tab" tabindex="0">
              <div class="d-flex flex-wrap gap-2">
                <button type="button" class="btn btn-primary">
                  Notifications <BBadge class="badge bg-success ms-1">4</BBadge>
              </button>
              <button type="button" class="btn btn-success">
                Messages <BBadge class="badge bg-danger ms-1">2</BBadge>
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Draft <BBadge class="badge bg-success ms-1">2</BBadge>
              </button>
            </div>
          </div>
          <div class="tab-pane" id="buttonWithBadgesCode" role="tabpanel" aria-labelledby="buttonWithBadgesCode-tab"
            tabindex="0">
            <h5 class="fs-sm text-muted">HTML Preview</h5>
            <pre class="language-markup" style="height: 175px;">
<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;
Notifications &lt;span class=&quot;badge bg-success ms-1&quot;&gt;4&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success&quot;&gt;
Messages &lt;span class=&quot;badge bg-danger ms-1&quot;&gt;2&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary&quot;&gt;
Draft &lt;span class=&quot;badge bg-success ms-1&quot;&gt;2&lt;/span&gt;
&lt;/button&gt;</code></pre>
          </div>
        </BCardBody>
      </BCard>
    </BCol>

    <BCol xxl="12">
      <BCard no-body>
        <CardHeader title="Badges with Heading" content="Example of the badge used in the HTML Heading." />
        <BCardBody class="tab-content">
          <div class="tab-pane show active" id="headingWithBadgesPreview" role="tabpanel"
            aria-labelledby="headingWithBadgesPreview-tab" tabindex="0">
            <h1>Example heading <BBadge class="badge bg-secondary align-middle">New</BBadge></h1>
            <h2>Example heading <BBadge class="badge bg-secondary align-middle">New</BBadge></h2>
            <h3>Example heading <BBadge class="badge bg-secondary align-middle">New</BBadge></h3>
            <h4>Example heading <BBadge class="badge bg-secondary align-middle">New</BBadge></h4>
            <h5>Example heading <BBadge class="badge bg-secondary align-middle">New</BBadge></h5>
            <h6 class="mb-0">Example heading <BBadge class="badge bg-secondary align-middle">New</BBadge></h6>
          </div>
          <div class="tab-pane" id="headingWithBadgesCode" role="tabpanel" aria-labelledby="headingWithBadgesCode-tab"
            tabindex="0">
            <h5 class="fs-sm text-muted">HTML Preview</h5>
            <pre class="language-markup">
<code>&lt;h1&gt;Example heading &lt;span class=&quot;badge bg-secondary align-middle&quot;&gt;New&lt;/span&gt;&lt;/h1&gt;</code>

<code>&lt;h2&gt;Example heading &lt;span class=&quot;badge bg-secondary align-middle&quot;&gt;New&lt;/span&gt;&lt;/h2&gt;</code>

<code>&lt;h3&gt;Example heading &lt;span class=&quot;badge bg-secondary align-middle&quot;&gt;New&lt;/span&gt;&lt;/h3&gt;</code>

<code>&lt;h4&gt;Example heading &lt;span class=&quot;badge bg-secondary align-middle&quot;&gt;New&lt;/span&gt;&lt;/h4&gt;</code>

<code>&lt;h5&gt;Example heading &lt;span class=&quot;badge bg-secondary align-middle&quot;&gt;New&lt;/span&gt;&lt;/h5&gt;</code>

<code>&lt;h6&gt;Example heading &lt;span class=&quot;badge bg-secondary align-middle&quot;&gt;New&lt;/span&gt;&lt;/h6&gt;</code></pre>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</Layout></template>