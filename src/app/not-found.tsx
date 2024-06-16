import Link from "next/link";

export const dynamic = 'force-dynamic'; 

export default function notFound(){
    return(
        <div>
            <h2>Page not found</h2>
            <p>Could not find requested resources</p>
            <Link href="/">Go Home</Link>
        </div>
    )
}