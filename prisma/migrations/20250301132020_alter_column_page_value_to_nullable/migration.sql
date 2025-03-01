-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "licensePlate" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "pageValue" DECIMAL
);
INSERT INTO "new_Car" ("createdAt", "id", "licensePlate", "pageValue") SELECT "createdAt", "id", "licensePlate", "pageValue" FROM "Car";
DROP TABLE "Car";
ALTER TABLE "new_Car" RENAME TO "Car";
CREATE UNIQUE INDEX "Car_licensePlate_key" ON "Car"("licensePlate");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
