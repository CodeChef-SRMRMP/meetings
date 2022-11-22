import React, { useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { useRouter } from "next/router";

type Props = {};

const Core = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    router.push(process.env.NEXT_PUBLIC_CORE_MEET);
  }, []);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <MoonLoader />
    </div>
  );
};

export default Core;
