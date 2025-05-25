import Aboutyuzs from "@/components/main/about";
import SimpleProjects from "@/components/main/Project";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        
        <Hero />
        <Aboutyuzs/>
        <Skills />
        <Encryption />
        <SimpleProjects/>
      </div>
    </main>
  );
}
