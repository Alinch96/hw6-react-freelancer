import { useState } from "react";

export const useSubmit = ({values, initialNumbers={ a: "", b: "" }}) => {
  const [numbers, setNumbers] = useState(initialNumbers);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.a.length === 0 || values.b.length === 0) return;
    setNumbers({ a: values.a, b: values.b });
  };
  return {handleSubmit, numbers};
};
