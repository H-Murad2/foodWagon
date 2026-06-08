const banners = [
  {
    img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/crispy-sandwiches.png",
    title: "Best deals",
    highlight: "Crispy Sandwiches",
    desc: "Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.",
    imgLeft: false,
  },
  {
    img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/fried-chicken.png",
    title: "Celebrate parties",
    highlight: "with Fried Chicken",
    desc: "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
    imgLeft: true,
  },
  {
    img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/pizza.png",
    title: "Wanna eat hot &",
    highlight: "spicy Pizza?",
    desc: "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
    imgLeft: false,
  },
];

function BestDeals() {
  return (
    <section className="px-4 md:px-10 lg:px-16 py-16 bg-gray-50 flex flex-col gap-6">
      {banners.map(function (b, i) {
        return (
          <div key={i} className={`bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row ${b.imgLeft ? "md:flex-row-reverse" : ""} shadow-sm`}>

            {/* Image */}
           <img src={b.img} alt={b.title} className="w-full md:w-1/2 h-64 md:h-80 object-cover" />

            {/* Text */}
            <div className="flex flex-col justify-center gap-3 p-6 md:w-1/2">
              <h3 className="text-xl font-bold text-gray-800">
                {b.title} <span className="text-amber-500">{b.highlight}</span>
              </h3>
              <p className="text-gray-500 text-sm">{b.desc}</p>
              <button className="bg-amber-400 hover:bg-amber-500 text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded w-fit transition-colors">
                Proceed to order →
              </button>
            </div>

          </div>
        );
      })}
    </section>
  );
}

export default BestDeals;