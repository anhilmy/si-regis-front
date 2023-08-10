import { prisma } from "@/app/db"
import { redirect } from "next/navigation"

export async function createKegiatan(data: FormData) {
    "use server"

    const nama = data.get("nama")?.valueOf()
    if (typeof nama !== "string" || nama.length == 0) {
        throw new Error('Judul harus diisi')
    }

    const desc = data.get("desc")?.valueOf()
    if (typeof desc !== "string") {
        throw new Error('Deskripsi tidak sesuai')
    }

    let kategori = data.get("kategori")?.valueOf()
    if (typeof kategori == "undefined" || typeof kategori !== "string") {
        throw new Error('Format kategori tidak sesuai')
    }

    const nosurat = data.get("surat_tugas")?.valueOf()
    if (typeof nosurat !== "string") {
        throw new Error('Format no surat tidak sesuai')
    }

    const new_kegiatan = await prisma.kegiatan.create({
        data: {
            judul: nama,
            desc: desc,
            kategoriId: kategori,
            no_surat: nosurat
        }
    })

}