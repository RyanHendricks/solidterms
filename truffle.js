module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/toolkit.js",
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  deploy: [
    "RicardoCoin",
    "ConvertLib"
  ],
  rpc: {
    host: "localhost",
    port: 8545
  }
};
