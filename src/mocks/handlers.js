// src/mock/handlers.js
import { rest } from "msw";

const todoList = [
  {
    id: 1,
    title: "청소",
    completed: true,
  },
  {
    id: 2,
    title: "설거지",
    completed: true,
  },
  {
    id: 3,
    title: "숙제",
    completed: true,
  },
];
export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todoList));
  }),
];
