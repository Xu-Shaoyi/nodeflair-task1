import React from "react";

import Card from "./Card";
import classes from "./JobInfo.module.css";

const jobs = [
  {
    image:
      "https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzZIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--31754c45ca3f4d5a816c8f43b853cedf8be60b4b/Apple.jpg",
    companyName: "Apple",
    role: "Data Engineer",
    timePosted: "1 minute ago",
    techStack: "Data",
    technologyUsed: ["Oracle", "HDFS", "Hive", "Spark", "yarn", "..."],
  },
  {
    image:
      "https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ21UIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4a34bcb984abb4039442899477a50dbbc0011076/Binance.png",
    companyName: "Binance",
    role: "Backend Service Developer",
    timePosted: "2 minutes ago",
    techStack: "Backend",
    technologyUsed: ["Spring", "Java"],
  },
  {
    image:
      "https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcldHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--af568e010d1aec6fa6548be6ee209cc9725f515f/Goldman%20Sachs.jpg",
    companyName: "Goldman Sachs",
    role: "Full Stack Developer (Data Modelling)",
    timePosted: "3 minutes ago",
    techStack: "Full Stack",
    technologyUsed: ["Analytics", "UDB", "ORM", "Apache", "..."],
  },
];

const JobInfo = () => {
  return (
    <div className={classes.container}>
      {jobs.map((job) => (
        <Card
          key={job.id}
          image={job.image}
          companyName={job.companyName}
          role={job.role}
          timePosted={job.timePosted}
          techStack={job.techStack}
          technologyUsed={job.technologyUsed}
        />
      ))}
    </div>
  );
};

export default JobInfo;
