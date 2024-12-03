import { SpainListings } from "../components/SpainListings";
import VillasListings from "../components/VillasListings"; // Import the component

export const Home = () => {
  return (
    <>
      <div className="relative min-h-[80vh] mb-8">
        {/* Hero Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://img.jamesedition.com/listing_images/2024/10/03/11/21/25/3b9daabf-e88c-41e3-957e-1390f8bc86f9/je/1900xxsxm.jpg')`,
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          {/* Small decoration */}
          <div className="w-16 h-2 bg-[#d3c196] mb-6"></div>

          {/* Hero Text */}
          <h1 className="text-5xl font-bold text-white mb-4">
            Lillard & Co
            <br />
            Luxury Real Estate Broker
          </h1>
          <p className="text-white/80 max-w-2xl mb-12">
            We are recognized for exceeding client expectations and delivering
            great results through dedication, ease of process, and extraordinary
            services to our worldwide clients. From the sunny coasts of Spain to
            the luxurious Tampa Bay Area in Florida, we at Lillard & Co provide
            exceptional quality.
          </p>

          {/* Search Section */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Toggle Buttons */}
              <div className="flex gap-2">
                <button className="px-6 py-2 bg-[#d3c196] text-white rounded">
                  Sales
                </button>
                <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                  Rentals
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
                <select className="w-full p-2 border rounded">
                  <option>Select Category</option>
                </select>
                {/* Input options */}
                <input
                  type="text"
                  placeholder="Enter an address, state, city, area or zip code"
                  className="w-full p-2 border rounded"
                />

                <select className="w-full p-2 border rounded">
                  <option>Select Bedrooms</option>
                  {/* Add bedroom options */}
                </select>
              </div>

              {/* Search Button */}
              <button className="p-2 bg-[#d3c196] text-white rounded w-full md:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Villas Listings Section */}
      <div className="bg-gray-50 py-16">
        <VillasListings />
      </div>

      <div className="bg-gray-50 py-16">
        <SpainListings />
      </div>
    </>
  );
};
