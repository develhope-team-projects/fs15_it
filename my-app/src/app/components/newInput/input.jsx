import { useState } from "react";
export default function Input() {
  const [data, setData] = useState({
    mail: "",
  });
  const handleForm = (e) => {
    setData({
      mail: e.target.value,
    });
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      setData({
        mail: "",
      });
    }
  };
  return (
    <div className="flex">
      <input type="email" value={data.mail} onChange={handleForm}></input>
      <button onClick={sendEmail} className="bg-white rounded-xl">
        Submit
      </button>
    </div>
  );
}
