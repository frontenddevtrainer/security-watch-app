import Link from "next/link";

export default function Header() {
    return <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1><Link href="/">Neighborhood Watch</Link></h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/report-incidents">Incidents</Link>
                    </li>
                    <li>
                        <Link href="/request-service">Services</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}