import Link from "next/link";

export default function Navbar() {
    return <>
    <div className="fixed bottom-3 mt-36 mb-3">
        <footer>
            <p>Author: Hilmy</p>
            <Link href={"/"}>Back to Home</Link>
        </footer>
    </div>
    </>
}