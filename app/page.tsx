import Link from "next/link";

export default function Page(){

    return (
        <div className="flex justify-center pt-5">
            <nav className="flex flex-col items-center text-4xl">
                <Link href="/tasks">Tasks</Link>
                <Link href="/calculate">Calculate</Link>
            </nav>
        </div>
    );
}