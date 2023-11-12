import Button from "./Button";

const btnStyle = {
  border: "1px solid #040404",
  color: "black",
};

function Card({ product }) {
  return (
    <div className="w-[377px] h-[578px] text-center">
      <img src={product.imageUrl} alt="" className="w-full h-[400px]" />
      <p className="text-md my-5 font-medium">{product.step}</p>
      <p className="text-[#757575] text-md">{product.text}</p>
      <Button style={btnStyle}>Kəşf et</Button>
    </div>
  );
}

export default Card;
