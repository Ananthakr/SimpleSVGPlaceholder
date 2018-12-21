const express = require("express");
const app = express();
const port = 3000;

/**
 * Query Params
 * size, character, bgcolor, textcolor
 */
app.get("/", (req, res) => {
  let {
    size = 100,
    character = "A",
    bgcolor = "grey",
    textcolor = "white"
  } = req.query;
  res.type(".svg");
  res.send(`
  <svg height="${size}" width="${size}" xmlns="http://www.w3.org/2000/svg">
    <style>
    .text{
        font-size:calc(${size}px / 3);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    </style>
    <rect x="0" y="0" height="100%" width="100%"  fill="${bgcolor}"
        fill-opacity="0.5" stroke-opacity="0.8"/>
    <text class="text" x="${(size / 100) * 39}" y="${(size / 100) *
        60}" fill="${textcolor}">${character.toString().slice(0, 1)}</text>
    </svg>
`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
