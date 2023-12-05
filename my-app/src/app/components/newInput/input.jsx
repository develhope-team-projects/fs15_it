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
    <div className="flex flex-col mt-4">
      <input
        type="email"
        value={data.mail}
        onChange={handleForm}
        placeholder="insert your email"
        className="min-w-[180px] min-h-[30px] text-center p-2 outline-none
        mb-4"
      ></input>
      <button
        onClick={sendEmail}
        className="bg-white rounded-3xl w-fit-content flex self-center p-1 min-w-[60px] hover:bg-blue-200 font-semibold"
      >
        Subscribe
      </button>
    </div>
  );
}
