import { useId, useState } from "react";

export const useDualInput = (initial = { a: "", b: "" }) => {
  const [values, setValues] = useState(initial);

  const idA = useId();
  const idB = useId();

  const setField = (name, next) => {
    setValues((prev) => ({ ...prev, [name]: next.length===0 ? "" : Number(next) }));
  };

  const bindA = {
    id: idA,
    name: "a",
    value: values.a,
    onChange: (e) => setField(e.target.name, e.target.value),
  };

  const bindB = {
    id: idB,
    name: "b",
    value: values.b,
    onChange: (e) => setField(e.target.name, e.target.value),
  };

  return { values, setValues, bindA, bindB};
}