import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Input } from "../../../../../components/input/input";
import { SpecialPanel } from "../special-panel/special-panel";
import { Icon } from "../../../../../components/icon/icon";
import { sanitizeContent } from "./utils/sanitize-content";
import { savePostAsync } from "../../../../../actions/save-post-async";
import { useServerRequest } from "../../../../../hooks";

import styled from "styled-components";
import { useLayoutEffect } from "react";
import { PROP_TYPE } from "../../../../../constants";

const PostFormContainer = ({
  className,
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
  const [titlelValue, setTitleValue] = useState(title);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    setImageUrlValue(imageUrl), setTitleValue(title);
  }, [imageUrl, title]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestServer = useServerRequest();

  const onSave = () => {
    const newContent = sanitizeContent(contentRef.current.innerHTML);

    dispatch(
      savePostAsync(requestServer, {
        id,
        imageUrl: imageUrlValue,
        title: titlelValue,
        content: newContent,
      })
    ).then(({ id }) => navigate(`/post/${id}`));
  };

  const onImageChange = ({ target }) => {
    setImageUrlValue(target.value);
  };
  const onTitleChange = ({ target }) => {
    setTitleValue(target.value);
  };

  return (
    <div className={className}>
      <Input
        value={imageUrlValue}
        placeholder="Изображение..."
        onChange={onImageChange}
      />
      <Input
        value={titlelValue}
        placeholder="Заголовок..."
        onChange={onTitleChange}
      />
      <SpecialPanel
        id={id}
        publishedAt={publishedAt}
        margin="20px 0"
        editButton={
          <Icon id="fa-floppy-o" margin="0 10px 0 10px" onClick={onSave} />
        }
      />
      <div
        ref={contentRef}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="post-text"
      >
        {content}
      </div>
    </div>
  );
};

export const PostForm = styled(PostFormContainer)`
  & img {
    float: left;
    margin: 0 20px 10px 0;
  }

  & .post-text {
    min-height: 80px;
    border: 1px solid #000;
    font-size: 18px;
    white-space: pre-line;
  }
`;

PostForm.propTypes = {
  post: PROP_TYPE.POST.isRequired,
};
