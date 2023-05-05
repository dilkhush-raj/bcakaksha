import Notice from "../../modals/notice";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const notice = new Notice(req.body[0]);
      await notice.save();
      res.status(200).json({ message: "Notice added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "GET") {
    try {
      const totalRecords = await Notice.countDocuments();
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;
      const skip = (page - 1) * limit;
      const notice = await Notice.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
      res.status(200).json({ notice, totalRecords });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "DELETE") {

    // get the id of the data to be deleted from the query
    const { id } = req.query;

    console.log(id);
    // try to delete the data from the database
    try {
      const result = await Notice.findByIdAndDelete(id);
      // if the data is found and deleted, send a success response
      if (result) {
        res.status(200).json({ message: "Data deleted successfully" });
      } else {
        // if the data is not found, send a not found response
        res.status(404).json({ message: "Data not found" });
      }
    } catch (error) {
      // if there is an error, send a server error response
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(400).json({ error: "Bad request" });
  }
};

export default connectDB(handler);
