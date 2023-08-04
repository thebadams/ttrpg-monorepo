-- CreateEnum
CREATE TYPE "FeatureTypes" AS ENUM ('CLASS');

-- CreateEnum
CREATE TYPE "FeatLevels" AS ENUM ('ADVENTURER', 'EPIC', 'CHAMPION');

-- CreateTable
CREATE TABLE "Feature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" JSONB NOT NULL,
    "type" "FeatureTypes" NOT NULL,
    "talent" BOOLEAN NOT NULL DEFAULT false,
    "classID" INTEGER,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feat" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "level" "FeatLevels" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Feat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Feature_name_key" ON "Feature"("name");

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_classID_fkey" FOREIGN KEY ("classID") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;
