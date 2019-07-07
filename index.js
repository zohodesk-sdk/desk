const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(
    express.static(path.join(__dirname, 'public'), {
      setHeaders(res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Cache-Control', 'public,max-age=31536000,immutable');
      }
    })
  )
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
