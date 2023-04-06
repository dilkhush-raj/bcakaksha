import User from "../../../modals/user"
import connectDB from "../../../middleware/mongoose"

const handler = async (req, res) => {
    const { query } = req;

    const uid = query.user;
    let user = await User.find();
    try {
      let userData = user.find((item) => item.userId === uid);

      res.status(200).json({ userData})
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default connectDB(handler);