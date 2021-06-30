export default function Input({ id, label, type, placeHolder, props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        className="form-control"
        type={type}
        id={id}
        placeholder={placeHolder}
      />
    </>
  );
}
