<template>
  <div class="layout">
    <BubbleMenu v-if="editor" :editor="editor">
      <Commands :editor="editor" />
    </BubbleMenu>
    <EditorContent class="content" :editor="editor" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EditorContent, BubbleMenu } from "@tiptap/vue-3";
import useEditor from "./editor/useEditor";
import Commands from "./components/Commands.vue";

export default defineComponent({
  name: "App",
  components: {
    Commands,
    EditorContent,
    BubbleMenu,
  },
  setup() {
    const editor = useEditor("<h1 data-placeholder='Title'></h1><p data-placeholder='Tell your story...'></p>");

    return { editor };
  },
});
</script>

<style>
.layout {
  max-width: 740px;
  padding: 20px;
  margin: auto;
}
</style>
