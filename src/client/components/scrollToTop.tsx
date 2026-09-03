import { ArrowUpIcon } from "@phosphor-icons/react";

import { useActiveTopScroll } from "@/client/core/stores/useActiveTopScroll";

import { Button } from "@/client/components/ui/button";

import { cn } from "@/client/core/lib/utils";
import { useEffect, useState } from "react";


function ScrollToTop() {
    const { activeTopScroll, activeElement } = useActiveTopScroll((state) => state);
	const [activeScroll, setActiveScroll] = useState<boolean>(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	useEffect(() => {

		if (activeElement === false) {
			setActiveScroll(false);
			return () => undefined;
		};

		const toggleVisible = () => {
			const scrolled = document.documentElement.scrollTop;

			if (scrolled > 300 && activeTopScroll === false) {
				setActiveScroll(true);
				return;
			};

			if (scrolled > 300 && activeTopScroll === true) {
				setActiveScroll(false);
				return;
			};

			if (scrolled <= 300) {
				setActiveScroll(false);
				return
			};
		};

		window.addEventListener("scroll", toggleVisible);

		return () => window.removeEventListener("scroll", toggleVisible);
	}, [activeTopScroll, activeElement]);

	return (
		<Button variant="default" size="icon-lg" className={cn(
                    "fixed bottom-10 right-10 transition-all transition-discrete duration-300 size-10 z-999",
                    activeScroll ? "opacity-100" : " opacity-0"
                )} onClick={scrollToTop}>
			<ArrowUpIcon className="size-5" />
		</Button>
	);
};

export default ScrollToTop;