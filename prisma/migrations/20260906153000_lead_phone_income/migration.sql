-- AlterTable
ALTER TABLE "Lead" ADD COLUMN "phone" TEXT;
ALTER TABLE "Lead" ADD COLUMN "incomeRange" TEXT NOT NULL DEFAULT 'hasta_1000000';

-- Remove default after backfill for new rows (app always sends incomeRange)
ALTER TABLE "Lead" ALTER COLUMN "incomeRange" DROP DEFAULT;
