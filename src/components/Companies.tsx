import { FC } from "react";

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
];

const Companies = () => {
  return (
    <div
      className="overflow-scroll pb-10"
      style={{
        height: "calc(100vh - 100px)",
      }}
    >
      <h2 className="text-2xl font-semibold">Pending</h2>

      <div className="mt-6 space-y-5">
        {companyList.map((company) => (
          <SingleCompany key={company.name} {...company} />
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
    <div className="flex items-center space-x-2">
      <img src={logo} alt={name} />
      <div>
        <h3>{name}</h3>
        <p className="text-[#BFBFC3]">{description}</p>
      </div>
    </div>
  );
};

export default Companies;
