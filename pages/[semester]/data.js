import axios from "axios";

export default async function fetchSemesterData(slug) {
  try {
    const api = axios.create({
      baseURL: "/api/course/semester",
    });
    const res = await api.get(`/${slug}`);
    return res.data.data;
  } catch (err) {
    console.error(err);
    throw err; // You can choose to handle errors in the component
  }
}
