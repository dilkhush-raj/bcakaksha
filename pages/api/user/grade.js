import Grade from "../../../modals/grade";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const marks = new Grade({
        uid: req.body.uid,
        marks: req.body.marks,
      });

      await marks.save();
      res.status(200).json({ message: "Marks added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "GET") {
    try {
      const marks = await Grade.find();
      res.status(200).json({ marks });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === 'DELETE') {
    // get the id of the data to be deleted from the query
    const { id } = req.query;
    // try to delete the data from the database
    try {
      const result = await Grade.findByIdAndDelete(id);
      // if the data is found and deleted, send a success response
      if (result) {
        res.status(200).json({ message: 'Data deleted successfully' });
      } else {
        // if the data is not found, send a not found response
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (error) {
      // if there is an error, send a server error response
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(400).json({ error: "Bad request" });
  }
};

export default connectDB(handler);