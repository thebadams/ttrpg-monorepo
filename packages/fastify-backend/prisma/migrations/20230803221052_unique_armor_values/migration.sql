/*
  Warnings:

  - A unique constraint covering the columns `[type,baseAC,atkPenalty]` on the table `Armor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Armor_type_baseAC_atkPenalty_key" ON "Armor"("type", "baseAC", "atkPenalty");
