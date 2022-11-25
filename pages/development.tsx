import React, { useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";

type Props = {};

const Development = (props: Props) => {
  useEffect(() => {
    window.location.href = `https://meet.google.com/${process.env.NEXT_PUBLIC_DEVELOPMENT_MEET}`;
  }, []);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <MoonLoader />
    </div>
  );
};

export default Development;
