import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { iListings } from "../models/iListings";
import { getListingById } from "../services/listingService";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Listing = () => {
  const { id } = useParams();
  const [listing, setListing] = useState<iListings | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListing = async () => {
      if (id) {
        const data = await getListingById(id);
        setListing(data);
        if (data) {
          const images = [data.mainimage, ...data.additionalimages];
          setAllImages(images);
        }
      }
    };
    fetchListing();
  }, [id]);

  const handleNavigateToHome = () => {
    navigate("/");
  }

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => 
    prev === 0 ? allImages.length - 1 : prev -1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
    prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  if (!listing) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <span className="text-gray-500 cursor-pointer hover:underline" onClick={handleNavigateToHome}>Home</span>
        <span className="text-gray-500">/</span>
        <span>{listing.propertytitle}</span>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="lg:col-span-2 relative">
          <img
            src={allImages[currentImageIndex]}
            alt={`${listing.propertytitle} ${currentImageIndex + 1}`}
            className="w-full h-[500px] object-cover rounded-lg"
          />
          
          {/* Chevrons */}
          <button
            onClick={handlePreviousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 gap-4 h-fit">
          {listing.additionalimages.slice(0, 4).map((image, index) => (
            <div 
              key={index}
              className="relative cursor-pointer"
              onClick={() => setCurrentImageIndex(index + 1)}
            >
              <img
                src={image}
                alt={`${listing.propertytitle} ${index + 1}`}
                className="w-full h-[120px] object-cover rounded-lg"
              />
              {index === 3 && listing.additionalimages.length > 4 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                  <span className="text-white text-lg font-semibold">
                    +{listing.additionalimages.length - 4} more
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-[#d3c196] text-white rounded-full text-sm">
                {listing.activelisting ? "For Sale" : "Sold"}
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {listing.category[0]}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-2">{listing.propertytitle}</h1>
            <p className="text-2xl text-[#d3c196] font-semibold">
              ${listing.propertyprice.toLocaleString()}
            </p>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600 leading-relaxed">
              {listing.propertydescription}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
          <h3 className="text-xl font-semibold mb-4">Request Information</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-3 border rounded"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border rounded"
              defaultValue={`I'm interested in [${listing.propertytitle}]`}
            />
            <button
              type="submit"
              className="w-full bg-[#d3c196] text-white py-3 rounded hover:bg-[#b8a578] transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Listing;