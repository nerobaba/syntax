import Layout from "../components/layout";
import Footer from "../components/footer";
import Header from "@/components/header";
export default function Projects() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Header>
          <title>빡코딩 포트폴리오</title>
          <meta name="description" content="오늘도 빡코딩!" />
          <link rel="icon" href="/favicon.ico" />
        </Header>
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 :<span className="pl-4 text-blue-500"></span>
        </h1>
        <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2"></div>
      </div>
    </Layout>
  );
}
