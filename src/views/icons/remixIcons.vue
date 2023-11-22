<script>


import { remixIcons } from "../../common/data";

export default {
  data() {
    return {
      icons: remixIcons,
      iconsList: [],
      title: "Remix",
      items: [
        {
          text: "Icons",
          href: "/",
        },
        {
          text: "Remix",
          active: true,
        },
      ],
    };
  },

  mounted() {
    this.remixIcons();
  },
  methods: {
    remixIcons() {
      let iconData = "";

      Object.keys(this.icons).forEach((key) => {
        const iconType = 'ri-';
        const iconTypeLabel = ' ' + key + ' ';
        const multiIcon = key === "Editor" ? '' : '-line';
        iconData += '<div class="card"><div class="card-body"><h4 class="card-title">' + iconTypeLabel + '</h4><p class="card-title-desc mb-2">Use <code>&lt;i class="' + iconType + 'bold"&gt;&lt;/i&gt;</code> <span class="badge badge-success">v 2.4.1</span>.</p><div class="row icon-demo-content">';

        Object.keys(remixIcons[key]).forEach((k) => {
          iconData += `<div class="col-xl-3 col-lg-4 col-sm-6">\
                    <i class="ri-${k}${multiIcon}"></i> ${iconType}${k}${multiIcon}\
                </div>`;
          if (multiIcon)
            iconData += `<div class="col-xl-3 col-lg-4 col-sm-6">\
            <i class="ri-${k}-fill"></i> ${iconType}${k}-fill\
        </div>`;
        });
        iconData += '</div></div></div>';
      });

      // Use Vue's ref to access the target element
      document.getElementById("icons").innerHTML = iconData;
    }
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Remix" pagetitle="Icons" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow>
      <BCol cols={12} id="icons"></BCol>
    </BRow>
  </Layout>
</template>