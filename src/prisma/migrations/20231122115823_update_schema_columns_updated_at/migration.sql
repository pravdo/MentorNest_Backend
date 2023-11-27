-- AlterTable
ALTER TABLE "Enrollment" ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "updatedAt" TIMESTAMP(3);

UPDATE "Enrollment" SET "updatedAt" = NOW() WHERE "updatedAt" IS NULL;
UPDATE "User" SET "updatedAt" = NOW() WHERE "updatedAt" IS NULL;

