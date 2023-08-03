/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Class` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Abilities" AS ENUM ('STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA');

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "bonuses" "Abilities"[];

-- CreateIndex
CREATE UNIQUE INDEX "Class_name_key" ON "Class"("name");
