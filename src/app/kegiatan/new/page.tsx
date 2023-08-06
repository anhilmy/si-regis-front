import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'



export default function DetailSuratTugas() {
  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <form>
          <div>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='nama'>Nama Kegiatan</label>
            <input type='text' className='shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full' name='nama' placeholder='Nama kegiatan' />
          </div>
          <div>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='desc'>Deskripsi Kegiatan</label>
            <input type='text' name='desc' className='shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full' placeholder='Deskripsi kegiatan' />
          </div>
          <div>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='kategori'>Kategori Kegiatan</label>
            <select className="shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full">
              <option>---Pilih kategori kegiatan---</option>
              <option>Assurance</option>
              <option>Konsultansi</option>
              <option>Counterpart</option>
            </select>
          </div>
          <div>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='surat_tugas'>Nomor Surat Tugas</label>
            <input type='text' className='shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full' name='surat_tugas' placeholder='Nomor surat tugas' />
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
