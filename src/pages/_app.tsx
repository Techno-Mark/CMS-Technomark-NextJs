import React, { useState } from "react";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import SideBar from "@/components/common/sidebar/sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CustomerLabel from "@/components/common/customerlabel/customerlabel";

// const footerItem = [
//   {
//     title: "Company",
//     child: [
//       {
//         name: "About us",
//         path: "/about",
//       },
//       {
//         name: "Careers",
//         path: "/careers",
//       },
//       {
//         name: "Blog",
//         path: "/blogs",
//       },
//       {
//         name: "Sitemap",
//         path: "/Sitemap",
//       },
//       {
//         name: "Contact",
//         path: "/Contact",
//       },
//     ],
//   },
//   {
//     title: "Services",
//     child: [
//       {
//         name: "Enterprise software",
//         path: "/enterprise_software",
//       },
//       {
//         name: "Hire Dedicated Developers",
//         path: "/hire_dedicated_developers",
//       },
//       {
//         name: "Mobile App",
//         path: "/mobile_apps",
//       },
//       {
//         name: "Cloud Native",
//         path: "/Cloud_Native",
//       },
//       {
//         name: "AI Development",
//         path: "/AI_Development",
//       },
//       {
//         name: "IoT App",
//         path: "/IoT_App",
//       },
//       {
//         name: "Blockchain",
//         path: "/Blockchain",
//       },
//       {
//         name: "Ecommerce",
//         path: "/Ecommerce",
//       },
//     ],
//   },
//   {
//     title: "Hire Developer Team",
//     child: [
//       {
//         name: "AngularJS Developers",
//         path: "/angularjs_developers",
//       },
//       {
//         name: "Android App Developers",
//         path: "/android_app_developers",
//       },
//       {
//         name: "AI & ML Developers",
//         path: "/ai_ml_developers",
//       },
//       {
//         name: "ASP.NET Developers",
//         path: "/asp_net_developers",
//       },
//     ],
//   },
//   {
//     title: "",
//     child: [
//       {
//         name: "Java Developers",
//         path: "/java_developers",
//       },
//       {
//         name: "NodeJS Web Developers",
//         path: "/nodejs_web_developers",
//       },
//       {
//         name: "PHP Developers",
//         path: "/php_developers",
//       },
//     ],
//   },
// ];
// const footerItem = [
//   {
//     title: "Company",
//     child: [
//       {
//         name: "About us",
//         path: "/about",
//       },
//       {
//         name: "Careers",
//         path: "/careers",
//       },
//       {
//         name: "Blog",
//         path: "/blogs",
//       },
//       {
//         name: "Sitemap",
//         path: "/Sitemap",
//       },
//       {
//         name: "Contact",
//         path: "/Contact",
//       },
//     ],
//   },
//   {
//     title: "Services",
//     child: [
//       {
//         name: "Enterprise software",
//         path: "/enterprise_software",
//       },
//       {
//         name: "Hire Dedicated Developers",
//         path: "/hire_dedicated_developers",
//       },
//       {
//         name: "Mobile App",
//         path: "/mobile_apps",
//       },
//       {
//         name: "Cloud Native",
//         path: "/Cloud_Native",
//       },
//       {
//         name: "AI Development",
//         path: "/AI_Development",
//       },
//       {
//         name: "IoT App",
//         path: "/IoT_App",
//       },
//       {
//         name: "Blockchain",
//         path: "/Blockchain",
//       },
//       {
//         name: "Ecommerce",
//         path: "/Ecommerce",
//       },
//     ],
//   },
//   {
//     title: "Hire Developer Team",
//     child: [
//       {
//         name: "AngularJS Developers",
//         path: "/angularjs_developers",
//       },
//       {
//         name: "Android App Developers",
//         path: "/android_app_developers",
//       },
//       {
//         name: "AI & ML Developers",
//         path: "/ai_ml_developers",
//       },
//       {
//         name: "ASP.NET Developers",
//         path: "/asp_net_developers",
//       },
//     ],
//   },
//   {
//     title: "",
//     child: [
//       {
//         name: "Java Developers",
//         path: "/java_developers",
//       },
//       {
//         name: "NodeJS Web Developers",
//         path: "/nodejs_web_developers",
//       },
//       {
//         name: "PHP Developers",
//         path: "/php_developers",
//       },
//     ],
//   },
// ];

export default function App({ Component, pageProps }: AppProps) {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  

  const toggleDrawer = () => {
    setIsDrawerVisible((prev) => !prev);
  };
  return (
    <div className='maindiv'>
      <Header onShowDrawer={toggleDrawer} headerData={pageProps.headerData}/>
      <SideBar isDrawerVisible={isDrawerVisible} toggleDrawer={toggleDrawer} />
      <CustomerLabel />
      <Component {...pageProps} />
      <Footer footerData={pageProps.footerData}/>
    </div>
  );
}
