import { prisma } from "@/app/db";

export async function getAllKategori() {
    const res = await fetch(`${process.env.BASE_KEGIATAN_URL}kategori`)
    if (!res.ok) {
        throw new Error("failed to fetch data")
    }
    return res.json()
}