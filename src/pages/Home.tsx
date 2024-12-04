import { SpainListings } from "../components/SpainListings";
import VillasListings from "../components/VillasListings";

export const Home = () => {
  return (
    <>
      <div className="relative min-h-[80vh] mb-8">
        {/* Hero Section */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://img.jamesedition.com/listing_images/2024/10/03/11/21/25/3b9daabf-e88c-41e3-957e-1390f8bc86f9/je/1900xxsxm.jpg')`,
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-36">
          <div className="w-16 h-2 bg-[#d3c196] mb-6"></div>
          <h1 className="text-5xl font-bold text-white mb-4 px-4">
            Lillard & Co
            <br />
            Luxury Real Estate Broker
          </h1>
          <p className="text-white/80 max-w-2xl mb-12 px-4">
            We are recognized for exceeding client expectations and delivering
            great results through dedication, ease of process, and extraordinary
            services to our worldwide clients. From the sunny coasts of Spain to
            the luxurious Tampa Bay Area in Florida, we at Lillard & Co provide
            exceptional quality.
          </p>

          {/* Desktop Search Section */}
          <div className="hidden md:flex justify-center items-center gap-2 max-w-6xl mx-auto">
            <div className="flex w-full md:w-auto flex-1">
              <input
                type="text"
                placeholder="Search by location"
                className="w-full px-4 py-3 border-0 rounded-l outline-none"
              />
            </div>

            <div className="flex w-full md:w-auto">
              <select className="px-4 py-3 border-l border-gray-200 outline-none bg-white">
                <option>Property Type</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>House</option>
              </select>
            </div>

            <div className="flex w-full md:w-auto">
              <select className="px-4 py-3 border-l border-gray-200 outline-none bg-white">
                <option>Country</option>
                <option>Spain</option>
                <option>USA</option>
              </select>
            </div>

            <button className="w-full md:w-auto px-8 py-3 bg-[#d3c196] text-white font-medium rounded-r hover:bg-[#b8a578] transition-colors">
              SEARCH
            </button>
          </div>

          {/* Mobile Search Section */}
          <div className="md:hidden bg-transparent border-1 border border-white p-6 rounded-lg max-w-sm mx-auto">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Search by location"
                className="w-full px-4 py-3 border border-gray-200 rounded outline-none"
              />

              <select className="w-full px-4 py-3 border border-gray-200 rounded outline-none bg-white appearance-none">
                <option>Property Type</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>House</option>
              </select>

              <select className="w-full px-4 py-3 border border-gray-200 rounded outline-none bg-white appearance-none">
                <option>Country</option>
                <option>Spain</option>
                <option>USA</option>
              </select>

              <button className="w-full px-8 py-3 bg-[#d3c196] text-white font-medium rounded hover:bg-[#b8a578] transition-colors flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                SEARCH
              </button>
            </div>
          </div>

          {/* Three dots with info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-12 text-white text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#d3c196]"></span>
              <span>10,000+ HOMES SOLD</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#d3c196]"></span>
              <span>2 BILLION $ IN SALES</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#d3c196]"></span>
              <span>4,000+ SATISFIED CUSTOMERS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-16">
        <VillasListings />
      </div>

      {/* Marketing Hero Section */}
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

      <div className="bg-gray-50 py-16">
        <SpainListings />
      </div>
    </>
  );
};
