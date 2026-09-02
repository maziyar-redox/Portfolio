import { useState } from "react";

import { ArrowUpIcon } from "@phosphor-icons/react";

import { Button } from "@/client/components/ui/button";

import { cn } from "@/client/core/lib/utils";


function ScrollToTop() {
    const [visible, setVisible] = useState<boolean>(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		};
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<Button variant="default" size="icon-lg" className={cn(
                    "fixed bottom-10 right-10 transition-all transition-discrete duration-300 size-10",
                    visible ? "opacity-100" : " opacity-0"
                )} onClick={scrollToTop}>
			<ArrowUpIcon className="size-5" />
		</Button>
	);
};

export default ScrollToTop;