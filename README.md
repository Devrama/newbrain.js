I coded this to demonstrate how router in backbone.js can be used in both frontend and backend.

A few years ago,(Not anymore), Google did not index dynamic content well from SPA(single page app) while it indexes static pages fine. The goal of this demonstration is to serve the initially requested page as static page while any further pages are populated dynamically using a single code. In genearl, you would need to make two separate codes - A static page from backend script and dynamic page from frontend script. As backbone.js(frontend) and express.js(backend) are both written in javascript, I could make a rounter in backbone.js run in express.js. Even if Google now indexes dynamic contents well, this could be still benefitial for a page load speed. You would experience that SPA often slow to load the initial page as it load both non-content resources and content throught Ajax calls. With the approach here can serve the page content in the actual HTML page rather than loading through Ajax, which would improve an initial page load speed.

In addtion to this, I had to make a new plugin for EJS because EJS does not support recursive `include` in browser while it supports it well in node.js(backend). The EJS plugin can be found [here](https://github.com/Devrama/EJS-Browser-Async).

**This code is not fully functional, and is coded only for demonstration purpose.**

#  Install dependencies:
 `$ cd . && npm install`

# Run the app:
 `$ DEBUG=newbrain:* npm start`

# With Nodemon
 `DEBUG=newbrain:* nodemon ./bin/www`


# Build frontend code
`npm run buildclient` which is same as `browserify backbone/newbrain/main.js -o server/public/js/newbrain/main.min.js`

`npm run watchclient` which is same as `watchify -d backbone/newbrain/main.js -o server/public/js/newbrain/main.min.js`

