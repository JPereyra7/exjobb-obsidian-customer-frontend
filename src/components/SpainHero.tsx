export const SpainHero = () => {
  return (
    <>
      <div className="relative min-h-[60vh]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://img.jamesedition.com/listing_images/2024/09/30/16/03/26/9143142c-3680-45f1-9c61-8512c58e7ca2/je/1900xxs.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Your Dream Home in Spain
          </h2>
          <p className="text-white/80 max-w-2xl mb-8">
            Experience the perfect blend of luxury and comfort in the most
            luxurious locations across the Iberian Peninsula. From beachfront
            villas to urban penthouses, find your perfect Spanish retreat.
          </p>
          <button className="px-8 py-3 bg-[#d3c196] text-white font-medium rounded hover:bg-[#b8a578] transition-colors">
            Explore Spanish Properties
          </button>
        </div>
      </div>
    </>
  );
};
export default SpainHero;
