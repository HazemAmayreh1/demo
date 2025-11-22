const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CI/CD Test</title>
      </head>
      <body style="margin:0; padding:0; background:#111; color:white; font-family:Arial;">
        <div style="
          width:100%;
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
        ">
          <h1 style="font-size:40px; color:#4caf50; margin:0;">
            CI/CD WORKING 
          </h1>
          <p style="font-size:20px; opacity:.8;">
            Hazem Amayreh dev 
          </p>
        </div>
      </body>
    </html>
  `);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servers runnings ons ${PORT}`));
