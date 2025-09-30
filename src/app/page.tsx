import ConnectSection from "@/components/ConnectSection";
import Scrolltext from "@/components/global/Scrolltext";
import HomePageSection from "@/components/HomeSection";
import ProjectDetails from "@/components/ProjectsDetails";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full h-full">
      <HomePageSection />
      <Scrolltext />
      <Skills />
      <ProjectDetails />
      <ConnectSection />
    </div>
  );
}
