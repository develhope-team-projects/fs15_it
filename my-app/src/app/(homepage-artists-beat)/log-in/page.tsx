"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { POST } from "@/app/api/user/route";

export default function LoginForm() {
  const [data, setData] = useState({
    singer: false,
    beatmaker: false,
    disabled: true,
  });
  const route = useRouter();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const password = event.target.elements.password.value;
    const singer = event.target.elements.singer.checked;
    const beatmaker = event.target.elements.beatmaker.checked;
  };

  const handleCLick = (event: any) => {
    if (data.singer === true) {
      route.push("/artists");
    } else if (data.beatmaker === true) {
      route.push("/beatmakers");
    }
  };

  const handleChange = async (event: any) => {
    const value = event.target.id;

    if (value === "singer") {
      setData({ singer: true, beatmaker: false, disabled: false });
    } else if (value === "beatmaker") {
      setData({ singer: false, beatmaker: true, disabled: false });
    } else {
      setData({ singer: false, beatmaker: false, disabled: true });
    }
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <>
      <div className="bg-gradient-to-b from-[#0c111c] to-black w-full h-screen flex items-center justify-center">
        <form
          className="flex flex-col items-center justify-center bg-white  w-1/4 ml-4 h-1/3 min-w-[318px] min-h-[250px] p-4 gap-5 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              id="name"
              placeholder="Username"
              className="focus:outline-none"
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="focus:outline-none"
              required
            />
          </div>
          <div className="flex gap-3">
            <div>
              <label htmlFor="singer" className="mr-1 font-body">
                Singer
              </label>
              <input
                type="radio"
                id="singer"
                name="check"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="radio"
                id="beatmaker"
                name="check"
                className="mr-1"
                onChange={handleChange}
              />
              <label htmlFor="beatmaker" className="font-body">
                Beatmaker
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-white text-black w-1/3 rounded-2xl self-center font-body border-[5px] border-s-red-200 "
            disabled={data.disabled}
            onClick={handleChange}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
