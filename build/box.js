"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const grpc = require("grpc");
const invokerSvc = require("./lib/api/proto/invoker/v1/invoker_grpc_pb");
const invokerMsg = require("./lib/api/proto/invoker/v1/invoker_pb");
class Box {
    constructor(host, port) {
        const addr = `${host}:${port}`;
        this._client = new invokerSvc.InvokerClient(addr, grpc.credentials.createInsecure());
    }
    invoke(act, arg) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const req = new invokerMsg.InvokeRequest();
            // the username will be decided by agent
            req.setActname(act);
            req.setArg(arg);
            return new Promise((resolve, reject) => {
                this._client.invoke(req, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    res ? resolve(res.getResult())
                        : resolve(res);
                });
            });
        });
    }
}
exports.default = Box;
