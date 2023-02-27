import User from "../models/User.js";
import Todo from "../models/Todo.js";

class TodoController {
  async createTodo(req, res) {
    try {
      const userID = req.headers["user-id"];
      const user = await User.findById(userID);
      const newTodo = new Todo(req.body);

      user.todos.push(newTodo);

      await newTodo.save();
      await user.save();
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ message: "Creating error" });
    }
  }

  async getTodos(req, res) {
    try {
      const userID = req.headers["user-id"];
      const user = await User.findById(userID).populate("todos");

      if (!userID) {
        return res.status(400).json({ message: "UserID is required!" });
      }

      const todos = user.todos;
      return res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updateTodo(req, res) {
    try {
      const todoObj = req.body;
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "ID is required!" });
      }

      const updatedTodo = await Todo.findByIdAndUpdate(id, todoObj, {
        new: true,
      });

      return res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async deleteTodo(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "ID is required!" });
      }

      const deletedTodo = await Todo.findByIdAndDelete(id);

      return res.status(200).json(deletedTodo);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new TodoController();
