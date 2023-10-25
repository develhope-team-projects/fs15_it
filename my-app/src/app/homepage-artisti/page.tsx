import { Container, Grid } from "@mui/material";
import CardAnalytics from "../components/CardAnalytics";

const cardsArray = [
  { title: "Likes", content: 199000, svg: "/likes.svg" },
  { title: "Playbacks", content: 200300, svg: "/play.svg" },
  { title: "Monthly Revenue", content: 54000, svg: "/revenues.svg" },
  { title: "Year Revenue", content: 700120, svg: "/revenues.svg" },
];

export default function HomepageArtisti() {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Welcome Username!</h1>
        <div>SoundBridge</div>
      </div>
      <Container>
        <Grid container spacing={3}>
          {cardsArray.map((data, index) => (
            <Grid item xs={6}>
              <CardAnalytics
                key={index}
                title={data.title}
                content={data.content}
                svg={data.svg}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
