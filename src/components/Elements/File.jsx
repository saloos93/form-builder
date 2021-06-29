import React from "react";

export default function File({ key, id, label, type }) {
  return (
    <>
      <label>{label}</label>
      <input type={type} name={label} id={id} />
    </>
  );
}
