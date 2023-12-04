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
    <form>
      <input
        label="email"
        placeholder="Enter your email *"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="email"
      />
      <input
        label="password"
        placeholder="Enter your password *"
        fullWidth
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <label htmlFor="demo-simple-select-label">Role </label>
      <select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="role "
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder=""
        required
      >
        <option value="singer">Singer</option>
        <option value="beatmaker">Beatmaker</option>
      </select>

      <button type="submit" onClick={sendUser}>
        Submit
      </button>
    </form>
  );
}
