import Input from "./Elements/Input";
import Checkbox from "./Elements/Checkbox";
import Select from "./Elements/Select";
import Radio from "./Elements/Radio";
import File from "./Elements/File";
import { useState } from "react";

const FormBuilder = ({ title, formElements }) => {
  const ids = {};
  const [formData, setFormData] = useState({});

  const handelSubmit = (e) => {
    e.preventDefault();
    for (const key in ids) {
      console.log(key, e.target[key]?.value);
    }
  };

  const RenderForm = () => {
    const formUI = formElements.map((m) => {
      const props = m.props || {};
      ids[m.id] = undefined;

      switch (m.type) {
        case "text":
        case "number":
          return (
            <div className="form-group" key={m.key}>
              <Input
                id={m.id}
                label={m.label}
                type={m.type}
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
                type={m.type}
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
                type={m.type}
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
                type={m.type}
                options={m.options}
              />
            </div>
          );
        case "file":
          return (
            <div className="form-group" key={m.key}>
              <File id={m.id} label={m.label} type={m.type} />
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
        {RenderForm()}
        <div className="form-actions">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormBuilder;
