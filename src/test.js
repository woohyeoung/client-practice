import axios from "axios";
import { useEffect, useState } from "react";

export const Test = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    const r = axios
      .get("http://localhost:8080")
      .then((res) => res.data)
      .then((val) => alert(val))
      .catch(() => alert("fail"));
    console.log(r);
    setResult(r);
  }, []);

  return (
    <div>
      <p>${result} hihi</p>
    </div>
  );
};
