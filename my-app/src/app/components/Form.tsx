export function Form() {
  function handleSubmit(event: any) {
    event.preventDefault();
    const username = event.target.elements.name.value;
    const password = event.target.elements.password.value;
    const singer = event.target.elements.singer.checked;
    const beatmaker = event.target.elements.beatmaker.checked;
    console.log(username, password, singer, beatmaker);
  }
  return (
    <>
      <form
        className="flex flex-col bg-blue-400 ml-4 w-1/4 pt-4"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            id="name"
            placeholder="Username"
            className="mx-4"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <label htmlFor="singer">Singer</label>
          <input type="checkbox" id="singer" />
          <label htmlFor="beatmaker">Beatmaker</label>
          <input type="checkbox" id="beatmaker" />
        </div>
        <button
          type="submit"
          className="bg-white text-black w-1/3 rounded-2xl self-center"
        >
          Submit
        </button>
      </form>
    </>
  );
}
