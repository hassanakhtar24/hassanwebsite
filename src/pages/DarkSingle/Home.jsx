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
  title: "Hassan Baloch - Freelance Graphic Designer",
  description: "From Graphic Design to Video Editing - Available 24/7, Globally.",
};

function Home() {
  return (
    <>
      <PageMeta {...meta} />
      <div data-theme="dark">
        <Navigation isDark={true} />

        <Hero
          id="home"
          showReservation={true}
          slides={[
            {
              media: heroBg,
              topText: "Hassan Baloch",
              title: "Freelance Graphic Designer",
              buttonText: "Watch Video",
              buttonLink: "https://www.youtube.com/watch?v=eCHaiEjCDFM",
            },
          ]}
        />

        <Section id="about" fluid={true} background="var(--bg-main)">
          <AboutUs
            id="about"
            number="01."
            topTitle="Who We Are"
            title="The Brand"
            quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            missionDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            visionDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
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
          <Counter title="Being around for" number={76} subTitle="Years" />
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
              { name: "Web Design", number: 100 },
              { name: "UI/UX Design", number: 90 },
              { name: "Brand Indentity", number: 80 },
              { name: "Logo Design", number: 70 },
            ]}
          />
        </Section>

        <Section id="services" background="var(--bg-alt)">
          <Info number="03." topTitle="What we do" title="The Services" />
          <Steps
            steps={[
              { title: "Web design", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
              { title: "UX/UI design", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
              { title: "Brand identity", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
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
          <Info number="04." topTitle="What's done" title="The Works" />
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
            buttonLink="https://www.youtube.com/watch?v=y3RQybKHsj4"
            testimonials={[
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            ]}
          />
        </Section>

        <Section background="var(--bg-main)">
          <Info number="05." topTitle="Step inside" title="The Office" />
          <Quote text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
          <Team
            slides={[
              "/assets/images/inside/1.webp",
              "/assets/images/inside/2.webp",
              "/assets/images/inside/3.webp",
              "/assets/images/inside/4.webp",
              "/assets/images/inside/5.webp",
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
          <Contact number="07." topTitle="Let's Talk" title="The Contact" image="/assets/images/background/parallax-contact.webp" isDark={true} />
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
