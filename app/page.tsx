import Section01_HeroPenyambutan from "@/components/sections/Section01_HeroPenyambutan";
import Section01b_Marquee from "@/components/sections/Section01b_Marquee";
import Section02_AboutCerita from "@/components/sections/Section02_AboutCerita";
import Section04_ServicesMenu from "@/components/sections/Section04_ServicesMenu";
import Section04b_Process from "@/components/sections/Section04b_Process";
import Section05_GalleryFoto from "@/components/sections/Section05_GalleryFoto";
import Section07_TestiUlasan from "@/components/sections/Section07_TestiUlasan";
import Section10_ContactForm from "@/components/sections/Section10_ContactForm";

export default function Home() {
  return (
    <>
      <Section01_HeroPenyambutan />
      <Section01b_Marquee />
      <Section02_AboutCerita />
      <Section04_ServicesMenu />
      <Section04b_Process />
      <Section05_GalleryFoto />
      <Section07_TestiUlasan />
      <Section10_ContactForm />
    </>
  );
}
