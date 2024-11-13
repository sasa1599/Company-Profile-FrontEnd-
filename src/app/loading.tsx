import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen font-extrabold text-2xl text-black bg-white">
            <Image
                src="/hourglass.gif"
                alt="Loading"
                width={100}
                height={100}
                className="mb-4"
            />
            Loading...
        </div>
    );
}