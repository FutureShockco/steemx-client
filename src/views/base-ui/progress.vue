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
          <PageHeader title="Progress" pagetitle="Bootstrap UI" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>

    <BRow>
      <BCol xxl="12">
        <BCard no-body>

          <CardHeader title="Default Progress" content="Use <code>progress</code> class to show default progress." />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="defaultProgressPreview" role="tabpanel"
              aria-labelledby="defaultProgressPreview-tab" tabindex="0">
              <div>
                <div class="progress mb-4">
                  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
                <div class="progress mb-4">
                  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <div class="progress mb-4">
                  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <div class="progress mb-4">
                  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="defaultProgressCode" role="tabpanel" aria-labelledby="defaultProgressCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Base Examples --&gt;
&lt;div class=&quot;progress mb-4&quot;&gt;
&lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; aria-valuenow=&quot;0&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;progress mb-4&quot;&gt;
&lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 25%&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;progress mb-4&quot;&gt;
&lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 50%&quot; aria-valuenow=&quot;50&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;progress mb-4&quot;&gt;
&lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 75%&quot; aria-valuenow=&quot;75&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;progress&quot;&gt;
&lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 100%&quot; aria-valuenow=&quot;100&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="12">
        <BCard no-body>

          <CardHeader title="Progress with background color" content="Use <code>bg-</code> class to progress bar class with the below-mentioned color
            variation to set the background color progress bar." />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="withBackgroundColorProgressPreview" role="tabpanel"
              aria-labelledby="withBackgroundColorProgressPreview-tab" tabindex="0">
              <div>
                <div class="progress mb-4">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 15%" aria-valuenow="15"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-4">
                  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-4">
                  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-4">
                  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="withBackgroundColorProgressCode" role="tabpanel"
              aria-labelledby="withBackgroundColorProgressCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Progress with background color --&gt;
&lt;div class=&quot;progress mb-4&quot;&gt;
&lt;div class=&quot;progress-bar bg-primary&quot; role=&quot;progressbar&quot; style=&quot;width: 15%&quot; aria-valuenow=&quot;15&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;progress mb-4&quot;&gt;
&lt;div class=&quot;progress-bar bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 25%&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;progress mb-4&quot;&gt;
&lt;div class=&quot;progress-bar bg-info&quot; role=&quot;progressbar&quot; style=&quot;width: 50%&quot; aria-valuenow=&quot;50&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;progress mb-4&quot;&gt;
&lt;div class=&quot;progress-bar bg-warning&quot; role=&quot;progressbar&quot; style=&quot;width: 75%&quot; aria-valuenow=&quot;75&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;progress&quot;&gt;
&lt;div class=&quot;progress-bar bg-danger&quot; role=&quot;progressbar&quot; style=&quot;width: 100%&quot; aria-valuenow=&quot;100&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol xxl="6">
        <BCard no-body>

          <CardHeader title="Progress with Label"
            content="Add labels to your progress bars by placing text within the progress-bar." />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="withLabelProgressPreview" role="tabpanel"
              aria-labelledby="withLabelProgressPreview-tab" tabindex="0">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
                  aria-valuemax="100">25%</div>
              </div>
            </div>
            <div class="tab-pane" id="withLabelProgressCode" role="tabpanel" aria-labelledby="withLabelProgressCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;!-- Labels Example --&gt;
&lt;div class=&quot;progress&quot;&gt;
&lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 25%;&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;25%&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="6">
        <BCard no-body>

          <CardHeader title="Multiple Bars" content="Use <code>bg-</code> class to progress bar class with the below-mentioned color
            to change the appearance of individual progress bars." />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="multipleBarsProgressPreview" role="tabpanel"
              aria-labelledby="multipleBarsProgressPreview-tab" tabindex="0">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0"
                  aria-valuemax="100"></div>
                <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30"
                  aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="tab-pane" id="multipleBarsProgressCode" role="tabpanel"
              aria-labelledby="multipleBarsProgressCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 90px;"><code>&lt;!-- Multiple Bars --&gt;
&lt;div class=&quot;progress&quot;&gt;
&lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 15%&quot; aria-valuenow=&quot;15&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;progress-bar bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 30%&quot; aria-valuenow=&quot;30&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;progress-bar bg-info&quot; role=&quot;progressbar&quot; style=&quot;width: 20%&quot; aria-valuenow=&quot;20&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol xxl="6">
        <BCard no-body>

          <CardHeader title="Height" content="Use <code>progress-sm</code>, <code>progress-lg</code>, or
            <code>progress-xl</code> class to set the different heights of progress." />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="heightProgressPreview" role="tabpanel"
              aria-labelledby="heightProgressPreview-tab" tabindex="0">
              <div>
                <div class="mb-4">
                  <h5 class="fs-sm">Small Progress</h5>
                  <!-- Prgress sm -->
                  <div class="progress progress-sm">
                    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                </div>
                <div class="mb-4">
                  <h5 class="fs-sm">Default Progress </h5>
                  <!-- Prgress md -->
                  <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 40%;" aria-valuenow="40"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div class="mb-4">
                  <h5 class="fs-sm">Large Progress</h5>
                  <!-- Prgress lg -->
                  <div class="progress progress-lg">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 50%;" aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div>
                  <h5 class="fs-sm">Extra Large Progress</h5>
                  <!-- Prgress xl -->
                  <div class="progress progress-xl">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 70%;" aria-valuenow="70"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="heightProgressCode" role="tabpanel" aria-labelledby="heightProgressCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Progress sm --&gt;
&lt;div class=&quot;progress progress-sm&quot;&gt;
&lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 25%;&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Progress Default --&gt;
&lt;div class=&quot;progress&quot;&gt;
&lt;div class=&quot;progress-bar bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 40%;&quot; aria-valuenow=&quot;40&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Progress lg --&gt;
&lt;div class=&quot;progress progress-lg&quot;&gt;
&lt;div class=&quot;progress-bar bg-warning&quot; role=&quot;progressbar&quot; style=&quot;width: 50%;&quot; aria-valuenow=&quot;50&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Progress xl --&gt;
&lt;div class=&quot;progress progress-xl&quot;&gt;
&lt;div class=&quot;progress-bar bg-danger&quot; role=&quot;progressbar&quot; style=&quot;width: 70%;&quot; aria-valuenow=&quot;70&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="6">
        <BCard no-body>

          <CardHeader title="Striped Progress"
            content="Use <code>progress-bar-striped</code> class to add strip to the progress." />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="stripedProgressPreview" role="tabpanel"
              aria-labelledby="stripedProgressPreview-tab" tabindex="0">
              <div>
                <div class="progress mb-4">
                  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 25%" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 40%"
                    aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="stripedProgressCode" role="tabpanel" aria-labelledby="stripedProgressCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;!-- Striped progress --&gt;
&lt;div class=&quot;progress&quot;&gt;
&lt;div class=&quot;progress-bar progress-bar-striped&quot; role=&quot;progressbar&quot; style=&quot;width: 25%&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;progress&quot;&gt;
&lt;div class=&quot;progress-bar progress-bar-striped bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 40%&quot; aria-valuenow=&quot;40&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>

        <BCard no-body>

          <CardHeader title="Animated Striped Progress" content="Use <code>progress-bar-striped progress-bar-animated</code> class to add strip
            with animation to the progress." />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="animatedStripedProgressPreview" role="tabpanel"
              aria-labelledby="animatedStripedProgressPreview-tab" tabindex="0">
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
              </div>
            </div>
            <div class="tab-pane" id="animatedStripedProgressCode" role="tabpanel"
              aria-labelledby="animatedStripedProgressCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;div class=&quot;progress&quot;&gt;
&lt;div class=&quot;progress-bar progress-bar-striped progress-bar-animated&quot; role=&quot;progressbar&quot; aria-valuenow=&quot;75&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; style=&quot;width: 75%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol xxl="6">
        <BCard no-body>

          <CardHeader title="Gradient Progress"
            content="Use <code>bg-gradient</code> class to show gradient progress bar." />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="gradientProgressPreview" role="tabpanel"
              aria-labelledby="gradientProgressPreview-tab" tabindex="0">
              <div>
                <div class="progress mb-4">
                  <div class="progress-bar bg-primary bg-gradient" role="progressbar" style="width: 15%"
                    aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-4">
                  <div class="progress-bar bg-success bg-gradient" role="progressbar" style="width: 25%"
                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-4">
                  <div class="progress-bar bg-info bg-gradient" role="progressbar" style="width: 50%" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress mb-4">
                  <div class="progress-bar bg-warning bg-gradient" role="progressbar" style="width: 75%"
                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-danger bg-gradient" role="progressbar" style="width: 100%"
                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="gradientProgressCode" role="tabpanel" aria-labelledby="gradientProgressCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;div class=&quot;progress&quot;&gt;
&lt;div class=&quot;progress-bar bg-primary bg-gradient&quot; role=&quot;progressbar&quot; style=&quot;width: 15%&quot; aria-valuenow=&quot;15&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress&quot;&gt;
&lt;div class=&quot;progress-bar bg-success bg-gradient&quot; role=&quot;progressbar&quot; style=&quot;width: 25%&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress&quot;&gt;
&lt;div class=&quot;progress-bar bg-info bg-gradient&quot; role=&quot;progressbar&quot; style=&quot;width: 50%&quot; aria-valuenow=&quot;50&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress&quot;&gt;
&lt;div class=&quot;progress-bar bg-warning bg-gradient&quot; role=&quot;progressbar&quot; style=&quot;width: 75%&quot; aria-valuenow=&quot;75&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress&quot;&gt;
&lt;div class=&quot;progress-bar bg-danger bg-gradient&quot; role=&quot;progressbar&quot; style=&quot;width: 100%&quot; aria-valuenow=&quot;100&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
      <BCol xxl="6">
        <BCard no-body>

          <CardHeader title="Animated Progress"
            content="Use <code>animated-progress</code> class to show progress with animation." />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="animatedProgressPreview" role="tabpanel"
              aria-labelledby="animatedProgressPreview-tab" tabindex="0">
              <div>
                <div class="progress animated-progress mb-4">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 15%" aria-valuenow="15"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress animated-progress mb-4">
                  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress animated-progress mb-4">
                  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress animated-progress mb-4">
                  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress animated-progress">
                  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="animatedProgressCode" role="tabpanel" aria-labelledby="animatedProgressCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;div class=&quot;progress animated-progress&quot;&gt;
&lt;div class=&quot;progress-bar bg-primary&quot; role=&quot;progressbar&quot; style=&quot;width: 15%&quot; aria-valuenow=&quot;15&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress animated-progress&quot;&gt;
&lt;div class=&quot;progress-bar bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 25%&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress animated-progress&quot;&gt;
&lt;div class=&quot;progress-bar bg-info&quot; role=&quot;progressbar&quot; style=&quot;width: 50%&quot; aria-valuenow=&quot;50&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress animated-progress&quot;&gt;
&lt;div class=&quot;progress-bar bg-warning&quot; role=&quot;progressbar&quot; style=&quot;width: 75%&quot; aria-valuenow=&quot;75&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress animated-progress&quot;&gt;
&lt;div class=&quot;progress-bar bg-danger&quot; role=&quot;progressbar&quot; style=&quot;width: 100%&quot; aria-valuenow=&quot;100&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol xxl="6">
        <BCard no-body>

          <CardHeader title="Custom Progress"
            content="Use <code>animated-progress custom-progress </code> class to show custom progress with animation." />
                  <BCardBody class="tab-content">

            <div class="tab-pane show active" id="customProgressPreview" role="tabpanel"
              aria-labelledby="customProgressPreview-tab" tabindex="0">
              <div>
                <div class="progress animated-progress custom-progress mb-4">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 15%" aria-valuenow="15"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress animated-progress custom-progress mb-4">
                  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress animated-progress custom-progress mb-4">
                  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress animated-progress custom-progress mb-4">
                  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress animated-progress custom-progress">
                  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="customProgressCode" role="tabpanel" aria-labelledby="customProgressCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;div class=&quot;progress animated-progress custom-progress mb-4&quot;&gt;
&lt;div class=&quot;progress-bar bg-primary&quot; role=&quot;progressbar&quot; style=&quot;width: 15%&quot; aria-valuenow=&quot;15&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress animated-progress custom-progress mb-4&quot;&gt;
&lt;div class=&quot;progress-bar bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 25%&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress animated-progress custom-progress mb-4&quot;&gt;
&lt;div class=&quot;progress-bar bg-info&quot; role=&quot;progressbar&quot; style=&quot;width: 50%&quot; aria-valuenow=&quot;50&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress animated-progress custom-progress mb-4&quot;&gt;
&lt;div class=&quot;progress-bar bg-warning&quot; role=&quot;progressbar&quot; style=&quot;width: 75%&quot; aria-valuenow=&quot;75&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress animated-progress custom-progress&quot;&gt;
&lt;div class=&quot;progress-bar bg-danger&quot; role=&quot;progressbar&quot; style=&quot;width: 100%&quot; aria-valuenow=&quot;100&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      

      <BCol xxl="6">
        <BCard no-body>

          <CardHeader title="Custom Progress with Label"
          content="Use <code>animated-progress custom-progress progress-label</code> class to show
          custom progress with animation and label." />
          

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="customWithLabelProgressPreview" role="tabpanel"
              aria-labelledby="customWithLabelProgressPreview-tab" tabindex="0">
              <div>
                <div class="d-flex align-items-center pb-2 mt-4">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar-xs">
                      <div class="avatar-title bg-light rounded-circle text-muted fs-lg">
                        <i class="bi bi-facebook"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <div class="progress animated-progress custom-progress progress-label">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 15%" aria-valuenow="15"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="label">15%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex align-items-center py-2">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar-xs">
                      <div class="avatar-title bg-light rounded-circle text-muted fs-lg">
                        <i class="bi bi-twitter"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <div class="progress animated-progress custom-progress progress-label">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="label">25%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex align-items-center py-2">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar-xs">
                      <div class="avatar-title bg-light rounded-circle text-muted fs-lg">
                        <i class="bi bi-github"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <div class="progress animated-progress custom-progress progress-label">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="label">30%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="customWithLabelProgressCode" role="tabpanel"
              aria-labelledby="customWithLabelProgressCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 330px;"><code>&lt;div class=&quot;d-flex align-items-center pb-2&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;div class=&quot;avatar-xs&quot;&gt;
&lt;div class=&quot;avatar-title bg-light rounded-circle text-muted fs-lg&quot;&gt;
&lt;i class=&quot;bi bi-facebook&quot;&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;div class=&quot;progress animated-progress custom-progress progress-label&quot;&gt;
&lt;div class=&quot;progress-bar bg-primary&quot; role=&quot;progressbar&quot; style=&quot;width: 15%&quot; aria-valuenow=&quot;15&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;div class=&quot;label&quot;&gt;15%&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex align-items-center py-2&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;div class=&quot;avatar-xs&quot;&gt;
&lt;div class=&quot;avatar-title bg-light rounded-circle text-muted fs-lg&quot;&gt;
&lt;i class=&quot;bi bi-twitter&quot;&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;div class=&quot;progress animated-progress custom-progress progress-label&quot;&gt;
&lt;div class=&quot;progress-bar bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 25%&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;div class=&quot;label&quot;&gt;25%&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex align-items-center py-2&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;div class=&quot;avatar-xs&quot;&gt;
&lt;div class=&quot;avatar-title bg-light rounded-circle text-muted fs-lg&quot;&gt;
&lt;i class=&quot;bi bi-github&quot;&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;div class=&quot;progress animated-progress custom-progress progress-label&quot;&gt;
&lt;div class=&quot;progress-bar bg-info&quot; role=&quot;progressbar&quot; style=&quot;width: 50%&quot; aria-valuenow=&quot;50&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;div class=&quot;label&quot;&gt;30%&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      
    </BRow>
    

    <BRow>
      <BCol xxl="12">
        <BCard no-body>

          <CardHeader title="Content Progress"
          content="Example of progress with content wrapped in progress." />

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="contentProgressPreview" role="tabpanel"
              aria-labelledby="contentProgressPreview-tab" tabindex="0">
              <div>
                <BCard no-body class="bg-light overflow-hidden shadow-none">
                  <BCardBody>
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <h6 class="mb-0"><b class="text-secondary">30%</b> Update in progress...</h6>
                      </div>
                      <div class="flex-shrink-0">
                        <h6 class="mb-0">1 min left</h6>
                      </div>
                    </div>
                  </BCardBody>
                  <div class="progress bg-secondary-subtle rounded-0">
                    <div class="progress-bar bg-secondary" role="progressbar" style="width: 30%" aria-valuenow="30"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </BCard>

                <BCard no-body class="bg-light overflow-hidden shadow-none">
                  <BCardBody>
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <h6 class="mb-0"><b class="text-success">60%</b> Update in progress...</h6>
                      </div>
                      <div class="flex-shrink-0">
                        <h6 class="mb-0">45s left</h6>
                      </div>
                    </div>
                  </BCardBody>
                  <div class="progress bg-success-subtle rounded-0">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 60%" aria-valuenow="60"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </BCard>

                <BCard no-body class="bg-light overflow-hidden shadow-none">
                  <BCardBody>
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <h6 class="mb-0"><b class="text-danger">82%</b> Update in progress...</h6>
                      </div>
                      <div class="flex-shrink-0">
                        <h6 class="mb-0">25s left</h6>
                      </div>
                    </div>
                  </BCardBody>
                  <div class="progress bg-danger-subtle rounded-0">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 82%" aria-valuenow="82"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </BCard>
              </div>
            </div>
            <div class="tab-pane" id="contentProgressCode" role="tabpanel" aria-labelledby="contentProgressCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 345px;"><code>&lt;div class=&quot;card bg-light overflow-hidden&quot;&gt;
&lt;div class=&quot;card-body&quot;&gt;
&lt;div class=&quot;d-flex&quot;&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h6 class=&quot;mb-0&quot;&gt;&lt;b class=&quot;text-secondary&quot;&gt;30%&lt;/b&gt; Update in progress...&lt;/h6&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;h6 class=&quot;mb-0&quot;&gt;1 min left&lt;/h6&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress bg-secondary-subtle rounded-0&quot;&gt;
&lt;div class=&quot;progress-bar bg-secondary&quot; role=&quot;progressbar&quot; style=&quot;width: 30%&quot; aria-valuenow=&quot;30&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;card bg-light overflow-hidden&quot;&gt;
&lt;div class=&quot;card-body&quot;&gt;
&lt;div class=&quot;d-flex&quot;&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h6 class=&quot;mb-0&quot;&gt;&lt;b class=&quot;text-success&quot;&gt;60%&lt;/b&gt; Update in progress...&lt;/h6&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;h6 class=&quot;mb-0&quot;&gt;45s left&lt;/h6&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress bg-success-subtle rounded-0&quot;&gt;
&lt;div class=&quot;progress-bar bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 60%&quot; aria-valuenow=&quot;60&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;card bg-light overflow-hidden&quot;&gt;
&lt;div class=&quot;card-body&quot;&gt;
&lt;div class=&quot;d-flex&quot;&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h6 class=&quot;mb-0&quot;&gt;&lt;b class=&quot;text-danger&quot;&gt;82%&lt;/b&gt; Update in progress...&lt;/h6&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-shrink-0&quot;&gt;
&lt;h6 class=&quot;mb-0&quot;&gt;25s left&lt;/h6&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress bg-danger-subtle rounded-0&quot;&gt;
&lt;div class=&quot;progress-bar bg-danger&quot; role=&quot;progressbar&quot; style=&quot;width: 82%&quot; aria-valuenow=&quot;82&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="12">
        <BCard no-body>

          <CardHeader title="Progress with Steps"
          content="Here is the example of progress which is represented by steps completion." />          
         

          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="stepsWithProgressPreview" role="tabpanel"
              aria-labelledby="stepsWithProgressPreview-tab" tabindex="0">
              <div class="position-relative m-4">
                <div class="progress" style="height: 1px;">
                  <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <button type="button"
                  class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
                  style="width: 2rem; height:2rem;">1</button>
                <button type="button"
                  class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
                  style="width: 2rem; height:2rem;">2</button>
                <button type="button"
                  class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-light rounded-pill"
                  style="width: 2rem; height:2rem;">3</button>
              </div>
            </div>
            <div class="tab-pane" id="stepsWithProgressCode" role="tabpanel" aria-labelledby="stepsWithProgressCode-tab"
              tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;div class=&quot;position-relative m-4&quot;&gt;
&lt;div class=&quot;progress&quot; style=&quot;height: 1px;&quot;&gt;
&lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 50%;&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;button type=&quot;button&quot; class=&quot;position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill&quot; style=&quot;width: 2rem; height:2rem;&quot;&gt;1&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill&quot; style=&quot;width: 2rem; height:2rem;&quot;&gt;2&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;position-absolute top-0 start-100 translate-middle btn btn-sm btn-light rounded-pill&quot; style=&quot;width: 2rem; height:2rem;&quot;&gt;3&lt;/button&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>

        <BCard no-body>

          <CardHeader title="Step Progress with Arrow"
          content="Use <code>progress-step-arrow </code>class to create step progress with an
          arrow." />
          
          <BCardBody class="tab-content">
            <div class="tab-pane show active" id="stepsWithArrowProgressPreview" role="tabpanel"
              aria-labelledby="stepsWithArrowProgressPreview-tab" tabindex="0">
              <div class="progress progress-step-arrow progress-info">
                <div class="progress-bar active" role="progressbar" style="width: 100%" aria-valuenow="100"
                  aria-valuemin="0" aria-valuemax="100">Step 1</div>
                <div class="progress-bar pending" role="progressbar" style="width: 100%" aria-valuenow="30"
                  aria-valuemin="0" aria-valuemax="100"> Step 2</div>
                <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="20" aria-valuemin="0"
                  aria-valuemax="100"> Step 3</div>
              </div>
            </div>
            <div class="tab-pane" id="stepsWithArrowProgressCode" role="tabpanel"
              aria-labelledby="stepsWithArrowProgressCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup"><code>&lt;div class=&quot;progress progress-step-arrow progress-info&quot;&gt;
&lt;a href=&quot;javascript:void(0);&quot; class=&quot;progress-bar active&quot; role=&quot;progressbar&quot; style=&quot;width: 100%&quot; aria-valuenow=&quot;100&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;Step 1&lt;/a&gt;
&lt;a href=&quot;javascript:void(0);&quot; class=&quot;progress-bar pending&quot; role=&quot;progressbar&quot; style=&quot;width: 100%&quot; aria-valuenow=&quot;30&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt; Step 2&lt;/a&gt;
&lt;a href=&quot;javascript:void(0);&quot; class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 100%&quot; aria-valuenow=&quot;20&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt; Step 3&lt;/a&gt;
&lt;/div&gt;;</code></pre>
            </div>
          </BCardBody>
        </BCard>

      </BCol>
      

  </BRow>
</Layout></template>