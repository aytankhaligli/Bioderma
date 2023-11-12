function IconwithText({ icon, text }) {
  return (
    <div className="flex items-center w-[263px]">
      <img src={icon} alt="" />
      <p className="text-sm">{text}</p>
    </div>
  );
}

export default IconwithText;
