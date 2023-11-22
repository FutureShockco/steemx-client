<script>



import { ref } from "vue";
import Img1 from "@/assets/images/small/img-1.jpg";
import Img2 from "@/assets/images/small/img-2.jpg";
import Img3 from "@/assets/images/small/img-3.jpg";
import Img4 from "@/assets/images/small/img-4.jpg";
import Img5 from "@/assets/images/small/img-5.jpg";
import Img6 from "@/assets/images/small/img-6.jpg";
import Img7 from "@/assets/images/small/img-7.jpg";
import Img8 from "@/assets/images/small/img-8.jpg";
import Img9 from "@/assets/images/small/img-9.jpg";
import Img10 from "@/assets/images/small/img-10.jpg";
import Img11 from "@/assets/images/small/img-11.jpg";
import Img12 from "@/assets/images/small/img-12.jpg";

export default {
  data() {
    return {
      Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12,
    };
  },
  indicatorSlide: ref(0),


};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Carousel" pagetitle="Bootstrap UI" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>

      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Slides Only" content="Use<code> slide</code> class to set carousel with slides. Note the presence of the <code>d-block</code> and <code>w-100</code> class on carousel images to prevent browser default image alignment." />

            <BCardBody class="tab-content">
              <div class="tab-pane show active" id="slidesOnlyPreview" role="tabpanel" aria-labelledby="slidesOnlyPreview-tab" tabindex="0">
                <BCarousel ride="carousel">
                  <BCarouselSlide :img-src="Img1" />
                  <BCarouselSlide :img-src="Img2" />
                  <BCarouselSlide :img-src="Img3" />
                </BCarousel>
              </div>
              <div class="tab-pane" id="slidesOnlyCode" role="tabpanel" aria-labelledby="slidesOnlyCode-tab" tabindex="0">
                  <h5 class="fs-sm text-muted">HTML Preview</h5>
                  <pre class="language-markup" style="height: 240px;">
<code>&lt;!-- Slides Only --&gt;
&lt;div id=&quot;carouselExampleSlidesOnly&quot; class=&quot;carousel slide&quot; data-bs-ride=&quot;carousel&quot; data-bs-interval=&quot;3000&quot;&gt;
&lt;div class=&quot;carousel-inner&quot; role=&quot;listbox&quot;&gt;
&lt;div class=&quot;carousel-item carousel-item-next carousel-item-start&quot;&gt;
&lt;img class=&quot;d-block img-fluid mx-auto&quot; src=&quot;...&quot; alt=&quot;First slide&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-item&quot;&gt;
&lt;img class=&quot;d-block img-fluid mx-auto&quot; src=&quot;...&quot; alt=&quot;Second slide&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-item active carousel-item-start&quot;&gt;
&lt;img class=&quot;d-block img-fluid mx-auto&quot; src=&quot;...&quot; alt=&quot;Third slide&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
              </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="With Controls" content="Use <code>carousel-control-prev</code> and <code>carousel-control-next</code> class
            with BButton or BLink tag element to show carousel with control navigation." />
            <BCardBody class="tab-content">
              <div class="tab-pane show active" id="controlsWithSlidesPreview" role="tabpanel" aria-labelledby="controlsWithSlidesPreview-tab" tabindex="0">
                <BCarousel class="carousel slide" :interval="2000" v-model="controlSlide" controls>
                  <BCarouselSlide active :img-src="Img4" />
                  <BCarouselSlide :img-src="Img5" />
                  <BCarouselSlide :img-src="Img6" />
                </BCarousel>
              </div>
              <div class="tab-pane" id="controlsWithSlidesCode" role="tabpanel" aria-labelledby="controlsWithSlidesCode-tab" tabindex="0">
                  <h5 class="fs-sm text-muted">HTML Preview</h5>
                  <pre class="language-markup" style="height: 240px;">
<code>&lt;!-- With Controls --&gt;
&lt;div id=&quot;carouselExampleControls&quot; class=&quot;carousel slide&quot; data-bs-ride=&quot;carousel&quot;&gt;
&lt;div class=&quot;carousel-inner&quot; role=&quot;listbox&quot;&gt;
&lt;div class=&quot;carousel-item active&quot;&gt;
&lt;img class=&quot;d-block img-fluid mx-auto&quot; src=&quot;...&quot; alt=&quot;First slide&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-item&quot;&gt;
&lt;img class=&quot;d-block img-fluid mx-auto&quot; src=&quot;...&quot; alt=&quot;Second slide&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-item&quot;&gt;
&lt;img class=&quot;d-block img-fluid mx-auto&quot; src=&quot;...&quot; alt=&quot;Third slide&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;a class=&quot;carousel-control-prev&quot; href=&quot;#carouselExampleControls&quot; role=&quot;button&quot; data-bs-slide=&quot;prev&quot;&gt;
&lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
&lt;/a&gt;
&lt;a class=&quot;carousel-control-next&quot; href=&quot;#carouselExampleControls&quot; role=&quot;button&quot; data-bs-slide=&quot;next&quot;&gt;
&lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
&lt;/a&gt;
&lt;/div&gt;</code></pre>
              </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>

      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="with Indicators" content="Use <code>carousel-control-prev</code> and <code>carousel-control-next</code> class
            with BButton or BLink tag element to show carousel with control navigation." />
            <BCardBody class="tab-content">
              <div class="tab-pane show active" id="indicatorsWithSlidesPreview" role="tabpanel" aria-labelledby="indicatorsWithSlidesPreview-tab" tabindex="0">
                <BCarousel fade controls indicators>
                  <BCarouselSlide :img-src="Img1" />
                  <BCarouselSlide :img-src="Img2" />
                  <BCarouselSlide :img-src="Img3" />
                </BCarousel>
              </div>
              <div class="tab-pane" id="indicatorsWithSlidesCode" role="tabpanel" aria-labelledby="indicatorsWithSlidesCode-tab" tabindex="0">
                  <h5 class="fs-sm text-muted">HTML Preview</h5>
                  <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- With Indicators --&gt;
&lt;div id=&quot;carouselExampleIndicators&quot; class=&quot;carousel slide&quot; data-bs-ride=&quot;carousel&quot;&gt;
&lt;div class=&quot;carousel-indicators&quot;&gt;
&lt;button type=&quot;button&quot; data-bs-target=&quot;#carouselExampleIndicators&quot; data-bs-slide-to=&quot;0&quot; class=&quot;active&quot; aria-current=&quot;true&quot; aria-label=&quot;Slide 1&quot;&gt;&lt;/button&gt;
&lt;button type=&quot;button&quot; data-bs-target=&quot;#carouselExampleIndicators&quot; data-bs-slide-to=&quot;1&quot; aria-label=&quot;Slide 2&quot;&gt;&lt;/button&gt;
&lt;button type=&quot;button&quot; data-bs-target=&quot;#carouselExampleIndicators&quot; data-bs-slide-to=&quot;2&quot; aria-label=&quot;Slide 3&quot;&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-inner&quot; role=&quot;listbox&quot;&gt;
&lt;div class=&quot;carousel-item&quot;&gt;
&lt;img class=&quot;d-block img-fluid mx-auto&quot; src=&quot;...&quot; alt=&quot;First slide&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-item&quot;&gt;
&lt;img class=&quot;d-block img-fluid mx-auto&quot; src=&quot;...&quot; alt=&quot;Second slide&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-item active&quot;&gt;
&lt;img class=&quot;d-block img-fluid mx-auto&quot; src=&quot;...&quot; alt=&quot;Third slide&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;a class=&quot;carousel-control-prev&quot; href=&quot;#carouselExampleIndicators&quot; role=&quot;button&quot; data-bs-slide=&quot;prev&quot;&gt;
&lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
&lt;/a&gt;
&lt;a class=&quot;carousel-control-next&quot; href=&quot;#carouselExampleIndicators&quot; role=&quot;button&quot; data-bs-slide=&quot;next&quot;&gt;
&lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
&lt;/a&gt;
&lt;/div&gt;</code></pre>
              </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="with Captions" content="Use <code>carousel-control-prev</code> and <code>carousel-control-next</code> class
            with BButton or BLink tag element to show carousel with control navigation." />

            <BCardBody class="tab-content">
              <div class="tab-pane show active" id="captionsWithSlidesPreview" role="tabpanel" aria-labelledby="captionsWithSlidesPreview-tab" tabindex="0">
                <BCarousel controls indicators>
                  <BCarouselSlide :img-src="Img4"
                    caption-html="<h5 class='text-white'>Sunrise above a beach</h5><p class='text-white'style='font-size: 15px;font-weight: 400;'>You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary.</p>" />
                  <BCarouselSlide :img-src="Img5"
                    caption-html=" <h5 class='text-white'>Working from home little spot</h5><p class='text-white'style='font-size: 15px;font-weight: 400;'>Consistency piques people’s interest is that it has become more and more popular over the years, which is excellent.</p>" />
                  <BCarouselSlide :img-src="Img6"
                    caption-html=" <h5 class='text-white'>Dramatic clouds at the Golden Gate Bridge</h5><p class='text-white'style='font-size: 15px;font-weight: 400;'>Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter.</p>" />
                </BCarousel>
              </div>
              <div class="tab-pane" id="captionsWithSlidesCode" role="tabpanel" aria-labelledby="captionsWithSlidesCode-tab" tabindex="0">
                  <h5 class="fs-sm text-muted">HTML Preview</h5>
                  <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- With Captions --&gt;
&lt;div id=&quot;carouselExampleCaption&quot; class=&quot;carousel slide&quot; data-bs-ride=&quot;carousel&quot;&gt;
&lt;div class=&quot;carousel-inner&quot; role=&quot;listbox&quot;&gt;
&lt;div class=&quot;carousel-item&quot;&gt;
&lt;img src=&quot;...&quot; alt=&quot;&quot; class=&quot;d-block img-fluid mx-auto&quot;&gt;
&lt;div class=&quot;carousel-caption d-none d-md-block text-white-50&quot;&gt;
&lt;h5 class=&quot;text-white&quot;&gt;Sunrise above a beach&lt;/h5&gt;
&lt;p&gt;You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary.&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-item active&quot;&gt;
&lt;img src=&quot;...&quot; alt=&quot;&quot; class=&quot;d-block img-fluid mx-auto&quot;&gt;
&lt;div class=&quot;carousel-caption d-none d-md-block text-white-50&quot;&gt;
&lt;h5 class=&quot;text-white&quot;&gt;Working from home little spot&lt;/h5&gt;
&lt;p&gt;Consistency piques people’s interest is that it has become more and more popular over the years, which is excellent.&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-item&quot;&gt;
&lt;img src=&quot;...&quot; alt=&quot;&quot; class=&quot;d-block img-fluid mx-auto&quot;&gt;
&lt;div class=&quot;carousel-caption d-none d-md-block text-white-50&quot;&gt;
&lt;h5 class=&quot;text-white&quot;&gt;Dramatic clouds at the Golden Gate Bridge&lt;/h5&gt;
&lt;p&gt;Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter.&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;a class=&quot;carousel-control-prev&quot; href=&quot;#carouselExampleCaption&quot; role=&quot;button&quot; data-bs-slide=&quot;prev&quot;&gt;
&lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
&lt;/a&gt;
&lt;a class=&quot;carousel-control-next&quot; href=&quot;#carouselExampleCaption&quot; role=&quot;button&quot; data-bs-slide=&quot;next&quot;&gt;
&lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
&lt;/a&gt;
&lt;/div&gt;</code></pre>
              </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Crossfade Animation" content="Use <code>carousel-fade</code> class to the carousel to animate slides with a fade transition instead of a slide.." />
            <BCardBody class="tab-content">
              <div class="tab-pane show active" id="crossfadeAnimationSlidesPreview" role="tabpanel" aria-labelledby="crossfadeAnimationSlidesPreview-tab" tabindex="0">
                <BCarousel fade controls indicators>
                  <BCarouselSlide :img-src="Img1" />
                  <BCarouselSlide :img-src="Img2" />
                  <BCarouselSlide :img-src="Img3" />
                </BCarousel>
              </div>
              <div class="tab-pane" id="crossfadeAnimationSlidesCode" role="tabpanel" aria-labelledby="crossfadeAnimationSlidesCode-tab" tabindex="0">
                  <h5 class="fs-sm text-muted">HTML Preview</h5>
                  <pre class="language-markup" style="height: 330px;"><code>&lt;!-- With Crossfade Animation --&gt;
&lt;div id=&quot;carouselExampleFade&quot; class=&quot;carousel slide carousel-fade&quot; data-ride=&quot;carousel&quot;&gt;
&lt;div class=&quot;carousel-indicators&quot;&gt;
&lt;button type=&quot;button&quot; data-bs-target=&quot;#carouselExampleFade&quot; data-bs-slide-to=&quot;0&quot; class=&quot;active&quot; aria-current=&quot;true&quot; aria-label=&quot;Slide 1&quot;&gt;&lt;/button&gt;
&lt;button type=&quot;button&quot; data-bs-target=&quot;#carouselExampleFade&quot; data-bs-slide-to=&quot;1&quot; aria-label=&quot;Slide 2&quot;&gt;&lt;/button&gt;
&lt;button type=&quot;button&quot; data-bs-target=&quot;#carouselExampleFade&quot; data-bs-slide-to=&quot;2&quot; aria-label=&quot;Slide 3&quot;&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-inner&quot;&gt;
&lt;div class=&quot;carousel-item active&quot;&gt;
&lt;img class=&quot;d-block img-fluid mx-auto&quot; src=&quot;...&quot; alt=&quot;First slide&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-item&quot;&gt;
&lt;img class=&quot;d-block img-fluid mx-auto&quot; src=&quot;...&quot; alt=&quot;Second slide&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-item&quot;&gt;
&lt;img class=&quot;d-block img-fluid mx-auto&quot; src=&quot;...&quot; alt=&quot;Third slide&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;a class=&quot;carousel-control-prev&quot; href=&quot;#carouselExampleFade&quot; role=&quot;button&quot; data-bs-slide=&quot;prev&quot;&gt;
&lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
&lt;/a&gt;
&lt;a class=&quot;carousel-control-next&quot; href=&quot;#carouselExampleFade&quot; role=&quot;button&quot; data-bs-slide=&quot;next&quot;&gt;
&lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
&lt;/a&gt;
&lt;/div&gt;
</code></pre>
              </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Individual carousel-item Interval" content='Use <code>data-bs-interval=" "</code> to a carousel-item to change the amount of time to delay between automatically cycling to the next item.' />
            <BCardBody class="tab-content">
              <div class="tab-pane show active" id="individualCarouselItemSlidesPreview" role="tabpanel" aria-labelledby="individualCarouselItemSlidesPreview-tab" tabindex="0">
                <BCarousel fade controls indicators>
                  <BCarouselSlide :img-src="Img11" />
                  <BCarouselSlide :img-src="Img12" />
                  <BCarouselSlide :img-src="Img10" />
                </BCarousel>
              </div>
              <div class="tab-pane" id="individualCarouselItemSlidesCode" role="tabpanel" aria-labelledby="individualCarouselItemSlidesCode-tab" tabindex="0">
                  <h5 class="fs-sm text-muted">HTML Preview</h5>
                  <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Individual Slide --&gt;
&lt;div id=&quot;carouselExampleInterval&quot; class=&quot;carousel slide&quot; data-bs-ride=&quot;carousel&quot;&gt;
&lt;div class=&quot;carousel-inner&quot;&gt;
&lt;div class=&quot;carousel-item active&quot; data-bs-interval=&quot;10000&quot;&gt;
&lt;img src=&quot;...&quot; class=&quot;d-block w-100&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-item&quot; data-bs-interval=&quot;2000&quot;&gt;
&lt;img src=&quot;...&quot; class=&quot;d-block w-100&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-item&quot;&gt;
&lt;img src=&quot;...&quot; class=&quot;d-block w-100&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;button class=&quot;carousel-control-prev&quot; type=&quot;button&quot; data-bs-target=&quot;#carouselExampleInterval&quot; data-bs-slide=&quot;prev&quot;&gt;
&lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
&lt;/button&gt;
&lt;button class=&quot;carousel-control-next&quot; type=&quot;button&quot; data-bs-target=&quot;#carouselExampleInterval&quot; data-bs-slide=&quot;next&quot;&gt;
&lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;</code></pre>
              </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Disable Touch Swiping" content="Carousels support swiping left/right on touchscreen devices to move between slides.
          This can be disabled using the <code>data-bs-touch</code> attribute. The example below also does not include the
          <code>data-bs-ride attribute</code> and has <code>data-bs-interval='false'</code> so it doesn’t autoplay." />
<BCardBody class="tab-content">
                                    <div class="tab-pane show active" id="disableTouchSwipingSlidesPreview" role="tabpanel" aria-labelledby="disableTouchSwipingSlidesPreview-tab" tabindex="0">
                                      <BCarousel fade controls indicators>
                                        <BCarouselSlide :img-src="Img9" />
                                        <BCarouselSlide :img-src="Img8" />
                                        <BCarouselSlide :img-src="Img7" />
                                      </BCarousel>
                                    </div>
                                    <div class="tab-pane" id="disableTouchSwipingSlidesCode" role="tabpanel" aria-labelledby="disableTouchSwipingSlidesCode-tab" tabindex="0">
                                        <h5 class="fs-sm text-muted">HTML Preview</h5>
                                        <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Disable Touch Swiping --&gt;
&lt;div id=&quot;carouselExampleControlsNoTouching&quot; class=&quot;carousel slide&quot; data-bs-touch=&quot;false&quot; data-bs-interval=&quot;false&quot;&gt;
&lt;div class=&quot;carousel-inner&quot;&gt;
  &lt;div class=&quot;carousel-item active&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;d-block w-100&quot; alt=&quot;...&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;carousel-item&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;d-block w-100&quot; alt=&quot;...&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;carousel-item&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;d-block w-100&quot; alt=&quot;...&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;button class=&quot;carousel-control-prev&quot; type=&quot;button&quot; data-bs-target=&quot;#carouselExampleControlsNoTouching&quot; data-bs-slide=&quot;prev&quot;&gt;
  &lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
  &lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
&lt;/button&gt;
&lt;button class=&quot;carousel-control-next&quot; type=&quot;button&quot; data-bs-target=&quot;#carouselExampleControlsNoTouching&quot; data-bs-slide=&quot;next&quot;&gt;
  &lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
  &lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                </BCardBody>
        </BCard>
      </BCol>
      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Dark Variant" content="Use <code>carousel-dark</code> class to the carousel for darker controls, indicators, and captions."/>
            <BCardBody class="tab-content">
                                    <div class="tab-pane show active" id="darkVariantSlidesPreview" role="tabpanel" aria-labelledby="darkVariantSlidesPreview-tab" tabindex="0">
                                      <BCarousel class="carousel-dark" controls indicators="text-dark">
                                        <BCarouselSlide :img-src="Img4"
                                          caption-html="<h5 class='text-dark'>Sunrise above a beach</h5><p class='text-dark'style='font-size: 15px;font-weight: 400;'>You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary.</p>" />
                                        <BCarouselSlide :img-src="Img5"
                                          caption-html=" <h5 class='text-dark'>Working from home little spot</h5><p class='text-dark'style='font-size: 15px;font-weight: 400;'>Consistency piques people’s interest is that it has become more and more popular over the years, which is excellent.</p>" />
                                        <BCarouselSlide :img-src="Img6"
                                          caption-html=" <h5 class='text-dark'>Dramatic clouds at the Golden Gate Bridge</h5><p class='text-dark'style='font-size: 15px;font-weight: 400;'>Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter.</p>" />
                                      </BCarousel>
                                    </div>
                                    <div class="tab-pane" id="darkVariantSlidesCode" role="tabpanel" aria-labelledby="darkVariantSlidesCode-tab" tabindex="0">
                                        <h5 class="fs-sm text-muted">HTML Preview</h5>
                                        <pre class="language-markup" style="height: 350px;">
<code>&lt;!-- Dark Variant --&gt;
&lt;div id=&quot;carouselExampleDark&quot; class=&quot;carousel carousel-dark slide&quot; data-bs-ride=&quot;carousel&quot;&gt;
&lt;div class=&quot;carousel-indicators&quot;&gt;
  &lt;button type=&quot;button&quot; data-bs-target=&quot;#carouselExampleDark&quot; data-bs-slide-to=&quot;0&quot; class=&quot;active&quot; aria-current=&quot;true&quot; aria-label=&quot;Slide 1&quot;&gt;&lt;/button&gt;
  &lt;button type=&quot;button&quot; data-bs-target=&quot;#carouselExampleDark&quot; data-bs-slide-to=&quot;1&quot; aria-label=&quot;Slide 2&quot;&gt;&lt;/button&gt;
  &lt;button type=&quot;button&quot; data-bs-target=&quot;#carouselExampleDark&quot; data-bs-slide-to=&quot;2&quot; aria-label=&quot;Slide 3&quot;&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;carousel-inner&quot;&gt;
  &lt;div class=&quot;carousel-item active&quot; data-bs-interval=&quot;10000&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;d-block w-100&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;carousel-caption d-none d-md-block&quot;&gt;
      &lt;h5&gt;First slide label&lt;/h5&gt;
      &lt;p&gt;Some representative placeholder content for the first slide.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;carousel-item&quot; data-bs-interval=&quot;2000&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;d-block w-100&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;carousel-caption d-none d-md-block&quot;&gt;
      &lt;h5&gt;Second slide label&lt;/h5&gt;
      &lt;p&gt;Some representative placeholder content for the second slide.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;carousel-item&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;d-block w-100&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;carousel-caption d-none d-md-block&quot;&gt;
      &lt;h5&gt;Third slide label&lt;/h5&gt;
      &lt;p&gt;Some representative placeholder content for the third slide.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;button class=&quot;carousel-control-prev&quot; type=&quot;button&quot; data-bs-target=&quot;#carouselExampleDark&quot; data-bs-slide=&quot;prev&quot;&gt;
  &lt;span class=&quot;carousel-control-prev-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
  &lt;span class=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
&lt;/button&gt;
&lt;button class=&quot;carousel-control-next&quot; type=&quot;button&quot; data-bs-target=&quot;#carouselExampleDark&quot; data-bs-slide=&quot;next&quot;&gt;
  &lt;span class=&quot;carousel-control-next-icon&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
  &lt;span class=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                </BCardBody>
        </BCard>
      </BCol>
  </BRow>
  
</Layout></template>