import Blog from "../../../modals/Blog"
import connectDB from "../../../middleware/mongoose"

const handler = async (req, res) => {
    const { query } = req;
    const params = query.blog;
    let blogs = await Blog.find();
    try {
      let blog = blogs.find((item) => item.slug === params);
      res.status(200).json({ blog})
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default connectDB(handler);