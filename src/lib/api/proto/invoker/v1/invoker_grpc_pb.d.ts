// package: mee6aas.agent.invoker.v1
// file: invoker.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as invoker_pb from "./invoker_pb";

interface IInvokerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    invoke: IInvokerService_IInvoke;
    add: IInvokerService_IAdd;
    list: IInvokerService_IList;
    remove: IInvokerService_IRemove;
}

interface IInvokerService_IInvoke extends grpc.MethodDefinition<invoker_pb.InvokeRequest, invoker_pb.InvokeResponse> {
    path: string; // "/mee6aas.agent.invoker.v1.Invoker/Invoke"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<invoker_pb.InvokeRequest>;
    requestDeserialize: grpc.deserialize<invoker_pb.InvokeRequest>;
    responseSerialize: grpc.serialize<invoker_pb.InvokeResponse>;
    responseDeserialize: grpc.deserialize<invoker_pb.InvokeResponse>;
}
interface IInvokerService_IAdd extends grpc.MethodDefinition<invoker_pb.AddRequest, invoker_pb.AddResponse> {
    path: string; // "/mee6aas.agent.invoker.v1.Invoker/Add"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<invoker_pb.AddRequest>;
    requestDeserialize: grpc.deserialize<invoker_pb.AddRequest>;
    responseSerialize: grpc.serialize<invoker_pb.AddResponse>;
    responseDeserialize: grpc.deserialize<invoker_pb.AddResponse>;
}
interface IInvokerService_IList extends grpc.MethodDefinition<invoker_pb.ListRequest, invoker_pb.ListResponse> {
    path: string; // "/mee6aas.agent.invoker.v1.Invoker/List"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<invoker_pb.ListRequest>;
    requestDeserialize: grpc.deserialize<invoker_pb.ListRequest>;
    responseSerialize: grpc.serialize<invoker_pb.ListResponse>;
    responseDeserialize: grpc.deserialize<invoker_pb.ListResponse>;
}
interface IInvokerService_IRemove extends grpc.MethodDefinition<invoker_pb.RemoveRequest, invoker_pb.RemoveResponse> {
    path: string; // "/mee6aas.agent.invoker.v1.Invoker/Remove"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<invoker_pb.RemoveRequest>;
    requestDeserialize: grpc.deserialize<invoker_pb.RemoveRequest>;
    responseSerialize: grpc.serialize<invoker_pb.RemoveResponse>;
    responseDeserialize: grpc.deserialize<invoker_pb.RemoveResponse>;
}

export const InvokerService: IInvokerService;

export interface IInvokerServer {
    invoke: grpc.handleUnaryCall<invoker_pb.InvokeRequest, invoker_pb.InvokeResponse>;
    add: grpc.handleUnaryCall<invoker_pb.AddRequest, invoker_pb.AddResponse>;
    list: grpc.handleUnaryCall<invoker_pb.ListRequest, invoker_pb.ListResponse>;
    remove: grpc.handleUnaryCall<invoker_pb.RemoveRequest, invoker_pb.RemoveResponse>;
}

export interface IInvokerClient {
    invoke(request: invoker_pb.InvokeRequest, callback: (error: grpc.ServiceError | null, response: invoker_pb.InvokeResponse) => void): grpc.ClientUnaryCall;
    invoke(request: invoker_pb.InvokeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: invoker_pb.InvokeResponse) => void): grpc.ClientUnaryCall;
    invoke(request: invoker_pb.InvokeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: invoker_pb.InvokeResponse) => void): grpc.ClientUnaryCall;
    add(request: invoker_pb.AddRequest, callback: (error: grpc.ServiceError | null, response: invoker_pb.AddResponse) => void): grpc.ClientUnaryCall;
    add(request: invoker_pb.AddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: invoker_pb.AddResponse) => void): grpc.ClientUnaryCall;
    add(request: invoker_pb.AddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: invoker_pb.AddResponse) => void): grpc.ClientUnaryCall;
    list(request: invoker_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: invoker_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: invoker_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: invoker_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: invoker_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: invoker_pb.ListResponse) => void): grpc.ClientUnaryCall;
    remove(request: invoker_pb.RemoveRequest, callback: (error: grpc.ServiceError | null, response: invoker_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    remove(request: invoker_pb.RemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: invoker_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    remove(request: invoker_pb.RemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: invoker_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
}

export class InvokerClient extends grpc.Client implements IInvokerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public invoke(request: invoker_pb.InvokeRequest, callback: (error: grpc.ServiceError | null, response: invoker_pb.InvokeResponse) => void): grpc.ClientUnaryCall;
    public invoke(request: invoker_pb.InvokeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: invoker_pb.InvokeResponse) => void): grpc.ClientUnaryCall;
    public invoke(request: invoker_pb.InvokeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: invoker_pb.InvokeResponse) => void): grpc.ClientUnaryCall;
    public add(request: invoker_pb.AddRequest, callback: (error: grpc.ServiceError | null, response: invoker_pb.AddResponse) => void): grpc.ClientUnaryCall;
    public add(request: invoker_pb.AddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: invoker_pb.AddResponse) => void): grpc.ClientUnaryCall;
    public add(request: invoker_pb.AddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: invoker_pb.AddResponse) => void): grpc.ClientUnaryCall;
    public list(request: invoker_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: invoker_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: invoker_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: invoker_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: invoker_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: invoker_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public remove(request: invoker_pb.RemoveRequest, callback: (error: grpc.ServiceError | null, response: invoker_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public remove(request: invoker_pb.RemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: invoker_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public remove(request: invoker_pb.RemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: invoker_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
}
