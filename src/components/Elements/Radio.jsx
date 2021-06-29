export default function Radio({ key, id, label, type, options }) {
  return (
    <>
      <label className="form-label" htmlFor={label}>
        {label}
      </label>
      {options.map((op) => {
        return (
          <>
            <input
              key={id + 1}
              className="form-input"
              type={type}
              value={op.value}
              name={label}
            />
            <label>{op.label}</label>
          </>
        );
      })}
    </>
  );
}
