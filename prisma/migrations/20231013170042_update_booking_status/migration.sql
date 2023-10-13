/*
  Warnings:

  - The values [accept,reject] on the enum `booking_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "booking_status_new" AS ENUM ('pending', 'canceled', 'accepted', 'rejected');
ALTER TABLE "bookings" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "bookings" ALTER COLUMN "status" TYPE "booking_status_new" USING ("status"::text::"booking_status_new");
ALTER TYPE "booking_status" RENAME TO "booking_status_old";
ALTER TYPE "booking_status_new" RENAME TO "booking_status";
DROP TYPE "booking_status_old";
ALTER TABLE "bookings" ALTER COLUMN "status" SET DEFAULT 'pending';
COMMIT;
