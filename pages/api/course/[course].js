import Course from "../../../modals/course";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
    const { query } = req;
    const params = query.course;
    let courses = await Course.find();
    try {
      let data = courses.find((item) => item.slug === params);
      res.status(200).json({ data})
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default connectDB(handler);