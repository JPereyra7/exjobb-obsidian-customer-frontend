import { useNavigate } from "react-router-dom";
import { VillasListingsProps } from "../models/VillasListingsProps";
import '../index.css'

export const VillasListings = ({ data }: VillasListingsProps) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-8">Luxury Villas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((villa) => (
          <div
            key={villa.id}
            onClick={() => navigate(`/listing/${villa.id}`)}
            className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:opacity-80 hover:transition duration-700"
          >
            {/* Image Container */}
            <div className="relative">
              <img
                src={villa.mainimage}
                alt={villa.propertytitle}
                className="w-full h-64 object-cover"
              />
              {/* For Sale or Sold Tag */}
              <div className="absolute top-4 right-4">
                <span
                  className={`${
                    villa.activelisting ? "bg-teal-500" : "bg-red-700"
                  } text-white px-3 py-1 rounded-full text-sm`}
                >
                  {villa.activelisting ? "For Sale" : "Sold"}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <span className="text-xl font-bold text-slate-900">
                  ${villa.propertyprice.toLocaleString()}
                </span>
              </div>
              <h3 className="text-l font-bold mb-2">{villa.propertytitle}</h3>
              <p className="text-gray-500 line-clamp-2 mb-4">
                {villa.propertydescription}
              </p>

              {/* Property Details */}
              <div className="flex items-center gap-4 text-gray-500">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Villa
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {villa.category.includes("spain") ? "Spain" : "Florida"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VillasListings;