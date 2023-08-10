import { prisma } from "@/app/db";

export async function getAllKategori() {
    return prisma.kategori.findMany({ where: { is_active: true } })
}