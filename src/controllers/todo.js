import { getAll, get, create, remove, edit } from "../services/todo.js";

export async function fetchAll(req, res, next) {
  try {
    res.json(await getAll());
  } catch (error) {
    next(error);
  }
}

export async function fetch(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    res.json(await get(id));
  } catch (error) {
    next(error);
  }
}

export async function insert(req, res, next) {
  try {
    res.json(await create(req.body));
  } catch (error) {
    next(error);
  }
}

export async function modify(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    res.json(await edit(id, req.body));
  } catch (error) {
    next(error);
  }
}

export async function destroy(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    res.json(await remove(id));
  } catch (error) {
    next(error);
  }
}
