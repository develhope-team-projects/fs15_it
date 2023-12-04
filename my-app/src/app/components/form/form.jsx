import { Card } from "@mui/joy";
import { useRouter } from "next/navigation";
// import {
//   Button,
//   CardContent,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";
import { useState } from "react";
export default function Form() {
  const router = useRouter();
  const sendUser = async (e) => {
    e.preventDefault();

    if (name && password) {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password, role }),
      });
      if (res.status == 201 && role === "singer") {
        router.push("/artists");
      } else if (res.status == 201 && role === "beatmaker") {
        router.push("/beatmakers");
      } else {
        alert("Name already in use");
      }
    } else {
      alert("Insert some valid credentials");
    }
  };

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("singer");

  return (
    <div className="bg-white  max-w-[300px] mx-auto flex items-center justify-center p-8 shadow-2xl shadow-black rounded-[2rem]">
      <form className="flex flex-col items-center gap-4 justify-center p-3 ">
        <input
          label="email"
          placeholder="Enter your email *"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="email"
          className="text-center p-2 outline-none"
        />
        <input
          label="password"
          placeholder="Enter your password *"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="text-center p-2 outline-none"
        />
        <div className=" flex flex-col text-center gap-2 items-center">
          <label htmlFor="demo-simple-select-label">Role </label>
          <select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="role "
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder=""
            required
            className="text-center p-1 outline-none"
          >
            <option value="singer">Singer</option>
            <option value="beatmaker">Beatmaker</option>
          </select>
        </div>
        <button
          type="submit"
          onClick={sendUser}
          className="border bg-gray-300 hover:bg-gray-500 text-black font-bold rounded-2xl p-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
