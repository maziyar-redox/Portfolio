import Image from "next/image";

export function Card() {
    return (
        <>
            <div className="border border-gray-10 bg-gray-12/20 flex flex-col justify-center items-center rounded-xl p-1.5 md:p-4 w-full">
                <Image src="/img/2.jpg" alt="" width={505} height={364} className="rounded-xl w-full" />
            </div>
        </>
    );
};