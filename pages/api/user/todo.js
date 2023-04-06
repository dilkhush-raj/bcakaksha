import Todo from "../../../modals/todo";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === "POST") {
      try {
        const data = req.body;
        console.log( data);
        const todo = new Todo({
            uid: "klf",
            todo: data.map(item => ({
              name: item.displayText,
              status: item.link,
            }))
          });
        await todo.save();
        res.status(201).json(todo);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }

  export default connectDB(handler);