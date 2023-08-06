import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

export default function Home() {
  return (
    <>
      <div className='flex justify-around'>

        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Placeholder</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className='mt-3 text-slate-700 hover:text-slate-400'>
              <Link href={"/"}>Lihat detail  <ArrowRightIcon className='h-5 w-5 inline pb-0.5' /> </Link>
            </div>
          </div>
        </div>


        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Placeholder</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className='mt-3 text-slate-700 hover:text-slate-400'>
              <Link href={"/"}>Lihat detail  <ArrowRightIcon className='h-5 w-5 inline pb-0.5' /> </Link>
            </div>
          </div>
        </div>

        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Placeholder</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className='mt-3 text-slate-700 hover:text-slate-400'>
              <Link href={"/"}>Lihat detail  <ArrowRightIcon className='h-5 w-5 inline pb-0.5' /> </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
