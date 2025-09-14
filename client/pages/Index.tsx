import { useState } from "react";
import { ContainerScroll, BentoCell, ContainerScale, BentoGrid } from "@/components/blocks/hero-gallery-scroll-animation";

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-70">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/20f11bd0b35586aa58049325fd549745484b68dd?width=3456"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 lg:px-32 py-10">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/ed6e4771cca7901c27131835d0b412df00f31b93?width=218"
            alt="ananya logo"
            className="h-11"
          />
          <div className="w-1.5 h-1.5 bg-[#B7EA01] rounded-full ml-1"></div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-[#B1B5B9] rounded-full px-4 py-3 w-48">
          <svg width="35" height="41" viewBox="0 0 35 41" fill="none" className="w-8 h-8">
            <path d="M17.4976 0C7.84759 0 0 7.71901 0 17.2001C0 26.2881 7.2146 33.7458 16.307 34.3493C16.3635 34.3447 16.4223 34.3424 16.4835 34.3355C16.6246 34.3193 16.7847 34.273 16.907 34.206C17.1965 34.0464 17.2694 33.7504 17.3094 33.4452C17.347 33.1677 17.347 32.8208 17.2035 32.5664C17.0906 32.3699 16.8105 32.1502 16.5729 32.134C8.60293 31.6646 2.26603 25.1457 2.26368 17.2001C2.26368 8.94693 9.09237 2.23153 17.4929 2.22922C25.8912 2.22922 32.7246 8.93999 32.7269 17.1955C32.7269 18.8466 32.4492 20.4306 31.9433 21.9175C31.9433 21.9291 31.9433 21.9384 31.9386 21.9499C31.8563 22.1997 31.7739 22.5488 31.9457 22.7801C32.0939 22.979 32.3692 23.1293 32.5998 23.2171C32.8869 23.3258 33.2234 23.3559 33.5081 23.2287C33.7081 23.1408 33.927 22.9743 34.0399 22.7755C34.6541 21.0249 34.9929 19.1472 34.9929 17.1932C34.9977 7.71207 27.1454 0 17.4976 0Z" fill="#3C4618"/>
            <path d="M26.6512 19.3645C26.6394 19.5402 26.6135 19.7229 26.6488 19.894C26.6818 20.0628 26.7853 20.2016 26.91 20.3195C27.1383 20.5299 27.4442 20.6456 27.7524 20.6756C28.0183 20.7034 28.3337 20.6826 28.5407 20.4976C28.6654 20.3866 28.7337 20.2201 28.7996 20.0698C28.8113 20.042 28.8231 20.0143 28.8349 19.9865C29.0537 19.1124 29.1714 18.2013 29.1714 17.2624C29.1714 10.9378 23.9334 5.79261 17.4976 5.79492C11.0619 5.79724 5.82626 10.9425 5.82861 17.2671C5.82861 22.9141 10.0077 27.6153 15.4834 28.5565C15.5187 28.5565 15.5516 28.5542 15.5869 28.5496C15.761 28.5311 15.9375 28.4987 16.0928 28.4201C16.3634 28.286 16.6176 28.0501 16.6623 27.7425C16.7093 27.435 16.6576 27.0557 16.4929 26.7898C16.4081 26.6534 16.3093 26.5655 16.1634 26.5007C16.0787 26.4637 15.9893 26.4036 15.8952 26.3666C15.8058 26.3527 15.7187 26.3342 15.6316 26.3157C11.3419 25.4624 8.09935 21.7324 8.09935 17.2671C8.09935 12.1727 12.3161 8.02645 17.5 8.02645C22.6839 8.02645 26.903 12.1704 26.903 17.2647C26.903 17.9885 26.8136 18.6915 26.6512 19.3668V19.3645Z" fill="#3C4618"/>
            <path d="M18.0001 19.7106C17.9911 19.1168 18.4649 18.8329 18.9729 19.1021C20.796 20.0628 22.6155 21.0291 24.4368 21.9917C26.8093 23.2438 29.1801 24.4977 31.5544 25.7443C31.812 25.8789 31.9868 26.0578 31.9994 26.3639C32.012 26.6589 31.83 26.8931 31.5166 26.9908C30.3943 27.3412 29.272 27.6897 28.1514 28.0419C27.7479 28.1692 27.5624 28.4107 27.6128 28.7703C27.6308 28.8939 27.6939 29.0193 27.7641 29.1244C29.0432 31.0422 30.3258 32.9581 31.6085 34.8741C31.9616 35.4015 31.9075 35.702 31.3869 36.0672C30.5636 36.6443 29.7403 37.2197 28.9153 37.795C28.4451 38.1232 28.1478 38.0624 27.8218 37.5756C26.5499 35.6725 25.2781 33.7695 24.0008 31.8701C23.9036 31.7263 23.7739 31.5806 23.6261 31.5032C23.3397 31.352 23.0713 31.4552 22.8317 31.7687C22.1597 32.6428 21.4914 33.5187 20.8212 34.3946C20.7708 34.4592 20.7204 34.5219 20.6717 34.5882C20.5042 34.8187 20.2898 34.9515 20.0052 34.8722C19.7007 34.7874 19.5404 34.5661 19.5098 34.2453C19.4593 33.7381 19.4071 33.2292 19.3548 32.7221C19.1855 31.092 19.0144 29.4637 18.845 27.8336C18.6775 26.22 18.5099 24.6065 18.3406 22.993C18.2343 21.9696 18.128 20.9461 18.0217 19.9227C18.0127 19.8415 18.0055 19.7586 18.0019 19.7125L18.0001 19.7106Z" fill="#3C4618"/>
          </svg>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className="w-6 h-6">
              <path d="M12.6618 0C13.1271 0.165212 13.2852 0.503146 13.2843 0.98418C13.2768 6.80248 13.2793 12.6212 13.2793 18.4395V18.7274C13.3631 18.6485 13.4182 18.6014 13.4682 18.5496C15.6915 16.2575 17.9147 13.9654 20.1359 11.6716C20.3069 11.4952 20.4924 11.365 20.7476 11.3621C21.0791 11.3579 21.328 11.5035 21.4706 11.7976C21.6124 12.0905 21.5753 12.378 21.3718 12.6375C21.3334 12.6863 21.2867 12.7288 21.2434 12.7739C18.8208 15.2788 16.3945 17.7799 13.9803 20.2931C13.6496 20.6373 13.3173 20.9477 12.8298 21.0216C12.2186 21.1142 11.6678 20.9836 11.2266 20.5272C10.3197 19.5889 9.4199 18.6439 8.51342 17.7052C6.9031 16.0372 5.28986 14.3718 3.6787 12.7046C3.33554 12.3496 3.32387 11.8694 3.64785 11.5544C3.9735 11.2378 4.45176 11.2582 4.79617 11.6128C7.03402 13.9195 9.27063 16.2279 11.5068 18.5367C11.5598 18.5914 11.6048 18.6527 11.6536 18.7111C11.6728 18.7053 11.6915 18.6994 11.7107 18.6936V18.4399C11.7107 12.6216 11.7132 6.8029 11.7057 0.984597C11.7049 0.503146 11.8633 0.165629 12.3287 0.000834404H12.6618V0Z" fill="#AA6829"/>
              <path d="M12.479 24.9997C9.02273 24.9997 5.5665 24.9997 2.11028 24.9997C0.861465 24.9997 0.00126521 24.1415 0.00126521 22.8966C0.00126521 21.7789 -0.00248747 20.6608 0.00293308 19.5431C0.00543487 18.9874 0.523723 18.6169 1.03659 18.7934C1.34723 18.9002 1.54654 19.1684 1.55947 19.5227C1.56947 19.8001 1.56322 20.078 1.56322 20.3558C1.56322 21.2027 1.56322 22.0501 1.56322 22.897C1.56322 23.2666 1.725 23.4368 2.09068 23.4368C9.03107 23.4368 15.971 23.4368 22.9114 23.436C23.2642 23.436 23.4276 23.2675 23.4281 22.9066C23.4297 21.8098 23.431 20.7125 23.4272 19.6157C23.426 19.2473 23.5615 18.964 23.9076 18.8134C24.4025 18.5981 24.9792 18.9507 24.985 19.4934C24.9983 20.7083 25.0138 21.9241 24.9792 23.1381C24.9491 24.179 24.0356 24.9993 22.9731 25.0001C19.4752 25.0022 15.9773 25.0009 12.4794 25.0009L12.479 24.9997Z" fill="#AA6829"/>
            </svg>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className="w-6 h-6">
              <path d="M5.28239 19.015C5.36027 18.4515 5.44204 17.8552 5.52603 17.2595C5.62671 16.5442 5.7246 15.8289 5.83418 15.1152C5.86144 14.9383 5.80192 14.8243 5.68011 14.703C3.89458 12.9236 2.1135 11.1398 0.331873 9.35706C-0.203785 8.82085 -0.0836376 8.31134 0.638916 8.06381C8.39121 5.40723 16.1446 2.75121 23.8986 0.0990728C24.0699 0.040668 24.2618 -0.0143993 24.4365 0.00340024C24.8937 0.0495678 25.1106 0.479538 24.9443 0.969582C24.5433 2.15214 24.1389 3.33358 23.7345 4.51447C21.4773 11.1131 19.2195 17.7112 16.9617 24.3098C16.9378 24.3799 16.9178 24.4511 16.89 24.5201C16.6814 25.0401 16.1569 25.1597 15.7502 24.7692C15.3492 24.3843 14.9598 23.9866 14.5666 23.5939C13.1437 22.1727 11.7192 20.7532 10.3019 19.3259C10.1673 19.1908 10.041 19.1579 9.86024 19.1835C8.59535 19.3643 7.32935 19.5378 6.06335 19.7097C5.63449 19.7681 5.28851 19.4705 5.28128 19.015H5.28239ZM15.9844 23.051C18.1143 16.8234 20.2463 10.5897 22.3789 4.35539C22.3567 4.34538 22.3339 4.33537 22.3116 4.32535C18.6266 9.01108 14.9415 13.6974 11.2887 18.3425C12.8695 19.9278 14.4181 21.4802 15.985 23.051H15.9844ZM1.96499 9.01776C3.53525 10.593 5.08938 12.1521 6.65853 13.7263C11.3231 10.0574 16.005 6.37453 20.6869 2.69169L20.6524 2.63217C14.4164 4.76311 8.1804 6.89405 1.96443 9.01776H1.96499ZM20.1907 4.85545C20.1785 4.84321 20.1668 4.83153 20.1545 4.81929C20.105 4.85266 20.0533 4.88326 20.0066 4.92053C15.7886 8.23625 11.5707 11.552 7.35772 14.8733C7.26872 14.9433 7.19975 15.0741 7.1775 15.1875C7.11131 15.5235 7.07181 15.8645 7.02453 16.2038C6.93053 16.8785 6.83819 17.5538 6.74252 18.249C6.81984 18.244 6.86434 18.2446 6.90772 18.2385C7.86223 18.1089 8.81729 17.9848 9.76901 17.8402C9.90474 17.8196 10.0627 17.7295 10.1478 17.6216C13.27 13.6646 16.3849 9.70193 19.501 5.7393C19.7318 5.44561 19.9604 5.15025 19.1901 4.85545H20.1907Z" fill="#AA6829"/>
            </svg>
          </div>
          <div className="text-[#5A5757] text-lg font-semibold">8:55 PM ET</div>
        </div>
      </header>

      {/* Tagline */}
      <div className="relative z-10 px-8 lg:px-32 mb-4">
        <p className="text-[#A6A5A5] text-sm italic">Strategic, Human-Centered Designer</p>
      </div>

      {/* Main Content Grid */}
      <ContainerScroll className="h-[350vh]">
        <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-6 md:p-8">
          {/* Phrase Card */}
          <BentoCell className="relative bg-[#161616] rounded-3xl p-8 lg:p-16 flex flex-col justify-center overflow-hidden">
            <div className="absolute top-6 right-6">
              <svg width="59" height="55" viewBox="0 0 59 55" fill="none" className="w-12 h-12">
                <g clipPath="url(#clip0_1228_3273)">
                  <path d="M38.8068 13.0605C41.2224 8.99824 43.6184 4.85938 43.6474 4.80905C43.8203 4.49611 43.8524 4.14015 43.7381 3.8046C43.6231 3.46979 43.3758 3.19625 43.0401 3.03504C42.3476 2.70168 41.4939 2.95626 41.1324 3.61057C41.1105 3.65288 38.8803 7.87198 36.7292 12.0612C32.1352 21.0071 32.2361 21.0552 32.8926 21.371C33.0006 21.4228 33.0929 21.4673 33.1962 21.4673C33.719 21.4673 34.4975 20.3104 38.8076 13.0605H38.8068Z" fill="#AA6829"/>
                </g>
              </svg>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold italic leading-tight">
              Designing{" "}
              <span className="text-[#B7EA01]">clarity</span>
              <span className="text-[#B7EA01]">, behavior</span>
              <span className="text-white">,</span>
              <br />
              and <span className="text-[#B7EA01]">systems</span>{" "}
              <span className="font-bold">with intent.</span>
            </h1>
          </BentoCell>

          {/* Case Studies Card */}
          <BentoCell className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/99d2361e61ebd13201bcfd5b1d47e25802d55845?width=1321"
              alt="Case Studies"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[#B7EA01] text-lg mb-2">Product & Design Strategy</p>
              <div className="flex items-center justify-between">
                <h2 className="text-white text-3xl lg:text-4xl font-medium">Case Studies</h2>
                <svg width="20" height="20" viewBox="0 0 14 20" fill="none" className="w-5 h-5 transform rotate-45">
                  <path d="M12.093 1.80101C12.003 1.20517 11.5318 0.782254 11.0405 0.856399L3.03333 2.06467C2.54197 2.13881 2.21654 2.68194 2.30645 3.27778C2.39636 3.87361 2.86757 4.29653 3.35893 4.22238L10.4764 3.14837L11.7788 11.7792C11.8687 12.3751 12.3399 12.798 12.8313 12.7238C13.3226 12.6497 13.6481 12.1066 13.5581 11.5107L12.093 1.80101ZM0.98877 18.9824L1.73299 19.6504L11.9475 2.6032L11.2033 1.93526L10.4591 1.26732L0.244553 18.3145L0.98877 18.9824Z" fill="#AA6829"/>
                </svg>
              </div>
            </div>
          </BentoCell>

          {/* About Card */}
          <BentoCell className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/cb3c225e6062eedbd97f60b6c69a6a8bf60f7966?width=800"
              alt="About"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <h2 className="text-white text-3xl lg:text-4xl font-medium">About</h2>
              <svg width="15" height="17" viewBox="0 0 15 17" fill="none" className="w-4 h-4 transform rotate-45">
                <path d="M13.4884 0.847944C13.4044 0.302082 12.8938 -0.0723491 12.3479 0.0116294L3.4526 1.38014C2.90673 1.46412 2.5323 1.97471 2.61628 2.52057C2.70026 3.06644 3.21085 3.44087 3.75671 3.85689L11.6637 2.14043L12.8801 10.0474C12.9641 10.5933 13.4747 10.9677 14.0206 10.8837C14.5664 10.7997 14.9409 10.2892 14.8569 9.74329L13.4884 0.847944ZM1.5 16L2.3064 16.5914L13.3064 1.59137L12.5 1L11.6936 0.408638L0.693595 15.4086L1.5 16Z" fill="#AA6829"/>
              </svg>
            </div>
          </BentoCell>

          {/* Resume and Let's Talk Column */}
          <BentoCell className="flex flex-col gap-6 p-6">
            {/* Resume Card */}
            <div className="border-2 border-[#5A5757] rounded-3xl p-8 h-48 flex items-center justify-center gap-6 cursor-pointer hover:border-[#B7EA01] transition-colors">
              <h2 className="text-white text-3xl lg:text-4xl font-medium">Resume</h2>
              <div className="flex flex-col gap-1">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" className="w-6 h-6">
                  <g clipPath="url(#clip0_1228_3301)">
                    <path d="M7.77199 0.604803C8.62518 0.604803 9.47836 0.618175 10.3311 0.600346C10.9093 0.58831 11.228 1.01667 11.228 1.41116C11.228 1.78648 10.9168 2.21796 10.3209 2.21261C8.72636 2.19746 7.13142 2.20548 5.53649 2.20816C4.51212 2.20994 3.63709 2.56654 2.95195 3.33946C2.38316 3.98134 2.10545 4.73733 2.10634 5.59673C2.10768 7.22103 2.10768 8.84578 2.10634 10.4701C2.1059 10.9426 1.80278 11.2943 1.37663 11.3295C0.896096 11.3692 0.510065 11.0099 0.506499 10.5017C0.500259 9.58929 0.504716 8.67684 0.504716 7.76484C0.504716 7.0307 0.50427 6.29611 0.504716 5.56196C0.506499 2.88525 2.64527 0.681472 5.3243 0.611043C6.1396 0.589648 6.95624 0.607923 7.77199 0.607923C7.77199 0.607032 7.77199 0.605695 7.77199 0.604803Z" fill="#AA6829"/>
                  </g>
                </svg>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className="w-6 h-6">
                  <g clipPath="url(#clip0_1228_3306)">
                    <path d="M13.1623 0.100098C13.6276 0.26531 13.7857 0.603243 13.7848 1.08428C13.7773 6.90258 13.7798 12.7213 13.7798 18.5396V18.8275C13.8636 18.7486 13.9187 18.7015 13.9687 18.6497C16.192 16.3576 18.4152 14.0655 20.6364 11.7717C20.8074 11.5953 20.9929 11.4651 21.2481 11.4622C21.5796 11.458 21.8285 11.6036 21.9711 11.8977C22.1129 12.1906 22.0758 12.4781 21.8723 12.7376C21.8339 12.7864 21.7872 12.8289 21.7439 12.874C19.3213 15.3789 16.895 17.88 14.4807 20.3932C14.1501 20.7374 13.8178 21.0478 13.3303 21.1217C12.7191 21.2143 12.1683 21.0837 11.7271 20.6273C10.8202 19.689 9.92039 18.744 9.01391 17.8053C7.40359 16.1373 5.79035 14.4719 4.17919 12.8047C3.83603 12.4497 3.82435 11.9695 4.14834 11.6545C4.47399 11.3379 4.95225 11.3583 5.29666 11.7129C7.53451 14.0196 9.77112 16.328 12.0073 18.6368C12.0603 18.6915 12.1053 18.7528 12.1541 18.8112C12.1733 18.8054 12.192 18.7995 12.2112 18.7937V18.54C12.2112 12.7217 12.2137 6.903 12.2062 1.08469C12.2054 0.603243 12.3638 0.265727 12.8291 0.100932H13.1623V0.100098Z" fill="#AA6829"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* Let's Talk Card */}
            <div className="border-2 border-[#5A5757] rounded-3xl p-8 h-48 flex flex-col items-center justify-between cursor-pointer hover:border-[#B7EA01] transition-colors">
              <svg width="85" height="72" viewBox="0 0 85 72" fill="none" className="w-16 h-16">
                <path d="M20.8977 4.39233C20.8977 3.47177 20.8997 2.65985 20.8977 1.84794C20.8937 1.20986 21.1274 0.700195 21.8306 0.700195C22.5237 0.700195 22.7794 1.19406 22.7754 1.84201C22.7694 2.65393 22.7754 3.46781 22.7754 4.33504H62.2231C62.2231 3.54683 62.2351 2.74282 62.2191 1.93881C62.2072 1.26913 62.3929 0.696244 63.162 0.706122C63.9171 0.715999 64.1148 1.28493 64.1028 1.95461C64.0889 2.73294 64.0988 3.51127 64.0988 4.39035C64.5902 4.39035 64.9478 4.39035 65.3034 4.39035C68.5274 4.39035 71.7515 4.37258 74.9755 4.39628C80.5827 4.43777 84.9773 8.75612 84.9853 14.2874C85.0053 30.1306 85.0073 45.9718 84.9853 61.815C84.9773 67.3404 80.5507 71.6864 74.9536 71.6883C53.316 71.7022 31.6805 71.7022 10.043 71.6883C4.44384 71.6844 0.0232494 67.3404 0.0152591 61.813C-0.00671398 46.0034 -0.00671398 30.1938 0.0152591 14.3842C0.0232494 8.74624 4.33597 4.46937 10.031 4.39826C13.2551 4.35875 16.4791 4.39035 19.7032 4.38838C20.0587 4.38838 20.4143 4.38838 20.8997 4.38838L20.8977 4.39233Z" fill="white"/>
              </svg>
              <div className="flex items-center justify-between w-full">
                <h2 className="text-white text-3xl lg:text-4xl font-medium">Let's Talk</h2>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="w-8 h-8">
                  <path d="M8.31794 28.8409C8.4332 28.007 8.55421 27.1245 8.67852 26.2428C8.82753 25.1841 8.97241 24.1255 9.13459 23.0693C9.17493 22.8075 9.08684 22.6387 8.90656 22.4592C6.26398 19.8257 3.62799 17.1856 0.991171 14.5472C0.198398 13.7536 0.376216 12.9995 1.4456 12.6332C12.919 8.70143 24.394 4.77051 35.8699 0.845358C36.1235 0.758919 36.4075 0.677419 36.666 0.703763C37.3427 0.772091 37.6637 1.40845 37.4176 2.13371C36.824 3.8839 36.2255 5.63244 35.627 7.38015C32.2864 17.1461 28.9449 26.9113 25.6034 36.6772C25.568 36.781 25.5383 36.8863 25.4972 36.9884C25.1885 37.7581 24.4121 37.9351 23.8104 37.3572C23.2168 36.7875 22.6406 36.1989 22.0585 35.6177C19.9527 33.5144 17.8444 31.4135 15.7468 29.3011C15.5476 29.1011 15.3607 29.0525 15.0932 29.0903C13.2211 29.3579 11.3474 29.6147 9.47376 29.8691C8.83905 29.9556 8.327 29.5151 8.3163 28.8409H8.31794Z" fill="#AA6829"/>
                </svg>
              </div>
            </div>
          </BentoCell>

          {/* Archives Card */}
          <BentoCell className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/0d4e5d5f7218b67674e03329cf729ca2418e0f2a?width=1176"
              alt="Archives"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[#B7EA01] text-lg mb-2">Brand & Visuals</p>
              <div className="flex items-center justify-between">
                <h2 className="text-white text-3xl lg:text-4xl font-medium">Archives</h2>
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" className="w-4 h-4 transform rotate-45">
                  <path d="M13.4884 1.34794C13.4044 0.802082 12.8938 0.427651 12.3479 0.511629L3.4526 1.88014C2.90673 1.96412 2.5323 2.47471 2.61628 3.02057C2.70026 3.56644 3.21085 3.94087 3.75671 3.85689L11.6637 2.64043L12.8801 10.5474C12.9641 11.0933 13.4747 11.4677 14.0206 11.3837C14.5664 11.2997 14.9409 10.7892 14.8569 10.2433L13.4884 1.34794ZM1.5 16.5L2.3064 17.0914L13.3064 2.09137L12.5 1.5L11.6936 0.908638L0.693595 15.9086L1.5 16.5Z" fill="#AA6829"/>
                </svg>
              </div>
            </div>
          </BentoCell>
        </BentoGrid>

        <ContainerScale className="relative z-10 flex items-center justify-center px-4">
          {/* Card with Pixel Perfect Figma Matching */}
          <div 
            className="relative overflow-hidden rounded-3xl"
            style={{
              width: '759.4px',
              height: '593.7px',
              maxWidth: '90vw',
              maxHeight: '80vh'
            }}
          >
            {/* Background Image - Exact Figma Match */}
            <div className="absolute inset-0">
              <img 
                src="/images/morphism-background-new.png"
                alt="Background"
                className="w-full h-full object-cover"
                style={{
                  transform: 'rotate(90.11deg)',
                  transformOrigin: 'center center',
                  filter: 'brightness(0.4) contrast(0.77) saturate(0.23) hue-rotate(-166deg) sepia(0.46)'
                }}
              />
            </div>
            
            {/* Content Overlay - Figma-accurate absolute positioning */}
            <div className="relative z-10 w-full h-full">
              {/* Header Text */}
              <div
                className="absolute text-white italic text-center"
                style={{
                  left: '56.47px',
                  top: '143.35px',
                  width: '646px',
                  height: '40.57px'
                }}
              >
                <h2 className="font-normal text-[21px] leading-[1.2]">
                  Hi, I'm Ananya, based out of New York City!
                </h2>
              </div>

              {/* Divider Line */}
              <div
                className="absolute bg-white"
                style={{
                  left: '63.47px',
                  top: '221.35px',
                  width: '500px',
                  height: '1px'
                }}
              />

              {/* Main Text */}
              <div
                className="absolute text-center"
                style={{
                  left: '52.47px',
                  top: '250.35px',
                  width: '653px',
                  height: '244px'
                }}
              >
                <h1 className="font-medium text-[35px] leading-[1.2] text-white">
                  Design, for me, is<br />
                  <span className="text-[#B7EA01]">where resilience meets<br />imagination.</span>
                </h1>
              </div>
            </div>
          </div>
        </ContainerScale>
      </ContainerScroll>

      {/* Testimonial Section */}
      <section className="relative z-10 py-16 px-8 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between mb-8">
            <div className="flex-1 pr-8">
              <blockquote className="text-white text-3xl lg:text-5xl font-bold leading-tight">
                Ananya listens deeply, connects the dots fast, and frames complexity with clarity.
                She shows up with rigor, reflection, and a systems-level lens that elevates every conversation.
              </blockquote>
              <div className="mt-8">
                <cite className="text-[#AA6829] text-2xl italic opacity-50">
                  -- Professor of Strategic Design, <span className="opacity-50">Parsons School of Design</span>
                </cite>
              </div>
            </div>
            <div className="w-[122px] h-[312px] flex-shrink-0 text-[#B1B5B9] text-[500px] font-medium leading-[120%] tracking-[-10px]">'</div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <div className="w-4 h-4 bg-[#B7EA01] rounded-full"></div>
              <div className="w-4 h-4 bg-[#9B9EA2] rounded-full"></div>
              <div className="w-4 h-4 bg-[#9B9EA2] rounded-full"></div>
            </div>
            <div className="flex gap-4">
              <button className="w-14 h-14 border border-[#B1B5B9] rounded-full flex items-center justify-center hover:border-white transition-colors">
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="w-6 h-3">
                  <path d="M1.25843 7.29289C0.867908 7.68342 0.867908 8.31658 1.25843 8.70711L7.62239 15.0711C8.01292 15.4616 8.64608 15.4616 9.03661 15.0711C9.42713 14.6805 9.42713 14.0474 9.03661 13.6569L3.37975 8L9.03661 2.34315C9.42713 1.95262 9.42713 1.31946 9.03661 0.928932C8.64608 0.538408 8.01292 0.538408 7.62239 0.928932L1.25843 7.29289ZM31.0344 8V7L1.96554 7V8V9L31.0344 9V8Z" fill="white"/>
                </svg>
              </button>
              <button className="w-14 h-14 border border-[#B1B5B9] rounded-full flex items-center justify-center hover:border-white transition-colors">
                <svg width="31" height="16" viewBox="0 0 31 16" fill="none" className="w-6 h-3">
                  <path d="M29.776 7.29289C30.1665 7.68342 30.1665 8.31658 29.776 8.70711L23.412 15.0711C23.0215 15.4616 22.3883 15.4616 21.9978 15.0711C21.6073 14.6805 21.6073 14.0474 21.9978 13.6569L27.6547 8L21.9978 2.34315C21.6073 1.95262 21.6073 1.31946 21.9978 0.928932C22.3883 0.538408 23.0215 0.538408 23.412 0.928932L29.776 7.29289ZM0 8L0 7L29.0689 7V8V9L0 9L0 8Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black px-8 lg:px-8 py-8 border-t border-[#9B9EA2]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h3 className="text-[#B1B5B9] text-lg mb-4">Thank You for visiting!</h3>
            <p className="text-[#B1B5B9] text-lg mb-6 max-w-4xl">
              Please contact me if you'd like to share feedback, explore internship opportunities or just want to talk design futures. Always happy to connect.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#B7EA01] text-sm flex items-center gap-2 hover:underline">
                Email
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="w-3 h-3 transform rotate-45">
                  <path d="M0.646447 8.64645C0.451184 8.84171 0.451184 9.15829 0.646447 9.35355C0.841709 9.54882 1.15829 9.54882 1.35355 9.35355L0.646447 8.64645ZM9.5 1C9.5 0.723858 9.27614 0.5 9 0.5L4.5 0.5C4.22386 0.5 4 0.723858 4 1C4 1.27614 4.22386 1.5 4.5 1.5L8.5 1.5L8.5 5.5C8.5 5.77614 8.72386 6 9 6C9.27614 6 9.5 5.77614 9.5 5.5L9.5 1ZM1 9L1.35355 9.35355L9.35355 1.35355L9 1L8.64645 0.646447L0.646447 8.64645L1 9Z" fill="#B7EA01"/>
                </svg>
              </a>
              <a href="#" className="text-[#B1B5B9] text-sm flex items-center gap-2 hover:underline">
                LinkedIn
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="w-3 h-3 transform rotate-45">
                  <path d="M0.646447 8.64645C0.451184 8.84171 0.451184 9.15829 0.646447 9.35355C0.841709 9.54882 1.15829 9.54882 1.35355 9.35355L0.646447 8.64645ZM9.5 1C9.5 0.723858 9.27614 0.5 9 0.5L4.5 0.5C4.22386 0.5 4 0.723858 4 1C4 1.27614 4.22386 1.5 4.5 1.5L8.5 1.5L8.5 5.5C8.5 5.77614 8.72386 6 9 6C9.27614 6 9.5 5.77614 9.5 5.5L9.5 1ZM1 9L1.35355 9.35355L9.35355 1.35355L9 1L8.64645 0.646447L0.646447 8.64645L1 9Z" fill="#767D87"/>
                </svg>
              </a>
              <a href="#" className="text-[#B1B5B9] text-sm flex items-center gap-2 hover:underline">
                Instagram
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="w-3 h-3 transform rotate-45">
                  <path d="M0.646447 8.64645C0.451184 8.84171 0.451184 9.15829 0.646447 9.35355C0.841709 9.54882 1.15829 9.54882 1.35355 9.35355L0.646447 8.64645ZM9.5 1C9.5 0.723858 9.27614 0.5 9 0.5L4.5 0.5C4.22386 0.5 4 0.723858 4 1C4 1.27614 4.22386 1.5 4.5 1.5L8.5 1.5L8.5 5.5C8.5 5.77614 8.72386 6 9 6C9.27614 6 9.5 5.77614 9.5 5.5L9.5 1ZM1 9L1.35355 9.35355L9.35355 1.35355L9 1L8.64645 0.646447L0.646447 8.64645L1 9Z" fill="#767D87"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center gap-1 text-[#B1B5B9] text-sm">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" className="w-4 h-4">
                <circle cx="9.29175" cy="8.5" r="8" stroke="#B1B5B9"/>
              </svg>
              <span className="text-xs">C</span>
              <span>2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
