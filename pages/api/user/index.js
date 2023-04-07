import User from "../../../modals/user";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const user = new User({
<<<<<<< HEAD
        userId: req.body.userId,
=======

        userId: req.body.userId,

>>>>>>> 0d75c02d3ce8d1310dc3f5ea0372136306eb7699
        uid: req.body.uid,
        name: req.body.name,
        profileImage: req.body.profileImage,
        semester: req.body.semester,
        about: req.body.about,
        rc: req.body.rc,
      });

      await user.save();
      res.status(200).json({ message: "Message added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "GET") {
    try {
      const user = await User.find();
      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
<<<<<<< HEAD
  } else if (req.method === "DELETE") {
=======

  } else if (req.method === "DELETE") {

>>>>>>> 0d75c02d3ce8d1310dc3f5ea0372136306eb7699
    // get the id of the data to be deleted from the query
    const { id } = req.query;
    // try to delete the data from the database
    try {
      const result = await User.findByIdAndDelete(id);
      // if the data is found and deleted, send a success response
      if (result) {
<<<<<<< HEAD
=======

>>>>>>> 0d75c02d3ce8d1310dc3f5ea0372136306eb7699
        res.status(200).json({ message: "Data deleted successfully" });
      } else {
        // if the data is not found, send a not found response
        res.status(404).json({ message: "Data not found" });
      }
    } catch (error) {
      // if there is an error, send a server error response
      res.status(500).json({ message: "Server error" });
<<<<<<< HEAD
=======

>>>>>>> 0d75c02d3ce8d1310dc3f5ea0372136306eb7699
    }
  } else {
    res.status(400).json({ error: "Bad request" });
  }
};

export default connectDB(handler);
