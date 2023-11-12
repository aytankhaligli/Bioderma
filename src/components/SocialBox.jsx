import fbIcon from "../assets/fb.svg";
import instaIcon from "../assets/insta.svg";
function SocialBox({ image }) {
  return (
    <div className="w-[175px] h-[123px] rounded-[10px] border flex flex-col gap-6 items-center justify-center">
      <img src={image} alt="" />
      <div className="flex gap-3">
        <img src={fbIcon} alt="" />
        <img src={instaIcon} alt="" />
      </div>
    </div>
  );
}

export default SocialBox;
