import { useState } from "react";

export default function CreateTodoForm() {
  const [userId, setUserId] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/user/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          desc,
        }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      setUserId("");
      setDesc("");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
    setLoading(false);

  };

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="userId">User ID:</label>
      <input
        id="userId"
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <label htmlFor="desc">Description:</label>
      <input
        id="desc"
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Create Todo"}
      </button>

    </form>
  );
}
