import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";

export default function CardAnalytics({ title, content, svg }) {
  return (
    <div>
      <Card>
        <CardHeader title={title}></CardHeader>
        <CardContent>{content}</CardContent>
        <Image src={svg} alt="" className="" width="50" height="25" />
      </Card>
    </div>
  );
}
