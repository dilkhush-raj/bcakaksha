// const NotionService = require("../../path/to/NotionService"); // Adjust the path accordingly

// const notionService = new NotionService();
import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_SECRET;
const notion = new Client({ auth: notionSecret });

export default async function handler(req, res) {
  if (req.method === "GET") {
    // const { slug } = req.query;

    const slug = "a0627877-fa61-4fd8-9595-006fc19eb87e";
    // const slug = "feb68a1f-8ceb-41f6-83f7-c7cefa6ad196";

    const propertyId = "title";
    
    if (!slug) {
      return res.status(400).json({ error: "Slug parameter is missing" });
    }

    try {
        // const response = await notion.pages.retrieve({ page_id: slug });

        
        // const response = await notion.blocks.retrieve({
        //   block_id: slug,
        // });
  
        const response = await notion.blocks.children.list({
          block_id: slug,
          page_size: 50,
        });

      return res.status(200).json(response);
    } catch (error) {
      console.error("Error retrieving blog post:", error);
      return res.status(500).json({ error: "Error retrieving blog post" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}



