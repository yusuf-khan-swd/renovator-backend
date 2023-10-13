/*
  Warnings:

  - The values [not_available] on the enum `service_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "service_status_new" AS ENUM ('available', 'booked', 'upcoming');
ALTER TABLE "services" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "services" ALTER COLUMN "status" TYPE "service_status_new" USING ("status"::text::"service_status_new");
ALTER TYPE "service_status" RENAME TO "service_status_old";
ALTER TYPE "service_status_new" RENAME TO "service_status";
DROP TYPE "service_status_old";
ALTER TABLE "services" ALTER COLUMN "status" SET DEFAULT 'available';
COMMIT;
