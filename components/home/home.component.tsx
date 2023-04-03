import AboutMeSection from "./about-me-section/about-me-section.component";
import RecentPhotosSection from "./recent-photos-section/recent-photos-section.component";

import ContactSection from "./contact-section/contact-section.component";

import styles from "./home.module.scss";

const HomeComponent = () => {
  return (
    <>
      <AboutMeSection />
      <RecentPhotosSection />
      <ContactSection />
    </>
  );
};

export default HomeComponent;
