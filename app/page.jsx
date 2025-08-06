"use client";

import CtaSection from "@/components/cta-section";
import FeaturesSection from "@/components/features";
import HeroSection from "@/components/hero-section";
import PricingSection from "@/components/pricing";

const App = () => {
	return (
		<div className="pt-36">
			<HeroSection />
			{/* <InteractiveStats /> */}
			<FeaturesSection />
			<PricingSection />
			<CtaSection />
		</div>
	);
};

export default App;
