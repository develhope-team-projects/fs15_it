import express from "express";
const app = express();
const port = 3001;
app.use(express.json()).listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
