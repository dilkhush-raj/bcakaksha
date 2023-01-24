import productsData from "../../../data/blog.json";

export default function ProductData (req, res) {
  const { query } = req;
  const params = query.product;

  let data = productsData;

  let product = data.find((item) => item.url === params);
  try {
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}