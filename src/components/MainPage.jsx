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
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import Card from "./Card";
import IconwithText from "./IconwithText";

const products = [
  {
    id: 1,
    imageUrl: pro1,
    text: "Dəri tipinə uyğun təmizləyicilər",
    step: "1.Addım: Təmizlə",
  },
  {
    id: 2,
    imageUrl: pro2,
    text: "Dəri tipinə uyğun təmizləyicilər",
    step: "2. Addım: Müalicə et və qulluq (nəmləndir) et",
  },
  {
    id: 1,
    imageUrl: pro3,
    text: "Dəri tipinə uyğun Günəş qoruyucuları",
    step: "3. Addım: Günəşdən qoru",
  },
];

const bgStyle = {
  backgroundImage: `url(${backgroundImg})`,
};
const bgStyle2 = {
  backgroundImage: `url(${backgroundImg2})`,
};
const bgStyle3 = {
  backgroundImage: `url(${backgroundImg3})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "right",
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
    <div className="px-[51px]">
      <div className="flex items-center justify-around mb-5">
        <div
          className="flex items-center w-[773px] h-[400px] rounded-[10px] relative"
          style={bgStyle}
        >
          <p className="ml-[51px] w-[273px] text-3xl leading-10">
            Ləkəyə qarşı <strong>Parlaqladıcı</strong> qayğı:
            <span className="text-[#009BC7]"> Pigmentbio</span>
          </p>
          <img
            src={bioderma}
            alt=""
            className="absolute right-[156px] bottom-9"
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
        <Products />
      </div>
      <div className="flex flex-col justify-center items-center mt-11 mb-[70px]">
        <div className="flex gap-[20px] justify-around">
          <div className="w-[575px] rounded-[10px]">
            <img src={videoPoster} alt="" />
          </div>
          <div className="w-[575px] rounded-[10px]">
            <img src={back2} alt="" />
          </div>
        </div>
        <Button style={btnStyle2}>Daha çox</Button>
      </div>
      <div>
        <p className="inline-block text-xl border-b-2 border-[#000] mb-5">
          Dəri qulluğu rutini
        </p>
        <div className="flex gap-5">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div
        className="relative w-[1170px] h-[300px] rounded-[10px] overflow-hidden mb-[68px]"
        style={bgStyle3}
      >
        <img
          src={photoderm}
          alt=""
          className="absolute right-[124px] bottom-[29px]"
        />
        <img
          src={backgroundImg3}
          alt=""
          className="absolute w-full h-[300px] -z-10 "
        />
        <p className="ml-[70px] mt-[30px] text-white text-2xl font-semibold w-[237px]">
          MEGA DISCOUNT OF THE MONTH
        </p>
        <div className=" ml-[70px] my-3 h-[2px] w-[100px] bg-white"></div>
        <p className="ml-[70px] text-white text-2xl font-medium mb-16">
          UP TO <strong>30%</strong> OFF
        </p>
        <p className="ml-[70px] mb-2 text-white">Make-up removal</p>
        <p className="ml-[70px] font-medium text-md">
          Sensibio Micellar water, 1 l
        </p>
      </div>
      <div className="absolute left-0 w-full h-[110px] bg-[#FFC52D] flex items-center justify-between px-[74px]">
        <IconwithText
          icon={frame1}
          text="Səhiyyə mütəxəssisləri ilə 40 illik iş təcrübəsi"
        />
        <div className="h-[43px] w-[1px] bg-[#C5A54D]"></div>
        <IconwithText icon={frame2} text="Dəriyə dərin hörmət" />
        <div className="h-[43px] w-[1px] bg-[#C5A54D]"></div>
        <IconwithText
          icon={frame3}
          text="Effektivlik və təhlükəsizlik tibbi 
          nəzarət altında sınaqdan keçirilmişdir"
        />
        <div className="h-[43px] w-[1px] bg-[#C5A54D]"></div>
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
