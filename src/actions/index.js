export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const FETCH_TODOS = "FETCH_TODOS";

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";
export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => {
  try {
    let users_data = [];
    if (typeof localStorage.getItem("users") != "undefined") {
      users_data = JSON.parse(localStorage.getItem("users"));
      console.log("===>>>>>>>>", users_data);
      return {
        type: FETCH_USERS,
        users: users_data,
      };
    }
  } catch (error) {
    localStorage.clear();
  }
};

export const fetchTodos = () => {
  try {
    let todos_data = [];
    if (typeof localStorage.getItem("todos") != "undefined") {
      todos_data = JSON.parse(localStorage.getItem("todos"));
      console.log("===>>>>>>>>", todos_data);
      return {
        type: FETCH_USERS,
        users: todos_data,
      };
    }
  } catch (error) {
    localStorage.clear();
  }
};

export const addTodo = (params) => {
  return {
    type: ADD_TODO,
    params: params,
  };
};

export const editTodo = (key, params) => {
  return {
    type: EDIT_TODO,
    key: key,
    params: params,
  };
};

export const deleteTodo = (key) => {
  return {
    type: DELETE_TODO,
    key: key,
  };
};

export const addUser = (params) => {
  console.log("====>>>>>>>", params);
  return {
    type: ADD_USER,
    params: params,
  };
};

export const editUser = (key, params) => {
  return {
    type: EDIT_USER,
    key: key,
    params: params,
  };
};

export const deleteUser = (key) => {
  return {
    type: DELETE_USER,
    key: key,
  };
};
