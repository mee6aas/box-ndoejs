import * as grpc from "grpc";
import * as invokerSvc from "./lib/api/proto/invoker/v1/invoker_grpc_pb";
import * as invokerMsg from "./lib/api/proto/invoker/v1/invoker_pb";

class Box {
    private _client: invokerSvc.InvokerClient;

    constructor(
        host: string,
        port: string | number,
    ) {
        const addr = `${host}:${port}`;
        this._client = new invokerSvc.InvokerClient(addr, grpc.credentials.createInsecure());
    }

    public async invoke(act: string, arg: string) {
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
    }
}

export default Box;
