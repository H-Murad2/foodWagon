function Hero() {
  return (
    <section className="bg-amber-400 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* Image — mobilde üstdə, desktopda sağda */}
        <div className="w-full lg:w-1/2 flex justify-center order-first lg:order-last">
          <img
            src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/hero-header.png"
            alt="food"
            className="w-72 lg:w-[500px] object-contain"
          />
        </div>

        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Are you starving?
          </h1>
          <p className="text-amber-800 font-semibold text-lg mb-8">
            Within a few clicks, find meals that are accessible near you
          </p>

          {/* Card */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            {/* Tabs */}
            <div className="flex gap-4 mb-5">
              <button className="flex items-center gap-2 bg-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                🛵 Delivery
              </button>
              <button className="flex items-center gap-2 text-gray-500 text-sm font-semibold px-4 py-2 rounded-full">
                🛍 Pickup
              </button>
            </div>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div className="flex items-center flex-1 w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
                <span className="text-amber-500 mr-2">📍</span>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="bg-transparent outline-none text-sm text-gray-600 w-full"
                />
              </div>
              <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
                Find Food
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;