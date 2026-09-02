import { Container } from "@/client/components/zippystarter/container";

import { Link } from "react-router";

function Footer() {
    return (
        <Container
            component="footer"
            className="py-8 border-t border-border bg-background text-center max-w-7xl mx-auto"
        >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-xs font-mono text-muted-foreground">
                    © 2025 MAZIYAR ISANEZHAD. ALL RIGHTS RESERVED.
                </div>
                <div className="flex gap-6 text-xs font-mono text-muted-foreground">
                    <Link to="https://github.com/maziyar-redox" className="hover:text-primary transition-colors">
                        GITHUB
                    </Link>
                    <Link to="https://linkedin.com/in/maziyar-isanezhad" className="hover:text-primary transition-colors">
                        LINKEDIN
                    </Link>
                    <Link to="https://t.me/sys_127" className="hover:text-primary transition-colors">
                        TELEGRAM
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Footer;