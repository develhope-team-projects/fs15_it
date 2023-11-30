"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { POST } from "@/app/api/user/route";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRole = (e: any) => {
    setRole(e.target.value);
  };

  const sendUser = async () => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(name, password, role),
    });
    console.log(response);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#0c111c] to-black w-full h-screen flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            id="name"
            placeholder="Username"
            className="focus:outline-none"
            required
            value={name}
            onChange={handleName}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="focus:outline-none"
            required
            value={password}
            onChange={handlePassword}
          />
        </div>
        <select id="role" onChange={handleRole} value={role}>
          <option value="singer">Singer</option>
          <option value="beatmaker">Beatmaker</option>
        </select>
        <button
          className="bg-white text-black w-1/3 rounded-2xl self-center font-body border-[5px] border-s-red-200 "
          onClick={sendUser}
        >
          Submit
        </button>
      </div>
    </>
  );
}

