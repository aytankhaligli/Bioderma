import logo from "../assets/image6.svg";
import image1 from "../assets/image1.png";
import image2 from "../assets/image7.png";
import image3 from "../assets/image8.svg";
import SocialBox from "./SocialBox";

function Footer() {
  return (
    <footer className="w-full  md:mt-[110px] mt-[420px]">
      <div className="md:flex ">
        <div className="md:px-[59px] md:h-[380px] border-r mt-[21px] flex flex-col items-center justify-center text-center">
          <img src={logo} alt="" />
          <p className="text-xs md:w-[182px] px-8">
            NAOS dünyanın ilk müstəqil dəriyə qulluq şirkətlərindən biridir.
            NAOS eko biologiyadan ilhamlanaraq 3 marka yaratdı
          </p>
        </div>
        <div>
          <div className="md:flex ml-[59px]">
            <div className="mt-[43px]">
              <p className="font-medium mb-3 text-center md:text-start">
                Kateqoriyalar
              </p>
              <div className="flex flex-row md:flex-col flex-wrap  gap-2 justify-center">
                <p className="text-sm text-[#757575] mb-[10px] ">
                  Brendlər və Məhsullar
                </p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Qulluq setləri
                </p>
                <p className="text-sm text-[#757575] mb-[10px]">Üz qulluğu</p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Bədən qulluğu
                </p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Günəş qoruyucuları
                </p>
                <p className="text-sm text-[#757575] mb-[10px]">Göz yaş alma</p>
              </div>
            </div>
            <div className="md:ml-[59px] mt-[43px]">
              <p className="font-medium mb-3 text-center md:text-start">
                Şirkət
              </p>
              <div className="  flex flex-row md:flex-col flex-wrap  gap-4 justify-center">
                <p className="text-sm text-[#757575] mb-[10px]">Haqqımızda</p>
                <p className="text-sm text-[#757575] mb-[10px]">Faydalı</p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Aksiyalar və Kompaniyalar
                </p>
              </div>
            </div>
            <div className="md:ml-[59px] mt-[43px] md:flex flex-col">
              <p className="font-medium mb-3 text-center md:text-start">
                Kömək
              </p>
              <div className=" flex flex-row md:flex-col flex-wrap  gap-4 justify-center md:justify-start">
                <p className="text-sm text-[#757575] mb-[10px]">FAQ</p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Ödəniş və çatdırılma
                </p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Zəmanət şərtləri
                </p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Mağaza ünvanları
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex ml-[59px] mt-[43px] gap-[29px]">
            <SocialBox image={image1} />
            <SocialBox image={image2} />
            <SocialBox image={image3} />
          </div>
        </div>
      </div>
      <p className="text-sm pl-[65px] mt-[43px] mb-[20px]">
        Bütün hüquqlar qorunur. © 2022 BIODERMA
      </p>
    </footer>
  );
}

export default Footer;
