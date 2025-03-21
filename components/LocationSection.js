export default function LocationSection() {
  return (
    <section
      id="location"
      className="bg-white text-black py-16 px-6 mb-2 lg:mb-8"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Find Us Here
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Image */}
        <div
          className="w-full lg:w-1/3 h-72 bg-cover bg-center rounded-xl"
          style={{ backgroundImage: "url('/location-photo.jpg')" }} // replace with your image
        ></div>

        {/* Right: Info */}
        <div className="flex-1 space-y-4 text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-[rgb(229,69,0)]">
            Coco @ Summer Mall Store
          </h3>
          <p className="text-lg text-gray-800">
            Jln Datuk Mohammad Musa, 94300 Kota Samarahan
          </p>
          <div className="flex items-center gap-3 text-md text-gray-700 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.75 5a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h3a.75.75 0 000-1.5H12.75V7z"
                clipRule="evenodd"
              />
            </svg>
            <span>Monday - Sunday 9:30AM - 9:30PM</span>
          </div>
        </div>
      </div>

      {/* Order Now Section */}
      <div className="mt-12 text-center" id="delivery">
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-[rgb(229,69,0)]">
          Or Order Now Online!
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.foodpanda.my/chain/cp3yv/coco" // replace with your store's link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(214,6,101)] text-white px-6 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
          >
            Order on Foodpanda
          </a>
          <a
            href="https://r.grab.com/g/6-20250321_100907_8AE07B35A49E4CE7BCCB771A37828791_MEXMPS-1-C4CEN743RPWXGJ" // replace with your store's link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(1,177,79)] text-white px-6 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
          >
            Order on GrabFood
          </a>
        </div>
      </div>
    </section>
  );
}
