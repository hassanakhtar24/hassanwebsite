import styles from "./Landing.module.scss";

import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import PageMeta from "@/components/Special/PageMeta";
import LandingNavigation from "@/pages/Landing/components/LandingNavigation/LandingNavigation";
import LandingSeparator from "@/pages/Landing/components/LandingSeparator/LandingSeparator";
import LandingCounter from "@/pages/Landing/components/LandingCounter/LandingCounter";
import LandingSection from "@/pages/Landing/components/LandingSection/LandingSection";
import LandingFooter from "@/pages/Landing/components/LandingFooter/LandingFooter";
import LandingAbout from "@/pages/Landing/components/LandingAbout/LandingAbout";
import LandingSteps from "@/pages/Landing/components/LandingSteps/LandingSteps";
import LandingPromo from "@/pages/Landing/components/LandingPromo/LandingPromo";
import LandingCards from "@/pages/Landing/components/LandingCards/LandingCards";
import LandingHero from "@/pages/Landing/components/LandingHero/LandingHero";

const meta = {
  title: "Brandex - Landing Page",
  description: "Welcome to Brandex.",
};

const landingLinks = {
  links: [
    { text: "Home", link: "#home" },
    { text: "About", link: "#about" },
    { text: "Demos", link: "#demos" },
    { text: "3-Step Method", link: "#method" },
    { text: "Purchase", link: "#" },
  ],
};

import hero from "./assets/hero/1.webp";
import promo from "./assets/promo/1.webp";

import demo1 from "./assets/demos/1.webp";
import demo2 from "./assets/demos/2.webp";
import demo3 from "./assets/demos/3.webp";
import demo4 from "./assets/demos/4.webp";

import demo5 from "./assets/demos/5.webp";
import demo6 from "./assets/demos/6.webp";
import demo7 from "./assets/demos/7.webp";
import demo8 from "./assets/demos/8.webp";

const demos = [
  {
    id: 1,
    name: "Image Slider - Wave Effect - Light Mode",
    path: "/light-slider-wave",
    img: demo1,
  },
  {
    id: 2,
    name: "Image Slider - Wave Effect - Dark Mode",
    path: "/dark-slider-wave",
    img: demo2,
  },
  {
    id: 3,
    name: "Images & Video Slider - Wave Effect - Light Mode",
    path: "/light-video-slider-wave",
    img: demo3,
  },
  {
    id: 4,
    name: "Images & Video Slider - Wave Effect - Dark Mode",
    path: "/dark-video-slider-wave",
    img: demo4,
  },
  {
    id: 5,
    name: "Single Image - Wave Effect - Light Mode",
    path: "/light-single-wave",
    img: demo5,
  },
  {
    id: 6,
    name: "Single Image - Wave Effect - Dark Mode",
    path: "/dark-single-wave",
    img: demo6,
  },
  {
    id: 7,
    name: "HTML5 Video - Wave Effect - Light Mode",
    path: "/light-video-wave",
    img: demo7,
  },
  {
    id: 8,
    name: "HTML5 Video - Wave Effect - Dark Mode",
    path: "/dark-video-wave",
    img: demo8,
  },
  {
    id: 9,
    name: "Image Slider - Light Mode",
    path: "/light-slider",
    img: demo1,
  },
  {
    id: 10,
    name: "Image Slider - Dark Mode",
    path: "/dark-slider",
    img: demo2,
  },
  {
    id: 11,
    name: "Images & Video Slider - Light Mode",
    path: "/light-video-slider",
    img: demo3,
  },
  {
    id: 12,
    name: "Images & Video Slider - Dark Mode",
    path: "/dark-video-slider",
    img: demo4,
  },
  {
    id: 13,
    name: "Single Image - Light Mode",
    path: "/light-single",
    img: demo5,
  },
  {
    id: 14,
    name: "Single Image - Dark Mode",
    path: "/dark-single",
    img: demo6,
  },
  {
    id: 15,
    name: "HTML5 Video - Light Mode",
    path: "/light-video",
    img: demo7,
  },
  {
    id: 16,
    name: "HTML5 Video - Dark Mode",
    path: "/dark-video",
    img: demo8,
  },
];

function Landing() {
  return (
    <>
      <PageMeta {...meta} />
      <LandingNavigation data={landingLinks} />

      <div className={styles.landing}>
        <LandingHero
          id="home"
          slides={[
            {
              media: hero,
              topText: "Ex Nihilo's",
              title: "Brandex",
              buttonText: "Live Demos",
              buttonLink: "#demos",
            },
          ]}
        />

        <LandingSection id="about" fluid={true}>
          <LandingSeparator color="#b2b2b2" />

          <LandingAbout
            title="Brandex"
            subtitle="A fully responsive template"
            description="Brandex is a fully responsive template with a modern design suitable for all creative fields. The template is featuring a powerful video and imagery making it a perfect choice for photographers, artists and designers who want to showcase their work."
          />
        </LandingSection>

        <LandingSeparator color="#b2b2b2" />

        <LandingCounter className={styles.counterContainer} title="Ready" number={demos.length} subtitle="Demos" />

        <LandingSection id="demos" fluid={true}>
          <LandingSeparator color="#b2b2b2" />
          <LandingAbout title="The Demos" subtitle="By all means, choose your style" />

          <LandingCards demos={demos} />
        </LandingSection>

        <LandingSection id="method" fluid={true}>
          <LandingSeparator color="#b2b2b2" />

          <LandingAbout title="The 3-Step Method" subtitle="Download, edit, go live" />

          <LandingSteps
            steps={[
              { title: "Download", description: "Download purchased item via your ThemeForest downloads section." },
              { title: "Edit", description: "Read the documentation file (user guide) and make your edits." },
              { title: "Go Live", description: "Upload files to a web server and showcase your work in style." },
            ]}
          />
        </LandingSection>

        <LandingSeparator color="#b2b2b2" />

        <LandingPromo
          image={promo}
          link="#"
          topText="Purchase Brandex"
          title="and build excitement around your brand"
          subtitle="Style is Everything"
        />

        <LandingSeparator color="#b2b2b2" />

        <LandingFooter />

        <VerticalLines className={styles.lines} />
        <ToTopArrow className={styles.topArrow} />
      </div>
    </>
  );
}

export default Landing;
