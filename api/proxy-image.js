// api/proxy-image.js
export default async function handler(req, res) {
  const imageUrl = req.query.url;
  if (!imageUrl) return res.status(400).send("Missing 'url' parameter");

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) return res.status(500).send("Failed to fetch image");
const buffer = Buffer.from(await response.arrayBuffer());

    res.setHeader("Content-Type", response.headers.get("Content-Type") || "application/octet-stream");
    res.setHeader("Content-Disposition", `attachment; filename="${imageUrl.split('/').pop()}"`);

res.send(buffer);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}
