import React from 'react';
const Program = ({ src, title, description }) => {
  return (
    <div class="program">
      <img src={src} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
export default Program;
