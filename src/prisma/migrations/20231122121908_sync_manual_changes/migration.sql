/*
  Warnings:

  - The primary key for the `Enrollment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `enrollId` on the `Enrollment` table. All the data in the column will be lost.
  - The required column `enrollmentId` was added to the `Enrollment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Enrollment" DROP CONSTRAINT "Enrollment_pkey",
DROP COLUMN "enrollId",
ADD COLUMN     "enrollmentId" TEXT NOT NULL,
ADD CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("enrollmentId");
