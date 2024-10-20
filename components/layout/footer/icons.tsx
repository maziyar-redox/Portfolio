import { Link } from "@/i18n/routing";

export function FooterIcons({
    link,
    icons
}: {
    link: string;
    icons: React.ReactNode;
}) {
    return (
        <Link href={link} className="flex items-center justify-center h-8 md:h-12 w-8 md:w-12 rounded-full border border-gray-shade-12 bg-gray-shade-10">
            {icons}
        </Link>
    );
};