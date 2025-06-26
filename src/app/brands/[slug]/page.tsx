import { FEATURED_BRANDS } from "@/constants";
import Image from "next/image";
import { notFound } from "next/navigation";

type BrandPageProps = {
  params: {
    slug: string;
  };
};

const BrandPage = ({ params }: BrandPageProps) => {
  const brand = FEATURED_BRANDS.find(b => b.slug === params.slug);

  if (!brand) return notFound();

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{brand.name}</h1>

      {/* Description */}
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        {brand.description}
      </p>

      {/* Main Detail Image */}
      <Image
        src={brand.detailImage || brand.image}
        alt={brand.name}
        width={800}
        height={500}
        className="rounded-md mx-auto mb-12"
      />

      {/* Gallery */}
      {brand.gallery && brand.gallery.length > 0 && (
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-6 text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {brand.gallery.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center border rounded-md overflow-hidden shadow-md bg-white p-3"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-[220px] rounded-md"
                />
                <p className="mt-3 text-sm font-medium text-gray-800 text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandPage;
