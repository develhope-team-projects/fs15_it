import pgPromise from "pg-promise";
import "dotenv/config";

// const { DB }: any = process.env;
const db = pgPromise()(
  "postgres://postgres:postgres@localhost:5432/sound-bridge"
);
const setupDb = () => {
  db.none(
    `CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        occupation VARCHAR
    )
    `
  );
};
setupDb();
console.log(db);
