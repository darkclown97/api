// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        v3.12.4
// source: services/common.proto

package common

import (
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

type PageOptions_SortOrder int32

const (
	PageOptions_SORT_ORDER_ASC  PageOptions_SortOrder = 0 // ascending by default
	PageOptions_SORT_ORDER_DESC PageOptions_SortOrder = 1
)

// Enum value maps for PageOptions_SortOrder.
var (
	PageOptions_SortOrder_name = map[int32]string{
		0: "SORT_ORDER_ASC",
		1: "SORT_ORDER_DESC",
	}
	PageOptions_SortOrder_value = map[string]int32{
		"SORT_ORDER_ASC":  0,
		"SORT_ORDER_DESC": 1,
	}
)

func (x PageOptions_SortOrder) Enum() *PageOptions_SortOrder {
	p := new(PageOptions_SortOrder)
	*p = x
	return p
}

func (x PageOptions_SortOrder) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (PageOptions_SortOrder) Descriptor() protoreflect.EnumDescriptor {
	return file_services_common_proto_enumTypes[0].Descriptor()
}

func (PageOptions_SortOrder) Type() protoreflect.EnumType {
	return &file_services_common_proto_enumTypes[0]
}

func (x PageOptions_SortOrder) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use PageOptions_SortOrder.Descriptor instead.
func (PageOptions_SortOrder) EnumDescriptor() ([]byte, []int) {
	return file_services_common_proto_rawDescGZIP(), []int{0, 0}
}

type PageOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Limit     uint32                `protobuf:"varint,1,opt,name=limit,proto3" json:"limit,omitempty"`
	Offset    uint32                `protobuf:"varint,2,opt,name=offset,proto3" json:"offset,omitempty"`
	SortOrder PageOptions_SortOrder `protobuf:"varint,3,opt,name=sort_order,json=sortOrder,proto3,enum=services.common.PageOptions_SortOrder" json:"sort_order,omitempty"`
}

func (x *PageOptions) Reset() {
	*x = PageOptions{}
	mi := &file_services_common_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *PageOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PageOptions) ProtoMessage() {}

func (x *PageOptions) ProtoReflect() protoreflect.Message {
	mi := &file_services_common_proto_msgTypes[0]
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
	return file_services_common_proto_rawDescGZIP(), []int{0}
}

func (x *PageOptions) GetLimit() uint32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *PageOptions) GetOffset() uint32 {
	if x != nil {
		return x.Offset
	}
	return 0
}

func (x *PageOptions) GetSortOrder() PageOptions_SortOrder {
	if x != nil {
		return x.SortOrder
	}
	return PageOptions_SORT_ORDER_ASC
}

type Meta struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	CreatedAt int64  `protobuf:"fixed64,2,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt int64  `protobuf:"fixed64,3,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	DeletedAt int64  `protobuf:"fixed64,4,opt,name=deleted_at,json=deletedAt,proto3" json:"deleted_at,omitempty"`
}

func (x *Meta) Reset() {
	*x = Meta{}
	mi := &file_services_common_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Meta) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Meta) ProtoMessage() {}

func (x *Meta) ProtoReflect() protoreflect.Message {
	mi := &file_services_common_proto_msgTypes[1]
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
	return file_services_common_proto_rawDescGZIP(), []int{1}
}

func (x *Meta) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Meta) GetCreatedAt() int64 {
	if x != nil {
		return x.CreatedAt
	}
	return 0
}

func (x *Meta) GetUpdatedAt() int64 {
	if x != nil {
		return x.UpdatedAt
	}
	return 0
}

func (x *Meta) GetDeletedAt() int64 {
	if x != nil {
		return x.DeletedAt
	}
	return 0
}

var File_services_common_proto protoreflect.FileDescriptor

var file_services_common_proto_rawDesc = []byte{
	0x0a, 0x15, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x22, 0xb8, 0x01, 0x0a, 0x0b, 0x50, 0x61, 0x67,
	0x65, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69,
	0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x16,
	0x0a, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x06,
	0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x12, 0x45, 0x0a, 0x0a, 0x73, 0x6f, 0x72, 0x74, 0x5f, 0x6f,
	0x72, 0x64, 0x65, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x26, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x50, 0x61, 0x67,
	0x65, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x53, 0x6f, 0x72, 0x74, 0x4f, 0x72, 0x64,
	0x65, 0x72, 0x52, 0x09, 0x73, 0x6f, 0x72, 0x74, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x22, 0x34, 0x0a,
	0x09, 0x53, 0x6f, 0x72, 0x74, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x12, 0x12, 0x0a, 0x0e, 0x53, 0x4f,
	0x52, 0x54, 0x5f, 0x4f, 0x52, 0x44, 0x45, 0x52, 0x5f, 0x41, 0x53, 0x43, 0x10, 0x00, 0x12, 0x13,
	0x0a, 0x0f, 0x53, 0x4f, 0x52, 0x54, 0x5f, 0x4f, 0x52, 0x44, 0x45, 0x52, 0x5f, 0x44, 0x45, 0x53,
	0x43, 0x10, 0x01, 0x22, 0x73, 0x0a, 0x04, 0x4d, 0x65, 0x74, 0x61, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x63,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x10, 0x52,
	0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x10, 0x52, 0x09,
	0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x64, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x10, 0x52, 0x09, 0x64,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x41, 0x74, 0x42, 0x2c, 0x5a, 0x2a, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x64, 0x61, 0x72, 0x6b, 0x63, 0x6c, 0x6f, 0x77, 0x6e,
	0x39, 0x37, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f,
	0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_services_common_proto_rawDescOnce sync.Once
	file_services_common_proto_rawDescData = file_services_common_proto_rawDesc
)

func file_services_common_proto_rawDescGZIP() []byte {
	file_services_common_proto_rawDescOnce.Do(func() {
		file_services_common_proto_rawDescData = protoimpl.X.CompressGZIP(file_services_common_proto_rawDescData)
	})
	return file_services_common_proto_rawDescData
}

var file_services_common_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_services_common_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_services_common_proto_goTypes = []any{
	(PageOptions_SortOrder)(0), // 0: services.common.PageOptions.SortOrder
	(*PageOptions)(nil),        // 1: services.common.PageOptions
	(*Meta)(nil),               // 2: services.common.Meta
}
var file_services_common_proto_depIdxs = []int32{
	0, // 0: services.common.PageOptions.sort_order:type_name -> services.common.PageOptions.SortOrder
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_services_common_proto_init() }
func file_services_common_proto_init() {
	if File_services_common_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_services_common_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_services_common_proto_goTypes,
		DependencyIndexes: file_services_common_proto_depIdxs,
		EnumInfos:         file_services_common_proto_enumTypes,
		MessageInfos:      file_services_common_proto_msgTypes,
	}.Build()
	File_services_common_proto = out.File
	file_services_common_proto_rawDesc = nil
	file_services_common_proto_goTypes = nil
	file_services_common_proto_depIdxs = nil
}
