import CardDescription from "./CardDiscription";
import SecondaryButton from "./secoundaryButton";

const styles = {
  common:
    "px-2 py-2 text-gray30 text-lg font-normal border rounded-lg border-white95",
};

const CourseCard = () => {
  return (
    <div className=" flex flex-col gap-6 p-6 bg-white rounded-lg border border-white95">
      <div className="flex flex-col gap-7">
        <img src="/Image.png" className="h-96 w-96 rounded-lg w-full" />
        <div className="flex justify-between items-center ">
          <div className="flex gap-2 ">
            <p className={styles.common}>4 Weeks</p>
            <p className={styles.common}>Beginner</p>
          </div>
          <p className="text-gray15 text-xl">By John Smith</p>
        </div>
        <CardDescription
          title="Big Data"
          description="1. Learn Python, SQL & Linux basics. 2. Master Hadoop, Spark & NoSQL + Cloud (AWS/GCP). 3. Build data pipelines, analyze datasets & get certified (Cloudera/AWS)."
        />
      </div>
      <SecondaryButton> View Details </SecondaryButton>
    </div>
  );
};

export default CourseCard;
