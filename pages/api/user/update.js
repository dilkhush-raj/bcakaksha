import User from "../../../modals/user";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // console.log(req.body[0].uid);
    const uid = req.body[0].uid;
    const existingUser = await User.findOne({ uid });
    console.log(existingUser);
    if (existingUser) {
      try {
        for (let i = 0; i < req.body.length; i++) {
          const user = await User.findOneAndUpdate(
            { uid: req.body[i].uid },
            req.body[i],
            { new: true }
          );
          console.log(user);
        }
        res.status(200).json({ message: "User updated successfully" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      }
    } else if (!existingUser) {
      try {
        const user = new User(req.body[0]);
        await user.save();
        res.status(200).json({ message: "User added successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
      }
    } else {
      res.status(400).json({ error: "Bad Request" });
    }

  }
};

export default connectDB(handler);
