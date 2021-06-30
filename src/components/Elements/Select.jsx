export default function Select({ id, label, type, options }) {
  return (
    <>
      <label className="form-label" htmlFor={label}>
        {label}
      </label>
      <select>
        {options.map((op) => {
          return (
            <option key={op.key} className="form-input" value={op.value}>
              {op.label}
            </option>
          );
        })}
      </select>
    </>
  );
}
