const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const compression = require('compression')

express()
  .use(compression()).use(
    express.static(path.join(__dirname, 'public'), {
      setHeaders(res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Cache-Control', 'public,max-age=3600,immutable');
      }
    })
  )
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
