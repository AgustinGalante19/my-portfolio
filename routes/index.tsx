import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx";
import Header from "../components/Header.tsx";
import AboutMe from "../components/AboutMe.tsx";
import TechList from "../components/TechList.tsx";
import proyects from "../utils/proyects.ts";
import Footer from "../components/Footer.tsx";
import ProyectList from "../components/ProyectList.tsx";

export default function Home() {
  return (
    <div class="flex flex-col h-screen">
      <div class="flex-1 bg-[#ACF39D] bg-opacity-30">
        <Head>
          <title>Portfolio</title>
          <link rel="stylesheet" href="index.css" />
        </Head>
        <Navbar />
        <Header />
        <AboutMe />
        <TechList />
        <ProyectList proyects={proyects} />
      </div>
      <Footer />
    </div>
  );
}
