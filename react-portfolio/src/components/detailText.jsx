import React from 'react';

function DetailText({ text }) {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start gap-2 w-full">
      <p>{text}</p>
    </div>
  );
}

export default DetailText;
