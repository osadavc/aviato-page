import { FC } from "react";
import { Menu } from "@headlessui/react";

const companyList = [
  {
    name: "Apple",
    logo: "/images/logos/apple.png",
    description: "Technology company",
  },
  {
    name: "IBM",
    logo: "/images/logos/ibm.png",
    description: "Technology company",
  },
  {
    name: "Aviato",
    logo: "/images/logos/nintendo.png",
    description: "Video game company",
  },
  {
    name: "Mastercard",
    logo: "/images/logos/mastercard.png",
    description: "Financial services company",
  },
  {
    name: "Starbucks",
    logo: "/images/logos/starbucks.png",
    description: "Johnson & Johnson",
  },
  {
    name: "Apple",
    logo: "/images/logos/apple.png",
    description: "Technology company",
  },
  {
    name: "IBM",
    logo: "/images/logos/ibm.png",
    description: "Technology company",
  },
  {
    name: "Aviato",
    logo: "/images/logos/nintendo.png",
    description: "Video game company",
  },
  {
    name: "Mastercard",
    logo: "/images/logos/mastercard.png",
    description: "Financial services company",
  },
  {
    name: "Starbucks",
    logo: "/images/logos/starbucks.png",
    description: "Johnson & Johnson",
  },
  {
    name: "Apple",
    logo: "/images/logos/apple.png",
    description: "Technology company",
  },
  {
    name: "IBM",
    logo: "/images/logos/ibm.png",
    description: "Technology company",
  },
  {
    name: "Aviato",
    logo: "/images/logos/nintendo.png",
    description: "Video game company",
  },
  {
    name: "Mastercard",
    logo: "/images/logos/mastercard.png",
    description: "Financial services company",
  },
  {
    name: "Starbucks",
    logo: "/images/logos/starbucks.png",
    description: "Johnson & Johnson",
  },
  {
    name: "Apple",
    logo: "/images/logos/apple.png",
    description: "Technology company",
  },
  {
    name: "IBM",
    logo: "/images/logos/ibm.png",
    description: "Technology company",
  },
  {
    name: "Aviato",
    logo: "/images/logos/nintendo.png",
    description: "Video game company",
  },
  {
    name: "Mastercard",
    logo: "/images/logos/mastercard.png",
    description: "Financial services company",
  },
  {
    name: "Starbucks",
    logo: "/images/logos/starbucks.png",
    description: "Johnson & Johnson",
  },
  {
    name: "Apple",
    logo: "/images/logos/apple.png",
    description: "Technology company",
  },
  {
    name: "IBM",
    logo: "/images/logos/ibm.png",
    description: "Technology company",
  },
  {
    name: "Aviato",
    logo: "/images/logos/nintendo.png",
    description: "Video game company",
  },
  {
    name: "Mastercard",
    logo: "/images/logos/mastercard.png",
    description: "Financial services company",
  },
  {
    name: "Starbucks",
    logo: "/images/logos/starbucks.png",
    description: "Johnson & Johnson",
  },
];

const Companies = () => {
  return (
    <div
      className="overflow-scroll pb-10"
      style={{
        height: "calc(100vh - 100px)",
      }}
    >
      <Menu as="div" className="relative">
        <Menu.Button>
          <h2 className="text-2xl font-semibold">Pending</h2>
        </Menu.Button>
        <Menu.Items
          as="div"
          className="absolute left-10 mt-2 flex w-56 origin-top-right flex-col rounded-md bg-white text-[#3981F6] shadow-sm focus:outline-none"
        >
          <Menu.Item as="div" className="flex items-center space-x-2 py-2 px-4">
            <img src="/images/icons/tick.png" alt="Tick" />
            <p>Pending</p>
          </Menu.Item>
          <Menu.Item as="div" className="flex items-center space-x-2 py-2 px-4">
            <img
              src="/images/icons/tick.png"
              alt="Tick"
              className="opacity-0"
            />
            <p>Contacted</p>
          </Menu.Item>
          <Menu.Item as="div" className="flex items-center space-x-2 py-2 px-4">
            <img
              src="/images/icons/tick.png"
              alt="Tick"
              className="opacity-0"
            />
            <p>Rejected</p>
          </Menu.Item>
        </Menu.Items>
      </Menu>

      <div className="mt-6 space-y-5">
        {companyList.map((company) => (
          // Math.random used for demo purposes
          <SingleCompany key={Math.random()} {...company} />
        ))}
      </div>
    </div>
  );
};

interface SingleCompanyProps {
  logo: string;
  name: string;
  description: string;
}

const SingleCompany: FC<SingleCompanyProps> = ({ logo, name, description }) => {
  return (
    <div className="flex items-center justify-between pr-2">
      <div className="flex space-x-2">
        <img src={logo} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="text-[#BFBFC3]">{description}</p>
        </div>
      </div>
      <img
        src="/images/icons/menu.svg"
        alt="Menu Icon"
        className="cursor-pointer"
      />
    </div>
  );
};

export default Companies;
