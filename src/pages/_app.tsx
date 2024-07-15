import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const footerItem = [
  {
    title: "Company",
    child: [
      {
        name: "About us",
        path: "/about",
      },
      {
        name: "Careers",
        path: "/careers",
      },
      {
        name: "Blog",
        path: "/blogs",
      },
    ],
  },
  {
    title: "Services",
    child: [
      {
        name: "Enterprise software",
        path: "/enterprise_software",
      },
      {
        name: "Hire Dedicated Developers",
        path: "/hire_dedicated_developers",
      },
      {
        name: "Mobile App",
        path: "/mobile_apps",
      },
    ],
  },
  {
    title: "Hire Developer Team",
    child: [
      {
        name: "AngularJS Developers",
        path: "/angularjs_developers",
      },
      {
        name: "Android App Developers",
        path: "/android_app_developers",
      },
      {
        name: "AI & ML Developers",
        path: "/ai_ml_developers",
      },
      {
        name: "ASP.NET Developers",
        path: "/asp_net_developers",
      },
    ],
  },
  {
    title: "",
    child: [
      {
        name: "Java Developers",
        path: "/java_developers",
      },
      {
        name: "NodeJS Web Developers",
        path: "/nodejs_web_developers",
      },
      {
        name: "PHP Developers",
        path: "/php_developers",
      },
    ],
  },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer props={footerItem} />
    </>
  );
}
