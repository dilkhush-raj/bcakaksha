import Link from "next/link";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Ooooooops....</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the &nbsp; <Link href="/"><a className="cta">Homepage</a></Link></p>
        </div>
    )
}

export default NotFound;