const http=require('http'); /* creates variable named http which has access to the module HTTP that is already built into node.js, http allows for server creation (note: https module is also available). That is, don't need to install a node package module (npm) to use this feature */

const dt = require('./whatDayTime'); /* creates constant variable named dt that can access the dateTimeModule.js located elsewhere within the file system for the app */

http.createServer(function(req, res) { /* uses a built in function called createServer to set up the server; a user defined function within createServer takes two parameters req and res, which are general shorthand for request and response, res is used to send information to the browswer, req is used for input (requests) coming from the broswer */

    res.writeHead(200, {'Content-Type': 'text/html'}); /* when server accessed, if everything is okay (represented by the 200 code), then let browser know the type of content to expect which is represented by the key-value pair within the curly braces */

    res.write('The date and time currently are: ' + dt.dateTimeModule()); /* used the dateTimeModule function within the whatDayTime.js custom created module to retrieve the day and time and provide the information for display on the browser */

    res.write('The originating url request was: ' + req.url); /* tells us what the client requested from the local host (e.g., localhost:8080 would produce "/" while localhost:8080\awesome would produce "/awesome"); this info is useful in routing to different parts of app/site when requested by client */

    res.end(' Is it Teatime?'); /* ends response, a litt le text was included here to show that information can be passed to brower from this response type */

}).listen(8080); /* tell server to listen for information from the browser using a specified port, in this case 8080; common ones people gravitate to for development are 3000, 3001, 5000, 5001, 8080, 9000, 9001; this is not the port your deployed app would use, that usually would be assigned automatically by the hosting service. */