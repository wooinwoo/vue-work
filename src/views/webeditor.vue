<!-- onlineBulid  
0. docs_URL -  https://ckeditor.com/docs/ckeditor5/latest/installation/frameworks/vuejs-v3.html
0. npm다운로드 - npm install --save @ckeditor/ckeditor5-vue @ckeditor/ckeditor5-build-classic 
0. yarn다운로드 - yarn add @ckeditor/ckeditor5-vue @ckeditor/ckeditor5-build-classic
0. onlineBulid_URL - https://ckeditor.com/ckeditor-5/online-builder/

1. 온라인 빌더로 필요한 기능 담고 파일 다운
2. 파일 프로젝트에 추가
3. yarn add file:./ckeditor5 파일 추가
-->
<template>
  <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" />
</template>

<script setup lang="ts">
import Editor from "ckeditor5-custom-build/build/ckeditor";
import CKEditor from "@ckeditor/ckeditor5-vue";
import { ref, watch } from "vue";

const editor = ref(Editor); // 에디터 등록
const editorData = ref("<p>Content of the editor.</p>"); //초기 데이터
const editorConfig = ref({ language: "ko" }); // 에디터 설정값

watch(editorData, (new_data, old_data) => {
  console.log(editorData.value); //입력값 데이터 출력 - HTML태그로 출력 됨
});
</script>

<style>
/* 입력칸 css */
.ck-editor__editable {
  color: black;
  min-height: 300px;
}
</style>

<!-- <script lang="ts">
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import CKEditor from "@ckeditor/ckeditor5-vue";

export default {
  name: "CKEditor",
  components: {
    ckeditor: CKEditor.component,
  },
  data: () => ({
    editor: Editor,
    editorData: "<p>Content of the editor.</p>",
    editorConfig: {
      // ckfinder: {
      //   uploadUrl: "https://page.com/api/uploadckeditor",
      // },
      // toolbar: {
      //   items: [
      //     "heading",
      //     "|",
      //     "bold",
      //     "italic",
      //     "link",
      //     "bulletedList",
      //     "numberedList",
      //     "|",
      //     "outdent",
      //     "indent",
      //     "|",
      //     "imageUpload",
      //     "blockQuote",
      //     "insertTable",
      //     "mediaEmbed",
      //     "undo",
      //     "redo",
      //     "alignment",
      //     "codeBlock",
      //     "fontBackgroundColor",
      //     "fontColor",
      //     "fontFamily",
      //     "fontSize",
      //     "highlight",
      //     "horizontalLine",
      //     "htmlEmbed",
      //     "imageInsert",
      //     "pageBreak",
      //     "removeFormat",
      //     "strikethrough",
      //     "underline",
      //     "style",
      //   ],
      // },
      // language: "cs",
      // image: {
      //   toolbar: [
      //     "imageTextAlternative",
      //     "imageStyle:inline",
      //     "imageStyle:block",
      //     "imageStyle:side",
      //     "imageStyle:alignLeft",
      //     "imageStyle:alignRight",
      //     "imageStyle:alignCenter",
      //     "imageStyle:alignBlockLeft",
      //     "imageStyle:alignBlockRight",
      //     "linkImage",
      //   ],
      // },
      // table: {
      //   contentToolbar: [
      //     "tableColumn",
      //     "tableRow",
      //     "mergeTableCells",
      //     "tableCellProperties",
      //     "tableProperties",
      //   ],
      // },
      // fontFamily: {
      //   options: [
      //     "default",
      //     "indieflowerregular",
      //     "Arial, sans-serif",
      //     "Verdana, sans-serif",
      //     "Trebuchet MS",
      //     "Apple Color Emoji",
      //     "Segoe UI Emoji",
      //     "Segoe UI Symbol",
      //   ],
      // },
      // licenseKey: "",
    },
  }),
};
</script> -->
