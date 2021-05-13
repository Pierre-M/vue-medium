<template>
  <div class="commands">
    <LinkEditorInput v-if="isEditingLink" :editor="editor" />
    <div v-for="command in commands" v-else :key="command.name">
      <div v-if="isSeparator(command)" aria-hidden="true" class="commands__separator" />
      <CommandItem
        v-else
        class="commands__item"
        :active="command.active()"
        :disabled="command.disabled()"
        :icon="command.icon"
        @click="command.onClick"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Editor } from "@tiptap/vue-3";
import useBold from "../editor/commands/useBold";
import CommandItem from "./CommandItem.vue";
import useItalic from "../editor/commands/useItalic";
import useTitle from "../editor/commands/useTitle";
import useSubtitle from "../editor/commands/useSubtitle";
import useLink from "../editor/commands/useLink";
import LinkEditorInput from "./LinkEditorInput.vue";
import { UICommand } from "../editor/commands/types";

export default defineComponent({
  name: "Commands",
  components: { LinkEditorInput, CommandItem },
  props: {
    editor: { type: Editor, required: true },
  },
  setup(props: { editor: Editor }) {
    const bold = useBold(props.editor);
    const italic = useItalic(props.editor);
    const title = useTitle(props.editor);
    const subtitle = useSubtitle(props.editor);
    const { command: link, isEditing: isEditingLink } = useLink(props.editor);

    const commands = [bold, italic, link, "|", title, subtitle] as UICommand[];

    const isSeparator = (entry: unknown) => entry === "|";

    return { commands, isSeparator, isEditingLink };
  },
});
</script>

<style lang="scss" scoped>
.commands {
  display: flex;
  height: 45px;
  padding: 10px;
  gap: 5px;
  background: linear-gradient(to bottom, rgba(49, 49, 47, 0.99), #262625);
  border-radius: 4px;

  &__separator {
    width: 1px;
    height: 100%;
    margin: 0 3px;
    background-color: var(--ui-clear-medium);
  }

  &__item {
    height: 100%;
  }
}
</style>
