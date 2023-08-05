-- CreateTable
CREATE TABLE "kegiatan" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "desc" TEXT,
    "kategoriId" INTEGER NOT NULL,
    "no_surat" TEXT,

    CONSTRAINT "kegiatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kategori" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "kategori_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "kegiatan" ADD CONSTRAINT "kegiatan_kategoriId_fkey" FOREIGN KEY ("kategoriId") REFERENCES "kategori"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
