import CourseCard from "../components/CourseCard";
import PagesHeader from "../components/PagesHeader";
import SecHeader from "../components/SecHeader";

const OurCourses = () => {
  return (
    <div className="flex flex-col gap-24">
      <PagesHeader
        title="Online Courses on Design and Development"
        description="Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
      />
      <div className="flex flex-col gap-20">
        <SecHeader
          title="Course Categories"
          description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        />
        <div className="grid grid-cols-2 gap-7">
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
