"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import AlertDialog from "./Dialog";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "CMMS",
    desc: "Developed and optimized a Computerized Maintenance Management System (CMMS) using React.js, Node.js, and SQL for asset and maintenance management",
    img: "/kpj.png",
    link: "",
    data: [
      {
        title: "Login Screen",
        url: "/cmms/1(Login).png",
      },
      {
        title: "Dashboard",
        url: "/cmms/2(Dashboard).png",
      },

      {
        title: "Work Request Card View",
        url: "/cmms/4(wkrList).png",
      },
      {
        title: "Work Request Table View",
        url: "/cmms/5(tableView).png",
      },
      {
        title: "Asset Module",
        url: "/cmms/6AssetModule.png",
      },
      {
        title: "Advance Filter",
        url: "/cmms/7A.png",
      },
      {
        title: "Asset Form",
        url: "/cmms/7Asset.png",
      },
      {
        title: "Asset Form",
        url: "/cmms/7Asset.png",
      },
      {
        title: "Asset Hirechy",
        url: "/cmms/8AH.png",
      },
      {
        title: "Employee Module",
        url: "/cmms/9Employe.png",
      },
    ],
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Asset Makers Estate Project ",
    desc: "Created an innovative estate management platform designed to streamline property management. Built with React.js for a responsive user experience, the platform allows users to search, list, and manage properties, track client inquiries, and analyze market trends. The backend, powered by Node.js and Express.",
    img: "/estate.png",
    link: "",
    data: [
      {
        title: "Asset Makers",
        url: "e1 (1).png",
      },
      {
        title: "Asset Makers",
        url: "e1 (2).png",
      },
      {
        title: "Asset Makers",
        url: "e1 (3).png",
      },
      {
        title: "Asset Makers",
        url: "e1 (4).png",
      },
    ],
  },

  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Infodrive Website ",
    desc: "The Infodrive Website is a responsive and fast-loading platform developed using Next.js, designed to deliver an intuitive user experience for managing and presenting data. With server-side rendering, the website ensures optimal performance and enhanced SEO, making it both user-friendly and search engine efficient.",
    img: "/website.png",
    link: "",
    data: [],
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item, index) => (
              <div
                className={`h-screen w-screen flex items-center justify-center`}
                key={item.id}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col gap-8 text-slate-900 backdrop-blur-sm w-full h-full justify-center items-center">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl ">
                    {item.title}
                  </h1>
                  <div className="relative">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-1/2">{item.desc}</p>

                  <AlertDialog item={item} index={index} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
