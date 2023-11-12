import bioderma from "../assets/bioderma.png";
import sensibio from "../assets/sensibio.png";
import backgroundImg from "../assets/bg.png";
import backgroundImg2 from "../assets/bg2.png";
import Products from "./Products";
import Button from "./Button";
function MainPage() {
  const bgStyle = {
    backgroundImage: `url(${backgroundImg})`,
  };
  const bgStyle2 = {
    backgroundImage: `url(${backgroundImg2})`,
  };
  const btnStyle = {
    backgroundColor: "#DB3333",
    width: "158px",
  };

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
    </div>
  );
}

export default MainPage;
