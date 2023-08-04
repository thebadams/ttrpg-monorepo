/*
  Warnings:

  - You are about to drop the `ArmorClasses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ArmorClasses" DROP CONSTRAINT "ArmorClasses_armorID_fkey";

-- DropForeignKey
ALTER TABLE "ArmorClasses" DROP CONSTRAINT "ArmorClasses_classID_fkey";

-- DropTable
DROP TABLE "ArmorClasses";

-- CreateTable
CREATE TABLE "_ArmorToClass" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ArmorToClass_AB_unique" ON "_ArmorToClass"("A", "B");

-- CreateIndex
CREATE INDEX "_ArmorToClass_B_index" ON "_ArmorToClass"("B");

-- AddForeignKey
ALTER TABLE "_ArmorToClass" ADD CONSTRAINT "_ArmorToClass_A_fkey" FOREIGN KEY ("A") REFERENCES "Armor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArmorToClass" ADD CONSTRAINT "_ArmorToClass_B_fkey" FOREIGN KEY ("B") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;
