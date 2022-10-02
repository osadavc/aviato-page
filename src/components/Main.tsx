import Companies from "./Companies";
import Tabs from "./Tabs";
import Videos from "./Videos";

const Main = () => {
  return (
    <div
      className="bold mx-auto flex max-w-7xl space-x-4 px-4 pt-7"
      style={{
        height: "calc(100vh - 100px)",
      }}
    >
      <div className="flex min-w-max items-center justify-center">
        <Tabs />
      </div>
      <div className="flex-grow">
        <Videos />
      </div>
      <div className="min-w-[350px]">
        <Companies />
      </div>
    </div>
  );
};

export default Main;
