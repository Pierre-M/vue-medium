import { Node } from "@tiptap/vue-3";
import { Command } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands {
    headSubtitle: {
      toggleHeadSubtitle: () => Command;
    };
  }
}

export default Node.create({
  name: "headSubtitle",
  content: "text*",
  marks: "",
  parseHTML() {
    return [
      {
        tag: "h2",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["h2", HTMLAttributes, 0];
  },
  addCommands() {
    return {
      toggleHeadSubtitle: () => ({ commands }) => {
        return commands.toggleNode("headSubtitle", "paragraph");
      },
    };
  },
});
