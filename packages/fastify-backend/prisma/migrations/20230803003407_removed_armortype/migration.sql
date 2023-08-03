/*
  Warnings:

  - The values [MEDIUM] on the enum `ArmorTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ArmorTypes_new" AS ENUM ('NONE', 'LIGHT', 'HEAVY', 'SHIELD');
ALTER TABLE "Armor" ALTER COLUMN "type" TYPE "ArmorTypes_new" USING ("type"::text::"ArmorTypes_new");
ALTER TYPE "ArmorTypes" RENAME TO "ArmorTypes_old";
ALTER TYPE "ArmorTypes_new" RENAME TO "ArmorTypes";
DROP TYPE "ArmorTypes_old";
COMMIT;
