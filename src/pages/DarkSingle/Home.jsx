import ImageGallery from "@/components/Galleries/ImageGallery/ImageGallery";
import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import Navigation from "@/components/Layout/Navigation/Navigation";
import Info from "@/components/Layout/Info/Info";
import AboutUs from "@/components/Layout/AboutUs/AboutUs";
import Testimonials from "@/components/Layout/Testimonials/Testimonials";
import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import Hero from "@/components/Layout/Hero/Hero";
import Footer from "@/components/Layout/Footer/Footer";
import Section from "@/components/Common/Section/Section";
import PageMeta from "@/components/Special/PageMeta";
import Map from "@/components/Special/Map/Map";
import Team from "@/components/Layout/Team/Team";
import Steps from "@/components/Layout/Steps/Steps";
import Counter from "@/components/UI/Counter/Counter";
import heroBg from "@/assets/images/background/hero-bg-1.webp";
import Quote from "@/components/UI/Quote/Quote";
import News from "@/components/Layout/News/News";
import Contact from "@/components/Layout/Contact/Contact";
import SplitShowcase from "@/components/Layout/SplitShowcase/SplitShowcase";

const meta = {
  title: "Hassan Baloch - Freelance Graphic & Web Designer",
  description: "From Graphic Design to Web & UI/UX - Available Globally.",
};

function Home() {
  return (
    <>
      <PageMeta {...meta} />
      <div data-theme="dark">
        <Navigation isDark={true} />

        <Hero
          id="home"
          showReservation={false}
          slides={[
            {
              media: heroBg,
              topText: "EXPERT GRAPHIC DESIGNER",
              title: "Freelance Graphic & Web Designer",
              buttonText: "VIEW WORKS",
              buttonLink: "#works",
            },
          ]}
        />

        <Section id="about" fluid={true} background="var(--bg-main)">
          <AboutUs
            id="about"
            number="01."
            topTitle="INTRODUCTION"
            title="The Foundry"
            quote="I am a graphic designer with a decade of experience crafting high-impact packaging, brand identity, and product imagery. I combine commercial thinking with cultural fluency to produce visuals that look premium and perform. Whether it's e-commerce packaging, web design, or strategic digital assets for global startups and agencies, the goal is simple: sharp design with zero fluff."
            visionDescription="I am a graphic designer with a decade of experience crafting high-impact packaging, brand identity, and product imagery. I combine commercial thinking with cultural fluency to produce visuals that look premium and perform. Whether it's e-commerce packaging, web design, or strategic digital assets for global startups and agencies, the goal is simple: sharp design with zero fluff."
            imagesLeft={[
              "/assets/images/wall/1.webp",
              "/assets/images/wall/2.webp",
              "/assets/images/wall/3.webp",
              "/assets/images/wall/4.webp",
              "/assets/images/wall/5.webp",
              "/assets/images/wall/6.webp",
            ]}
            imagesRight={[
              "/assets/images/wall/7.webp",
              "/assets/images/wall/8.webp",
              "/assets/images/wall/9.webp",
              "/assets/images/wall/10.webp",
              "/assets/images/wall/11.webp",
              "/assets/images/wall/12.webp",
            ]}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", padding: "2rem 4rem" }}>
            <Counter title="Years of Experience" number={10} subTitle="10+" />
            <Counter title="Deliverables Completed" number={1500} subTitle="1500+" />
            <Counter title="Brands & Campaigns Supported" number={250} subTitle="250+" />
          </div>
        </Section>

        <Section background="var(--bg-alt)">
          <Info number="02." topTitle="Meet the team" title="The Dream Team" />
          <Quote text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
          <Team />
        </Section>

        <Section fluid={true}>
          <SplitShowcase
            reverse={false}
            waves={false}
            slides={["/assets/images/know-how/1.webp", "/assets/images/know-how/2.webp"]}
            features={[
              { name: "Adobe Illustrator", number: 96 },
              { name: "Adobe Photoshop", number: 92 },
              { name: "Adobe Premiere", number: 89 },
              { name: "Adobe After Effects", number: 86 },
              { name: "Figma", number: 81 },
              { name: "Creativity", number: 100 },
            ]}
          />
        </Section>

        <Section id="services" background="var(--bg-alt)">
          <Info number="03." topTitle="WHAT I DO" title="The Services" />
          <Steps
            steps={[
              { title: "Graphic Design", description: "Transforming concepts into visually compelling designs that communicate your brand's core essence." },
              { title: "Packaging Design", description: "Structural files and print-ready dieelines engineered for shelf impact and e-commerce appeal." },
              { title: "Website Design", description: "Designing user-friendly and visually appealing web interfaces that elevate your brand's digital presence." },
            ]}
          />
        </Section>

        <Section fluid={true}>
          <SplitShowcase
            reverse={true}
            waves={false}
            slides={["/assets/images/services/1.webp", "/assets/images/services/2.webp"]}
            features={[
              { name: "English Language", number: 70 },
              { name: "French Language", number: 80 },
              { name: "German Language", number: 90 },
              { name: "Italian Language", number: 100 },
            ]}
          />
        </Section>

        <Section id="works" background="var(--bg-alt)">
          <Info number="04." topTitle="PORTFOLIO" title="The Works" />
          <Quote text="Selected projects spanning brand identities, packaging design, and digital experiences. Check out the full portfolio at www.hassanbaloch.com" />
        </Section>

        <ImageGallery
          id="gallery"
          images={[
            "/assets/images/photoswipe/photos/large/1.webp",
            "/assets/images/photoswipe/photos/large/2.webp",
            "/assets/images/photoswipe/photos/large/3.webp",
            "/assets/images/photoswipe/photos/large/4.webp",
            "/assets/images/photoswipe/photos/large/5.webp",
            "/assets/images/photoswipe/photos/large/6.webp",
            "/assets/images/photoswipe/photos/large/7.webp",
            "/assets/images/photoswipe/photos/large/8.webp",
          ]}
        />

        <Section fluid={true} id="office">
          <Testimonials
            media="/assets/images/background/parallax-blank.webp"
            testimonials={[
              "\"Hassan is an outstanding designer who quickly grasps project requirements and consistently delivers good work. His understanding and efficiency make him a valuable asset for any requirements.\" — Bhargavi Bhatt (Asst. Product Manager)",
              "\"Communicating with Hassan was a breeze. He's attentive to my ideas and offered valuable input without overpowering my vision. The final product exceeded my expectations.\" — Muhammad Faheem (CEO)",
            ]}
          />
        </Section>

        <Section background="var(--bg-main)">
          <Info number="05." topTitle="RESUME" title="Experience" />
          <Quote text="Freelance & Corporate Design Career" />
          <Team
            slides={[
              "/assets/images/inside/1.webp",
              "/assets/images/inside/2.webp",
              "/assets/images/inside/3.webp",
              "/assets/images/inside/4.webp",
              "/assets/images/inside/5.webp",
            ]}
          />
          <Steps
            steps={[
              { title: "Freelance Graphic Designer (2024 – Present)", description: "Packaging, flyers, drop cards, logos, and e-commerce imagery for international clients. Delivered brand identity systems and print-ready packaging dieelines with seamless remote collaboration." },
              { title: "Multimedia Manager – Voxtron Group (2023 – 2024)", description: "Led the design team and managed end-to-end visual production across digital channels. Created logo animations, motion graphics, and social media content that elevated brand visibility." },
              { title: "Creative Head – Mehrdar Art & Production (2014 – 2023)", description: "Directed creative campaigns and visual strategy for commercial projects, managing brand identity, event visuals, and social storytelling." },
            ]}
          />
        </Section>

        <Section id="news" background="var(--bg-alt)">
          <Info number="06." topTitle="Stay up to date" title="The News" />
          <Quote text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
        </Section>

        <Section fluid={true}>
          <News isDark={true} />
        </Section>

        <Section id="contact" fluid={true}>
          <Contact number="07." topTitle="GET IN TOUCH" title="Let's Build Something Exceptional" image="/assets/images/background/parallax-contact.webp" isDark={true} />
        </Section>

        <Section fluid={true} background="var(--bg-main)">
          <Info number="08." topTitle="Where to find us" title="The Location" />
          <Map />
        </Section>

        <Footer isDark={true} />

        <VerticalLines />
        <ToTopArrow />
      </div>
    </>
  );
}

export default Home;