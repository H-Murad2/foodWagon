const restaurants = [
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/food-world.png", logo: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/food-world.png", name: "Food world", rating: 40, discount: "10% off", open: false },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/pizza-hub.png", logo: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/pizza-hub.png", name: "Pizza hub", rating: 40, discount: "10% off", open: false },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/donuts-hut.png", logo: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/donuts-hut.png", name: "Donuts hut", rating: 20, discount: "15% off", open: true },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/donuthut.png", logo: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/donuthut.png", name: "Donuts hut", rating: 30, discount: "19% off", open: true },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/ruby-tuesday.png", logo: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/ruby-tuesday.png", name: "Ruby tuesday", rating: 20, discount: "10% off", open: true },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/kuakata.png", logo: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/kuakata.png", name: "Kuakata Fried Chicken", rating: 40, discount: "10% off", open: true },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/red-square.png", logo: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/red-square.png", name: "Kuakata Fried Chicken", rating: 30, discount: "10% off", open: true },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/taco-bell.png", logo: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/taco-bell.png", name: "Taco bell", rating: 30, discount: "10% off", open: true },
];

function FeaturedRestaurants() {
  return (
    <section className="px-4 md:px-10 lg:px-16 py-16 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Featured Restaurants
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {restaurants.map(function (r, i) {
          return (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">

              {/* Image + Badges */}
              <div className="relative">
                <img src={r.img} alt={r.name} className="w-full h-36 md:h-44 object-cover" />
                <div className="absolute top-2 left-2 flex gap-1">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    {r.discount}
                  </span>
                  <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    Fast
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-3 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <img src={r.logo} alt={r.name} className="w-8 h-8 rounded object-contain" />
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{r.name}</p>
                    <p className="text-yellow-400 text-xs">{"★".repeat(Math.floor(r.rating / 10))}</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full w-fit ${r.open ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-500"}`}>
                  {r.open ? "Open Now" : "Opens Tomorrow"}
                </span>
              </div>

            </div>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button className="border border-amber-400 text-amber-500 font-semibold px-8 py-2 rounded-full hover:bg-amber-500 hover:text-white transition-all">
          View All →
        </button>
      </div>
    </section>
  );
}

export default FeaturedRestaurants;