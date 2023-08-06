import Link from "next/link";
import { Bars4Icon, BriefcaseIcon, ChevronDownIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
    return <>
        <div className='flex flex-col bg-indigo-800 h-screen p-5 w-52'>
            <Bars4Icon className="text-white w-8 h-8" />

            <div className="flex items-center pt-12">
                <Link href={"/kegiatan"} className="flex items-center">
                    <BriefcaseIcon className="text-white w-8 h-8" />
                    <span className=" text-white lg:text-xl ml-4">
                        Kegiatan
                    </span>
                </Link >
                <ChevronDownIcon className="text-gray-400 w-3 h-3 ml-3 mt-2" />
            </div>

            <div className="flex pt-6 items-center">
                <Link href={"/profile"} className="flex items-center">
                    <UserIcon className="text-white w-8 h-8" />
                    <span className=" text-white lg:text-xl ml-4">
                        Profile
                    </span>
                </Link >
            </div>
        </div>
    </>
}