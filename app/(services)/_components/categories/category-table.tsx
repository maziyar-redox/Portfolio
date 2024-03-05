"use client";

import Link from "next/link";

/* THIS DATA LATER WILL BE EDITED */
import { company_data } from "@/data/data";

import { cn } from "@/lib/utils";

import { useMediaQuery } from "usehooks-ts";

import { Separator } from "@/components/ui/separator";

export function CategoryTable() {
    const matches = useMediaQuery('(max-width: 768px)');
    return (
        <>
            {!matches && (
                <table className="flex-col justify-center items-center w-full mt-10 gap-y-5 mb-8 flex">
                    <thead className="flex flex-col justify-between items-center w-full border border-gray-12 rounded-lg">
                        <tr className="grid grid-cols-3 justify-items-start w-full px-5">
                            <th className="text-white text-sm font-normal py-4">
                                Project Name
                            </th>
                            <th className="text-white text-sm font-normal pl-4 py-4 border-l">
                                Industry
                            </th>
                            <th className="text-white text-sm font-normal pl-4 pr-24 py-4 border-l">
                                Website URL
                            </th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col w-full border border-gray-12 rounded-lg">
                        {company_data.map((items) => (
                            <tr key={items.id} className={cn(
                                "grid grid-cols-3 px-5",
                                items.id % 2 === 0 ? "border-t border-b border-gray-12" : ""
                            )}>
                                <td className="text-xs text-white-55 font-normal py-4">
                                    {items.header}
                                </td>
                                <td className="text-xs text-white-55 font-normal pl-4 py-4 border-l">
                                    {items.caption}
                                </td>
                                <td className="underline text-xs text-white-55 font-normal pl-4 pr-24 py-4 border-l">
                                    <Link href={`https://${items.href}`}>
                                        {items.href}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {matches && (
                <>
                    <div className="flex flex-col gap-y-5 w-full mb-5 mt-6">
                        {company_data.map((items) => (
                            <div key={items.id} className="flex flex-col justify-center items-center w-full border border-gray-12 px-3 py-3 rounded-xl gap-y-5">
                                <div className="flex flex-col justify-center items-start gap-y-2 w-full">
                                    <h1 className="text-sm font-semibold text-white-80">
                                        Project {items.id}
                                    </h1>
                                    <span className="text-white-55 text-xs font-light">
                                        {items.header}
                                    </span>
                                </div>
                                <Separator />
                                <div className="flex flex-col justify-center items-start gap-y-2 w-full">
                                    <h1 className="text-sm font-light text-white">
                                        Industry
                                    </h1>
                                    <span className="text-white-55 text-xs font-light">
                                        {items.caption}
                                    </span>
                                </div>
                                <Separator />
                                <div className="flex flex-col justify-center items-start gap-y-2 w-full">
                                    <h1 className="text-sm font-light text-white">
                                        Website URL
                                    </h1>
                                    <Link href={`https://${items.href}`} className="text-white-55 text-xs font-normal underline">
                                        {items.href}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
};