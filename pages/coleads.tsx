import React, { useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { useRouter } from "next/router";

type Props = {};

const CoLeads = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    router.push(process.env.NEXT_PUBLIC_COLEADS_MEET);
  }, []);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <MoonLoader />
    </div>
  );
};

export default CoLeads;
