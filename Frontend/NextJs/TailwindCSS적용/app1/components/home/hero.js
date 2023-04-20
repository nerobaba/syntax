import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            안녕하세요
            <br className="hidden lg:inline-block" />
            오늘도 빡코딩
          </h1>
          <p className="mb-8 leading-relaxed">
            풀밭에 그들의 같은 할지니, 방황하였으며, 불어 힘차게 내려온 말이다.
            것은 예수는 황금시대의 꽃이 가치를 봄바람이다. 얼마나 찾아다녀도,
            위하여 피고 못하다 아니다. 원질이 용기가 얼음 가진 얼음이 인생에
            황금시대다. 하는 대고, 청춘 쓸쓸하랴? 품고 가치를 속에서 아니한
            쓸쓸하랴? 가는 사는가 청춘의 것이다. 못할 충분히 투명하되 많이
            동산에는 것이다. 생의 듣기만 동력은 방황하여도, 새 능히 위하여,
            있는가? 이성은 커다란 장식하는 풍부하게 것이다.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <Link href="/projects">프로젝트 보러가기</Link>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Animation />
        </div>
      </div>
    </section>
  );
}
