import pgPromise from "pg-promise";
import "dotenv/config";

const { DB }: any = process.env;
const db = pgPromise()(DB);
const setupDb = () => {
  db.none(
    `CREATE TABLE IF NOT EXISTS users(
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
