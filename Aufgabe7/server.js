"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTabelle = void 0;
const http = require("http");
const mongodb_1 = require("mongodb");
var EventTabelle;
(function (EventTabelle) {
    const hostname = "127.0.0.1";
    const port = 8100;
    const mongoUrl = "mongodb://127.0.0.1:27017";
    let mongoClient = new mongodb_1.MongoClient(mongoUrl);
    mongodb_1.MongoClient.connect(mongoUrl + "/EventOrdner", function (err, db) {
        if (err) {
            throw err;
        }
        console.log('db connected');
        db.close();
    });
    async function dbFind(db, collection, response) {
        mongoClient.connect();
        let result = await mongoClient
            .db(db)
            .collection(collection)
            .find()
            .toArray();
        response.setHeader("Content-Type", "application/json");
        console.log(JSON.stringify(result));
        response.write(JSON.stringify(result));
    }
    async function dbAddOrEdit(request, response) {
        let jsonString = "";
        request.on("data", (event) => {
            jsonString += event;
        });
        request.on("end", async () => {
            let inputEvent = JSON.parse(jsonString);
            let mongoKonzertEvent = {
                _id: new mongodb_1.ObjectId(), interpret: inputEvent.interpret, price: inputEvent.price
            };
            console.log("incomingevent: ", jsonString);
            await writeEventToDB(mongoKonzertEvent);
            response.statusCode = 200;
            response.end();
        });
    }
    async function writeEventToDB(event) {
        const result = await mongoClient.connect();
        console.log(result);
        await mongoClient.db("EventOrdner").collection("EventOr").replaceOne({
            _id: event._id
        }, event, { upsert: true });
        await mongoClient.close();
    }
    const server = http.createServer();
    server.addListener("request", handleRequest);
    async function handleRequest(request, response) {
        response.statusCode = 200;
        response.setHeader("content-type", "text/html; charset=utf-8");
        response.setHeader("Access-Control-Allow-Origin", "*");
        let url = new URL(request.url || "", `http://${request.headers.host}`);
        switch (url.pathname) {
            case "/events": {
                switch (request.method) {
                    case "GET":
                        await dbFind("EventOrdner", "EventOr", response);
                        break;
                    case "POST":
                        await dbAddOrEdit(request, response);
                        break;
                }
                break;
            }
            default:
                response.statusCode = 404;
        }
        response.end();
    }
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
})(EventTabelle = exports.EventTabelle || (exports.EventTabelle = {}));
//# sourceMappingURL=server.js.map