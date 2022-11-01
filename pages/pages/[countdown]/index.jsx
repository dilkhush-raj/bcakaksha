import Link from "next/link"

export default function Countdown(){
    const sem = [
        {
            title: "Semester 1",
            path: "/semester1"
        },
        {
            title: "Semester 2",
            path: "/semester2"
        },
        {
            title: "Semester 3",
            path: "/semester3"
        },
        {
            title: "Semester 4",
            path: "/semester4"
        },
        {
            title: "Semester 5",
            path: "/semester5"
        },
        {
            title: "Semester 6",
            path: "/semester6"
        }
    ]
    return(
        <>
        <h1>Exam Countdown</h1>
        {sem.map((item, index) => {
            return(
                <Link href={"/pages/countdown" + item.path} key={index}>
                    <a>{item.title}</a>
                </Link>
            )
        })}

        </>
    )
}