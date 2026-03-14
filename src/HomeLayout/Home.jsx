import Banner from "./Banner";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import Service from "./Service";
import SkillsIcon from "./SkillsIcon";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";
import Extra1 from "../Shared/Extra1";
import Extra2 from "../Shared/Extra2";
import Navbar from "../Navbar/Navbar";
import ChatBox from "../ChatBox";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner></Banner>
      <ChatBox />
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <SkillsIcon></SkillsIcon>
      <Extra1></Extra1>
      <MyProjects></MyProjects>
      <Extra2></Extra2>
      <Service></Service>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
