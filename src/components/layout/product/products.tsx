import { getProducts, IProduct } from "@/libs/product";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Home() {
  const data: IProduct[] = await getProducts();

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50 flex justify-center items-center p-2 md:p-4">
      <div className="container mx-auto p-4 md:p-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.map((item, index) => (
            <article
              key={item.fields.title}
              id={`product-${index}`}
              className="w-full max-w-xs md:max-w-sm bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="relative">
                <Image
                  loading={index === 0 ? "eager" : "lazy"}
                  src={`https:${item.fields.thumbnail.fields.file.url}`}
                  alt={item.fields.title}
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 200px, 400px"
                  className="w-full h-[200px] md:h-[250px] object-cover rounded-t-lg"
                  priority={index === 0}
                />
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs py-0.5 px-2 rounded-md shadow-md">
                  New
                </span>
              </div>
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-3">
                  {item.fields.title}
                </h2>
                <div className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  {documentToReactComponents(item.fields.content)}
                </div>
                <div className="flex justify-between items-center mt-2 md:mt-4">
                  <span className="text-lg md:text-xl font-bold text-gray-900">
                    {item.fields.price}
                  </span>
                  <button
                    aria-label={`Buy ${item.fields.title}`}
                    className="px-3 md:px-4 py-1 md:py-2 bg-blue-600 text-white text-xs md:text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
