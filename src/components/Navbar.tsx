import Link from "next/link";
import { NavbarProps } from "@/props/NavbarProps";

export default function Navbar() {
    return <>
    <div>
        <header className="mx-auto flex mt-6 mb-28 justify-between items-center">
            <h1 className="text-5xl">SI REGIS</h1>
            <div className="flex space-x-3 text-2xl text-slate-600">
                <Link href={"/"}>Home</Link>
                <Link href={"/surat-tugas"}>Surat Tugas</Link>
                <Link href={"/about"}>About</Link>
            </div>
      </header>
    </div>
    </>
}