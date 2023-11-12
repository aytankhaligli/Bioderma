import logo from "../assets/image6.svg";
import image1 from "../assets/image1.png";
import image2 from "../assets/image7.png";
import image3 from "../assets/image8.svg";
import SocialBox from "./SocialBox";

function Footer() {
  return (
    <footer className="w-full  mt-[110px]">
      <div className="flex">
        <div className="px-[59px] h-[380px] border-r mt-[21px]">
          <img src={logo} alt="" />
          <p className="text-xs w-[182px]">
            NAOS dünyanın ilk müstəqil dəriyə qulluq şirkətlərindən biridir.
            NAOS eko biologiyadan ilhamlanaraq 3 marka yaratdı
          </p>
        </div>
        <div>
          <div className="flex ml-[59px]">
            <div className=" mt-[43px]">
              <p className="font-medium mb-3">Kateqoriyalar</p>
              <p className="text-sm text-[#757575] mb-[10px]">
                Brendlər və Məhsullar
              </p>
              <p className="text-sm text-[#757575] mb-[10px]">Qulluq setləri</p>
              <p className="text-sm text-[#757575] mb-[10px]">Üz qulluğu</p>
              <p className="text-sm text-[#757575] mb-[10px]">Bədən qulluğu</p>
              <p className="text-sm text-[#757575] mb-[10px]">
                Günəş qoruyucuları
              </p>
              <p className="text-sm text-[#757575] mb-[10px]">Göz yaş alma</p>
            </div>
            <div className="ml-[59px] mt-[43px]">
              <p className="font-medium mb-3">Şirkət</p>
              <p className="text-sm text-[#757575] mb-[10px]">Haqqımızda</p>
              <p className="text-sm text-[#757575] mb-[10px]">Faydalı</p>
              <p className="text-sm text-[#757575] mb-[10px]">
                Aksiyalar və Kompaniyalar
              </p>
            </div>
            <div className="ml-[59px] mt-[43px]">
              <p className="font-medium mb-3">Kömək</p>
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
          <div className="flex ml-[59px] mt-[43px] gap-[29px]">
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
