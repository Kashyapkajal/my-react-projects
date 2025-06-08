// Save this as internet-check.js
require("https")
  .get("https://www.google.com", (res) => {
    console.log("Internet works in Node.js, status code:", res.statusCode);
  })
  .on("error", (e) => {
    console.error("No internet in Node.js:", e);
  });
