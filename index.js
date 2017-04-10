'use strict';

const server = require('./server/server');
const middle = require('./middleware/middleware');

class Dufing {
    constructor(obj) {
        const port = obj.port || 8124;
        server.call(this, port);

        // loader default middleware
        this.use({
            response: {},
            jade: {},
            session: {},
            hbs:{}
        })
    }

    use(middles) {
        for (var i in middles) {
            let obj = {
                name: i,
                config: middles[i]
            }
            middle.add.call(this, obj);
        }
    }

    // customer router
    get(path, file) {
        this.routerGet = this.routerGet || [];
        this.routerGet.push([path, file])
    }
}

module.exports = Dufing;
