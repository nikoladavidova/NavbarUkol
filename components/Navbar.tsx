import Link from "next/link";

export const Navbar=()=>{

    return(

        <nav>

            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/contacts">Contacts</Link>
                </li>
            </ul>

        </nav>
    )
};