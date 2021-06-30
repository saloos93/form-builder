import FormBuilder from "./components/FormBuilder";
function App() {
  const formElements = [
    {
      key: "1",
      elementType: "input-form-group",
      label: "First Name :",
      id: "firstName",
      type: "text",
      placeHolder: "Enter Your First Name",
      props: { required: true },
    },
    {
      key: "2",
      elementType: "input-form-group",
      label: "Last Name :",
      id: "lastName",
      type: "text",
      placeHolder: "Enter Your Last Name",
      props: { required: true },
    },
    {
      key: "3",
      label: "Age :",
      id: "age",
      type: "number",
      placeHolder: "age",
      props: { required: true },
    },
    {
      key: "4",
      label: "Gender :",
      id: "gender",
      type: "radio",
      options: [
        {
          id: "male",
          key: "male",
          label: "Male",
          name: "gender",
          value: "male",
        },
        {
          id: "female",
          key: "female",
          label: "Female",
          name: "gender",
          value: "female",
        },
      ],
      props: { required: true },
    },
    {
      key: "5",
      label: "Skills :",
      id: "skills",
      type: "checkbox",
      options: [
        { key: "reactjs", label: "ReactJS", value: "reactjs" },
        { key: "angular", label: "Angular", value: "angular" },
        { key: "vuejs", label: "VueJS", value: "vuejs" },
      ],
    },
    {
      key: "6",
      label: "City :",
      type: "select",
      id: "select",
      value: "tehran",
      options: [
        { key: "tehran", label: "Tehran", value: "tehran" },
        { key: "semnan", label: "Semnan", value: "semnan" },
        { key: "yazd", label: "Yazd", value: "yazd" },
      ],
    },
    {
      key: "file",
      label: "file :",
      type: "file",
      id: "file",
    },
  ];
  return (
    <div className="App Container">
      <FormBuilder title="Registration" formElements={formElements} />
    </div>
  );
}

export default App;
