// pages/api/social.js

import connectDB from '../../../middleware/mongoose';
import SocialLink from '../../../modals/SocialLinks';

// export default async function handler(req, res) {
//   const { method } = req;

//   await dbConnect();

//   switch (method) {
//     case 'POST':
//       try {
//         const { userId, socialLinks } = req.body;

//         // Delete existing social links for this user
//         await SocialLink.deleteMany({ userId });

//         // Insert new social links for this user
//         const insertedSocialLinks = await SocialLink.insertMany(
//           socialLinks.map((link) => ({ userId, ...link }))
//         );

//         res.status(200).json(insertedSocialLinks);
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//       }
//       break;

//     default:
//       res.status(405).json({ error: `Method ${method} not allowed` });
//       break;
//   }
// }

const handler = async (req, res) => {
    
  if (req.method === "POST") {
    console.log(req.body);
    try {
      for (let i = 0; i < req.body.length; i++) {
        const user = await SocialLink.findOneAndUpdate(
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
  } else {
    res.status(400).json({ error: "Bad Request" });
  }
};

export default connectDB(handler);
