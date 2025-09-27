import ConnectSection from "@/components/ConnectSection";
import HomePageSection from "@/components/HomeSection";
import ProjectDetails from "@/components/ProjectsDetails";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full h-full">
      <HomePageSection />
      <ProjectDetails />
      <Skills />
      <ConnectSection />
    </div>
  );
}
