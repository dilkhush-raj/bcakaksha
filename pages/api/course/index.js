import Course from "../../../modals/course";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
  //FOR POST REQUEST
  if (req.method === "POST") {
    const slug = req.body[0].slug;
    const existingCourse = await Course.findOne({ slug });
    if (existingCourse) {
      try {
        for (let i = 0; i < req.body.length; i++) {
          const course = await Course.findOneAndUpdate(
            { slug: req.body[i].slug },
            req.body[i],
            { new: true }
          );
        }
        res.status(200).json({ message: "Course updated successfully" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      }
    } else if (!existingCourse) {
      try {
        const course = new Course(req.body[0]);
        await course.save();
        res.status(200).json({ message: "Course added successfully" });
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
