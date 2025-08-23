import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Agenda from "@/components/Agenda/Agenda";
import Passes from "@/components/Passes/Passes"; // <-- Import the new component
import Sponsors from "@/components/Sponsors/Sponsors";
import Pitch from "@/components/Pitch/Pitch";
import Speakers from "@/components/Speaker/Speaker"; 

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Speakers />
      <Agenda />
      <Passes /> {/* <-- Add the new section here */}
      <Sponsors />
      <Pitch />
    </>
  );
}