import express from "express";
import fetch from "node-fetch";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(join(__dirname, "../frontend")));

app.get("/proxy-image", async (req, res) => {
  const imageUrl = req.query.url;
  if (!imageUrl) return res.status(400).send("Missing 'url' parameter");

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) return res.status(500).send("Failed to fetch image");

    res.setHeader("Content-Type", response.headers.get("Content-Type") || "application/octet-stream");
    res.setHeader("Content-Disposition", `attachment; filename="${imageUrl.split('/').pop()}"`);

    response.body.pipe(res);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.get("/ping", async (req, res) => {
  res.status(200).send("ok");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
