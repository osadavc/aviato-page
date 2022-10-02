import Tabs from "./Tabs";

const Main = () => {
  return (
    <div
      className="bold mx-auto flex max-w-7xl px-4"
      style={{
        minHeight: "calc(100vh - 100px)",
      }}
    >
      <div className="flex items-center justify-center">
        <Tabs />
      </div>
      <div className="flex-grow">Main Section</div>
      <div className="w-[350px]">Companies</div>
    </div>
  );
};

export default Main;
