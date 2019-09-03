import * as grpc from "grpc";

import * as invokerSvc from "../../src/lib/api/proto/invoker/v1/invoker_grpc_pb";
import * as invokerMsg from "../../src/lib/api/proto/invoker/v1/invoker_pb";

let server: grpc.Server;

function createInvokeRstFromReq(
    req: invokerMsg.InvokeRequest,
) {
    return createInvokeRst(
        req.getActname(),
        req.getArg(),
    );
}

function createInvokeRst(
    act: string,
    arg: string,
) {
    return `invoke requested for ${act} with ${arg} by Box`;
}

function createUnimplemented<TReq, TRes>() {
    return (
        _: grpc.ServerUnaryCall<TReq>,
        cb: grpc.requestCallback<TRes>,
    ) => {
        cb({
            name: grpc.status.UNIMPLEMENTED.toString(),
            code: grpc.status.UNIMPLEMENTED,
            message: "out of scope for this package",
        });
    };
}

function serve(port = 5122, host = "0,0,0,0") {
    server = new grpc.Server();
    server.addService(invokerSvc.InvokerService, {
        invoke: svcInvoke,
        add: createUnimplemented<invokerMsg.AddRequest, invokerMsg.AddResponse>(),
        list: createUnimplemented<invokerMsg.ListRequest, invokerMsg.ListResponse>(),
        remove: createUnimplemented<invokerMsg.RemoveRequest, invokerMsg.RemoveResponse>(),
    });

    server.bind(`${host}:${port}`, grpc.ServerCredentials.createInsecure());
    server.start();
}

function svcInvoke(
    req: grpc.ServerUnaryCall<invokerMsg.InvokeRequest>,
    cb: grpc.requestCallback<invokerMsg.InvokeResponse>,
) {
    const args = req.request;
    const res = new invokerMsg.InvokeResponse();

    if (args.getActname() === "") {
        cb({
            name: grpc.status.INVALID_ARGUMENT.toString(),
            code: grpc.status.INVALID_ARGUMENT,
            message: "name of activity not provided",
        });
        return;
    }

    res.setResult(createInvokeRstFromReq(args));

    cb(null, res);
}

function stop() {
    server.forceShutdown();
}

export {
    createInvokeRst,
    serve,
    stop,
};
