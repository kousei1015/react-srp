import { useEffect, useState } from "react";
import axios from "axios";
import { TodoType } from "../types";

export const useFetchTodo = () => {
  const [data, setData] = useState<TodoType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await (
          await axios.get<TodoType[]>("http://localhost:3000/api/v1/todos")
        ).data;
        setData(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData()
  }, []);

  return {
    todos: data,
  };
};
