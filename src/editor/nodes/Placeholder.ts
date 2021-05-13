/*
  This entire plugin is based on exsting @tiptap/extension-placeholder.
  The only thing I wanted to change is to inverse the focus behaviour :
  - the existing extension display placeholder (if there is one) on node focus
  - I want to display it (if there is one) and hide it on focus
*/

import { Extension } from "@tiptap/core";
import { Decoration, DecorationSet } from "prosemirror-view";
import { Plugin } from "prosemirror-state";

export interface PlaceholderOptions {
  emptyNodeClass: string;
}

export const Placeholder = Extension.create<PlaceholderOptions>({
  name: "placeholder",

  defaultOptions: {
    emptyNodeClass: "is-empty",
  },

  addGlobalAttributes() {
    return [
      {
        types: ["headTitle", "paragraph"],
        attributes: {
          placeholder: {
            default: null,
            parseHTML: (element) => {
              return {
                placeholder: element.getAttribute("data-placeholder"),
              };
            },
            // … and customize the HTML rendering.
            renderHTML: (attributes) => {
              return {
                "data-placeholder": attributes.placeholder,
              };
            },
            keepOnSplit: false,
          },
        },
      },
    ];
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          decorations: ({ doc }) => {
            const decorations: Decoration[] = [];

            doc.descendants((node, pos) => {
              const isEmpty = !node.isLeaf && !node.content.toJSON();

              if (isEmpty) {
                const classes = [this.options.emptyNodeClass];

                const decoration = Decoration.node(pos, pos + node.nodeSize, {
                  class: classes.join(" "),
                });

                decorations.push(decoration);
              }

              return false;
            });

            return DecorationSet.create(doc, decorations);
          },
        },
      }),
    ];
  },
});
