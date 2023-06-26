"use client";
import { BarLoader } from "react-spinners";
import { useState, useEffect } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return (
      <div className="bg-black flex justify-center items-center h-screen w-screen">
        <BarLoader
          color="#ffffff"
          height={4}
          loading
          speedMultiplier={1}
          width={200}
        />{" "}
      </div>
    );
  }
};

export default Loading;
