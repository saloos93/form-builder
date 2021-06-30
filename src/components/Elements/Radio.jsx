export default function Radio({ id, label, type, options }) {
  return (
    <>
      <label className="form-label" htmlFor={label}>
        {label}
      </label>
      <div className="form-group-radio">
        {options.map((op) => {
          return (
            <>
              <input
                id={op.id}
                key={op.key}
                className="form-input"
                type={type}
                value={op.value}
                name={label}
              />
              <label>{op.label}</label>
            </>
          );
        })}
      </div>
    </>
  );
}
