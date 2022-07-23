-- CreateTable
CREATE TABLE "to_do" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "to_do_pkey" PRIMARY KEY ("id")
);
