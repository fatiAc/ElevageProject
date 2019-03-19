let express = require('express');  //create route
let bodyParser = require('body-parser'); //grab info from POST request
let app = express();
let server = require('http').Server(app);
let basicAuth = require('basic-auth-connect');
let config = require('./config/config');

app.use(basicAuth('admin','12345'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',require('./src/controller/useRouter'));


server.listen(config.port_http)

server.on('listening', function(){

    function print (path, layer) {
        if (layer.route) {
            layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
        } else if (layer.name === 'router' && layer.handle.stack) {
            layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
        } else if (layer.method) {
            console.log(`%s : http://localhost:${config.port_http}/%s`,
                layer.method.toUpperCase(),
                path.concat(split(layer.regexp)).filter(Boolean).join('/'))
        }
    }

    function split (thing) {
        if (typeof thing === 'string') {
            return thing.split('/')
        } else if (thing.fast_slash) {
            return ''
        } else {
            var match = thing.toString()
                .replace('\\/?', '')
                .replace('(?=\\/|$)', '$')
                .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
            return match
                ? match[1].replace(/\\(.)/g, '$1').split('/')
                : '<complex:' + thing.toString() + '>'
        }
    }

    app._router.stack.forEach(print.bind(null, []));

    console.log(`REST API run on http://localhost:${config.port_http}`);
});

