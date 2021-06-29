import Input from "./Elements/Input";
import Checkbox from "./Elements/Checkbox";
import Select from "./Elements/Select";
import Radio from "./Elements/Radio";
import File from "./Elements/File";

const FormBuilder = ({ title, formElements }) => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  const renderForm = () => {
    let formUI = formElements.map((m) => {
      let type = m.type || "text";
      let props = m.props || {};

      switch (type) {
        case "text":
        case "number":
          return (
            <div className="form-group" key={m.key}>
              <Input
                elementType={m.elementType}
                id={m.id}
                label={m.label}
                type={type}
                placeHolder={m.placeHolder}
                props={m.props}
              />
            </div>
          );

        case "checkbox":
          return (
            <div className="form-group" key={m.key}>
              <Checkbox
                id={m.id}
                label={m.label}
                type={type}
                options={m.options}
              />
            </div>
          );
        case "radio":
          return (
            <div className="form-group" key={m.key}>
              <Radio
                id={m.id}
                label={m.label}
                type={type}
                options={m.options}
              />
            </div>
          );
        case "select":
          return (
            <div className="form-group" key={m.key}>
              <Select
                id={m.id}
                label={m.label}
                type={type}
                options={m.options}
              />
            </div>
          );
        case "file":
          return (
            <div className="form-group" key={m.key}>
              <File id={m.id} label={m.label} type={type} />
            </div>
          );

        default:
          return null;
      }
    });
    return formUI;
  };

  return (
    <div className="form">
      <h1>{title}</h1>
      <form onSubmit={(e) => handelSubmit(e)} className="dynamic-form">
        {renderForm()}
        <div className="form-actions">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormBuilder;
