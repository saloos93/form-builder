export default function Checkbox({ key, id, label, type, options }) {
  return (
    <>
      <label className="form-label" htmlFor={label}>
        {label}
      </label>
      {options.map((op) => {
        <>
          <input className="form-input" type={type} value={op.value} />
          <label>{op.label}</label>
        </>;
      })}
    </>
  );
}
