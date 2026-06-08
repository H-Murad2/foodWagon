import { useState } from "react";

const items = [
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/cheese-burger.png", name: "Cheese Burger", restaurant: "Burger Arena", price: "$3.88" },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/toffes-cake.png", name: "Toffe's Cake", restaurant: "Top Sticks", price: "$4.00" },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/dancake.png", name: "Dancake", restaurant: "Cake World", price: "$1.99" },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/crispy-sandwitch.png", name: "Crispy Sandwitch", restaurant: "Fastfood Dine", price: "$3.00" },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/thai-soup.png", name: "Thai Soup", restaurant: "Foody Man", price: "$2.79" },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/cheese-burger.png", name: "Tuna Salad", restaurant: "Food House", price: "$3.50" },
];

function PopularItems() {
  const [current, setCurrent] = useState(0);
  const visible = 5;
  const max = items.length - visible;

  function prev() {
    setCurrent(function (c) { return Math.max(c - 1, 0); });
  }

  function next() {
    setCurrent(function (c) { return Math.min(c + 1, max); });
  }

  return (
    <section className="px-4 md:px-10 lg:px-16 py-16 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Popular items
      </h2>

      <div className="relative flex items-center gap-4">

        {/* Prev Button */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="shrink-0 w-10 h-10 rounded-full bg-amber-400 text-white flex items-center justify-center disabled:opacity-30"
        >
          ‹
        </button>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 flex-1">
          {items.slice(current, current + visible).map(function (item) {
            return (
              <div key={item.name} className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <img src={item.img} alt={item.name} className="w-full h-44 object-cover" />
                <div className="p-3 flex flex-col gap-1">
                  <p className="font-bold text-gray-800 text-sm">{item.name}</p>
                  <p className="text-amber-500 text-xs">📍 {item.restaurant}</p>
                  <p className="text-gray-700 text-sm font-semibold">{item.price}</p>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 transition-colors">
                  Order now
                </button>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          disabled={current === max}
          className="shrink-0 w-10 h-10 rounded-full bg-amber-400 text-white flex items-center justify-center disabled:opacity-30"
        >
          ›
        </button>

      </div>
    </section>
  );
}

export default PopularItems;