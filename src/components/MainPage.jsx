import bioderma from "../assets/bioderma.png";
import photoderm from "../assets/photoderm.png";
import sensibio from "../assets/sensibio.png";
import backgroundImg from "../assets/bg.png";
import backgroundImg2 from "../assets/bg2.png";
import backgroundImg3 from "../assets/bg3.png";
import videoPoster from "../assets/videoPoster.png";
import back2 from "../assets/back2.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import Products from "./Products";
import Button from "./Button";

import IconwithText from "./IconwithText";
import Steps from "./Steps";

const bgStyle = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: "contain",
};
const bgStyle2 = {
  backgroundImage: `url(${backgroundImg2})`,
};
const bgStyle3 = {
  backgroundImage: `url(${backgroundImg3})`,
  backgroundRepeat: "no-repeat",
};
const btnStyle = {
  backgroundColor: "#DB3333",
  width: "158px",
};
const btnStyle2 = {
  color: "#009BC7",
  gap: "10px",
  border: "1px solid #009BC7",
  width: "278px",
};

function MainPage() {
  return (
    <div className="md:px-[51px] px-4">
      <div className=" flex flex-col md:flex-row items-center justify-around mb-5 gap-3">
        <div
          className="flex items-center w-[360px] h-[194px] md:w-[773px] md:h-[400px] rounded-[10px] relative"
          style={bgStyle}
        >
          <p className="ml-6 md:ml-[51px] w-[133px] md:w-[273px] text-sm md:text-3xl md:leading-10">
            Ləkəyə qarşı <strong>Parlaqladıcı</strong> qayğı:
            <span className="text-[#009BC7]"> Pigmentbio</span>
          </p>
          <img
            src={bioderma}
            alt=""
            className="absolute h-[122px] right-[75px] md:right-[156px] bottom-6 md:bottom-9"
          />
        </div>
        <div
          className="flex flex-col justify-between w-[377px] h-[400px] rounded-[10px] border border-[#DB3333] relative p-5"
          style={bgStyle2}
        >
          <p className=" w-[171px] text-md">
            Ləkəyə qarşı <strong>Parlaqladıcı</strong> qayğı:
          </p>
          <div>
            <p className="text-[#757575]">Make-up removal</p>
            <p className="text-md font-medium">Sensibio Micellar water, 1 l</p>
            <Button style={btnStyle}> 30% Endirim</Button>
          </div>
          <img
            src={sensibio}
            alt=""
            className="absolute right-[42px] bottom-14 "
          />
        </div>
      </div>
      <div className="py-7">
        <div className="flex justify-between mb-5">
          <p className="text-[#009BC7] text-xl border-b-2 border-[#009BC7]">
            Endirimli məhsullar
          </p>
          <div className="text-md border px-3 py-[2px] rounded text-[#444A51]">
            Hamısına bax
          </div>
        </div>
        <div className="hidden md:flex ml-4">
          <Products />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-11 md:mb-[70px] mb-8">
        <div className="flex flex-col md:flex-row gap-5 justify-around">
          <div className="md:w-[575px]  h-60 rounded-[10px] overflow-hidden">
            <img src={videoPoster} alt="" className="w-full" />
          </div>
          <div className="md:w-[575px] h-60 rounded-[10px] overflow-hidden">
            <img src={back2} alt="" />
          </div>
        </div>
        <Button style={btnStyle2}>Daha çox</Button>
      </div>
      <div className="hidden md:flex">
        <Steps />
      </div>

      <div
        className="relative md:w-[1170px] h-[270px] md:h-[300px] rounded-[10px] overflow-hidden mb-[68px] bg-cover md:bg-contain md:bg-right bg-center"
        style={bgStyle3}
      >
        <img
          src={photoderm}
          alt=""
          className=" absolute -right-14 md:right-[124px] bottom-[29px]"
        />
        <img
          src={backgroundImg3}
          alt=""
          className="hidden md:flex absolute w-full h-[300px] -z-10 "
        />
        <p className="md:ml-[70px] ml-4 mt-[30px] text-white md:text-2xl text-xl font-semibold w-[237px]">
          MEGA DISCOUNT OF THE MONTH
        </p>
        <div className=" md:ml-[70px] ml-4 my-3 h-[2px] w-[100px] bg-white"></div>
        <p className="md:ml-[70px] ml-4 text-white md:text-2xl text-xlfont-medium mb-16">
          UP TO <strong>30%</strong> OFF
        </p>
        <p className="md:ml-[70px] ml-4 mb-2 text-sm md:text-base text-white">
          Make-up removal
        </p>
        <p className="md:ml-[70px] ml-4 font-medium md:text-md text-base">
          Sensibio Micellar water, 1 l
        </p>
      </div>
      <div className="md:hidden overflow-x-scroll ml-[214px]">
        <Products />
      </div>

      <div className="absolute left-0 w-full md:h-[110px] bg-[#FFC52D] flex flex-col md:flex-row md:items-center  items-start justify-between md:px-[74px] pr-7 mt-10">
        <IconwithText
          icon={frame1}
          text="Səhiyyə mütəxəssisləri ilə 40 illik iş təcrübəsi"
        />
        <div className="hidden md:flex h-[43px] w-[1px] bg-[#C5A54D]"></div>
        <IconwithText icon={frame2} text="Dəriyə dərin hörmət" />
        <div className="hidden md:flex h-[43px] w-[1px] bg-[#C5A54D]"></div>
        <IconwithText
          icon={frame3}
          text="Effektivlik və təhlükəsizlik tibbi 
          nəzarət altında sınaqdan keçirilmişdir"
        />
        <div className="hidden md:flex h-[43px] w-[1px] bg-[#C5A54D]"></div>
        <IconwithText
          icon={frame4}
          text="Səhiyyə mütəxəssisləri ilə 
          40 illik iş təcrübəsi"
        />
      </div>
    </div>
  );
}

export default MainPage;
