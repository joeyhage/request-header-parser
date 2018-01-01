'use strict';

const express = require('express'),
      app = express();

app.enable('trust proxy');

app.get('/*', (req, res) => {
    res.status(200).json({
        ipaddress: req.ip,
	language: req.get('Accept-Language').split(',')[0],
	software: req.get('User-Agent').match(/\(([^()]*)\)/)[1]
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Express listening on port ${process.env.PORT || 3000}`);
});
