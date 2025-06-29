import MainButton from "./MainButton";

const HeroSec = () => {
  return (
    <section className="flex flex-col gap-24 ">
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4 bg-white99 rounded-xl py-4 pr-8 pl-5 relative">
            <img src="/AbstractLine.svg" className=" absolute -top-7 -left-7" />
            <img
              src="/vector2.svg"
              alt="Hero description"
              className="inline-block bg-orange95 p-4 rounded-md"
            />{" "}
            <h1 className=" text-5xl font-semibold text-gray10 ">
              <span className="text-primary">Unlock</span> Your Creative
              Potential
            </h1>
          </div>
          <p className=" text-gray15 text-4xl font-medium mt-2">
            with Online Design and Development Courses.
          </p>
          <p className=" text-gray15 text-lg">
            Learn from Industry Experts and Enhance Your Skills.
          </p>
        </div>
        <MainButton>Explore Courses</MainButton>
      </div>
      <img src="/Container1.png" alt="Hero photo" />
    </section>
  );
};

export default HeroSec;
