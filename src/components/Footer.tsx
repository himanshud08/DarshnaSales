import { FOOTER } from "@/constants";

const Footer = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap border-b border-neutral-700">
          <div className="w-full sm:w-1/2 lg:w-6/12 p-4">
            <h2>Darshana Sales Enterprises</h2>
            <p className="lg:max-w-sm py-8 text-sm">{FOOTER.description}</p>
          </div>

          {FOOTER.category.map((category, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-2/12 p-4">
              <h3 className="font-semibold uppercase pb-4">
                {category.Address}
              </h3>

              <p className="font-semibold uppercase pb-4">
                {category.text1}
              </p>
              <p className="lg:max-w-sm py-8 text-sm">{FOOTER.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
