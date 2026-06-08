const cities = [
  ["San Francisco", "Miami", "San Diego", "East Bay", "Long Beach"],
  ["Los Angeles", "Washington DC", "Seattle", "Portland", "Nashville"],
  ["New York City", "Orange County", "Atlanta", "Charlotte", "Denver"],
  ["Chicago", "Phoenix", "Las Vegas", "Sacramento", "Oklahoma City"],
  ["Columbus", "New Mexico", "Albuquerque", "Sacramento", "New Orleans"],
];

const links = [
  { title: "COMPANY", items: ["About Us", "Team", "Careers", "Blog"] },
  { title: "CONTACT", items: ["Help & Support", "Partner with us", "Ride with us", "Ride with us"] },
  { title: "LEGAL", items: ["Terms & Conditions", "Refund & Cancellation", "Privacy Policy", "Cookie Policy"] },
  { title: "LEGAL", items: ["Terms & Conditions", "Refund & Cancellation", "Privacy Policy"] },
];

function Footer() {
  return (
    <footer className="bg-[#333] text-gray-300 px-4 md:px-10 lg:px-16 py-12">

      {/* Top Cities */}
      <div className="mb-10">
        <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Our Top Cities</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {cities.map(function (col, i) {
            return (
              <ul key={i} className="flex flex-col gap-2">
                {col.map(function (city) {
                  return (
                    <li key={city}>
                      <a href="#" className="text-sm hover:text-white transition-colors">{city}</a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>

      <hr className="border-gray-700 mb-10" />

      {/* Links + Newsletter */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {links.map(function (col, i) {
          return (
            <div key={i}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">{col.title}</h4>
              <ul className="flex flex-col gap-2">
                {col.items.map(function (item) {
                  return (
                    <li key={item}>
                      <a href="#" className="text-sm hover:text-white transition-colors">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        {/* Follow Us + Newsletter */}
        <div className="col-span-2 sm:col-span-1">
          
          <p className="text-white font-bold text-sm mb-4">
            Receive exclusive offers and discounts in your mailbox
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 bg-gray-700 text-sm text-gray-300 px-4 py-2 rounded outline-none focus:ring-1 focus:ring-amber-400"
            />
            <button className="bg-amber-400 hover:bg-amber-500 text-white text-sm font-semibold px-4 py-2 rounded transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 mt-10 mb-6" />

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
        <span>All rights Reserved © Your Company, 2021</span>
        <span>Made with 🧡 by <strong className="text-white">ThemeWagon</strong></span>
      </div>

    </footer>
  );
}

export default Footer;