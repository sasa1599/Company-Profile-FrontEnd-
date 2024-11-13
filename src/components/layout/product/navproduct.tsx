import Link from "next/link";

export default function NavProduct() {
  return (
    <nav className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 md:p-10">
      <div className="max-w-screen-xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">What We Grow</h1>
          <h2 className="text-lg md:text-xl font-semibold">
            Dedicated to providing the highest quality crops
          </h2>
        </header>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { href: "#product-0", label: "Our Fresh Products", color: "green-700" },
            { href: "#product-18", label: "Fresh Fish Product", color: "blue-700" },
            { href: "#product-15", label: "High Quality Chicken Product", color: "yellow-700" },
          ].map((link, index) => (
            <Link href={link.href} key={index}>
              <a className={`text-lg md:text-xl font-medium bg-white text-${link.color} hover:bg-${link.color} hover:text-white py-2 px-6 rounded-lg transition-all duration-300`}>
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}