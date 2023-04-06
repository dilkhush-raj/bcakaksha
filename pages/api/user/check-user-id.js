// pages/api/check-user-id.js

import User from "../../../modals/user"
import connectDB from "../../../middleware/mongoose"

export default async function handler(req, res) {
  const { userId } = req.body;

  await connectDB();

  const user = await User.findOne({ userId });

  if (user) {
    res.status(200).json({ taken: true });
  } else {
    res.status(200).json({ taken: false });
  }
}
