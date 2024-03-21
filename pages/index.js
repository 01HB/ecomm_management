import { IoSettingsOutline } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen h-fit flex justify-center px-3 py-10 bg-emerald-100">
        <p className="w-full h-fit font-sans text-[14px] font-[600] leading-6 text-gray-800 text-center text-wrap">
          <span><IoSettingsOutline className="inline w-5 h-5 mr-2 text-gray-900 animate-spin" />currently under development</span><br /><br />
          <span>please check back later</span>
        </p>
      </div>
    </>
  );
};

export default Home;
