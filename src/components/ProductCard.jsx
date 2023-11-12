import Button from "./Button";
import bagBtn from "../assets/bagBtn.svg";

function ProductCard({ product }) {
  const btnStyle = {
    color: "#009BC7",
    gap: "10px",
    border: "1px solid #009BC7",
  };
  return (
    <div className="w-[278px] h-[462px] relative">
      <div className="flex absolute left-[10px] top-[10px] gap-[10px]">
        {product.isMost && (
          <div className="px-[10px] py-1 rounded flex items-center bg-[#009BC7] text-white text-xs ">
            Çox satılan
          </div>
        )}
        {product.isFreeDelivery && (
          <div className="px-[10px] py-1 rounded flex items-center  bg-[#DB3333] text-white text-xs ">
            Pulsuz çatdırılma
          </div>
        )}
      </div>

      <div className="bg-[#EEE] w-[278px] h-[278px] rounded-md flex items-center justify-center">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="py-4">
        <p className="text-[#757575] mb-3">{product.brend}</p>
        <p className="text-md font-medium mb-4">{product.productName}</p>
        <p className="text-md font-medium mb-4">{product.price}</p>
        <Button style={btnStyle}>
          Səbətə at <img src={bagBtn} alt="" />
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
