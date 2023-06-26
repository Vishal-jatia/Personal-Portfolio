import "./globals.css";
import { Inter } from "next/font/google";
import { Zen_Dots } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });
const zen = Zen_Dots({
  subsets: ["latin-ext"],
  variable: "--font-zen",
  weight: "400",
});

export const metadata = {
  title: "Vishal Jatia",
  description: "Welcome to the portfolio of Vishal Jatia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <script
          src="https://kit.fontawesome.com/6840eb7eb7.js"
          crossorigin="anonymous"
        ></script>
      </head> */}
      <head>
        <title>Vishal Jatia - Software Developer</title>
        <meta name="title" content="Vishal Jatia - Software Developer" />
        <meta
          name="description"
          content="Hey everyone! You are visiting the official portfolio of Vishal Jatia, who is a software developer from Delhi, India. Developing websites has been a passion for him and has been developing since 2021. He is also interested in machine learning and have participated in many hackathons. He is a very active learner and is always on the journey to learn new technologies."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io" />
        <meta property="og:title" content="Vishal Jatia - Software Developer" />
        <meta
          property="og:description"
          content="Hey everyone! You are visiting the official portfolio of Vishal Jatia, who is a software developer from Delhi, India. Developing websites has been a passion for him and has been developing since 2021. He is also interested in machine learning and have participated in many hackathons. He is a very active learner and is always on the journey to learn new technologies."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687170236/favicon2_dgzorq.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io" />
        <meta
          property="twitter:title"
          content="Vishal Jatia - Software Developer"
        />
        <meta
          property="twitter:description"
          content="Hey everyone! You are visiting the official portfolio of Vishal Jatia, who is a software developer from Delhi, India. Developing websites has been a passion for him and has been developing since 2021. He is also interested in machine learning and have participated in many hackathons. He is a very active learner and is always on the journey to learn new technologies."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687170236/favicon2_dgzorq.png"
        />
      </head>
      <body className={zen.className}>
        <main className="overflow-x-hidden" suppressHydrationWarning={true}>
          <Loading />
          <Nav />
          {children}
          <Footer />
          <div />
        </main>
      </body>
    </html>
  );
}
