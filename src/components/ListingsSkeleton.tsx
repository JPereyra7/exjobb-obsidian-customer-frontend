import { Skeleton } from "@mui/material";

const ListingsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb Skeleton */}
      <div className="flex items-center gap-2 mb-6">
        <Skeleton variant="text" width={60} height={24} />
        <span className="text-gray-500">/</span>
        <Skeleton variant="text" width={180} height={24} />
      </div>

      {/* Image Gallery Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="lg:col-span-2 relative">
          <Skeleton 
            variant="rectangular" 
            width="100%" 
            height={500}
            sx={{ borderRadius: 2 }}
          />
        </div>

        {/* Thumbnail Skeleton */}
        <div className="grid grid-cols-2 gap-4 h-fit">
          {[...Array(4)].map((_, index) => (
            <Skeleton 
              key={index}
              variant="rectangular" 
              width="100%" 
              height={120}
              sx={{ borderRadius: 2 }}
            />
          ))}
        </div>
      </div>

      {/* Property Details Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Tags */}
          <div className="flex gap-2 mb-4">
            <Skeleton variant="rounded" width={80} height={28} />
            <Skeleton variant="rounded" width={80} height={28} />
          </div>

          {/* Title and Price */}
          <Skeleton variant="text" width="75%" height={48} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="25%" height={36} sx={{ mb: 4 }} />

          {/* Description */}
          <Skeleton variant="text" width="100%" sx={{ mb: 1 }} />
          <Skeleton variant="text" width="100%" sx={{ mb: 1 }} />
          <Skeleton variant="text" width="75%" />
        </div>

        {/* Contact Form Skeleton */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Skeleton variant="text" width="50%" height={32} sx={{ mb: 3 }} />
          <div className="space-y-4">
            <Skeleton variant="rounded" width="100%" height={48} />
            <Skeleton variant="rounded" width="100%" height={48} />
            <Skeleton variant="rounded" width="100%" height={48} />
            <Skeleton variant="rounded" width="100%" height={120} />
            <Skeleton variant="rounded" width="100%" height={48} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsSkeleton;