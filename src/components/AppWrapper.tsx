'use client';
import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader/Preloader";
import AnimatedBackground from "@/components/AnimatedBackground/AnimatedBackground";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer for the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 5 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Conditionally render the preloader or the main site content
  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}