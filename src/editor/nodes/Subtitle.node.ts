import { Node } from "@tiptap/vue-3";
import { Command } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands {
    subtitle: {
      toggleSubtitle: () => Command;
    };
  }
}

export default Node.create({
  name: "subtitle",
  group: "block",
  content: "text*",
  marks: "",
  parseHTML() {
    return [
      {
        tag: "h4",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["h4", HTMLAttributes, 0];
  },
  addCommands() {
    return {
      toggleSubtitle: () => ({ commands }) => {
        return commands.toggleNode("subtitle", "paragraph");
      },
    };
  },
});
