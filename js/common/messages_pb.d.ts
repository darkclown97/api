import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class PageOptions extends jspb.Message {
  getPage(): number;
  setPage(value: number): PageOptions;

  getLimit(): number;
  setLimit(value: number): PageOptions;

  getSortOrder(): SortOrder;
  setSortOrder(value: SortOrder): PageOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PageOptions): PageOptions.AsObject;
  static serializeBinaryToWriter(message: PageOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageOptions;
  static deserializeBinaryFromReader(message: PageOptions, reader: jspb.BinaryReader): PageOptions;
}

export namespace PageOptions {
  export type AsObject = {
    page: number,
    limit: number,
    sortOrder: SortOrder,
  }
}

export class ListOptions extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListOptions;

  getOffset(): number;
  setOffset(value: number): ListOptions;

  getSortOrder(): SortOrder;
  setSortOrder(value: SortOrder): ListOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ListOptions): ListOptions.AsObject;
  static serializeBinaryToWriter(message: ListOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOptions;
  static deserializeBinaryFromReader(message: ListOptions, reader: jspb.BinaryReader): ListOptions;
}

export namespace ListOptions {
  export type AsObject = {
    limit: number,
    offset: number,
    sortOrder: SortOrder,
  }
}

export class Meta extends jspb.Message {
  getId(): string;
  setId(value: string): Meta;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Meta;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Meta;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Meta;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Meta;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Meta;
  hasDeletedAt(): boolean;
  clearDeletedAt(): Meta;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): Meta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Meta.AsObject;
  static toObject(includeInstance: boolean, msg: Meta): Meta.AsObject;
  static serializeBinaryToWriter(message: Meta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Meta;
  static deserializeBinaryFromReader(message: Meta, reader: jspb.BinaryReader): Meta;
}

export namespace Meta {
  export type AsObject = {
    id: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isDeleted: boolean,
  }
}

export enum SortOrder { 
  SORT_ORDER_ASC = 0,
  SORT_ORDER_DESC = 1,
}
