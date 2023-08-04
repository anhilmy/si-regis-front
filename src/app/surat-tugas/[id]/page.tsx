import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'



export default function DetailSuratTugas({params} : {params: {id: string}}) {
  return (
    <>
     <div>
          <p>Surat Tugas yang dicari adalah: {params.id}</p>
     </div>
    </>
  )
}
