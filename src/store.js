import { create } from "zustand";
const store = (set) => {
  const storedTasks = JSON.parse(localStorage.getItem("trelloData")) || [];

  return {
    tasks: storedTasks,
    draggedTask: null,
    addTask: (title, state) =>
      set((store) => {
        const updatedTasks = [...store.tasks, { title, state }];
        localStorage.setItem("trelloData", JSON.stringify(updatedTasks));
        return { tasks: updatedTasks };
      }),
    removeTask: (title) =>
      set((store) => {
        const updatedTasks = store.tasks.filter((task) => task.title !== title);
        localStorage.setItem("trelloData", JSON.stringify(updatedTasks));
        return { tasks: updatedTasks };
      }),
    setDraggedTask: (title) => {
      // console.log("setDraggedTask called: " + title);
      set(() => {
        return { draggedTask: title };
      });
    },
    moveTask: (title, newState) =>
      set((store) => {
        console.log("moveTask called: " + title + newState);

        const updatedTasks = store.tasks.map((task) => {
          if (task.title === title) {
            console.log(
              "Task found. Updating state from",
              task.state,
              "to",
              newState
            );
            task.state = newState;
          }
          return task;
        });

        localStorage.setItem("trelloData", JSON.stringify(updatedTasks));

        console.log("Updated tasks:", updatedTasks);
        return { tasks: updatedTasks };
      }),
  };
};

export const useStore = create(store);
