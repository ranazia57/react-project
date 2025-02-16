import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import MetaData from '../components/MetaData';

const menProducts = [
  { name: "Alpha for mens", img: "/images/men/alpha.webp", description: "A fresh and bold scent", price: "$45" },
  { name: "Iqbal", img: "/images/men/Iqbal.webp", description: "An elegant fragrance with woody notes", price: "$50" },
  { name: "Crimson", img: "/images/men/crimson.webp", description: "A spicy and invigorating fragrance", price: "$60" },
  { name: "Black Noir", img: "/images/men/blacknoir.webp", description: "A mysterious and deep scent", price: "$70" },
  { name: "Dior Sauvage", img: "/images/men/savage.webp", description: "A rugged fragrance with citrus hints", price: "$100" },
  { name: "Victorious", img: "/images/men/victorious.webp", description: "A powerful fragrance with amber notes", price: "$80" },
  { name: "Gentle Man Society", img: "/images/men/gentlemansocietyparfum.jpeg", description: "A fresh and bold scent", price: "$45" },
  { name: "Afnan 9PM", img: "/images/men/afnan9pm.jpeg", description: "An elegant fragrance with woody notes", price: "$50" },
  { name: "Yes Sent", img: "/images/men/yessent.jpeg", description: "A spicy and invigorating fragrance", price: "$60" },
  { name: "Wood Spice", img: "/images/men/woodspice.jpeg", description: "A mysterious and deep scent", price: "$70" },
  { name: "Ralph Lauren POLO", img: "/images/men/ralphlaurenpolo.jpeg", description: "A rugged fragrance with citrus hints", price: "$100" },
  { name: "Luxury Sherren Koln", img: "/images/men/luxusherrenkoln.jpeg", description: "A powerful fragrance with amber notes", price: "$80" },
];

const womenProducts = [
  { name: "Chanel Chance Eau EDT", img: "/images/women/chanelchanceeauedt.jpeg", description: "A floral fragrance with a touch of vanilla", price: "$55" },
  { name: "Blossom", img: "/images/women/blossom.webp", description: "A sweet and delicate scent", price: "$60" },
  { name: "Velvet", img: "/images/women/velvet.webp", description: "A smooth and luxurious fragrance", price: "$65" },
  { name: "Aroma", img: "/images/women/aroma.webp", description: "A fresh and airy fragrance", price: "$50" },
  { name: "Blossom", img: "/images/women/surprise.webp", description: "A floral and fruity blend", price: "$58" },
  { name: "Wild Rose", img: "/images/women/wildrose.webp", description: "A romantic fragrance with hints of rose", price: "$70" },
  { name: "Permium Dunkless Chokoladen", img: "/images/women/permiumdunklesschokoladen.jpeg", description: "A floral fragrance with a touch of vanilla", price: "$55" },
  { name: "Lost Cherry", img: "/images/women/Lostcherry.jpeg", description: "A sweet and delicate scent", price: "$60" },
  { name: "Born In Roma", img: "/images/women/borninroma.jpeg", description: "A smooth and luxurious fragrance", price: "$65" },
  { name: "Black Opuim", img: "/images/women/blackopuim.jpeg", description: "A fresh and airy fragrance", price: "$50" },
  { name: "YSL Libre Perfume", img: "/images/women/ysllibreperfume.jpeg", description: "A floral and fruity blend", price: "$58" },
  { name: "YSL beauty ", img: "/images/women/yslbeautyblack.jpeg", description: "A romantic fragrance with hints of rose", price: "$70" },
];

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(product.name)
        ? prevFavorites.filter((item) => item !== product.name)
        : [...prevFavorites, product.name]
    );
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const renderProducts = () => {
    const products = selectedCategory === "Men" ? menProducts : womenProducts;
    return products.map((product, index) => (
      <div
        key={index}
        className="group cursor-pointer transition-all duration-300 hover:translate-y-[-4px]"
      >
      <MetaData title="Products" />
        <div className="overflow-hidden rounded-lg shadow-md">
        
          <div className="relative h-80 overflow-hidden">
            <img
              src={product.img}
              alt={product.name}
              className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-4 bg-white text-left">
            <p className="text-lg font-semibold text-black group-hover:text-gray-700">
              {product.name}
            </p>
            <p className="text-sm text-gray-600">{product.description}</p>
            <div className="text-lg font-bold text-black">
              <span className="text-sm text-gray-500">Our Price: </span>
              {product.price}
            </div>
            <div className="flex justify-end space-x-4 mt-2">
              <button
                onClick={() => toggleFavorite(product)}
                className={`p-2 rounded-lg bg-slate-300 text-black ${
                  favorites.includes(product.name) ? "bg-red-500" : "bg-slate-300"
                }`}
              >
                <FaHeart size={20} color={favorites.includes(product.name) ? "white" : "black"} />
              </button>
              <button
                onClick={() => addToCart(product)}
                className="p-2 rounded-lg bg-slate-300 text-black"
              >
                <FaShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-slate-300 to-black text-white pt-10 pb-10">
      <div className="flex space-x-8 mb-8">
        <div
          onClick={() => setSelectedCategory("Men")}
          className={`p-8 pl-14 pr-14 mt-10 cursor-pointer bg-slate-300 text-black rounded-lg transition duration-500 transform hover:scale-110 hover:bg-gray-600 hover:text-white shadow-xl font-extrabold font-serif text-3xl ${
            selectedCategory === "Men" ? "" : "animate-bounce"
          }`}
          style={{
            animationPlayState: selectedCategory === "Men" ? "paused" : "running",
          }}
        >
          Men
        </div>
        <div
          onClick={() => setSelectedCategory("Women")}
          className={`p-8 mt-10 cursor-pointer bg-slate-300 text-black rounded-lg transition duration-500 transform hover:scale-110 hover:bg-gray-600 hover:text-white shadow-xl font-extrabold font-serif text-3xl ${
            selectedCategory === "Women" ? "" : "animate-bounce"
          }`}
          style={{
            animationPlayState: selectedCategory === "Women" ? "paused" : "running",
          }}
        >
          Women
        </div>
      </div>

      {selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {renderProducts()}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
