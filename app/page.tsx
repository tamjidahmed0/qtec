import Category from "@/components/category/Category";
import Companies from "@/components/companies/Companies";
import FeaturedJob from "@/components/featured-job/FeaturedJob";
import Hero from "@/components/Hero/Hero";
import LatestJob from "@/components/latest-job/LatestJob";
import Promo from "@/components/promo/Promo";


export default function Home() {
  return (
    <div>
      <Hero />
      <Companies />
      <Category />
      <Promo />
      <FeaturedJob />
      <LatestJob />

    </div>
  );
}
