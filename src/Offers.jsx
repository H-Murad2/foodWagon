const offers = [
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-1.png", discount: 15, name: "Flat Hill Slingback" },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-2.png", discount: 10, name: "Ocean Blue Ring" },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-3.png", discount: 25, name: "Brown Leathered Wallet" },
  { img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/discount-item-4.png", discount: 20, name: "Silverside Wristwatch" },
];

function Offers() {
  return (
    <section className="px-4 md:px-10 lg:px-16 py-12 bg-gray-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {offers.map(function (offer) {
          return (
            <div key={offer.name}>
              <div className="relative rounded-2xl overflow-hidden">
                <img src={offer.img} alt={offer.name} className="w-full h-48 md:h-64 object-cover" />
                <div className="absolute bottom-3 left-3 bg-amber-400 text-white rounded-xl px-3 py-2">
                  <span className="text-2xl md:text-3xl font-extrabold">{offer.discount}%</span>
                  <p className="text-sm font-semibold">Off</p>
                </div>
              </div>
              <p className="font-bold text-gray-800 mt-3 text-sm md:text-base">{offer.name}</p>
              <span className="text-xs md:text-sm text-orange-400 bg-orange-100 px-3 py-1 rounded-full">6 days Remaining</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Offers;  