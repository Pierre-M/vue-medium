import { Editor } from "@tiptap/vue-3";
import { UICommand } from "./types";

const titleIcon = `<svg class="svgIcon-use" width="21" height="21"><path d="M3 2v4.747h1.656l.383-2.568.384-.311h3.88V15.82l-.408.38-1.56.12V18h7.174v-1.68l-1.56-.12-.407-.38V3.868h3.879l.36.311.407 2.568h1.656V2z" fill="currentColor"></path></svg>`;

export default (editor: Editor): UICommand => {
  return {
    icon: titleIcon,
    name: "toggleTitle",
    active: () => editor.isActive("title") || editor.isActive("mainTitle"),
    disabled: () => false,
    onClick: () => {
      if (editor.can().toggleHeadTitle()) editor.chain().focus().toggleHeadTitle().run();
      else editor.chain().focus().toggleTitle().run();

      return true;
    },
  };
};
