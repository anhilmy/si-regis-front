import Link from "next/link";
import { NavbarProps } from "@/props/NavbarProps";

export default function Navbar() {
    return <>
        <div className="bg-sky-200">
            <header className="flex mx-auto m-4 justify-between items-center container p-4">
                <h1 className="text-5xl">SI REGIS</h1>
                <div className="flex space-x-5 text-2xl text-slate-600">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/kegiatan"}>Kegiatan</Link>
                    <Link href={"/about"}>About</Link>
                </div>
            </header>
        </div>
    </>
}