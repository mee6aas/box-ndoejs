// GENERATED CODE -- DO NOT EDIT!
'use strict';
var grpc = require('grpc');
var invoker_pb = require('./invoker_pb.js');
function serialize_mee6aas_agent_invoker_v1_AddRequest(arg) {
    if (!(arg instanceof invoker_pb.AddRequest)) {
        throw new Error('Expected argument of type mee6aas.agent.invoker.v1.AddRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_mee6aas_agent_invoker_v1_AddRequest(buffer_arg) {
    return invoker_pb.AddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_mee6aas_agent_invoker_v1_AddResponse(arg) {
    if (!(arg instanceof invoker_pb.AddResponse)) {
        throw new Error('Expected argument of type mee6aas.agent.invoker.v1.AddResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_mee6aas_agent_invoker_v1_AddResponse(buffer_arg) {
    return invoker_pb.AddResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_mee6aas_agent_invoker_v1_InvokeRequest(arg) {
    if (!(arg instanceof invoker_pb.InvokeRequest)) {
        throw new Error('Expected argument of type mee6aas.agent.invoker.v1.InvokeRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_mee6aas_agent_invoker_v1_InvokeRequest(buffer_arg) {
    return invoker_pb.InvokeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_mee6aas_agent_invoker_v1_InvokeResponse(arg) {
    if (!(arg instanceof invoker_pb.InvokeResponse)) {
        throw new Error('Expected argument of type mee6aas.agent.invoker.v1.InvokeResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_mee6aas_agent_invoker_v1_InvokeResponse(buffer_arg) {
    return invoker_pb.InvokeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_mee6aas_agent_invoker_v1_ListRequest(arg) {
    if (!(arg instanceof invoker_pb.ListRequest)) {
        throw new Error('Expected argument of type mee6aas.agent.invoker.v1.ListRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_mee6aas_agent_invoker_v1_ListRequest(buffer_arg) {
    return invoker_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_mee6aas_agent_invoker_v1_ListResponse(arg) {
    if (!(arg instanceof invoker_pb.ListResponse)) {
        throw new Error('Expected argument of type mee6aas.agent.invoker.v1.ListResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_mee6aas_agent_invoker_v1_ListResponse(buffer_arg) {
    return invoker_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_mee6aas_agent_invoker_v1_RemoveRequest(arg) {
    if (!(arg instanceof invoker_pb.RemoveRequest)) {
        throw new Error('Expected argument of type mee6aas.agent.invoker.v1.RemoveRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_mee6aas_agent_invoker_v1_RemoveRequest(buffer_arg) {
    return invoker_pb.RemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_mee6aas_agent_invoker_v1_RemoveResponse(arg) {
    if (!(arg instanceof invoker_pb.RemoveResponse)) {
        throw new Error('Expected argument of type mee6aas.agent.invoker.v1.RemoveResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_mee6aas_agent_invoker_v1_RemoveResponse(buffer_arg) {
    return invoker_pb.RemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
var InvokerService = exports.InvokerService = {
    invoke: {
        path: '/mee6aas.agent.invoker.v1.Invoker/Invoke',
        requestStream: false,
        responseStream: false,
        requestType: invoker_pb.InvokeRequest,
        responseType: invoker_pb.InvokeResponse,
        requestSerialize: serialize_mee6aas_agent_invoker_v1_InvokeRequest,
        requestDeserialize: deserialize_mee6aas_agent_invoker_v1_InvokeRequest,
        responseSerialize: serialize_mee6aas_agent_invoker_v1_InvokeResponse,
        responseDeserialize: deserialize_mee6aas_agent_invoker_v1_InvokeResponse,
    },
    add: {
        path: '/mee6aas.agent.invoker.v1.Invoker/Add',
        requestStream: false,
        responseStream: false,
        requestType: invoker_pb.AddRequest,
        responseType: invoker_pb.AddResponse,
        requestSerialize: serialize_mee6aas_agent_invoker_v1_AddRequest,
        requestDeserialize: deserialize_mee6aas_agent_invoker_v1_AddRequest,
        responseSerialize: serialize_mee6aas_agent_invoker_v1_AddResponse,
        responseDeserialize: deserialize_mee6aas_agent_invoker_v1_AddResponse,
    },
    list: {
        path: '/mee6aas.agent.invoker.v1.Invoker/List',
        requestStream: false,
        responseStream: false,
        requestType: invoker_pb.ListRequest,
        responseType: invoker_pb.ListResponse,
        requestSerialize: serialize_mee6aas_agent_invoker_v1_ListRequest,
        requestDeserialize: deserialize_mee6aas_agent_invoker_v1_ListRequest,
        responseSerialize: serialize_mee6aas_agent_invoker_v1_ListResponse,
        responseDeserialize: deserialize_mee6aas_agent_invoker_v1_ListResponse,
    },
    remove: {
        path: '/mee6aas.agent.invoker.v1.Invoker/Remove',
        requestStream: false,
        responseStream: false,
        requestType: invoker_pb.RemoveRequest,
        responseType: invoker_pb.RemoveResponse,
        requestSerialize: serialize_mee6aas_agent_invoker_v1_RemoveRequest,
        requestDeserialize: deserialize_mee6aas_agent_invoker_v1_RemoveRequest,
        responseSerialize: serialize_mee6aas_agent_invoker_v1_RemoveResponse,
        responseDeserialize: deserialize_mee6aas_agent_invoker_v1_RemoveResponse,
    },
};
exports.InvokerClient = grpc.makeGenericClientConstructor(InvokerService);
