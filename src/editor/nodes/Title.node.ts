import { Node } from "@tiptap/vue-3";
import { Command } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands {
    title: {
      toggleTitle: () => Command;
    };
  }
}

export default Node.create({
  name: "title",
  group: "block",
  content: "text*",
  marks: "",
  parseHTML() {
    return [
      {
        tag: "h3",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["h3", HTMLAttributes, 0];
  },
  addCommands() {
    return {
      toggleTitle: () => ({ commands }) => {
        return commands.toggleNode("title", "paragraph");
      },
    };
  },
});
