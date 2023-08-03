-- CreateEnum
CREATE TYPE "ArmorTypes" AS ENUM ('NONE', 'LIGHT', 'MEDIUM', 'HEAVY', 'SHIELD');

-- CreateTable
CREATE TABLE "Armor" (
    "id" SERIAL NOT NULL,
    "type" "ArmorTypes" NOT NULL,
    "baseAC" INTEGER NOT NULL,
    "atkPenalty" INTEGER NOT NULL,

    CONSTRAINT "Armor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArmorClasses" (
    "armorID" INTEGER NOT NULL,
    "classID" INTEGER NOT NULL,

    CONSTRAINT "ArmorClasses_pkey" PRIMARY KEY ("armorID","classID")
);

-- AddForeignKey
ALTER TABLE "ArmorClasses" ADD CONSTRAINT "ArmorClasses_armorID_fkey" FOREIGN KEY ("armorID") REFERENCES "Armor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArmorClasses" ADD CONSTRAINT "ArmorClasses_classID_fkey" FOREIGN KEY ("classID") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
