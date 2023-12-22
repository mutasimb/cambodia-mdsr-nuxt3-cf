/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'OTHER',
    "name" TEXT,
    "password" TEXT NOT NULL,
    "adm1" TEXT,
    "adm2" TEXT,
    "adm3" TEXT,
    "address" TEXT,
    "lon" DECIMAL(65,30),
    "lat" DECIMAL(65,30),
    "dob" INTEGER,
    "sex" "Sex",
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
