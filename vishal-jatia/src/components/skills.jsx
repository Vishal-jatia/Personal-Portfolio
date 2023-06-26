import Image from "next/image";
const Skills = () => {
    const techStack = [
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784628/public/images/tech%20stack/html_inymfu.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784628/public/images/tech%20stack/css_bvmoux.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784630/public/images/tech%20stack/bootstrap_gpig2a.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784637/public/images/tech%20stack/javascript_ufiouk.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784635/public/images/tech%20stack/jquery_sn3qgl.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784636/public/images/tech%20stack/php_frma1q.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784634/public/images/tech%20stack/figma_z3cpyd.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687789273/public/images/tech%20stack/spline_vw5sw2.png",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784633/public/images/tech%20stack/typescript_qsbyat.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784636/public/images/tech%20stack/nodejs_ouk7ub.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687785532/public/images/tech%20stack/react1_ck7egi.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784635/public/images/tech%20stack/nextjs_eahjvk.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784628/public/images/tech%20stack/tailwind_hqhwu1.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784633/public/images/tech%20stack/mongodb_evcjlx.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687785438/public/images/tech%20stack/vercel_jyz4mp.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784634/public/images/tech%20stack/mysql_oqrszh.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784634/public/images/tech%20stack/matlab_mxxpi0.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784631/public/images/tech%20stack/redux_auyopd.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784632/public/images/tech%20stack/tensorflow_gzggbz.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784632/public/images/tech%20stack/anaconda_gr8rpu.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784631/public/images/tech%20stack/flask_xpam6u.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784628/public/images/tech%20stack/pandas_td9lnb.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784634/public/images/tech%20stack/python_pn8gtk.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687784635/public/images/tech%20stack/c-plusplus_cdnnjr.svg",
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687786843/public/images/tech%20stack/arduino_kmkvcc.svg",
    ];
  return (
    <div className="flex w-full gap-1 justify-center flex-wrap mt-5">
        {techStack.map((link) => {
            return (
              <Image
                src={link}
                alt="icon"
                width={40}
                height={40}
                className=""
              />
            );
        })}
    </div>
  )
}

export default Skills