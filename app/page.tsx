'use client';

// import Form from "@/component/form";


export default function Home() {
  return (
    <main className="flex relative font-semibold text-xl min-h-screen flex-col items-center justify-center pt-8 pb-12 xl:pt-20 xl:pb-20 pl-4 pr-4 xl:pl-12 xl:pr-12">
        <img src="/images/bg-main-desktop.png" alt={""} height={100} width={100} className="h-[100%] w-auto bg-center bg-no-repeat left-0 top-0 absolute hidden xl:block" aria-hidden="true"/> 
        <img src="/images/bg-main-mobile.png" alt={""} className="h-60 bg-center bg-no-repeat absolute xl:hidden block top-0 w-full"/>
        {/* <Form /> */}
        <div className="flex justify-center items-center">
          <div className="text-gray-800 bg-orange-400 text-5xl font-semibold p-14 rounded-2xl">Maintaining🛠️</div>
        </div>
    </main>
  );
}
