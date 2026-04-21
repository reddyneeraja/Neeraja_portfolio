import Header_pf from "./Header_pf";
import Hero_section from "./Hero_section";
import About_pf from "./About_pf";
import WorkEx_pf from "./WorkEx_pf";
import Education_pf from "./Education_pf";
import Skills from "./Skills_pf";
import Footer_pf from "./Footer_pf";
import Contact_pf from "./Contact_pf";
import Project_pf from "./Projects_pf"


function Home() {
  return (
    <>
      <Header_pf />
      <Hero_section />
      <About_pf />
      <WorkEx_pf />
      <Education_pf />
      <Project_pf />
      <Skills />
      <Contact_pf />
      <Footer_pf />
    </>
  );
}

export default Home;
