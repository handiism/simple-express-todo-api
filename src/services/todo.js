import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function get(id) {
  const toDo = await prisma.toDo.findUnique({
    where: {
      id,
    },
  });
  return toDo;
}

export async function getAll() {
  const toDos = await prisma.toDo.findMany();
  return toDos;
}

export async function create(body) {
  const toDo = await prisma.toDo.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return toDo;
}

export async function edit(id, body) {
  const toDo = await prisma.toDo.update({
    data: {
      title: body.title,
      description: body.description,
    },
    where: {
      id,
    },
  });

  return toDo;
}

export async function remove(id) {
  await prisma.toDo.delete({
    where: {
      id,
    },
  });
}
