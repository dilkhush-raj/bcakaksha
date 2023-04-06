import Marks from "../../../../modals/marks"
import connectDB from "../../../../middleware/mongoose"

const handler = async (req, res) => {
    const { query } = req;
    const params = query.user;
    let user = await Marks.find();
    try {
      let userData = user.find((item) => item.uid === params);
      res.status(200).json({ userData})
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default connectDB(handler);