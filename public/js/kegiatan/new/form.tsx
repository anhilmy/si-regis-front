console.log("document ready");

export function validateForm(e: any) {
    const nama = document.querySelector("#nama")
    const desc = document.querySelector("#desc")
    const kategori = document.querySelector("#kategori")
    const nomor_surat = document.querySelector("#nomor_surat")

    console.log(nama, desc, kategori, nomor_surat)
}