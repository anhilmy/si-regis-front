import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { SummaryKategori } from '@/props/kategori/summary'


async function getSummary() {
  const res = await fetch(`${process.env.BASE_KEGIATAN_URL}kegiatan/summary`)

  if (!res.ok) {
    throw new Error("failed to fetch data")
  }
  return res.json()

}

export default async function Home() {
  const res = await getSummary()
  const data: SummaryKategori[] = res.data
  return (
    <>
      <div className='grid grid-cols-4 gap-8'>
        {data.map((kategori) => {
          if (kategori.is_active === "false") {
            return <></>
          }
          return (
            <>
              <div className='max-w-sm rounded overflow-hidden shadow-lg min-w-[12vw]'>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Total {kategori.nama}</div>
                  <p className="text-gray-700 text-right text-3xl text-bold my-4">
                    {kategori.total_kegiatan}
                  </p>
                  <div className='mt-3 text-slate-700 hover:text-slate-400'>
                    <Link href={`/kegiatan?id=${kategori.id}`}>Lihat detail  <ArrowRightIcon className='h-5 w-5 inline pb-0.5' /> </Link>
                  </div>
                </div>
              </div>

            </>
          )
        }
        )}
      </div>

    </>
  )
}
