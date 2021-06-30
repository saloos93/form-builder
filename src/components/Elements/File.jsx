import React from "react";

export default function File({  id, label, type }) {
  return (
    <>
      <label>{label}</label>
      <input type={type} name={label} id={id} />
    </>
  );
}
