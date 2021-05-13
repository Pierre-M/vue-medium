import Document from "@tiptap/extension-document";
import HeadTitle from "./HeadTitle.node";
import HeadSubtitle from "./HeadSubtitle.node";

export default Document.extend({
  content: `${HeadTitle.name}? ${HeadSubtitle.name}? block*`,
});
