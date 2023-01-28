// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from "../../../modals/Blog"
import connectDB from "../../../middleware/mongoose"

const handler = async (req, res) => {

    console.log(req);
    if (req.method == "POST") {

        for (let i = 0; i < req.body.length; i++) {
            let p = new Blog({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                image: req.body[i].image,
                tag: req.body[i].tag,
                author: req.body[i].author,
                content: req.body[i].content
            })
            await p.save()
        }
        res.status(200).json({ message: "Blog added successfully" })
    }
    else {
        res.status(400).json({ error: "Bad request" })
    }

}

export default connectDB(handler)