const Header = () => {
  return (
    <div className="border-b">
      <div className="mx-auto flex min-h-[96px] max-w-7xl items-center justify-between">
        <img
          src="/images/aviato.png"
          alt="Aviato Logo"
          className="cursor-pointer"
        />
        <div className="flex">
          <div className="flex items-center justify-center rounded-[16px] bg-[#F8F8F8] py-4 px-5">
            <img
              src="/images/icons/search.svg"
              alt="Search Icon"
              className="mr-4"
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent pr-32 outline-none"
            />
          </div>

          <button className="ml-4 rounded-full bg-[#3981F6] p-5">
            <img src="/images/icons/add.svg" alt="Search Icon" />
          </button>
        </div>
        <img
          src="/images/profile.png"
          alt="Profile"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
