import Button from "./Button";

const btnStyle = {
  border: "1px solid #040404",
  color: "black",
};

function Card({ product }) {
  return (
    <div className="md:w-[377px] w-full md:h-[578px] h-[527px] text-center m-2">
      <img
        src={product.imageUrl}
        alt=""
        className="w-full md:h-[400px] h-[364px]"
      />
      <p className="text-md my-5 font-medium">{product.step}</p>
      <p className="text-[#757575] text-md">{product.text}</p>
      <Button style={btnStyle}>Kəşf et</Button>
    </div>
  );
}

export default Card;
