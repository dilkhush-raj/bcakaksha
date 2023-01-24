import productsData from "../../data/blog.json";
let data = productsData;

export default async function handle(req, res) {
  try {
    
        let filteredData = data.filter((item) => item.visible === true);
        const finalData = filteredData.map((item) => ({
          title: item.title,
          slug: item.slug,
          date: item.date,
          thumbnail: item.thumbnail,
          author: item.author,
          content: item.content
        }));
    res.status(200).json(finalData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
