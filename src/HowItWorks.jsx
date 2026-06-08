const steps = [
  {
    img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/location.png",
    title: "Select location",
    desc: "Choose the location where your food will be delivered.",
  },
  {
    img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/order.png",
    title: "Choose order",
    desc: "Check over hundreds of menus to pick your favorite food",
  },
  {
    img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/pay.png",
    title: "Pay advanced",
    desc: "It's quick, safe, and simple. Select several methods of payment",
  },
  {
    img: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/meals.png",
    title: "Enjoy meals",
    desc: "Food is made and delivered directly to your home.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-orange-50 px-4 md:px-20 lg:px-32 py-16">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-orange-500 mb-12">
        How does it work
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map(function (step) {
          return (
            <div key={step.title} className="flex flex-col items-center text-center">
              <img src={step.img} alt={step.title} className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4" />
              <p className="font-bold text-gray-800 text-sm md:text-base mb-2">{step.title}</p>
              <p className="text-gray-500 text-xs md:text-sm">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HowItWorks;