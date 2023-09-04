"use client"

export async function validateForm(e: any) {
    const nama = document.querySelector<HTMLInputElement>("#nama")?.value!
    const desc = document.querySelector<HTMLInputElement>("#desc")?.value!
    const kategori = document.querySelector<HTMLInputElement>("#kategori")?.value!
    const id_kategori = parseInt(kategori)
    const nomor_surat = document.querySelector<HTMLInputElement>("#surat_tugas")?.value!
    const status = document.querySelector<HTMLInputElement>("#status")?.value!
    e.preventDefault()

    const body = {
        judul: nama,
        desc: desc,
        no_surat: nomor_surat,
        kategori: {
            id: id_kategori
        },
        status: status
    }

    const option = {
        method: "POST",
        header: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    }

    console.log(option)
    const send = await fetch(`http://localhost:8080/api/v1/kegiatan/`, option)
    console.log(send)
    const result = await send.json()
    console.log(result)
}