import productsData from "../../data/data.json";
let data = productsData;

export default async function handle(req, res) {
  try {
    
        let filteredData = data.filter((item) => item.visible === true);
        const finalData = filteredData.map((item) => ({
          title: item.title,
          slug: item.slug,
          semester: item.semester,
          examDate: item["exam-date"],
          blocks: item.blocks
        }));
    res.status(200).json(finalData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
