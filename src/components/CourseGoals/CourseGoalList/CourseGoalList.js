import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import styles from "./CourseGoalList.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CourseGoalList = (props) => {
  return (
    <ul className={cx("goal-list")}>
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
