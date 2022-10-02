import Companies from "./Companies";
import Tabs from "./Tabs";
import Videos from "./Videos";

const Main = () => {
  return (
    <div
      className="bold mx-auto flex max-w-7xl px-4 pt-7"
      style={{
        height: "calc(100vh - 100px)",
      }}
    >
      <div className="flex items-center justify-center">
        <Tabs />
      </div>
      <div className="flex-grow">
        <Videos />
      </div>
      <div className="w-[350px]">
        <Companies />
      </div>
    </div>
  );
};

export default Main;
