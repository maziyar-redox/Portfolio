import { Link } from "@/i18n/routing";
import type { FooterLinksType } from "@/types";

export function Links(Data: FooterLinksType) {
    return (
        <>
            {Data.data.map((items) => (
                <div className="flex flex-col justify-center items-start space-y-4 col-span-1" key={items.Header_id}>
                    <h1 className="text-base font-semibold text-absolute-white">
                        {items.text}
                    </h1>
                    {items.links.map((links_map) => (
                        <Link className="text-xs font-normal text-white-shade-50 hover:text-white-shade-90" href={links_map.href} key={links_map.Link_id}>
                            {links_map.text}
                        </Link>
                    ))}
                </div>
            ))}
        </>
    );
};