import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const { image, companyName, role, timePosted, techStack } = props;
  const handleClick = () => {
    window.location.href = "https://www.nodeflair.com/jobs";
  };
  return (
    <div className={classes.card} onClick={handleClick}>
      <div className={classes.container1}>
        <img src={image} alt="logo" />
      </div>
      <div className={classes.container2}>
        <div>
          <p className={classes.companyName}>{companyName}</p>
        </div>
        <div>
          <p className={classes.role}>{role}</p>
        </div>
      </div>
      <div className={classes.container3}>
        <p className={classes.time}>{timePosted}</p>
        <p className={classes.techStack}>{techStack}</p>
      </div>
      <div>
        <hr className={classes.hr} />
      </div>
      <div className={classes.container4}>
        {props.technologyUsed.map((tech) => (
          <p className={classes.techUsed}>{tech}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
