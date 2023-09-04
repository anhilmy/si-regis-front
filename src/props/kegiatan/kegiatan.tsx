export type Kegiatan = {
    id: number,
    judul: string,
    desc: string,
    kategori: KategoriId,
    no_surat: string,
    status: string,
}

export enum StatusKegiatan {
    PRAPELAKSANAAN = "1",
    TURUN_LAPANGAN = "2",
    PEMBUATAN_LAPORAN = "3",
    RILIS = "4"
}

export type KategoriId = {
    ID: number,
    nama: string
}