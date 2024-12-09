import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ApartmentsListings } from "../components/ApartmentsListings";
import SpainHero from "../components/SpainHero";
import { SpainListings } from "../components/SpainListings";
import Team from "../components/Team";
import VillasListings from "../components/VillasListings";
import { getListingsByCategory } from "../services/listingService";
import { iListings } from "../models/iListings";
import HomeSkeleton from "../components/HomeSkeleton";

interface FilteredListings {
  villas: iListings[];
  spain: iListings[];
  apartments: iListings[];
}

export const Home = () => {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState<iListings[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<null | HTMLDivElement>(null);

  const [searchParams, setSearchParams] = useState({
    location: "",
    propertyType: "",
    country: "",
  });

  const [filteredListings, setFilteredListings] = useState<FilteredListings>({
    villas: [],
    spain: [],
    apartments: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const villas = await getListingsByCategory("villas");
        const spain = await getListingsByCategory("spain");
        const apartments = await getListingsByCategory("apartments");

        setFilteredListings({ villas, spain, apartments });
      } catch (error) {
        console.error("Error fetching filtered data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleSuggestionClick = (id: string) => {
    navigate(`/listing/${id}`);
    setIsDropdownVisible(false);
  };

  const handleSearchInput = (field: string, value: string) => {
    setSearchParams((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === "location") {
      const allListings = [
        ...filteredListings.villas,
        ...filteredListings.spain,
        ...filteredListings.apartments,
      ];
      const filtered = allListings.filter((listing) =>
        listing.propertytitle.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setIsDropdownVisible(filtered.length > 0);
    }
  };

  const clearSearch = () => {
    setSearchParams((prev) => ({ ...prev, location: "" }));
    setSuggestions([]);
    setIsDropdownVisible(false);
  };

  return (
    <>
      <div className="relative min-h-[80vh]">
        {/* Hero Section */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://img.jamesedition.com/listing_images/2024/10/03/11/21/25/3b9daabf-e88c-41e3-957e-1390f8bc86f9/je/1900xxsxm.jpg')`,
          }}
        >
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

          {/* Search Section + Mobile */}
          <div
            className="flex flex-col gap-2 max-w-6xl mx-auto relative"
            ref={containerRef}
          >
            <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-2">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search by location"
                  className="w-full px-4 py-3 border-0 rounded md:rounded-l outline-none pr-10"
                  value={searchParams.location}
                  onChange={(e) =>
                    handleSearchInput("location", e.target.value)
                  }
                />
                {searchParams.location && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  ></button>
                )}
              </div>

              <select
                className="px-4 py-3 border-0 md:border-l border-gray-200 outline-none bg-white rounded md:rounded-none"
                value={searchParams.propertyType}
                onChange={(e) =>
                  handleSearchInput("propertyType", e.target.value)
                }
              >
                <option>Property Type</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>House</option>
              </select>
              <select
                className="px-4 py-3 border-0 md:border-l border-gray-200 outline-none bg-white rounded md:rounded-none md:rounded-r"
                value={searchParams.country}
                onChange={(e) => handleSearchInput("country", e.target.value)}
              >
                <option>Country</option>
                <option>Spain</option>
                <option>USA</option>
              </select>
            </div>

            {/* Suggestions Dropdown Meny */}
            {isDropdownVisible && suggestions.length > 0 && (
              <div className="absolute bg-white border rounded-lg shadow-lg mt-[3.2rem] max-w-6xl w-full max-h-96 overflow-y-auto z-50">
                <div className="p-2 space-y-1">
                  {suggestions.map((suggestion) => (
                    <div
                      key={suggestion.id}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md cursor-pointer"
                      onClick={() => handleSuggestionClick(suggestion.id)}
                    >
                      <img
                        src={suggestion.mainimage}
                        alt={suggestion.propertytitle}
                        className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="font-medium text-gray-900 truncate">
                          {suggestion.propertytitle}
                        </span>
                        <span className="text-sm text-gray-500 truncate">
                          {suggestion.category || "Location not specified"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isLoading ? (
        <HomeSkeleton />
      ) : (
        <>
          <div className="bg-gray-50 py-16">
            <VillasListings data={filteredListings.villas} />
          </div>
          <SpainHero />
          <div className="bg-gray-50 py-16">
            <SpainListings data={filteredListings.spain} />
          </div>
          <div className="bg-gray-50 py-16">
            <Team />
          </div>
          <div className="bg-gray-50 pb-16">
            <ApartmentsListings data={filteredListings.apartments} />
          </div>
        </>
      )}
    </>
  );
};
export default Home;
