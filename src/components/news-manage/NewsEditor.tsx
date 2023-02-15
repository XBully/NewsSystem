import { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

export default function NewsEditor(props: any) {
  const [editorState, setEditorState]: any = useState('');
  useEffect(() => {
    if (props.content === undefined) return;
    const contentBlock = htmlToDraft(props.content);
    if (contentBlock) {
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(contentBlock.contentBlocks),
        ),
      );
    }
  }, [props.content]);
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={(editorState) => {
          setEditorState(editorState);
        }}
        onBlur={() => {
          props.getContent(
            draftToHtml(convertToRaw(editorState.getCurrentContent())),
          );
        }}
      />
    </div>
  );
}
