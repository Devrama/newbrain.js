#  Install dependencies:
 `$ cd . && npm install`

# Run the app:
 `$ DEBUG=newbrain:* npm start`

# With Nodemon
 `DEBUG=newbrain:* nodemon ./bin/www`


# Build frontend code
`npm run buildclient` which is same as `browserify backbone/newbrain/main.js -o server/public/js/newbrain/main.min.js`

`npm run watchclient` which is same as `watchify -d backbone/newbrain/main.js -o server/public/js/newbrain/main.min.js`

