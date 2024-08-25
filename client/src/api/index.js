export const getInitialTodo = async () => {
  const response = await fetch("/api/v1/getTodos", {
    method: "GET",
  });

  return await response.json();
};
