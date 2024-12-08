import * as jspb from 'google-protobuf'

import * as common_messages_pb from '../common/messages_pb';


export class DcUser extends jspb.Message {
  getMeta(): common_messages_pb.Meta | undefined;
  setMeta(value?: common_messages_pb.Meta): DcUser;
  hasMeta(): boolean;
  clearMeta(): DcUser;

  getName(): string;
  setName(value: string): DcUser;

  getEmail(): string;
  setEmail(value: string): DcUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DcUser.AsObject;
  static toObject(includeInstance: boolean, msg: DcUser): DcUser.AsObject;
  static serializeBinaryToWriter(message: DcUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DcUser;
  static deserializeBinaryFromReader(message: DcUser, reader: jspb.BinaryReader): DcUser;
}

export namespace DcUser {
  export type AsObject = {
    meta?: common_messages_pb.Meta.AsObject,
    name: string,
    email: string,
  }
}

