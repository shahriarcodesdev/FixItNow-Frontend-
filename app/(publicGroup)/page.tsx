import { Button } from "@/components/ui/button";
import { getMe } from "@/service/getMe";
import { Hero } from "./_components/home/Hero";
import { Categories } from "./_components/home/Categories";
import { Footer } from "./_components/home/Footer";

import { HowItWorks } from "./_components/home/HowItWorks";
import { TrustSection } from "./_components/home/TrustSection";
import { CTASection } from "./_components/home/CTASection";




export default async function  HomePage() {
  // console.log("root route")
  const user = await getMe()
  // console.log(user)
  return (
  <>
<Hero />

      <Categories />

      
      <HowItWorks />

      <TrustSection />

      <CTASection />

      <Footer />
  </>

  );
}
