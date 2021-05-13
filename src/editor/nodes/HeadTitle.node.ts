import { Node } from "@tiptap/vue-3";
import { Command } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands {
    headTitle: {
      toggleHeadTitle: () => Command;
    };
  }
}

export default Node.create({
  name: "headTitle",
  content: "text*",
  marks: "",
  parseHTML() {
    return [
      {
        tag: "h1",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["h1", HTMLAttributes, 0];
  },
  addCommands() {
    return {
      toggleHeadTitle: () => ({ commands }) => {
        return commands.toggleNode("headTitle", "paragraph");
      },
    };
  },
});
