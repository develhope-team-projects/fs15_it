import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";

export default function CardAnalytics({ title, content, svg }) {
  return (
    <div>
      <Card className="flex flex-col items-center  text-xl w-3/4 rounded-3xl min-w-[200px] max-md:max-w-[180px] h-[200px]">
        <CardHeader title={title}></CardHeader>
        <CardContent className="font-semibold ">{content}</CardContent>
        <div className="flex justify-between w-full">
          <div></div>
          <Image src={svg} alt="" className="mr-4" width="50" height="25" />
        </div>
      </Card>
    </div>
  );
}
