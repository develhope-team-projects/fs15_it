import CardGenre from "@/app/components/CardGenre";
import DenseAppBar from "@/app/components/navbar-multisection/NavbarMulti";
const CardGenres = [
  { content: "Pop", color: "bg-green-500" },
  { content: "Rock", color: "bg-red-500" },
  { content: "Rap", color: "bg-yellow-500" },
  { content: "Country", color: "bg-purple-500" },
  { content: "Indie", color: "bg-violet-500" },
  { content: "Lo-fi", color: "bg-gray-500" },
];

export default function FavoriteGenres() {
  return (
    <>
      <div className="bg-gradient-to-b from-black to-[#0c111c]">
        <DenseAppBar content="Favorite Genres" link="/artists" />

        <div className="grid grid-cols-3  gap-44 p-24  max-w-screen-2xl mx-auto h-[700px]  justify-center items-center ">
          {CardGenres.map((data, index) => (
            <CardGenre key={index} content={data.content} color={data.color} />
          ))}
        </div>
      </div>
    </>
  );
}
