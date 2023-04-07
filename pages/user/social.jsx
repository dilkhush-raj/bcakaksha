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
        {loading ? "Loading..." : "Create Todo"}
    </form>
  );
}
