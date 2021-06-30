export default function Checkbox({ id, label, type, options }) {
  return (
    <>
      {console.log(options)}
      <label className="form-label" htmlFor={label}>
        {label}
      </label>
      <div className="form-group-checkbox">
        {options.map((op) => {
          return (
            <>
              <input className="form-input" type={type} value={op.value} />
              <label>{op.label}</label>
            </>
          );
        })}
      </div>
    </>
  );
}
