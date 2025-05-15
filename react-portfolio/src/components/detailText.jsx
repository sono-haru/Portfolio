import React from 'react';

function DetailText({ title, text, borderColor }) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2">
      <p className={`inline-block border-b border-[${borderColor}]`}>{title}</p>
      <p>{text}</p>
    </div>
  );
}

export default DetailText;
