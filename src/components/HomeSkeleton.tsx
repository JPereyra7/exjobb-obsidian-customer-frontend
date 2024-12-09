import { Skeleton } from "@mui/material";

const ListingCardSkeleton = () => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
    <Skeleton variant="rectangular" width="100%" height={256} />
    <div className="p-4">
      <Skeleton variant="text" width={100} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="75%" height={32} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="50%" />
    </div>
  </div>
);

const HomeSkeleton = () => {
  return (
    <>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Skeleton variant="text" width={180} height={40} sx={{ mb: 4 }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <ListingCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSkeleton;