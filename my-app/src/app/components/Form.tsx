import { useRouter } from "next/navigation";
const handleSubmit = async (event: any) => {
  const router = useRouter();
  event.preventDefault();

  const name = event.target.elements.name.value;
  const password = event.target.elements.password.value;
  const singer = event.target.elements.singer.value;
  const beatmaker = event.target.elements.beatmaker.value;
  console.log(singer, name, password, beatmaker);
  const response = await fetch("api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: event.target.elements.name.value,
      password: event.target.elements.password.value,
      singer: event.target.elements.singer.value,
      beatmaker: event.target.elements.beatmaker.value,
    }),
  });
  if (response.ok) {
    router.push("/artists");
  } else {
    console.error("error");
  }
};
export function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="username" required></input>
      <input type="password" placeholder="password" required></input>
      <label htmlFor="singer">Singer</label>
      <input type="radio" id="singer" name="job"></input>
      <label htmlFor="beatmaker">Beatmaker</label>
      <input type="radio" name="job" id="beatmaker"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
export default handleSubmit;
