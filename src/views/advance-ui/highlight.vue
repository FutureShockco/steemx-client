<script>
import * as Prism from 'prismjs';

export default {
  data() {
    return {
    };
  },
  mounted(){
    Prism.highlightAll();
  }
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Highlight" pagetitle="Advance UI" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol lg="12">
          <BCard no-body>
              <BCardHeader>
                  <BCardTitle class="mb-1">HTML Highlight</BCardTitle>
                  <p class="text-muted mb-0">HTML highlight is used to mark or highlight text that is of property, relevance, or special interest to an HTML document. here is the example shown below.</p>
              </BCardHeader>
              <BCardBody>
<pre><code class="language-markup">&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;SteemX - Responsive Admin Dashboard Template&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;div&gt;
        &lt;h1&gt;This is a Heading 1&lt;/h1&gt;
        &lt;h2&gt;This is a Heading 2&lt;/h2&gt;
        &lt;h3&gt;This is a Heading 3&lt;/h3&gt;
        &lt;h4&gt;This is a Heading 4&lt;/h4&gt;
      &lt;/div&gt;
      &lt;!-- end div content --&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
              </BCardBody>
          </BCard>
      </BCol>
      
  </BRow>
  

  <BRow>
      <BCol lg="12">
          <BCard no-body>
              <BCardHeader>
                  <BCardTitle class="mb-1">CSS Highlight</BCardTitle>
                  <p class="text-muted mb-0">CSS highlight is used to mark or highlight text that is of property, relevance, or special interest to a CSS document. Here is the example shown below.</p>
              </BCardHeader>
              <BCardBody>
<pre><code class="language-css">body {
    color: #212529; 
    background-color: #f3f3f9;
    font-family: "Inter", sans-serif;
}

.example {
    margin: 0;
    color: #74788d; 
}</code></pre>
              </BCardBody>
          </BCard>
      </BCol>
      
  </BRow>
  

  <BRow>
      <BCol lg="12">
          <BCard no-body>
              <BCardHeader>
                  <BCardTitle class="mb-1">Javascript Highlight</BCardTitle>
                  <p class="text-muted mb-0">Javascript highlight is used to mark or highlight text that is of property, relevance, or special interest to a Javascript document. Here is the example shown below.</p>
              </BCardHeader>
              <BCardBody>
<pre><code class="language-js">function myFunction() {
    var divElement = document.getElementById("myDIV");
    if (divElement.style.display === "none") {
    divElement.style.display = "block";
    } else {
    divElement.style.display = "none";
    }
}</code></pre>
              </BCardBody>
          </BCard>
      </BCol>
      
  </BRow>
</Layout>
</template>