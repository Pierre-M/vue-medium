import { Editor } from "@tiptap/vue-3";
import { UICommand } from "./types";

const subtitleIcon = `<svg class="svgIcon-use" width="21" height="21"><path d="M4 5.5v4.74h1.657l.384-2.569.384-.312h2.733v8.461l-.41.38-1.91.12V18h7.179v-1.68l-1.912-.12-.405-.38V7.359h2.729l.36.312.408 2.57h1.657V5.5z" fill="currentColor"></path></svg>`;

export default (editor: Editor): UICommand => {
  return {
    icon: subtitleIcon,
    name: "toggleSubtitle",
    active: () => editor.isActive("subtitle") || editor.isActive("headSubtitle"),
    disabled: () => false,
    onClick: () => {
      if (editor.can().toggleHeadSubtitle()) editor.chain().focus().toggleHeadSubtitle().run();
      else editor.chain().focus().toggleSubtitle().run();

      return true;
    },
  };
};
