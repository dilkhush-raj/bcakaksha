import Course from "../../../modals/course";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
  // check if the request method is delete
  if (req.method === 'DELETE') {
    // get the id of the data to be deleted from the query
    const { id } = req.query;
    // try to delete the data from the database
    try {
      const result = await Course.findByIdAndDelete(id);
      // if the data is found and deleted, send a success response
      if (result) {
        res.status(200).json({ message: 'Data deleted successfully' });
      } else {
        // if the data is not found, send a not found response
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (error) {
      // if there is an error, send a server error response
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    // if the request method is not delete, send a bad request response
    res.status(400).json({ message: 'Bad request' });
  }
}

export default connectDB(handler)
