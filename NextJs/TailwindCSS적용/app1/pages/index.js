import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Header>
        <title>빡코딩 포트폴리오</title>
        <meta name="description" content="오늘도 빡코딩!" />
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
