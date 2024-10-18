import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remTodo } from "../features/todo/todoSlice";

export const SimpleTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="inline-block w-full mt-3 mb-4">
        <ul className="flex flex-col items-center w-full">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between gap-10 px-5 py-3 mt-2 rounded-sm w-96 bg-zinc-600"
              >
                {todo.text}
                <button
                  className="px-3 ml-3 text-xl font-semibold text-center text-red-700 border border-red-400 rounded-md"
                  onClick={() => dispatch(remTodo(todo.id))}
                >
                  &nbsp; X
                </button>
              </li>
            ))
          ) : (
            <h1 className="text-4xl font-semibold text-center text-white mt-28">No Task </h1>
          )}
        </ul>
      </div>
    </>
  );
};
