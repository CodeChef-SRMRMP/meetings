import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-10 py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col md:scale-150 items-center space-y-5 justify-center">
        <Image
          src={require("../assets/CodeChef-logo.png")}
          alt="CodeChef Logo"
          className="w-32 h-32 hover:animate-spin md:cursor-pointer"
        />
        <p className="font-bold text-2xl w-96 animate-pulse animate-bounce">
          Use Specific Domain Route to navigate to the Meet
        </p>
      </div>
    </div>
  );
};

export default Home;
