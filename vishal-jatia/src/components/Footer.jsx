import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex justify-between py-5 border-t-2 items-center pl-5">
      <h1 className="text-base text-slate-200">Vishal Jatia</h1>
      <p className="text-xs text-slate-300">All rights reserved ©️{year}</p>
      <div className="mr-5 flex">
        <Link
          href="https://www.instagram.com/v._.i_s_h_a_l/"
          className="border rounded-full p-3 hover:scale-105"
        >
          <Image
            src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784631/public/icons/instagram_datbo1.svg"
            width={20}
            height={20}
            alt="instagram"
          />
        </Link>
        <Link
          href="https://github.com/Vishal-jatia"
          className="border rounded-full p-3 hover:scale-105"
        >
          <Image
            src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784637/public/icons/github_daaho9.svg"
            width={20}
            height={20}
            alt="instagram"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/vishal-jatia-638146229/"
          className="border rounded-full p-3 hover:scale-105"
        >
          <Image
            src="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784631/public/icons/linkedin_hrrwfy.svg"
            width={20}
            height={20}
            alt="instagram"
          />
        </Link>
      </div>
      
    </div>
  );
};

export default Footer;
