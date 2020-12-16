import React from 'react'

interface PostItemProps {
  id: number,
  title: string,
  handleDelete(id: number): void,
}

const PostItem: React.FC<PostItemProps> = ({id, title, handleDelete}) => {

  return (
    <li>
      {title} <button onClick={() => handleDelete(id)}>delete</button>
    </li>
  );
}

export default PostItem;