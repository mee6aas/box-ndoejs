// package: mee6aas.agent.invoker.v1
// file: invoker.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class InvokeRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): void;

    getActname(): string;
    setActname(value: string): void;

    getArg(): string;
    setArg(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvokeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InvokeRequest): InvokeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvokeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvokeRequest;
    static deserializeBinaryFromReader(message: InvokeRequest, reader: jspb.BinaryReader): InvokeRequest;
}

export namespace InvokeRequest {
    export type AsObject = {
        username: string,
        actname: string,
        arg: string,
    }
}

export class InvokeResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvokeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InvokeResponse): InvokeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvokeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvokeResponse;
    static deserializeBinaryFromReader(message: InvokeResponse, reader: jspb.BinaryReader): InvokeResponse;
}

export namespace InvokeResponse {
    export type AsObject = {
        result: string,
    }
}

export class AddRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): void;

    getActname(): string;
    setActname(value: string): void;

    getMethod(): AddMethod;
    setMethod(value: AddMethod): void;

    getPath(): string;
    setPath(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddRequest): AddRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddRequest;
    static deserializeBinaryFromReader(message: AddRequest, reader: jspb.BinaryReader): AddRequest;
}

export namespace AddRequest {
    export type AsObject = {
        username: string,
        actname: string,
        method: AddMethod,
        path: string,
    }
}

export class AddResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddResponse): AddResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddResponse;
    static deserializeBinaryFromReader(message: AddResponse, reader: jspb.BinaryReader): AddResponse;
}

export namespace AddResponse {
    export type AsObject = {
    }
}

export class ListRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRequest;
    static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
    export type AsObject = {
        username: string,
    }
}

export class ManagedActivity extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getRuntime(): string;
    setRuntime(value: string): void;

    getAdded(): string;
    setAdded(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ManagedActivity.AsObject;
    static toObject(includeInstance: boolean, msg: ManagedActivity): ManagedActivity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ManagedActivity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ManagedActivity;
    static deserializeBinaryFromReader(message: ManagedActivity, reader: jspb.BinaryReader): ManagedActivity;
}

export namespace ManagedActivity {
    export type AsObject = {
        name: string,
        runtime: string,
        added: string,
    }
}

export class ListResponse extends jspb.Message { 
    clearActivitiesList(): void;
    getActivitiesList(): Array<ManagedActivity>;
    setActivitiesList(value: Array<ManagedActivity>): void;
    addActivities(value?: ManagedActivity, index?: number): ManagedActivity;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListResponse;
    static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
    export type AsObject = {
        activitiesList: Array<ManagedActivity.AsObject>,
    }
}

export class RemoveRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): void;

    getActname(): string;
    setActname(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveRequest): RemoveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveRequest;
    static deserializeBinaryFromReader(message: RemoveRequest, reader: jspb.BinaryReader): RemoveRequest;
}

export namespace RemoveRequest {
    export type AsObject = {
        username: string,
        actname: string,
    }
}

export class RemoveResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveResponse): RemoveResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveResponse;
    static deserializeBinaryFromReader(message: RemoveResponse, reader: jspb.BinaryReader): RemoveResponse;
}

export namespace RemoveResponse {
    export type AsObject = {
    }
}

export enum AddMethod {
    UNKOWN = 0,
    LOCAL = 1,
    GLOBAL = 2,
}
