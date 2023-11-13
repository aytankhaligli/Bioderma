import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import Card from "../components/Card";

const products = [
  {
    id: 1,
    imageUrl: pro1,
    text: "Dəri tipinə uyğun təmizləyicilər",
    step: "1.Addım: Təmizlə",
  },
  {
    id: 2,
    imageUrl: pro2,
    text: "Dəri tipinə uyğun təmizləyicilər",
    step: "2. Addım: Müalicə et və qulluq (nəmləndir) et",
  },
  {
    id: 3,
    imageUrl: pro3,
    text: "Dəri tipinə uyğun Günəş qoruyucuları",
    step: "3. Addım: Günəşdən qoru",
  },
];

function Steps() {
  return (
    <div>
      <p className="inline-block text-xl border-b-2 border-[#000] mb-5">
        Dəri qulluğu rutini
      </p>
      <div className="flex flex-col md:flex-row gap-5 w-[345px] md:w-full">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Steps;
