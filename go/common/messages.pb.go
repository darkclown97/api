// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        v3.12.4
// source: common/messages.proto

package common

import (
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type SortOrder int32

const (
	SortOrder_SORT_ORDER_ASC  SortOrder = 0 // ascending by default
	SortOrder_SORT_ORDER_DESC SortOrder = 1
)

// Enum value maps for SortOrder.
var (
	SortOrder_name = map[int32]string{
		0: "SORT_ORDER_ASC",
		1: "SORT_ORDER_DESC",
	}
	SortOrder_value = map[string]int32{
		"SORT_ORDER_ASC":  0,
		"SORT_ORDER_DESC": 1,
	}
)

func (x SortOrder) Enum() *SortOrder {
	p := new(SortOrder)
	*p = x
	return p
}

func (x SortOrder) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (SortOrder) Descriptor() protoreflect.EnumDescriptor {
	return file_common_messages_proto_enumTypes[0].Descriptor()
}

func (SortOrder) Type() protoreflect.EnumType {
	return &file_common_messages_proto_enumTypes[0]
}

func (x SortOrder) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use SortOrder.Descriptor instead.
func (SortOrder) EnumDescriptor() ([]byte, []int) {
	return file_common_messages_proto_rawDescGZIP(), []int{0}
}

type PageOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Page      uint32    `protobuf:"varint,1,opt,name=page,proto3" json:"page,omitempty"`
	Limit     uint32    `protobuf:"varint,2,opt,name=limit,proto3" json:"limit,omitempty"`
	SortOrder SortOrder `protobuf:"varint,3,opt,name=sort_order,json=sortOrder,proto3,enum=common.messages.SortOrder" json:"sort_order,omitempty"`
}

func (x *PageOptions) Reset() {
	*x = PageOptions{}
	mi := &file_common_messages_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *PageOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PageOptions) ProtoMessage() {}

func (x *PageOptions) ProtoReflect() protoreflect.Message {
	mi := &file_common_messages_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PageOptions.ProtoReflect.Descriptor instead.
func (*PageOptions) Descriptor() ([]byte, []int) {
	return file_common_messages_proto_rawDescGZIP(), []int{0}
}

func (x *PageOptions) GetPage() uint32 {
	if x != nil {
		return x.Page
	}
	return 0
}

func (x *PageOptions) GetLimit() uint32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *PageOptions) GetSortOrder() SortOrder {
	if x != nil {
		return x.SortOrder
	}
	return SortOrder_SORT_ORDER_ASC
}

type ListOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Limit     uint32    `protobuf:"varint,1,opt,name=limit,proto3" json:"limit,omitempty"`
	Offset    uint32    `protobuf:"varint,2,opt,name=offset,proto3" json:"offset,omitempty"`
	SortOrder SortOrder `protobuf:"varint,3,opt,name=sort_order,json=sortOrder,proto3,enum=common.messages.SortOrder" json:"sort_order,omitempty"`
}

func (x *ListOptions) Reset() {
	*x = ListOptions{}
	mi := &file_common_messages_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ListOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListOptions) ProtoMessage() {}

func (x *ListOptions) ProtoReflect() protoreflect.Message {
	mi := &file_common_messages_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListOptions.ProtoReflect.Descriptor instead.
func (*ListOptions) Descriptor() ([]byte, []int) {
	return file_common_messages_proto_rawDescGZIP(), []int{1}
}

func (x *ListOptions) GetLimit() uint32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *ListOptions) GetOffset() uint32 {
	if x != nil {
		return x.Offset
	}
	return 0
}

func (x *ListOptions) GetSortOrder() SortOrder {
	if x != nil {
		return x.SortOrder
	}
	return SortOrder_SORT_ORDER_ASC
}

type Meta struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string               `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	CreatedAt *timestamp.Timestamp `protobuf:"bytes,2,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt *timestamp.Timestamp `protobuf:"bytes,3,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	DeletedAt *timestamp.Timestamp `protobuf:"bytes,4,opt,name=deleted_at,json=deletedAt,proto3" json:"deleted_at,omitempty"`
	IsDeleted bool                 `protobuf:"varint,5,opt,name=is_deleted,json=isDeleted,proto3" json:"is_deleted,omitempty"`
}

func (x *Meta) Reset() {
	*x = Meta{}
	mi := &file_common_messages_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Meta) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Meta) ProtoMessage() {}

func (x *Meta) ProtoReflect() protoreflect.Message {
	mi := &file_common_messages_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Meta.ProtoReflect.Descriptor instead.
func (*Meta) Descriptor() ([]byte, []int) {
	return file_common_messages_proto_rawDescGZIP(), []int{2}
}

func (x *Meta) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Meta) GetCreatedAt() *timestamp.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (x *Meta) GetUpdatedAt() *timestamp.Timestamp {
	if x != nil {
		return x.UpdatedAt
	}
	return nil
}

func (x *Meta) GetDeletedAt() *timestamp.Timestamp {
	if x != nil {
		return x.DeletedAt
	}
	return nil
}

func (x *Meta) GetIsDeleted() bool {
	if x != nil {
		return x.IsDeleted
	}
	return false
}

var File_common_messages_proto protoreflect.FileDescriptor

var file_common_messages_proto_rawDesc = []byte{
	0x0a, 0x15, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x72, 0x0a, 0x0b, 0x50, 0x61, 0x67,
	0x65, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x67, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x04, 0x70, 0x61, 0x67, 0x65, 0x12, 0x14, 0x0a, 0x05,
	0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x05, 0x6c, 0x69, 0x6d,
	0x69, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x73, 0x6f, 0x72, 0x74, 0x5f, 0x6f, 0x72, 0x64, 0x65, 0x72,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1a, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x53, 0x6f, 0x72, 0x74, 0x4f, 0x72, 0x64,
	0x65, 0x72, 0x52, 0x09, 0x73, 0x6f, 0x72, 0x74, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x22, 0x76, 0x0a,
	0x0b, 0x4c, 0x69, 0x73, 0x74, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x14, 0x0a, 0x05,
	0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x05, 0x6c, 0x69, 0x6d,
	0x69, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0d, 0x52, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x73, 0x6f,
	0x72, 0x74, 0x5f, 0x6f, 0x72, 0x64, 0x65, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1a,
	0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73,
	0x2e, 0x53, 0x6f, 0x72, 0x74, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x52, 0x09, 0x73, 0x6f, 0x72, 0x74,
	0x4f, 0x72, 0x64, 0x65, 0x72, 0x22, 0xe6, 0x01, 0x0a, 0x04, 0x4d, 0x65, 0x74, 0x61, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x39,
	0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09,
	0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x64, 0x41, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x5f,
	0x61, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12,
	0x1d, 0x0a, 0x0a, 0x69, 0x73, 0x5f, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x09, 0x69, 0x73, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x2a, 0x34,
	0x0a, 0x09, 0x53, 0x6f, 0x72, 0x74, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x12, 0x12, 0x0a, 0x0e, 0x53,
	0x4f, 0x52, 0x54, 0x5f, 0x4f, 0x52, 0x44, 0x45, 0x52, 0x5f, 0x41, 0x53, 0x43, 0x10, 0x00, 0x12,
	0x13, 0x0a, 0x0f, 0x53, 0x4f, 0x52, 0x54, 0x5f, 0x4f, 0x52, 0x44, 0x45, 0x52, 0x5f, 0x44, 0x45,
	0x53, 0x43, 0x10, 0x01, 0x42, 0x23, 0x5a, 0x21, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x64, 0x61, 0x72, 0x6b, 0x63, 0x6c, 0x6f, 0x77, 0x6e, 0x39, 0x37, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_common_messages_proto_rawDescOnce sync.Once
	file_common_messages_proto_rawDescData = file_common_messages_proto_rawDesc
)

func file_common_messages_proto_rawDescGZIP() []byte {
	file_common_messages_proto_rawDescOnce.Do(func() {
		file_common_messages_proto_rawDescData = protoimpl.X.CompressGZIP(file_common_messages_proto_rawDescData)
	})
	return file_common_messages_proto_rawDescData
}

var file_common_messages_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_common_messages_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_common_messages_proto_goTypes = []any{
	(SortOrder)(0),              // 0: common.messages.SortOrder
	(*PageOptions)(nil),         // 1: common.messages.PageOptions
	(*ListOptions)(nil),         // 2: common.messages.ListOptions
	(*Meta)(nil),                // 3: common.messages.Meta
	(*timestamp.Timestamp)(nil), // 4: google.protobuf.Timestamp
}
var file_common_messages_proto_depIdxs = []int32{
	0, // 0: common.messages.PageOptions.sort_order:type_name -> common.messages.SortOrder
	0, // 1: common.messages.ListOptions.sort_order:type_name -> common.messages.SortOrder
	4, // 2: common.messages.Meta.created_at:type_name -> google.protobuf.Timestamp
	4, // 3: common.messages.Meta.updated_at:type_name -> google.protobuf.Timestamp
	4, // 4: common.messages.Meta.deleted_at:type_name -> google.protobuf.Timestamp
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_common_messages_proto_init() }
func file_common_messages_proto_init() {
	if File_common_messages_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_common_messages_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_common_messages_proto_goTypes,
		DependencyIndexes: file_common_messages_proto_depIdxs,
		EnumInfos:         file_common_messages_proto_enumTypes,
		MessageInfos:      file_common_messages_proto_msgTypes,
	}.Build()
	File_common_messages_proto = out.File
	file_common_messages_proto_rawDesc = nil
	file_common_messages_proto_goTypes = nil
	file_common_messages_proto_depIdxs = nil
}