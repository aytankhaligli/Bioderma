import image1 from "../assets/image6.svg";
import image2 from "../assets/image1.png";
import image3 from "../assets/image7.png";
import image4 from "../assets/image8.svg";
import searchIcon from "../assets/search.svg";
import heartIcon from "../assets/heart.svg";
import menuIcon from "../assets/menu.svg";
import bagIcon from "../assets/bag.svg";

const navItems = [
  { id: 1, name: "Brendlər və Məhsullar" },
  { id: 2, name: "Üz qulluğu" },
  { id: 3, name: "Bədən qulluğu" },
  { id: 4, name: "Günəş qoruyucuları" },
  { id: 5, name: "Gözəl yaş alma" },
  { id: 6, name: "Qulluq setləri" },
  { id: 7, name: "Aksiyalar və Kompaniyalar" },
  { id: 8, name: "Haqqımızda" },
  { id: 9, name: "Faydalı" },
];

function Header() {
  return (
    <header className="h-[168px] w-full flex flex-col items-center justify-center ">
      <div className="flex items-center md:px-[51px] h-[68px] w-full border-b border-[#ACACAC] md:justify-center justify-between md:gap-[120px] ">
        <div>
          <img src={image1} alt="" />
        </div>
        <div className="hidden md:flex items-center gap-[30px]">
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
        {/* mobile-nav */}
        <div className="md:hidden flex gap-4">
          <div className="w-10 h-10 border flex items-center justify-center rounded-[7px]">
            {" "}
            <img src={searchIcon} alt="" />
          </div>
          <div className="w-10 h-10 border flex items-center justify-center rounded-[7px]">
            <img src={heartIcon} alt="" />
          </div>
          <div className="w-10 h-10 bg-[#009BC7] flex items-center justify-center rounded-[7px]">
            <img src={menuIcon} alt="" />
          </div>
        </div>

        <div className="hidden md:flex">
          <div className="relative mr-5">
            <input
              placeholder="Axtar"
              className="border border-[#C7CACE] w-[253px] rounded-[4px] py-[6px] px-3"
            />
            <img
              src={searchIcon}
              alt=""
              className="absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>
          <div className="hidden md:flex items-center gap-5">
            <img src={heartIcon} alt="" />
            <img src={bagIcon} alt="" />
            <div className="flex items-center gap-[10px]">
              <button className="underline">AZ</button>
              <div className="w-1 h-5 bg-[#ECEFF2]"></div>
              <button>EN</button>
            </div>
          </div>
        </div>
      </div>
      <nav className="hidden px-[51px] py-3 md:flex items-center justify-between border-b border-[#ECEFF2] gap-[30px]">
        {navItems.map((item) => (
          <p key={item.id} className="text-[#444A51] text-sm font-semibold">
            {item.name}
          </p>
        ))}
      </nav>
    </header>
  );
}

export default Header;
