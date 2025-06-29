import CourseCard from "./CourseCard";
import SecHeader from "./SecHeader";

const TrendyTechnologySec = () => {
  return (
    <section className="flex flex-col gap-7 bg-white p-12 rounded-xl">
      <SecHeader
        title={"Our Trendy Technology"}
        description={"The most used fields in the labor market"}
      />
      <div className="flex gap-7">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
};

export default TrendyTechnologySec;
