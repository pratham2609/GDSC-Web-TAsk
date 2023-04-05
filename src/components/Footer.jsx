import React from "react";

export default function Footer() {
  return (
    <div className="mt-10 xl:mt-[5rem] w-screen">
      <div className="bg-[#fafafa]">
        <div className="w-full max-w-[85vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[2rem] py-8 xl:py-[4rem] items-center">
          <div className="flex flex-col gap-2 lg:gap-[1.5rem] order-2 md:order-1">
            <div className="flex items-center">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-[1.2rem] w-[0.8rem]"
              >
                <circle cx="9.5" cy="9.5" r="9.5" fill="#3461FF" />
              </svg>
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-[1.2rem]  w-[0.8rem]"

              >
                <path
                  d="M16.5192 9.63622C17.1807 10.0221 17.1807 10.9779 16.5192 11.3638L1.50387 20.1227C0.837211 20.5116 -8.75572e-07 20.0308 -8.41836e-07 19.259L-7.61032e-08 1.74104C-4.23671e-08 0.969246 0.837213 0.488374 1.50387 0.877257L9 5.25L16.5192 9.63622Z"
                  fill="#3461FF"
                />
              </svg>
              <p className="md:text-base xl:text-[1.83rem] items-center font-helvetica font-bold">Embrace</p>
            </div>
            <h1 className="font-medium md:text-sm text-xs xl:text-base">Los Angeles, California, USA</h1>
            <div className="flex">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9997 2.33325C17.1695 2.33325 17.565 2.34492 18.8087 2.40325C20.0512 2.46159 20.897 2.65642 21.6413 2.94575C22.4113 3.24209 23.06 3.64342 23.7087 4.29092C24.3019 4.87413 24.761 5.57961 25.0538 6.35825C25.342 7.10142 25.538 7.94842 25.5963 9.19092C25.6512 10.4346 25.6663 10.8301 25.6663 13.9999C25.6663 17.1698 25.6547 17.5653 25.5963 18.8089C25.538 20.0514 25.342 20.8973 25.0538 21.6416C24.7618 22.4207 24.3027 23.1263 23.7087 23.7089C23.1253 24.302 22.4199 24.761 21.6413 25.0541C20.8982 25.3423 20.0512 25.5383 18.8087 25.5966C17.565 25.6514 17.1695 25.6666 13.9997 25.6666C10.8298 25.6666 10.4343 25.6549 9.19067 25.5966C7.94817 25.5383 7.10234 25.3423 6.35801 25.0541C5.57906 24.7618 4.87346 24.3027 4.29067 23.7089C3.69732 23.1258 3.23826 22.4203 2.94551 21.6416C2.65617 20.8984 2.46134 20.0514 2.40301 18.8089C2.34817 17.5653 2.33301 17.1698 2.33301 13.9999C2.33301 10.8301 2.34467 10.4346 2.40301 9.19092C2.46134 7.94725 2.65617 7.10259 2.94551 6.35825C3.23745 5.57913 3.69661 4.87346 4.29067 4.29092C4.87362 3.69736 5.57917 3.23827 6.35801 2.94575C7.10234 2.65642 7.94701 2.46159 9.19067 2.40325C10.4343 2.34842 10.8298 2.33325 13.9997 2.33325ZM13.9997 8.16659C12.4526 8.16659 10.9688 8.78117 9.87489 9.87513C8.78092 10.9691 8.16634 12.4528 8.16634 13.9999C8.16634 15.547 8.78092 17.0307 9.87489 18.1247C10.9688 19.2187 12.4526 19.8333 13.9997 19.8333C15.5468 19.8333 17.0305 19.2187 18.1245 18.1247C19.2184 17.0307 19.833 15.547 19.833 13.9999C19.833 12.4528 19.2184 10.9691 18.1245 9.87513C17.0305 8.78117 15.5468 8.16659 13.9997 8.16659ZM21.583 7.87492C21.583 7.48814 21.4294 7.11721 21.1559 6.84372C20.8824 6.57023 20.5114 6.41659 20.1247 6.41659C19.7379 6.41659 19.367 6.57023 19.0935 6.84372C18.82 7.11721 18.6663 7.48814 18.6663 7.87492C18.6663 8.26169 18.82 8.63263 19.0935 8.90612C19.367 9.17961 19.7379 9.33325 20.1247 9.33325C20.5114 9.33325 20.8824 9.17961 21.1559 8.90612C21.4294 8.63263 21.583 8.26169 21.583 7.87492ZM13.9997 10.4999C14.9279 10.4999 15.8182 10.8687 16.4745 11.525C17.1309 12.1814 17.4997 13.0717 17.4997 13.9999C17.4997 14.9282 17.1309 15.8184 16.4745 16.4748C15.8182 17.1312 14.9279 17.4999 13.9997 17.4999C13.0714 17.4999 12.1812 17.1312 11.5248 16.4748C10.8684 15.8184 10.4997 14.9282 10.4997 13.9999C10.4997 13.0717 10.8684 12.1814 11.5248 11.525C12.1812 10.8687 13.0714 10.4999 13.9997 10.4999Z"
                  fill="#3461FF"
                />
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.539 23.501C18.596 23.501 23.5505 15.9965 23.5505 9.50004C23.5505 9.29004 23.5505 9.07704 23.5415 8.86704C24.5061 8.16877 25.3386 7.30427 26 6.31404C25.099 6.71132 24.1441 6.97315 23.1665 7.09104C24.1963 6.4755 24.9676 5.50699 25.337 4.36554C24.3695 4.93873 23.3105 5.3411 22.2065 5.55504C21.4643 4.76458 20.4821 4.24092 19.4121 4.06518C18.3421 3.88944 17.2441 4.07142 16.288 4.58295C15.3319 5.09447 14.5712 5.90698 14.1237 6.89463C13.6761 7.88228 13.5668 8.98994 13.8125 10.046C11.8546 9.94787 9.93922 9.43924 8.19056 8.55315C6.4419 7.66707 4.89903 6.42331 3.662 4.90254C3.03401 5.98716 2.84236 7.27014 3.12597 8.49094C3.40958 9.71174 4.14718 10.7788 5.189 11.4755C4.40831 11.449 3.64478 11.2394 2.96 10.8635V10.931C2.96135 12.0673 3.35496 13.1682 4.07431 14.0477C4.79366 14.9272 5.79462 15.5314 6.908 15.758C6.48539 15.8745 6.04884 15.9325 5.6105 15.9305C5.30148 15.9315 4.99307 15.9028 4.6895 15.845C5.00418 16.8231 5.61691 17.6783 6.44187 18.2908C7.26683 18.9032 8.2627 19.2423 9.29 19.2605C7.54483 20.6312 5.3891 21.3746 3.17 21.371C2.77898 21.3727 2.38823 21.3501 2 21.3035C4.25227 22.7394 6.86795 23.5019 9.539 23.501Z"
                  fill="#3461FF"
                />
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.6663 13.9999C25.6663 7.55992 20.4397 2.33325 13.9997 2.33325C7.55967 2.33325 2.33301 7.55992 2.33301 13.9999C2.33301 19.6466 6.34634 24.3483 11.6663 25.4333V17.4999H9.33301V13.9999H11.6663V11.0833C11.6663 8.83159 13.498 6.99992 15.7497 6.99992H18.6663V10.4999H16.333C15.6913 10.4999 15.1663 11.0249 15.1663 11.6666V13.9999H18.6663V17.4999H15.1663V25.6083C21.058 25.0249 25.6663 20.0549 25.6663 13.9999Z"
                  fill="#3461FF"
                />
              </svg>
            </div>
            <button className="capitalize bg-blueC w-1/2 text-white lg:py-[0.9rem] px-3 py-2 lg:px-[2rem] rounded-[4rem] mx-auto md:mx-0 text-[0.75rem] md:text-lg xl:text-[1.5rem] font-medium mt-1 md:mt-4 lg:mt-[1.5rem] shadow-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-90 hover:bg-black">contact us</button>
          </div>
          <div className="grid order-1 md:order-2 grid-cols-3 w-full md:w-[80%]  gap-2 md:gap-6 xl:gap-[3rem] justify-start cursor-pointer">
            <p className="font-medium text-[0.8rem] md:text-xs lg:text-sm xl:text-base cursor-pointer">Work With Us</p>
            <p className="font-medium md:text-xs text-[0.7rem] sm:text-[0.8rem] lg:text-sm xl:text-base cursor-pointer">Private Coaching</p>
            <p className="font-medium md:text-xs text-[0.7rem] sm:text-[0.8rem] lg:text-sm xl:text-base cursor-pointer">About Us</p>
            <p className="font-medium md:text-xs text-[0.7rem] sm:text-[0.8rem] lg:text-sm xl:text-base cursor-pointer">Advertise With Us</p>
            <p className="font-medium md:text-xs text-[0.7rem] sm:text-[0.8rem] lg:text-sm xl:text-base cursor-pointer">Our Work</p>
            <p className="font-medium md:text-xs text-[0.7rem] sm:text-[0.8rem] lg:text-sm xl:text-base cursor-pointer">FAQs</p>
            <p className="font-medium md:text-xs text-[0.7rem] sm:text-[0.8rem] lg:text-sm xl:text-base cursor-pointer">Support Us</p>
            <p className="font-medium md:text-xs text-[0.7rem] sm:text-[0.8rem] lg:text-sm xl:text-base cursor-pointer">Our Commitment</p>
            <p className="font-medium md:text-xs text-[0.7rem] sm:text-[0.8rem] lg:text-sm xl:text-base cursor-pointer">Report a Bug</p>
            <p className="font-medium md:text-xs text-[0.7rem] sm:text-[0.8rem] lg:text-sm xl:text-base cursor-pointer">Business Advices</p>
            <p className="font-medium md:text-xs text-[0.7rem] sm:text-[0.8rem] lg:text-sm xl:text-base cursor-pointer">Our Team</p>
          </div>
        </div>
      </div>

      <div className="bg-black opacity-80">
        <div className="mx-auto max-w-[85vw] py-4 lg:py-[2rem] w-full flex justify-between items-center">
          <p className="font-medium  text-[0.6rem] md:text-xs xl:text-[14px] text-white">© 2022 Embrace, Inc. - All Rights Reserved</p>
          <div className="flex gap-3 lg:gap-[7rem] items-center">
            <p className="font-medium text-[0.6rem] md:text-xs xl:text-[14px] text-white cursor-pointer">Terms of use</p>
            <p className="font-medium text-[0.6rem] md:text-xs xl:text-[14px] text-white cursor-pointer">Privacy policy </p>
          </div>
        </div>
      </div>
    </div>
  );
}
