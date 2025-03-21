export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="bg-[#e8ddd1] text-black pt-20 relative overflow-hidden"
    >
      {/* Coconut wedge (top-left) */}
      <img
        src="/coconut-wedge.png"
        alt=""
        aria-hidden="true"
        className="absolute top-[200px] left-[-150px] w-[30%] pointer-events-none z-0 hidden lg:block"
      />

      {/* Coffee beans (top-right) */}
      <img
        src="/coffee-beans.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-[34%] max-w-[500px] pointer-events-none z-0"
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center xl:text-6xl xl:mb-10">
          About CoCo
        </h2>
        <p className="text-lg md:text-xl xl:text-2xl leading-relaxed text-justify px-6 sm:px-6">
          Welcome to CoCo - your go-to spot for refreshing drinks and delicious
          snacks! Located right inside Summer Mall, we proudly serve walk-in
          customers looking for a quick pick-me-up, a cozy place to chill, or
          something tasty to go. Whether you are craving icy fruit teas, creamy
          bubble milk tea, or crispy fried bites - we have something for
          everyone.
        </p>
      </div>

      <div className="mt-3 xl:mt-6 max-w-5xl mx-auto px-6 relative z-10">
        <img
          src="/drink-top.png"
          alt="Top of drink"
          className="w-full h-auto object-contain rounded-xl"
        />
      </div>
    </section>
  );
}
