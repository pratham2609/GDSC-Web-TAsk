import "./App.css";
import sec4img from "./assets/Rectangle 160.svg";
import frame1 from "./assets/Frame 56.svg";
import frame2 from "./assets/Frame 57.svg";
import apple from "./assets/Rectangle 161.svg";
import coca from "./assets/Rectangle 161-1.svg";
import nike from "./assets/Rectangle 161-2.svg";
import sec71 from "./assets/Rectangle 185.svg";
import sec72 from "./assets/Rectangle 184.svg";
import sec73 from "./assets/Rectangle 181.svg";
import sec74 from "./assets/Rectangle 182.svg";
import sec75 from "./assets/Rectangle 183.svg";
import sec76 from "./assets/Rectangle 186.svg";
import { BsArrowRightShort } from "react-icons/bs";
import Navbar from "./components/Navbar";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Hero from "./components/Hero";
import sec6img from "./assets/Mask group.svg";
import sec8img1 from "./assets/sec81.svg";
import sec8img2 from "./assets/sec82.svg";
import sec8img3 from "./assets/sec83.svg";
import Footer from "./components/Footer";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const data = [
    { number: "245%", id: 1, text: "More revenues for the brand" },
    { number: "130k+", id: 2, text: "Audiences reached across platfrom" },
    { number: "50+", id: 3, text: "brands work with us" },
    { number: "24+", id: 4, text: "Use this section to describe your " },
  ];
  const sec4 = [
    {
      id: 1,
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 102 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:scale-100 md:scale-90 scale-75"
        >
          <rect width="102" height="102" rx="24" fill="#3461FF" />
          <g clip-path="url(#clip0_1_603)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.8999 71.6H67.1C69.6898 71.6 71.5298 70.4707 72.6476 68.9182C73.678 67.4853 74 65.8362 74 64.7V50.9C74 50.29 73.7577 49.705 73.3263 49.2736C72.895 48.8423 72.31 48.6 71.7 48.6H64.8V37.1C64.8 35.27 64.073 33.5149 62.779 32.2209C61.485 30.9269 59.73 30.2 57.9 30.2H34.8999C33.0699 30.2 31.3149 30.9269 30.0209 32.2209C28.7269 33.5149 27.9999 35.27 27.9999 37.1V64.7C27.9999 65.8339 28.3219 67.4853 29.3523 68.9182C30.4701 70.473 32.3101 71.6 34.8999 71.6ZM67.1 53.2C67.71 53.2 68.295 53.4423 68.7263 53.8737C69.1577 54.305 69.4 54.89 69.4 55.5V64.7C69.4 65.31 69.1577 65.895 68.7263 66.3264C68.295 66.7577 67.71 67 67.1 67C66.49 67 65.905 66.7577 65.4736 66.3264C65.0423 65.895 64.8 65.31 64.8 64.7V55.5C64.8 54.89 65.0423 54.305 65.4736 53.8737C65.905 53.4423 66.49 53.2 67.1 53.2ZM44.0999 46.3C44.0999 45.69 44.3423 45.105 44.7736 44.6736C45.2049 44.2423 45.7899 44 46.3999 44C47.0099 44 47.5949 44.2423 48.0263 44.6736C48.4576 45.105 48.6999 45.69 48.6999 46.3C48.6999 46.91 48.4576 47.495 48.0263 47.9263C47.5949 48.3577 47.0099 48.6 46.3999 48.6C45.7899 48.6 45.2049 48.3577 44.7736 47.9263C44.3423 47.495 44.0999 46.91 44.0999 46.3ZM46.3999 39.4C44.5699 39.4 42.8149 40.1269 41.5209 41.4209C40.2269 42.7149 39.4999 44.47 39.4999 46.3C39.4999 48.13 40.2269 49.885 41.5209 51.179C42.8149 52.473 44.5699 53.2 46.3999 53.2C48.2299 53.2 49.985 52.473 51.279 51.179C52.573 49.885 53.2999 48.13 53.2999 46.3C53.2999 44.47 52.573 42.7149 51.279 41.4209C49.985 40.1269 48.2299 39.4 46.3999 39.4ZM39.4999 57.8C38.8899 57.8 38.3049 58.0423 37.8736 58.4737C37.4422 58.905 37.1999 59.49 37.1999 60.1C37.1999 60.71 37.4422 61.295 37.8736 61.7264C38.3049 62.1577 38.8899 62.4 39.4999 62.4H53.2999C53.9099 62.4 54.495 62.1577 54.9263 61.7264C55.3576 61.295 55.6 60.71 55.6 60.1C55.6 59.49 55.3576 58.905 54.9263 58.4737C54.495 58.0423 53.9099 57.8 53.2999 57.8H39.4999Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_603">
              <rect
                width="46"
                height="46"
                fill="white"
                transform="translate(28 28)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      head: "Ideation",
      text: "Use this section to describe your company and the products you offer. You could share your company’s",
    },
    {
      id: 2,
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 102 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:scale-100 md:scale-90 scale-75"
        >
          <rect width="102" height="102" rx="24" fill="#3461FF" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28 51C28 38.2977 38.2977 28 51 28C63.7023 28 74 38.2977 74 51C74 63.7023 63.7023 74 51 74C38.2977 74 28 63.7023 28 51ZM53.0909 38.4545C53.0909 37.9 52.8706 37.3682 52.4785 36.976C52.0864 36.5839 51.5545 36.3636 51 36.3636C50.4455 36.3636 49.9136 36.5839 49.5215 36.976C49.1294 37.3682 48.9091 37.9 48.9091 38.4545V40.5455C47.2455 40.5455 45.65 41.2063 44.4736 42.3827C43.2972 43.5591 42.6364 45.1546 42.6364 46.8182C42.6364 48.4818 43.2972 50.0773 44.4736 51.2537C45.65 52.43 47.2455 53.0909 48.9091 53.0909H53.0909C53.6455 53.0909 54.1773 53.3112 54.5694 53.7033C54.9615 54.0954 55.1818 54.6273 55.1818 55.1818C55.1818 55.7364 54.9615 56.2682 54.5694 56.6603C54.1773 57.0524 53.6455 57.2727 53.0909 57.2727H44.7273C44.1727 57.2727 43.6409 57.493 43.2488 57.8851C42.8567 58.2773 42.6364 58.8091 42.6364 59.3636C42.6364 59.9182 42.8567 60.45 43.2488 60.8421C43.6409 61.2343 44.1727 61.4545 44.7273 61.4545H48.9091V63.5455C48.9091 64.1 49.1294 64.6318 49.5215 65.024C49.9136 65.4161 50.4455 65.6364 51 65.6364C51.5545 65.6364 52.0864 65.4161 52.4785 65.024C52.8706 64.6318 53.0909 64.1 53.0909 63.5455V61.4545C53.9147 61.4545 54.7303 61.2923 55.4914 60.9771C56.2524 60.6618 56.9439 60.1998 57.5264 59.6173C58.1089 59.0348 58.5709 58.3433 58.8862 57.5823C59.2014 56.8212 59.3636 56.0056 59.3636 55.1818C59.3636 54.3581 59.2014 53.5424 58.8862 52.7813C58.5709 52.0203 58.1089 51.3288 57.5264 50.7463C56.9439 50.1639 56.2524 49.7018 55.4914 49.3866C54.7303 49.0713 53.9147 48.9091 53.0909 48.9091H48.9091C48.3545 48.9091 47.8227 48.6888 47.4306 48.2967C47.0385 47.9046 46.8182 47.3727 46.8182 46.8182C46.8182 46.2636 47.0385 45.7318 47.4306 45.3397C47.8227 44.9476 48.3545 44.7273 48.9091 44.7273H57.2727C57.8273 44.7273 58.3591 44.507 58.7512 44.1149C59.1433 43.7227 59.3636 43.1909 59.3636 42.6364C59.3636 42.0818 59.1433 41.55 58.7512 41.1579C58.3591 40.7657 57.8273 40.5455 57.2727 40.5455H53.0909V38.4545Z"
            fill="white"
          />
        </svg>
      ),
      head: "Budget",
      text: "Use this section to describe your company and the products you offer. You could share your company’s",
    },
    {
      id: 3,
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 102 102"
          fill="none"
          className="lg:scale-100 md:scale-90 scale-75"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="102" height="102" rx="24" fill="#3461FF" />
          <g clip-path="url(#clip0_1_617)">
            <path
              d="M73.816 38.6254C73.5826 38.0634 73.136 37.6168 72.5741 37.3835C72.2976 37.2656 72.0006 37.2031 71.7001 37.1995H60.2005C59.5906 37.1995 59.0056 37.4418 58.5743 37.8731C58.143 38.3044 57.9006 38.8894 57.9006 39.4994C57.9006 40.1093 58.143 40.6943 58.5743 41.1257C59.0056 41.557 59.5906 41.7993 60.2005 41.7993H66.1573L53.3008 54.6558L45.7341 47.0661C45.5203 46.8505 45.2659 46.6794 44.9857 46.5626C44.7054 46.4459 44.4048 46.3858 44.1012 46.3858C43.7976 46.3858 43.497 46.4459 43.2167 46.5626C42.9364 46.6794 42.6821 46.8505 42.4683 47.0661L28.6688 60.8655C28.4532 61.0793 28.2821 61.3337 28.1654 61.614C28.0486 61.8942 27.9885 62.1948 27.9885 62.4985C27.9885 62.8021 28.0486 63.1027 28.1654 63.3829C28.2821 63.6632 28.4532 63.9176 28.6688 64.1314C28.8826 64.347 29.137 64.5181 29.4172 64.6348C29.6975 64.7516 29.9981 64.8117 30.3017 64.8117C30.6054 64.8117 30.906 64.7516 31.1862 64.6348C31.4665 64.5181 31.7209 64.347 31.9347 64.1314L44.1012 51.9419L51.6679 59.5316C51.8817 59.7471 52.1361 59.9182 52.4163 60.035C52.6966 60.1518 52.9972 60.2119 53.3008 60.2119C53.6044 60.2119 53.905 60.1518 54.1853 60.035C54.4656 59.9182 54.7199 59.7471 54.9338 59.5316L69.4002 45.0422V50.9989C69.4002 51.6089 69.6425 52.1939 70.0738 52.6252C70.5051 53.0565 71.0901 53.2988 71.7001 53.2988C72.3101 53.2988 72.8951 53.0565 73.3264 52.6252C73.7577 52.1939 74 51.6089 74 50.9989V39.4994C73.9964 39.1988 73.9339 38.9019 73.816 38.6254Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_617">
              <rect
                width="46"
                height="46"
                fill="white"
                transform="translate(28 28)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      head: "Performance",
      text: "Use this section to describe your company and the products you offer. You could share your company’s",
    },
    {
      id: 4,
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 102 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:scale-100 md:scale-90 scale-75"
        >
          <rect width="102" height="102" rx="24" fill="#3461FF" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.9895 30.4057C54.4564 30.5525 54.8643 30.8445 55.1538 31.2391C55.4434 31.6337 55.5995 32.1104 55.5995 32.5999V44.0999H64.7995C65.2202 44.0997 65.6329 44.2149 65.9927 44.433C66.3524 44.6511 66.6455 44.9636 66.84 45.3367C67.0345 45.7098 67.1229 46.129 67.0957 46.5488C67.0684 46.9687 66.9265 47.373 66.6855 47.7178L50.5855 70.7178C50.3053 71.1192 49.9043 71.4208 49.4408 71.5786C48.9774 71.7364 48.4757 71.7422 48.0088 71.5952C47.5418 71.4482 47.1339 71.156 46.8445 70.7612C46.5551 70.3663 46.3991 69.8894 46.3995 69.3999V57.8999H37.1995C36.7787 57.9001 36.366 57.7849 36.0063 57.5668C35.6465 57.3487 35.3534 57.0361 35.1589 56.6631C34.9644 56.29 34.876 55.8708 34.9033 55.4509C34.9305 55.0311 35.0724 54.6268 35.3135 54.282L51.4135 31.282C51.6941 30.8813 52.0952 30.5805 52.5584 30.4233C53.0217 30.2662 53.5229 30.2608 53.9895 30.408V30.4057Z"
            fill="white"
          />
        </svg>
      ),
      head: "Speed",
      text: "Use this section to describe your company and the products you offer. You could share your company’s",
    },
  ];
  const sec5 = [
    {
      id: 1,
      src: apple,
      head: "Apple",
      text: "Use this section to describe your ",
    },
    {
      id: 2,
      src: coca,
      head: "Coca-Cola",
      text: "Use this section to describe your ",
    },
    {
      id: 3,
      src: nike,
      head: "Nike",
      text: "Use this section to describe your ",
    },
  ];
  const datas = [
    {
      name: "Amelia Joseph",
      img: sec8img1,
      title: "Chief Manager",
      para: "Use this section to describe your company and the products you offer. You could share your company’s story and details about whyyou are in business.",
    },
    {
      name: "Jacob Joshua",
      img: sec8img2,
      title: "Chief Manager",
      para: "Use this section to describe your company and the products you offer. You could share your company’s story and details about whyyou are in business.",
    },
    {
      name: "Jacob Joshua",
      img: sec8img3,
      title: "Chief Manager",
      para: "Use this section to describe your company and the products you offer. You could share your company’s story and details about whyyou are in business.",
    },
  ];
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(datas.length - 1);
    } else {
      setIndex((index - 1) % datas.length);
    }
  }
  function rightShiftHandler() {
    if (index + 1 >= datas.length) {
      setIndex(0);
    } else {
      setIndex((index + 1) % datas.length);
    }
  }

  return (
    <main className="relative">
      <Navbar />

      <Hero />

      <section className="py-[0.1rem] px-0 my-[2rem] mx-0 w-full bg-[#f5f5f5]">
        <div className="max-w-[85vw] w-full my-5 md:my-[4rem] mx-auto flex flex-col gap-[4rem]">
          <div className="w-full lg:w-[60%] flex items-center justify-center md:justify-start flex-wrap md:flex-nowrap gap-3 md:gap-[4rem]">
            <h1 className="w-full text-center md:text-start md:w-[35%] text-[1.1rem] md:text-[1.5rem] lg:text-[2.1rem] xl:text-[2.5rem] font-semibold lg:leading-[3rem] capitalize">
              Companies we Work with
            </h1>
            <p className="lg:w-[55%] w-[80%] text-[0.6rem] md:text-xs lg:text-base md:text-start text-center font-normal md:leading-[1.7rem] text-[#252525]">
              Use this section to describe your company and the products you
              offer. You could share your company’s story and details about why
              you are in business.{" "}
            </p>
          </div>
          <div className="section2-images max-w-[85vw] w-full flex flex-col gap-5 md:gap-[4rem] relative">
            <div className="h-[50px] w-full z-10 absolute top-[-4rem] bg-gradient-primary">
              {" "}
            </div>
            <img src={frame1} alt="img" className="img2" />
            <img src={frame2} alt="img" className="img2" />
            <div className="h-[50px] w-full z-10 absolute bottom-[-1rem] md:bottom-[-4rem] bg-gradient-primary2">
              {" "}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[85vw] w-full my-5 md:my-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
        <div className="w-[80%] grid grid-cols-2 gap-[2rem] md:mx-0 mx-auto order-2 md:order-1">
          {data.map((val) => {
            return (
              <div className="" key={val.id}>
                <p className="text-[1.5rem] md:text-start text-center md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] font-semibold lg:leading-[5rem]">
                  {val.number}
                </p>
                <p className="text-[0.7rem] text-center md:text-start md:text-sm lg:text-[18px] font-normal lg:leading-[1.8rem] opacity-60">
                  {val.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="w-full flex flex-col gap-3 md:gap-[2rem] order-1 md:order-2">
          <h1 className="text-[1.5rem] lg:text-[2.1rem] xl:text-[2.5rem] text-center md:text-start font-medium capitalize z-1">
            Our Commitments
          </h1>
          <p className="text-[0.7rem] text-center md:text-start md:text-sm lg:text-[18px] font-normal lg:leading-[1.8rem] opacity-60">
            Use this section to describe your company and the products you
            offer. You could share your company’s story and details about why
            you are in business. Use this section to describe your company and
            the products you offer. You could share your company’s story and
            details about why you are in business.{" "}
          </p>
          <a
            href="/"
            className="text-[0.65rem] text-center md:text-start md:text-sm lg:text-[18px] lg:leading-[1.8rem] flex items-center underline font-semibold text-blueC transition-all duration-300 ease-in-out hover:text-black"
          >
            Learn More{" "}
            <BsArrowRightShort className="text-base md:text-[1.75rem]" />
          </a>
        </div>
      </section>
      <section className="max-w-[85vw] my-10 lg:my-20 xl:my-[10rem] mx-auto w-full flex flex-wrap md:flex-nowrap justify-between gap-5 md:gap-[4rem]">
        <div className="w-full md:w-[40%] flex flex-col gap-3 md:gap-[2rem]">
          <h1 className="text-[1.5rem] lg:text-[2.1rem] xl:text-[2.5rem] md:text-start text-center font-medium capitalize z-1">
            How it Works
          </h1>
          <p className="text-[0.7rem] text-center md:text-start md:text-sm lg:text-[18px] font-normal lg:leading-[1.8rem] opacity-60">
            Use this section to describe your company and the products you
            offer. You could share your company’s story and details about why
            you are in business.
          </p>
          <img src={sec4img} className="md:mx-0 mx-auto w-[70%]" alt="d" />
        </div>
        <div className="w-full md:w-[50%] grid grid-cols-2 gap-2 md:gap-5 xl:gap-[2rem] justify-between items-center">
          {sec4.map((val) => {
            return (
              <div
                className="flex flex-col md:items-start items-center gap-1 xl:gap-4"
                key={val.id}
              >
                {val.svg}
                <p className="text-xs md:text-base lg:text-[1.5rem] xl:text-[28px] font-medium lg:leading-[2.5rem]">
                  {val.head}
                </p>
                <p className="text-[0.6rem] md:text-xs text-center md:text-start lg:text-base font-normal opacity-60 sm:leading-[1.5rem]">
                  {val.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-[85vw]  my-10 lg:my-20 xl:my-[10rem] mx-auto w-full flex flex-col items-center gap-4">
        <h1 className="text-[1.5rem] lg:text-[2.1rem] xl:text-[2.5rem] md:text-start text-center font-medium  capitalize z-1">
          Our Work
        </h1>
        <p className="text-[0.7rem] md:text-sm lg:text-[18px] font-normal lg:leading-[1.8rem] opacity-60 w-full md:w-[50%] text-center">
          Use this section to describe your company and the products you offer.
          You could share your company’s story and details about why you are in
          business.{" "}
        </p>
        <div className=" my-3 md:my-[2rem] mx-[0.5rem] xl:gap-0 gap-3 flex flex-wrap max-w-[100%] w-full justify-center xl:justify-between items-center">
          {sec5.map((val) => {
            return (
              <div
                className="flex hover:scale-110 transition-all duration-300 ease-in flex-col gap-[0.3rem] xl:gap-[0.8rem] items-center"
                key={val.id}
              >
                <img
                  src={val.src}
                  alt="img"
                  className="w-[60%] md:w-[70%] lg:w-[80%] xl:w-full"
                />
                <p className="text-xs md:text-base lg:text-[1.5rem] xl:text-[28px] font-medium lg:leading-[2.5rem]">
                  {val.head}
                </p>
                <p className="text-[0.6rem] md:text-xs text-center md:text-start lg:text-base font-normal opacity-60 sm:leading-[1.5rem]">
                  {val.text}
                </p>
              </div>
            );
          })}
        </div>
        <button className="capitalize bg-blueC text-white py-1.5 px-2 md:py-[0.9rem] md:px-[2rem] rounded-[4rem] text-[0.6rem] md:text-xs lg:text-base font-medium border-0 shadow-3xl cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:bg-black">
          see more
        </button>
      </section>

      <section className=" py-4 lg:p-[4rem] max-w-[100vw] w-100% bg-fullP relative">
        <img
          src={sec6img}
          alt="img"
          className="h-[100%] invisible sm:visible absolute top-0 left-0 z-0"
        />
        <div className=" max-w-[85vw] w-full mx-auto flex md:flex-row flex-col flex-wrap md:flex-nowrap justify-between">
          <h1 className="text-[1.5rem] lg:text-[2.1rem] xl:text-[2.5rem] capitalize z-10 w-full md:w-[30%] text-white">
            start your journey with us now
          </h1>
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center gap-[2rem]">
            <p className="text-[0.7rem] md:text-sm lg:text-[18px] font-normal md:leading-[1.8rem] opacity-60 text-white">
              Use this section to describe your company and the products you
              offer. You could share your company’s story and details about why
              you are in business. Use this section to describe your company and
              the products you offer. You could share your company’s story and{" "}
            </p>
            <a
              href="/"
              className="underline text-[0.7rem] md:text-sm lg:text-[18px] flex items-center font-semibold text-white place-self-start z-10 transition-all duration-300 ease-in-out hover:text-black"
            >
              Learn More <BsArrowRightShort />
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-[85vw] my-10 md:my-[3rem] lg:my-[6rem] w-full mx-auto grid grid-cols-1 md:grid-cols-2  gap-4">
        <div className="w-full grid grid-cols-3 gap-4">
          <div>
            <img
              src={sec71}
              alt="img"
              className="hover:scale-105 transition-all duration-300"
            />
          </div>
          <div>
            <img
              src={sec72}
              alt="img"
              className="hover:scale-105 transition-all duration-300"
            />
          </div>
          <div>
            <img
              src={sec73}
              alt="img"
              className="hover:scale-105 transition-all duration-300"
            />
          </div>
          <div>
            <img
              src={sec74}
              alt="img"
              className="hover:scale-105 transition-all duration-300"
            />
          </div>
          <div>
            <img
              src={sec75}
              alt="img"
              className="hover:scale-105 transition-all duration-300"
            />
          </div>
          <div>
            <img
              src={sec76}
              alt="img"
              className="hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:gap-[1rem] lg:gap-[4rem] xl:gap-[5rem] justify-center items-center">
          <div className="justify-self-stretch flex flex-col gap-1 lg:gap-[1rem] justify-start">
            <h1 className="text-[1.5rem] lg:text-[2.1rem] xl:text-[2.5rem] md:text-start text-center font-semibold md:font-medium capitalize z-10">
              Meet Our Team
            </h1>
            <h1 className="text-sm md:text-lg lg:text-[1.5rem] xl:text-[2rem] font-normal capitalize z-10 opacity-60">
              Use this section to describe your company and the{" "}
            </h1>
            <p className="text-[0.7rem] md:text-sm lg:text-[18px] text-center md:text-start font-normal md:leading-[1.8rem] opacity-60 ">
              Use this section to describe your company and the products you
              offer. You could share your company’s story and details about why
              you are in business.{" "}
            </p>
          </div>
          <button className="capitalize bg-blueC text-white py-1.5 px-2 md:py-[0.9rem] md:px-[2rem] rounded-[4rem] text-[0.6rem] md:text-xs lg:text-base font-medium border-0 shadow-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-90">
            Learn More
          </button>
        </div>
      </section>

      <section className="max-w-[90vw] md:max-w-[85vw] my-3 md:my-12  lg:my-[6rem] w-full mx-auto flex  flex-col gap-[3rem]">
        <div className="flex justify-center lg:justify-between">
          <div>
            <h1 className="text-[1.5rem] md:text-3xl lg:text-[2.1rem] xl:text-[2.5rem] sm:text-start text-center font-semibold md:font-medium capitalize z-10">
              What Our Client Said about us
            </h1>
            <p className="text-[0.7rem] md:text-base lg:text-[18px] text-center lg:text-start font-normal md:leading-[1.8rem] opacity-60 ">
              Use this section to describe your company{" "}
            </p>
          </div>
          <div className="lg:flex hidden gap-4 ">
            <div className="bg-blueC flex justify-center items-center cursor-pointer p-[1.75rem] rounded-full opacity-50 transition-all duration-300 ease-in-out hover:opacity-100">
              <FiArrowLeft
                fontSize="2rem"
                color="#fff"
                onClick={leftShiftHandler}
              />
            </div>
            <div className="bg-blueC flex justify-center items-center cursor-pointer p-[1.75rem] rounded-full opacity-50 transition-all duration-300 ease-in-out hover:opacity-100">
              <FiArrowRight
                fontSize="2rem"
                color="#fff"
                onClick={rightShiftHandler}
                className=""
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:flex hidden gap-[3rem]">
          {datas.map((val, i) => {
            return (
              <div
                className={`${
                  index === i ? "bg-blueC" : "bg-[#f8f9ff]"
                } rounded-[30px]  border-none flex flex-col gap-4 p-[2rem] transition-all duration-300 ease-in-out`}
              >
                <div className="flex gap-4 justify-start items-center w-full">
                  <img src={val.img} alt="img" />
                  <div>
                    <h1
                      className={`${
                        index === i ? "text-white" : "text-black"
                      } text-[1.75rem] font-semibold capitalize `}
                    >
                      {val.name}
                    </h1>
                    <p
                      className={`${
                        index === i ? "text-white" : "text-black"
                      } text-[1.25rem] font-medium capitalize`}
                    >
                      {val.title}
                    </p>
                  </div>
                </div>
                <p
                  className={`${
                    index === i ? "text-white" : "text-black"
                  } text-[18px] font-normal `}
                >
                  {val.para}{" "}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full lg:hidden flex items-center gap-3 md:gap-[3rem]">
          <div className="bg-blueC flex justify-center items-center cursor-pointer p-4 lg:p-[1.75rem] rounded-full opacity-50 transition-all duration-300 ease-in-out hover:opacity-100">
            <FiArrowLeft
              fontSize="2rem"
              color="#fff"
              onClick={leftShiftHandler}
            />
          </div>
          <Card data={datas[index]} />
          <div
            className={` bg-blueC flex justify-center items-center cursor-pointer p-4 lg:p-[1.75rem] rounded-full transition-all duration-300 ease-in-out hover:opacity-100 opacity-50`}
          >
            <FiArrowRight
              fontSize="2rem"
              color="#fff"
              onClick={rightShiftHandler}
            />
          </div>
        </div>
      </section>

      <section className="max-w-[90vw] md:flex hidden lg:max-w-[85vw] my-[6rem] md:h-[50vh] lg:h-[65vh] w-full mx-auto  flex-wrap md:flex-nowrap justify-between bg-[#232038] rounded-[56px] lg:py-[4rem] py-8 px-12 lg:px-[7rem]">
        <div className=" lg:w-[40%] xl-w-1/2 flex flex-col justify-between">
          <h1 className= "text-lg md:text-2xl lg:text-4xl xl:text-[4rem] font-medium capitalize text-white">
            start your journey with us now
          </h1>
          <button className="justify-self-end capitalize bg-blueC text-white w-2/3 xl:w-1/2 py-[0.9rem] px-[2rem] rounded-[4rem] text-base xl:text-[1.5rem] border-none font-medium shadow-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-90">
            Start Now
          </button>
        </div>
        <div className="bg-[#e0ff22] place-self-center rounded-full flex items-center justify-center xl:h-[80%]  lg:h-[100%] h-[80%] px-2 lg:px-[6.8%] xl:px-[8.8%]">
          <svg
            width="66"
            height="95"
            viewBox="0 0 66 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[50%] lg:w-[100%]"
          >
            <path
              d="M51.7108 0.404422C52.2891 0.739688 52.7366 1.26117 52.9802 1.88366C53.2239 2.50616 53.2492 3.19288 53.0521 3.83164L42.41 38.411H62.0456C62.6226 38.4108 63.1871 38.5796 63.6693 38.8965C64.1516 39.2134 64.5304 39.6646 64.7592 40.1943C64.9879 40.7241 65.0566 41.3093 64.9566 41.8776C64.8565 42.4459 64.5923 42.9725 64.1965 43.3923L16.9245 93.6187C16.4671 94.1051 15.8585 94.4222 15.1978 94.5184C14.5371 94.6146 13.8633 94.4841 13.2862 94.1483C12.7091 93.8125 12.2628 93.2911 12.02 92.6691C11.7772 92.0472 11.7522 91.3613 11.9492 90.7233L22.5913 56.138H2.95567C2.37863 56.1382 1.81415 55.9695 1.33192 55.6526C0.849685 55.3357 0.470808 54.8845 0.242059 54.3547C0.0133105 53.825 -0.055296 53.2398 0.0447084 52.6715C0.144713 52.1032 0.408949 51.5766 0.804801 51.1567L48.0767 0.930322C48.5336 0.444598 49.1413 0.127695 49.8011 0.0311421C50.4608 -0.0654111 51.1339 0.064063 51.7108 0.398513V0.404422Z"
              fill="#3461FF"
            />
          </svg>
          <svg
            width="136"
            height="82"
            viewBox="0 0 136 82"
            fill="none"
            className="w-[50%] lg:w-[100%]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M134.501 4.185C133.816 2.53564 132.505 1.22496 130.856 0.539999C130.045 0.194123 129.173 0.0106649 128.291 0H94.5411C92.7509 0 91.034 0.71116 89.7681 1.97703C88.5023 3.2429 87.7911 4.95979 87.7911 6.75C87.7911 8.54021 88.5023 10.2571 89.7681 11.523C91.034 12.7888 92.7509 13.5 94.5411 13.5H112.024L74.2911 51.2325L52.0836 28.9575C51.4561 28.3248 50.7095 27.8227 49.887 27.48C49.0644 27.1373 48.1822 26.9609 47.2911 26.9609C46.4 26.9609 45.5177 27.1373 44.6952 27.48C43.8727 27.8227 43.1261 28.3248 42.4986 28.9575L1.99859 69.4575C1.36592 70.085 0.863763 70.8316 0.521075 71.6541C0.178386 72.4767 0.00195312 73.3589 0.00195312 74.25C0.00195313 75.1411 0.178386 76.0233 0.521075 76.8459C0.863763 77.6684 1.36592 78.415 1.99859 79.0425C2.62609 79.6752 3.37265 80.1773 4.1952 80.52C5.01775 80.8627 5.90001 81.0391 6.79109 81.0391C7.68217 81.0391 8.56443 80.8627 9.38698 80.52C10.2095 80.1773 10.9561 79.6752 11.5836 79.0425L47.2911 43.2675L69.4986 65.5425C70.1261 66.1752 70.8727 66.6773 71.6952 67.02C72.5177 67.3627 73.4 67.5391 74.2911 67.5391C75.1822 67.5391 76.0644 67.3627 76.887 67.02C77.7095 66.6773 78.4561 66.1752 79.0836 65.5425L121.541 23.0175V40.5C121.541 42.2902 122.252 44.0071 123.518 45.273C124.784 46.5388 126.501 47.25 128.291 47.25C130.081 47.25 131.798 46.5388 133.064 45.273C134.33 44.0071 135.041 42.2902 135.041 40.5V6.75C135.03 5.86793 134.847 4.9965 134.501 4.185Z"
              fill="#3461FF"
            />
          </svg>
        </div>
      </section>

      <section className="max-w-[85vw] my-10 xl:my-[8rem] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-[2rem] ">
        <div className="flex flex-col gap-[1rem] order-2 md:order-1">
          <div className="flex gap-4 items-center justify-between border-t-[2px] pt-4">
            {" "}
            <h1 className=" text-xs  lg:text-base xl:text-[1.25rem] font-normal md:leading-[2.2rem]">
              How do i sign up for the project?
            </h1>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M10 15C10.2833 15 10.521 14.904 10.713 14.712C10.9043 14.5207 11 14.2833 11 14V11H14.025C14.3083 11 14.5417 10.904 14.725 10.712C14.9083 10.5207 15 10.2833 15 10C15 9.71667 14.904 9.479 14.712 9.287C14.5207 9.09567 14.2833 9 14 9H11V5.975C11 5.69167 10.9043 5.45833 10.713 5.275C10.521 5.09167 10.2833 5 10 5C9.71667 5 9.47933 5.09567 9.288 5.287C9.096 5.479 9 5.71667 9 6V9H5.975C5.69167 9 5.45833 9.09567 5.275 9.287C5.09167 9.479 5 9.71667 5 10C5 10.2833 5.09567 10.5207 5.287 10.712C5.479 10.904 5.71667 11 6 11H9V14.025C9 14.3083 9.096 14.5417 9.288 14.725C9.47933 14.9083 9.71667 15 10 15ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                fill="#3461FF"
              />
            </svg>
          </div>
          <div className="flex gap-4 items-center justify-between border-t-[2px] pt-4">
            {" "}
            <h1 className="text-xs lg:text-base xl:text-[1.25rem] font-normal md:leading-[2.2rem]">
              What thing that i should prepare before starting?
            </h1>{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M10 15C10.2833 15 10.521 14.904 10.713 14.712C10.9043 14.5207 11 14.2833 11 14V11H14.025C14.3083 11 14.5417 10.904 14.725 10.712C14.9083 10.5207 15 10.2833 15 10C15 9.71667 14.904 9.479 14.712 9.287C14.5207 9.09567 14.2833 9 14 9H11V5.975C11 5.69167 10.9043 5.45833 10.713 5.275C10.521 5.09167 10.2833 5 10 5C9.71667 5 9.47933 5.09567 9.288 5.287C9.096 5.479 9 5.71667 9 6V9H5.975C5.69167 9 5.45833 9.09567 5.275 9.287C5.09167 9.479 5 9.71667 5 10C5 10.2833 5.09567 10.5207 5.287 10.712C5.479 10.904 5.71667 11 6 11H9V14.025C9 14.3083 9.096 14.5417 9.288 14.725C9.47933 14.9083 9.71667 15 10 15ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                fill="#3461FF"
              />
            </svg>
          </div>
          <div className="flex gap-4 items-center justify-between border-t-[2px] pt-4 border-b-[2px] pb-[1rem]">
            {" "}
            <h1 className="text-xs  lg:text-base xl:text-[1.25rem] font-normal md:leading-[2.2rem]">
              Does my company need help for marketing advices?
            </h1>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M10 15C10.2833 15 10.521 14.904 10.713 14.712C10.9043 14.5207 11 14.2833 11 14V11H14.025C14.3083 11 14.5417 10.904 14.725 10.712C14.9083 10.5207 15 10.2833 15 10C15 9.71667 14.904 9.479 14.712 9.287C14.5207 9.09567 14.2833 9 14 9H11V5.975C11 5.69167 10.9043 5.45833 10.713 5.275C10.521 5.09167 10.2833 5 10 5C9.71667 5 9.47933 5.09567 9.288 5.287C9.096 5.479 9 5.71667 9 6V9H5.975C5.69167 9 5.45833 9.09567 5.275 9.287C5.09167 9.479 5 9.71667 5 10C5 10.2833 5.09567 10.5207 5.287 10.712C5.479 10.904 5.71667 11 6 11H9V14.025C9 14.3083 9.096 14.5417 9.288 14.725C9.47933 14.9083 9.71667 15 10 15ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                fill="#3461FF"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col order-1 md:order-2 gap-2 md:gap-4 justify-center w-full md:w-[80%]">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] text-center md:text-start font-medium leading-[3.5rem] capitalize ">
            How we can help you?
          </h1>
          <p className="text-xs  lg:text-base xl:text-[1.25rem] font-normal text-center md:text-start lg:leading-[2.2rem] opacity-60">
            Follow our newsletter. We will regulary update our latest project
            and availability.
          </p>
          <div className="flex lg:flex-row flex-col items-center gap-2 lg:gap-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="lg:w-[67%] w-[70%] py-2 px-3 lg:p-4 border-none rounded-[70px] text-[0.7rem] md:text-sm xl:text-base font-medium bg-[#fafafa] flex-grow-0"
            />
            <button className="px-2 lg:p-0 w-[40%] py-2 md:py-3 lg:h-[53px] lg:w-[30%] border-none rounded-[70px] text-[0.7rem] md:text-sm xl:text-base font-medium text-white bg-blueC shadow-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Let's Talk
            </button>
          </div>
          <a
            href="/"
            className="underline text-xs md:text-sm xl:text-[18px] flex items-center font-semibold text-blueC place-self-start z-10 cursor-pointer transition-all duration-300 ease-in-out hover:text-black"
          >
            More FAQ <BsArrowRightShort />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
