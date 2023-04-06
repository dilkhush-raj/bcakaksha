import Feg from "../../modals/todo"
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {

      try {
        const data = req.body;
        const feg = new Feg(data);
        await feg.save();
        res.status(201).json({ message: 'Data saved successfully!' });
      } catch (error) {
        res.status(500).json({ message: 'Error saving data!' });
      }
    
    
};

export default connectDB(handler);
