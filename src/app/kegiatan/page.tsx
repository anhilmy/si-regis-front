import Navbar from '@/components/Navbar'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function ListKegiatan() {
  return (
    <>
      <p className='font-bold text-3xl'>Daftar Kegiatan</p>

      <div className='flex justify-end mr-32'>
        <Link href={"/kegiatan/new"} className='lg:text-xl px-4 py-2 object-right text-white rounded-md bg-sky-400'>
          Tambah
        </Link>
      </div>
      <table className='table-fixed border-collapse lg:text-xl mt-3 w-full' >
        <thead>
          <tr>
            <th className='border w-11'>No</th>
            <th className='border'>Nama Kegiatan</th>
            <th className='border lg:w-64'>Status</th>
            <th className='border'>Tanggal</th>
            <th className='w-32'></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border text-center'>1</td>
            <td className='border pl-3'>Audit Proses Bisnis Kompartemen Umum dan Manajemen Aset</td>
            <td className='border text-center'>Ongoing</td>
            <td className='border text-center'>1 Januari 2022 - 31 Januari 2023</td>
            <td className='text-center' >
              <div className='flex lg:gap-x-3 sm:gap-x-1 ml-3'>
                <InformationCircleIcon className='text-sky-600' />
                <PencilSquareIcon className='' />
                <TrashIcon className='' />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

    </>
  )
}
