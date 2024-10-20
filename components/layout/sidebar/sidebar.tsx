import { SidebarItems } from "./sidebar-items";

import { navigation_data } from "@/data";

export function SidebarContainer() {
    return (
        <ul className="flex flex-col items-center justify-center space-y-3">
            {navigation_data.map((items) => (
                <SidebarItems key={items.href} text={items.nav_text} href={items.href} />
            ))}
        </ul>
    );
};