import axios from "axios";
import { useEffect, useState } from "react";

export const Test = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    const r = TestCORS();
    setResult(r);
  }, []);

  return (
    <div>
      <p>${result} hihi</p>
    </div>
  );
};

const TestCORS = async () => {
  const result = await axios.get("http://localhost:8080/api/test");
  console.log(result.data);
  return result;
};
