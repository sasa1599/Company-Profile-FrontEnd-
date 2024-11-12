import { getProducts, IProduct } from "@/libs/product";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Home() {
  const data: IProduct[] = await getProducts();
  console.log(data);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50 flex justify-center items-center p-4">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={item.fields.title}
              id={`product-${index}`}
              className="w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="relative">
                <Image
                  src={`https:${item.fields.thumbnail.fields.file.url}`}
                  alt={item.fields.title}
                  width={500}
                  height={500}
                  className="w-full h-[250px] object-cover rounded-t-lg"
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs py-1 px-3 rounded-lg shadow-md">
                  New
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {item.fields.title}
                </h2>
                <div className="text-base text-gray-600 mb-4">
                  {documentToReactComponents(item.fields.content)}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.fields.price}
                  </h3>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
