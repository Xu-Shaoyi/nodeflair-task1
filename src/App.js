import React from "react";
import classes from "./App.module.css";

import Card from "./Card";
import JobInfo from "./JobInfo";

const App = () => {
  return (
    <div className={classes.background}>
      <JobInfo />
    </div>
  );
};

export default App;
