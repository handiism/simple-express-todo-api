import { Router } from "express";
import { fetchAll, insert, destroy, fetch, modify } from "../controllers/todo.js";

const router = Router();

router.get("/", fetchAll);
router.get("/:id", fetch);
router.post("/", insert);
router.put("/:id", modify);
router.delete("/:id", destroy);

export default router;
