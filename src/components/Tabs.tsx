const Tabs = () => {
  return (
    <div className="mr-2">
      <div className="flex flex-col items-center justify-center space-y-3 rounded-full bg-[#3981F6] p-2">
        <div className="cursor-pointer rounded-full bg-white p-5">
          <img
            src="/images/icons/home.svg"
            alt="Home Icon"
            className="h-5 w-5"
          />
        </div>
        <img src="/images/icons/line.png" alt="Line" />
        <div className="cursor-pointer p-5">
          <img
            src="/images/icons/lines.svg"
            alt="Lines Icon"
            className="h-5 w-5"
          />
        </div>
        <img src="/images/icons/line.png" alt="Line" />
        <div className="cursor-pointer p-5">
          <img
            src="/images/icons/messages.svg"
            alt="Message Icon"
            className="h-5 w-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
