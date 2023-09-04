import { validateForm } from '@/app/api/kegiatan/new/form'
import { getAllKategori } from '@/repository/kategori'
import { kategori } from '@prisma/client'
import Link from 'next/link'
import Script from 'next/script'



export default async function DetailSuratTugas() {
  const kategoris = await getAllKategori()
  const data = kategoris.data
  return (
    <>
      <div className='max-w-6xl lg:mx-auto'>
        <form onSubmit={validateForm} className='flex flex-col gap-y-4'>
          <div>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='nama'>Nama Kegiatan<span className='text-red-600'>*</span></label>
            <input type='text' className='shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full' name='nama' id="nama" placeholder='Nama kegiatan' required />
          </div>

          <div>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='desc'>Deskripsi Kegiatan</label>
            <textarea name='desc' id='desc' className='shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full' placeholder='Deskripsi kegiatan' />
          </div>

          <div>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='kategori'>Kategori Kegiatan<span className='text-red-600'>*</span> </label>
            <select title='kategori' className="shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full" defaultValue='0' name='kategori' id='kategori' required>
              <option disabled value='0' >---Pilih kategori kegiatan---</option>
              {data.map((kategori: kategori) => {
                return <option key={kategori.id} value={kategori.id}>{kategori.nama}</option>
              })}
            </select>
          </div>
          <div>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='surat_tugas'>Nomor Surat Tugas</label>
            <input type='text' className='shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full' name='surat_tugas' id='surat_tugas' placeholder='Nomor surat tugas' />
          </div>

          <div>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='status'>Status Kegiatan<span className='text-red-600'>*</span> </label>
            <select title='status' className="shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full" defaultValue='0' name='status' id='status' required>
              <option value='0'>Prapelaksanaan</option>
              <option value='1'>Fieldwork</option>
              <option value='2'>Penyusunan Laporan</option>
              <option value='3'>Rilis</option>
            </select>
          </div>

          <div>
            <span className='text-red-600'>* Harus diisi</span>
          </div>

          <div className='flex gap-x-2 justify-end mt-3'>
            <Link href='.' className='border border-slate-300 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-400 focus-within:bg-red-400 outline-none'>Kembali</Link>
            <button type='submit' className='border border-slate-300 bg-sky-500 text-white px-2 py-1 rounded hover:bg-sky-300 focus-within:bg-sky-300 outline-none'>Submit</button>
          </div>
        </form>
      </div>

    </>
  )
}
