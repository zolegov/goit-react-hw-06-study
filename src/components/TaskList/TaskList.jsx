import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import { statusFilters } from "../../redux/constants";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  const statusFilter = useSelector((state) => state.filters.status);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => {
        return (
          <li key={task.id} className={css.listItem}>
            <Task task={task} />
          </li>
        );
      })}
    </ul>
  );
};

// <ul>
//   {visibleTasks.map((task) => (
//     <li key={task.id}>
//       <Task task={task} />
//     </li>
//   ))}
// </ul>
