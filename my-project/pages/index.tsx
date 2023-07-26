import Image from "next/image";
import Header from "@/components/Header";
import Head from "next/head";
import { Hero } from "./../components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>My portfolio</title>
      </Head>
      <main>
        <Header />

        <section id="hero">
          <Hero />
        </section>
      </main>
    </div>
  );
}
