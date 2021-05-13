import { Editor } from "@tiptap/vue-3";
import { UICommand } from "./types";
import { Italic } from "@tiptap/extension-italic";

const italicIcon = `<svg class="svgIcon-use" width="21" height="21" fill="currentColor"><path d="M9.847 18.04c-.533 0-2.027-.64-1.92-.853l2.027-7.68-.64-.214-1.387 1.494-.427-.427c.534-1.173 1.707-2.667 2.774-2.667.533 0 2.24.534 2.133.854l-2.133 7.786.533.214 1.6-1.067.427.427c-.64 1.066-1.92 2.133-2.987 2.133zm2.347-11.733c-.96 0-1.387-.64-1.387-1.387 0-1.067.747-1.92 1.493-1.92.854 0 1.387.64 1.387 1.493-.107 1.067-.747 1.814-1.493 1.814z" fill-rule="evenodd"></path></svg>`;

export default (editor: Editor): UICommand => {
  return {
    name: "toggleItalic",
    icon: italicIcon,
    active: () => editor.isActive(Italic.name),
    disabled: () => {
      return (
        editor.isActive("headTitle") ||
        editor.isActive("headSubtitle") ||
        editor.isActive("title") ||
        editor.isActive("subtitle")
      );
    },
    onClick: () => editor.chain().focus().toggleItalic().run(),
  };
};
