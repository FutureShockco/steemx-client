<script>


import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: ""
    };
  },
  components: {
    
    
    
    ckeditor: CKEditor.component
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Editors" pagetitle="Forms" />
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
            <BCardTitle class="mb-1">Ckeditor Classic Editor</BCardTitle>
            <p class="text-muted mb-0">Use <code>ckeditor-classic</code> class to set ckeditor classic editor.</p>
          </BCardHeader>

          <BCardBody>
            <div class="ckeditor-classic">
              <ckeditor v-model="editorData" :editor="editor"></ckeditor>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>