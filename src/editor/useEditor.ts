import { useEditor } from "@tiptap/vue-3";
import HeadTitle from "./nodes/HeadTitle.node";
import HeadSubtitle from "./nodes/HeadSubtitle.node";
import Title from "./nodes/Title.node";
import Subtitle from "./nodes/Subtitle.node";
import Article from "./nodes/Article.node";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Placeholder from "./extensions/Placeholder.extension";
import Link from "@tiptap/extension-link";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";

export default (content: string) => {
  return useEditor({
    content,
    extensions: [
      Article,
      HeadTitle,
      HeadSubtitle,
      Title,
      Subtitle,
      Paragraph,
      Text,
      Bold,
      Italic,
      Placeholder,
      Link.configure({
        openOnClick: false,
      }),
      BulletList,
      ListItem,
    ],
  });
};
