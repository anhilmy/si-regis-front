import Navbar from '@/components/Navbar'
import { Kegiatan } from '@/props/kegiatan/kegiatan'
import { PencilSquareIcon, TrashIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

async function GetAllKegiatan() {
  const res = await fetch(`${process.env.BASE_KEGIATAN_URL}kegiatan`)

  if (!res.ok) {
    throw new Error("failed to fetch data")
  }
  return res.json()

}

export default async function ListKegiatan() {
  const res = await GetAllKegiatan()
  const data = res.data
  return (
    <>
      <p className='font-bold text-3xl'>Daftar Kegiatan</p>

      <div className='flex justify-end mr-28'>
        <Link href={"/kegiatan/new"} className='lg:text-xl px-4 py-2 object-right text-white rounded-md bg-sky-400'>
          Tambah
        </Link>
      </div>
      <table className='table-fixed border-collapse lg:text-xl mt-3 w-full' >
        <thead>
          <tr>
            <th className='border w-12'>No</th>
            <th className='border'>Judul Kegiatan</th>
            <th className='border'>Status</th>
            <th className='border'>Kategori</th>
            <th className='border'>Nomor Surat</th>
            <th className='w-28'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((kegiatan: Kegiatan, index: number) => {
            return (
              // use div and use tailwind table class, table-row, table-cell
              <tr>
                <td className='border text-center'>{index + 1}</td>
                <td className='border pl-3'>{kegiatan.judul}</td>
                <td className='border text-center'>-</td>
                <td className='border text-center'>{kegiatan.kategori.ID ? kegiatan.kategori.ID : "-"}</td>
                <td className='border text-center'>{kegiatan.no_surat == "" ? "-" : kegiatan.no_surat}</td>
                <td className='text-center pl-3' >
                  <div className='grid grid-cols-3 gap-1'>
                    <Link href={`/kegiatan/${kegiatan.id}`}>
                      <InformationCircleIcon className='text-white bg-sky-600 rounded-md p-1' />
                    </Link>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </>
  )
}
