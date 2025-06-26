"use client";
import { FEATURED_BRANDS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const FeaturedProperty = () => {
  return (
    <div className="container mx-auto border-b py-10 px-4">
      <h2 className="text-center text-3xl tracking-tight sm:text-4xl lg:text-5xl font-bold mb-10">
        Featured Brands
      </h2>

      <div className="flex flex-wrap -mx-4">
        {FEATURED_BRANDS.map((property, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <Link href={`/brands/${property.slug}`} className="block group">
              <div className="p-4 border rounded-md shadow-md hover:shadow-lg transition duration-300 text-center">
                <Image
                  className="rounded-md object-contain mx-auto"
                  src={property.image}
                  alt={property.name}
                  width={300}
                  height={200}
                />
                <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                  {property.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperty;
