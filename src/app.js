import express from "express";
import cors from "cors";
import routes from "./routes/todo.js";
import error from "./controllers/error.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(error);

const port = 8080;
app.listen(8080, () => {
  console.log(`Server started at http://127.0.0.1:${port}`);
});
