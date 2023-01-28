import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader';
import axios from 'axios';
import { useRouter } from "next/router";

const EditBlog = () => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({});
  const router = useRouter();
  let query = router.query.post; // Get the value of the "q" query parameter

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/blogs/" + query );
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setFormData({
        _id: data.blog._id,
        title: data.blog.title,
        slug: data.blog.slug,
        desc: data.blog.desc,
        image: data.blog.image,
        tag: data.blog.tag,
        author: data.blog.author,
        content: data.blog.content
      });
    }
  }, [data]);

  if (!data) {
    return <Loader />;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/blogs/update', [formData]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Slug:
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Tag:
          <input
            type="text"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </label>
        <label>
          Content:
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Edit Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
