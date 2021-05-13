<template>
  <div class="link-editor-input">
    <input
      ref="inputEl"
      v-model="url"
      class="link-editor-input__field"
      placeholder="Paste or type a link..."
      @keydown.esc="onCancel"
      @keydown.enter.prevent="onSubmit"
    />
    <button type="button" @click="onCancel" class="link-editor-input__close">
      <Icon icon="feather:x" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Editor } from "@tiptap/vue-3";
import useLink from "../editor/commands/useLink";
import Icon from "./Icon.vue";

export default defineComponent({
  name: "LinkEditorInput",
  components: { Icon },
  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },
  setup(props: { editor: Editor }) {
    const inputEl = ref<HTMLInputElement | null>(null);
    const { update, cancel } = useLink(props.editor);
    const url = ref("");

    const onSubmit = () => update(url.value);
    const onCancel = cancel;

    onMounted(() => {
      inputEl.value?.focus();
    });

    return {
      url,
      inputEl,
      onCancel,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.link-editor-input {
  display: flex;
  align-items: center;

  &__field {
    background: none;
    border: none;
    color: var(--ui-clear);
    font-family: medium-content-sans-serif-font;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }

  &__close {
    cursor: pointer;
    padding: 0;
    border: none;
    background: none;
    color: var(--ui-clear);
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
}
</style>
