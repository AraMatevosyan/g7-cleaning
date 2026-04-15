import HeroOne from "../components/hero/HeroOne";
import AboutOne from "../components/about/AboutOne";
import ServiceOne from "../components/service/ServiceThree";
import FaqOne from "../components/faq/FaqOne";
import ContactInfo from "../components/contact/ContactInfo";
import WhyChooseUsOne from "../components/why-choose-us/WhyChooseUsOne";
import CtaOne from "../components/cta/CtaOne";

export default function Page() {
  return (
      <>
        <HeroOne />
        <AboutOne />
        <ServiceOne />
        <FaqOne />
        <CtaOne />
        <WhyChooseUsOne />
        <ContactInfo />
        {/*<ContactMap />*/}
      </>
  );
}
