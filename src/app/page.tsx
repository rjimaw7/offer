import HeroContent from "@/components/HeroContent";
import Overlay from "@/components/Overlay";

export default function Home() {
  return (
    <main className="bg-[#2B2D42] min-h-screen relative border border-black">
      <Overlay />
      <HeroContent />
    </main>
  );
}
