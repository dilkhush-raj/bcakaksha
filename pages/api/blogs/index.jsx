import Blog from "../../../modals/Blog"
import connectDB from "../../../middleware/mongoose"

const handler = async (req, res) => {
    let blogs = await Blog.find()
    res.status(200).json({ blogs})
};

export default connectDB(handler);