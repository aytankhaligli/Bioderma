function Button({ children, color, style }) {
  return (
    <div
      className="flex items-center justify-center rounded p-[10px]  text-white w-full mt-[30px] cursor-pointer"
      style={style}
    >
      {children}
    </div>
  );
}

export default Button;
