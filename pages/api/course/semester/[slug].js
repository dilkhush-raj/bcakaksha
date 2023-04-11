import Course from "../../../../modals/course";
import connectDB from "../../../../middleware/mongoose";

const handler = async (req, res) => {
    const { query } = req;
    const params = query.slug;
    try {
        let courses = await Course.find({ semester: params });
        res.status(200).json({ data: courses });
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default connectDB(handler);
