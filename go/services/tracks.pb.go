// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        v3.12.4
// source: services/tracks.proto

package tracks

import (
	common "github.com/darkclown97/api/services/common"
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

type ListSoundtracksRequest_FilterBy int32

const (
	ListSoundtracksRequest_NAME   ListSoundtracksRequest_FilterBy = 0 // by default, filters by name
	ListSoundtracksRequest_ARTIST ListSoundtracksRequest_FilterBy = 1
	ListSoundtracksRequest_YEAR   ListSoundtracksRequest_FilterBy = 2
	ListSoundtracksRequest_MOVIE  ListSoundtracksRequest_FilterBy = 3
)

// Enum value maps for ListSoundtracksRequest_FilterBy.
var (
	ListSoundtracksRequest_FilterBy_name = map[int32]string{
		0: "NAME",
		1: "ARTIST",
		2: "YEAR",
		3: "MOVIE",
	}
	ListSoundtracksRequest_FilterBy_value = map[string]int32{
		"NAME":   0,
		"ARTIST": 1,
		"YEAR":   2,
		"MOVIE":  3,
	}
)

func (x ListSoundtracksRequest_FilterBy) Enum() *ListSoundtracksRequest_FilterBy {
	p := new(ListSoundtracksRequest_FilterBy)
	*p = x
	return p
}

func (x ListSoundtracksRequest_FilterBy) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ListSoundtracksRequest_FilterBy) Descriptor() protoreflect.EnumDescriptor {
	return file_services_tracks_proto_enumTypes[0].Descriptor()
}

func (ListSoundtracksRequest_FilterBy) Type() protoreflect.EnumType {
	return &file_services_tracks_proto_enumTypes[0]
}

func (x ListSoundtracksRequest_FilterBy) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ListSoundtracksRequest_FilterBy.Descriptor instead.
func (ListSoundtracksRequest_FilterBy) EnumDescriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{3, 0}
}

type Soundtrack struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Meta       *common.Meta `protobuf:"bytes,1,opt,name=meta,proto3" json:"meta,omitempty"`
	Name       string       `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Artist     string       `protobuf:"bytes,3,opt,name=artist,proto3" json:"artist,omitempty"`
	Year       int32        `protobuf:"varint,4,opt,name=year,proto3" json:"year,omitempty"`
	FeaturesIn []string     `protobuf:"bytes,5,rep,name=features_in,json=featuresIn,proto3" json:"features_in,omitempty"`
}

func (x *Soundtrack) Reset() {
	*x = Soundtrack{}
	mi := &file_services_tracks_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Soundtrack) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Soundtrack) ProtoMessage() {}

func (x *Soundtrack) ProtoReflect() protoreflect.Message {
	mi := &file_services_tracks_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Soundtrack.ProtoReflect.Descriptor instead.
func (*Soundtrack) Descriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{0}
}

func (x *Soundtrack) GetMeta() *common.Meta {
	if x != nil {
		return x.Meta
	}
	return nil
}

func (x *Soundtrack) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Soundtrack) GetArtist() string {
	if x != nil {
		return x.Artist
	}
	return ""
}

func (x *Soundtrack) GetYear() int32 {
	if x != nil {
		return x.Year
	}
	return 0
}

func (x *Soundtrack) GetFeaturesIn() []string {
	if x != nil {
		return x.FeaturesIn
	}
	return nil
}

type AddSoundtrackRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Soundtrack *Soundtrack `protobuf:"bytes,1,opt,name=soundtrack,proto3" json:"soundtrack,omitempty"`
}

func (x *AddSoundtrackRequest) Reset() {
	*x = AddSoundtrackRequest{}
	mi := &file_services_tracks_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *AddSoundtrackRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddSoundtrackRequest) ProtoMessage() {}

func (x *AddSoundtrackRequest) ProtoReflect() protoreflect.Message {
	mi := &file_services_tracks_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddSoundtrackRequest.ProtoReflect.Descriptor instead.
func (*AddSoundtrackRequest) Descriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{1}
}

func (x *AddSoundtrackRequest) GetSoundtrack() *Soundtrack {
	if x != nil {
		return x.Soundtrack
	}
	return nil
}

type AddSoundtrackResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Soundtrack *Soundtrack `protobuf:"bytes,1,opt,name=soundtrack,proto3" json:"soundtrack,omitempty"`
}

func (x *AddSoundtrackResponse) Reset() {
	*x = AddSoundtrackResponse{}
	mi := &file_services_tracks_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *AddSoundtrackResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddSoundtrackResponse) ProtoMessage() {}

func (x *AddSoundtrackResponse) ProtoReflect() protoreflect.Message {
	mi := &file_services_tracks_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddSoundtrackResponse.ProtoReflect.Descriptor instead.
func (*AddSoundtrackResponse) Descriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{2}
}

func (x *AddSoundtrackResponse) GetSoundtrack() *Soundtrack {
	if x != nil {
		return x.Soundtrack
	}
	return nil
}

type ListSoundtracksRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Options        *common.PageOptions             `protobuf:"bytes,1,opt,name=options,proto3" json:"options,omitempty"`
	SearchTerm     string                          `protobuf:"bytes,2,opt,name=search_term,json=searchTerm,proto3" json:"search_term,omitempty"`
	FilterBy       ListSoundtracksRequest_FilterBy `protobuf:"varint,3,opt,name=filter_by,json=filterBy,proto3,enum=services.tracks.ListSoundtracksRequest_FilterBy" json:"filter_by,omitempty"`
	IncludeDeleted bool                            `protobuf:"varint,4,opt,name=include_deleted,json=includeDeleted,proto3" json:"include_deleted,omitempty"`
}

func (x *ListSoundtracksRequest) Reset() {
	*x = ListSoundtracksRequest{}
	mi := &file_services_tracks_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ListSoundtracksRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListSoundtracksRequest) ProtoMessage() {}

func (x *ListSoundtracksRequest) ProtoReflect() protoreflect.Message {
	mi := &file_services_tracks_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListSoundtracksRequest.ProtoReflect.Descriptor instead.
func (*ListSoundtracksRequest) Descriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{3}
}

func (x *ListSoundtracksRequest) GetOptions() *common.PageOptions {
	if x != nil {
		return x.Options
	}
	return nil
}

func (x *ListSoundtracksRequest) GetSearchTerm() string {
	if x != nil {
		return x.SearchTerm
	}
	return ""
}

func (x *ListSoundtracksRequest) GetFilterBy() ListSoundtracksRequest_FilterBy {
	if x != nil {
		return x.FilterBy
	}
	return ListSoundtracksRequest_NAME
}

func (x *ListSoundtracksRequest) GetIncludeDeleted() bool {
	if x != nil {
		return x.IncludeDeleted
	}
	return false
}

type ListSoundtracksResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Soundtracks []*Soundtrack `protobuf:"bytes,1,rep,name=soundtracks,proto3" json:"soundtracks,omitempty"`
}

func (x *ListSoundtracksResponse) Reset() {
	*x = ListSoundtracksResponse{}
	mi := &file_services_tracks_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ListSoundtracksResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListSoundtracksResponse) ProtoMessage() {}

func (x *ListSoundtracksResponse) ProtoReflect() protoreflect.Message {
	mi := &file_services_tracks_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListSoundtracksResponse.ProtoReflect.Descriptor instead.
func (*ListSoundtracksResponse) Descriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{4}
}

func (x *ListSoundtracksResponse) GetSoundtracks() []*Soundtrack {
	if x != nil {
		return x.Soundtracks
	}
	return nil
}

type DeleteSoundtrackRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Params:
	//
	//	*DeleteSoundtrackRequest_Id
	//	*DeleteSoundtrackRequest_Name
	Params isDeleteSoundtrackRequest_Params `protobuf_oneof:"params"`
}

func (x *DeleteSoundtrackRequest) Reset() {
	*x = DeleteSoundtrackRequest{}
	mi := &file_services_tracks_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DeleteSoundtrackRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteSoundtrackRequest) ProtoMessage() {}

func (x *DeleteSoundtrackRequest) ProtoReflect() protoreflect.Message {
	mi := &file_services_tracks_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteSoundtrackRequest.ProtoReflect.Descriptor instead.
func (*DeleteSoundtrackRequest) Descriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{5}
}

func (m *DeleteSoundtrackRequest) GetParams() isDeleteSoundtrackRequest_Params {
	if m != nil {
		return m.Params
	}
	return nil
}

func (x *DeleteSoundtrackRequest) GetId() string {
	if x, ok := x.GetParams().(*DeleteSoundtrackRequest_Id); ok {
		return x.Id
	}
	return ""
}

func (x *DeleteSoundtrackRequest) GetName() string {
	if x, ok := x.GetParams().(*DeleteSoundtrackRequest_Name); ok {
		return x.Name
	}
	return ""
}

type isDeleteSoundtrackRequest_Params interface {
	isDeleteSoundtrackRequest_Params()
}

type DeleteSoundtrackRequest_Id struct {
	Id string `protobuf:"bytes,1,opt,name=id,proto3,oneof"`
}

type DeleteSoundtrackRequest_Name struct {
	Name string `protobuf:"bytes,2,opt,name=name,proto3,oneof"`
}

func (*DeleteSoundtrackRequest_Id) isDeleteSoundtrackRequest_Params() {}

func (*DeleteSoundtrackRequest_Name) isDeleteSoundtrackRequest_Params() {}

type DeleteSoundtrackResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DeleteSoundtrackResponse) Reset() {
	*x = DeleteSoundtrackResponse{}
	mi := &file_services_tracks_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DeleteSoundtrackResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteSoundtrackResponse) ProtoMessage() {}

func (x *DeleteSoundtrackResponse) ProtoReflect() protoreflect.Message {
	mi := &file_services_tracks_proto_msgTypes[6]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteSoundtrackResponse.ProtoReflect.Descriptor instead.
func (*DeleteSoundtrackResponse) Descriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{6}
}

type UpdateSoundtrackRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Soundtrack *Soundtrack `protobuf:"bytes,1,opt,name=soundtrack,proto3" json:"soundtrack,omitempty"`
}

func (x *UpdateSoundtrackRequest) Reset() {
	*x = UpdateSoundtrackRequest{}
	mi := &file_services_tracks_proto_msgTypes[7]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UpdateSoundtrackRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateSoundtrackRequest) ProtoMessage() {}

func (x *UpdateSoundtrackRequest) ProtoReflect() protoreflect.Message {
	mi := &file_services_tracks_proto_msgTypes[7]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateSoundtrackRequest.ProtoReflect.Descriptor instead.
func (*UpdateSoundtrackRequest) Descriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{7}
}

func (x *UpdateSoundtrackRequest) GetSoundtrack() *Soundtrack {
	if x != nil {
		return x.Soundtrack
	}
	return nil
}

type UpdateSoundtrackResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Soundtrack *Soundtrack `protobuf:"bytes,1,opt,name=soundtrack,proto3" json:"soundtrack,omitempty"`
}

func (x *UpdateSoundtrackResponse) Reset() {
	*x = UpdateSoundtrackResponse{}
	mi := &file_services_tracks_proto_msgTypes[8]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UpdateSoundtrackResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateSoundtrackResponse) ProtoMessage() {}

func (x *UpdateSoundtrackResponse) ProtoReflect() protoreflect.Message {
	mi := &file_services_tracks_proto_msgTypes[8]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateSoundtrackResponse.ProtoReflect.Descriptor instead.
func (*UpdateSoundtrackResponse) Descriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{8}
}

func (x *UpdateSoundtrackResponse) GetSoundtrack() *Soundtrack {
	if x != nil {
		return x.Soundtrack
	}
	return nil
}

type GetSoundtrackRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Params:
	//
	//	*GetSoundtrackRequest_Id
	//	*GetSoundtrackRequest_Name
	Params isGetSoundtrackRequest_Params `protobuf_oneof:"params"`
}

func (x *GetSoundtrackRequest) Reset() {
	*x = GetSoundtrackRequest{}
	mi := &file_services_tracks_proto_msgTypes[9]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetSoundtrackRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetSoundtrackRequest) ProtoMessage() {}

func (x *GetSoundtrackRequest) ProtoReflect() protoreflect.Message {
	mi := &file_services_tracks_proto_msgTypes[9]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetSoundtrackRequest.ProtoReflect.Descriptor instead.
func (*GetSoundtrackRequest) Descriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{9}
}

func (m *GetSoundtrackRequest) GetParams() isGetSoundtrackRequest_Params {
	if m != nil {
		return m.Params
	}
	return nil
}

func (x *GetSoundtrackRequest) GetId() string {
	if x, ok := x.GetParams().(*GetSoundtrackRequest_Id); ok {
		return x.Id
	}
	return ""
}

func (x *GetSoundtrackRequest) GetName() string {
	if x, ok := x.GetParams().(*GetSoundtrackRequest_Name); ok {
		return x.Name
	}
	return ""
}

type isGetSoundtrackRequest_Params interface {
	isGetSoundtrackRequest_Params()
}

type GetSoundtrackRequest_Id struct {
	Id string `protobuf:"bytes,1,opt,name=id,proto3,oneof"`
}

type GetSoundtrackRequest_Name struct {
	Name string `protobuf:"bytes,2,opt,name=name,proto3,oneof"`
}

func (*GetSoundtrackRequest_Id) isGetSoundtrackRequest_Params() {}

func (*GetSoundtrackRequest_Name) isGetSoundtrackRequest_Params() {}

type GetSoundtrackResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Soundtrack *Soundtrack `protobuf:"bytes,1,opt,name=soundtrack,proto3" json:"soundtrack,omitempty"`
}

func (x *GetSoundtrackResponse) Reset() {
	*x = GetSoundtrackResponse{}
	mi := &file_services_tracks_proto_msgTypes[10]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetSoundtrackResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetSoundtrackResponse) ProtoMessage() {}

func (x *GetSoundtrackResponse) ProtoReflect() protoreflect.Message {
	mi := &file_services_tracks_proto_msgTypes[10]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetSoundtrackResponse.ProtoReflect.Descriptor instead.
func (*GetSoundtrackResponse) Descriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{10}
}

func (x *GetSoundtrackResponse) GetSoundtrack() *Soundtrack {
	if x != nil {
		return x.Soundtrack
	}
	return nil
}

type GetMovieSoundtrackRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	MovieId string `protobuf:"bytes,1,opt,name=movie_id,json=movieId,proto3" json:"movie_id,omitempty"`
}

func (x *GetMovieSoundtrackRequest) Reset() {
	*x = GetMovieSoundtrackRequest{}
	mi := &file_services_tracks_proto_msgTypes[11]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetMovieSoundtrackRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMovieSoundtrackRequest) ProtoMessage() {}

func (x *GetMovieSoundtrackRequest) ProtoReflect() protoreflect.Message {
	mi := &file_services_tracks_proto_msgTypes[11]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMovieSoundtrackRequest.ProtoReflect.Descriptor instead.
func (*GetMovieSoundtrackRequest) Descriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{11}
}

func (x *GetMovieSoundtrackRequest) GetMovieId() string {
	if x != nil {
		return x.MovieId
	}
	return ""
}

type GetMovieSoundtrackResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Soundtracks []*Soundtrack `protobuf:"bytes,1,rep,name=soundtracks,proto3" json:"soundtracks,omitempty"`
}

func (x *GetMovieSoundtrackResponse) Reset() {
	*x = GetMovieSoundtrackResponse{}
	mi := &file_services_tracks_proto_msgTypes[12]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetMovieSoundtrackResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMovieSoundtrackResponse) ProtoMessage() {}

func (x *GetMovieSoundtrackResponse) ProtoReflect() protoreflect.Message {
	mi := &file_services_tracks_proto_msgTypes[12]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMovieSoundtrackResponse.ProtoReflect.Descriptor instead.
func (*GetMovieSoundtrackResponse) Descriptor() ([]byte, []int) {
	return file_services_tracks_proto_rawDescGZIP(), []int{12}
}

func (x *GetMovieSoundtrackResponse) GetSoundtracks() []*Soundtrack {
	if x != nil {
		return x.Soundtracks
	}
	return nil
}

var File_services_tracks_proto protoreflect.FileDescriptor

var file_services_tracks_proto_rawDesc = []byte{
	0x0a, 0x15, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x74, 0x72, 0x61, 0x63, 0x6b,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x1a, 0x15, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x98, 0x01, 0x0a, 0x0a, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x12, 0x29,
	0x0a, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x4d,
	0x65, 0x74, 0x61, 0x52, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a,
	0x06, 0x61, 0x72, 0x74, 0x69, 0x73, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61,
	0x72, 0x74, 0x69, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x79, 0x65, 0x61, 0x72, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x04, 0x79, 0x65, 0x61, 0x72, 0x12, 0x1f, 0x0a, 0x0b, 0x66, 0x65, 0x61,
	0x74, 0x75, 0x72, 0x65, 0x73, 0x5f, 0x69, 0x6e, 0x18, 0x05, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0a,
	0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x73, 0x49, 0x6e, 0x22, 0x53, 0x0a, 0x14, 0x41, 0x64,
	0x64, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x3b, 0x0a, 0x0a, 0x73, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72,
	0x61, 0x63, 0x6b, 0x52, 0x0a, 0x73, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x22,
	0x54, 0x0a, 0x15, 0x41, 0x64, 0x64, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3b, 0x0a, 0x0a, 0x73, 0x6f, 0x75, 0x6e,
	0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x53,
	0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x0a, 0x73, 0x6f, 0x75, 0x6e, 0x64,
	0x74, 0x72, 0x61, 0x63, 0x6b, 0x22, 0xa0, 0x02, 0x0a, 0x16, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x6f,
	0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x36, 0x0a, 0x07, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2e, 0x50, 0x61, 0x67, 0x65, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52,
	0x07, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x1f, 0x0a, 0x0b, 0x73, 0x65, 0x61, 0x72,
	0x63, 0x68, 0x5f, 0x74, 0x65, 0x72, 0x6d, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x73,
	0x65, 0x61, 0x72, 0x63, 0x68, 0x54, 0x65, 0x72, 0x6d, 0x12, 0x4d, 0x0a, 0x09, 0x66, 0x69, 0x6c,
	0x74, 0x65, 0x72, 0x5f, 0x62, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x30, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x4c,
	0x69, 0x73, 0x74, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x42, 0x79, 0x52, 0x08,
	0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x42, 0x79, 0x12, 0x27, 0x0a, 0x0f, 0x69, 0x6e, 0x63, 0x6c,
	0x75, 0x64, 0x65, 0x5f, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x0e, 0x69, 0x6e, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x64, 0x22, 0x35, 0x0a, 0x08, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x42, 0x79, 0x12, 0x08, 0x0a,
	0x04, 0x4e, 0x41, 0x4d, 0x45, 0x10, 0x00, 0x12, 0x0a, 0x0a, 0x06, 0x41, 0x52, 0x54, 0x49, 0x53,
	0x54, 0x10, 0x01, 0x12, 0x08, 0x0a, 0x04, 0x59, 0x45, 0x41, 0x52, 0x10, 0x02, 0x12, 0x09, 0x0a,
	0x05, 0x4d, 0x4f, 0x56, 0x49, 0x45, 0x10, 0x03, 0x22, 0x58, 0x0a, 0x17, 0x4c, 0x69, 0x73, 0x74,
	0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x3d, 0x0a, 0x0b, 0x73, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63,
	0x6b, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x53, 0x6f, 0x75, 0x6e, 0x64,
	0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x0b, 0x73, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63,
	0x6b, 0x73, 0x22, 0x4b, 0x0a, 0x17, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x6f, 0x75, 0x6e,
	0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x10, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x02, 0x69, 0x64, 0x12,
	0x14, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x08, 0x0a, 0x06, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x22,
	0x1a, 0x0a, 0x18, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72,
	0x61, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x56, 0x0a, 0x17, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3b, 0x0a, 0x0a, 0x73, 0x6f, 0x75, 0x6e, 0x64, 0x74,
	0x72, 0x61, 0x63, 0x6b, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x53, 0x6f, 0x75,
	0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x0a, 0x73, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72,
	0x61, 0x63, 0x6b, 0x22, 0x57, 0x0a, 0x18, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x53, 0x6f, 0x75,
	0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x3b, 0x0a, 0x0a, 0x73, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74,
	0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b,
	0x52, 0x0a, 0x73, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x22, 0x48, 0x0a, 0x14,
	0x47, 0x65, 0x74, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x10, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x00, 0x52, 0x02, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x08, 0x0a, 0x06,
	0x70, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x22, 0x54, 0x0a, 0x15, 0x47, 0x65, 0x74, 0x53, 0x6f, 0x75,
	0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x3b, 0x0a, 0x0a, 0x73, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74,
	0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b,
	0x52, 0x0a, 0x73, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x22, 0x36, 0x0a, 0x19,
	0x47, 0x65, 0x74, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61,
	0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x19, 0x0a, 0x08, 0x6d, 0x6f, 0x76,
	0x69, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x6f, 0x76,
	0x69, 0x65, 0x49, 0x64, 0x22, 0x5b, 0x0a, 0x1a, 0x47, 0x65, 0x74, 0x4d, 0x6f, 0x76, 0x69, 0x65,
	0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x3d, 0x0a, 0x0b, 0x73, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74,
	0x72, 0x61, 0x63, 0x6b, 0x52, 0x0b, 0x73, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b,
	0x73, 0x32, 0xfb, 0x04, 0x0a, 0x11, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x5e, 0x0a, 0x0d, 0x41, 0x64, 0x64, 0x53, 0x6f,
	0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x12, 0x25, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x41, 0x64, 0x64, 0x53, 0x6f,
	0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x26, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b,
	0x73, 0x2e, 0x41, 0x64, 0x64, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x64, 0x0a, 0x0f, 0x4c, 0x69, 0x73, 0x74, 0x53,
	0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x12, 0x27, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x4c, 0x69, 0x73,
	0x74, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x28, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74,
	0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74,
	0x72, 0x61, 0x63, 0x6b, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x67, 0x0a,
	0x10, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63,
	0x6b, 0x12, 0x28, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x72, 0x61,
	0x63, 0x6b, 0x73, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74,
	0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x29, 0x2e, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x67, 0x0a, 0x10, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x12, 0x28, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x29, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e,
	0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x53, 0x6f, 0x75,
	0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x5e, 0x0a, 0x0d, 0x47, 0x65, 0x74, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b,
	0x12, 0x25, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x72, 0x61, 0x63,
	0x6b, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x26, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x53, 0x6f, 0x75,
	0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x6e, 0x0a, 0x13, 0x47, 0x65, 0x74, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x53, 0x6f, 0x75, 0x6e, 0x64,
	0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x12, 0x2a, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x73, 0x2e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x6f, 0x76, 0x69,
	0x65, 0x53, 0x6f, 0x75, 0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x2b, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x72,
	0x61, 0x63, 0x6b, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x6f, 0x76, 0x69, 0x65, 0x53, 0x6f, 0x75,
	0x6e, 0x64, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42,
	0x2c, 0x5a, 0x2a, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x64, 0x61,
	0x72, 0x6b, 0x63, 0x6c, 0x6f, 0x77, 0x6e, 0x39, 0x37, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_services_tracks_proto_rawDescOnce sync.Once
	file_services_tracks_proto_rawDescData = file_services_tracks_proto_rawDesc
)

func file_services_tracks_proto_rawDescGZIP() []byte {
	file_services_tracks_proto_rawDescOnce.Do(func() {
		file_services_tracks_proto_rawDescData = protoimpl.X.CompressGZIP(file_services_tracks_proto_rawDescData)
	})
	return file_services_tracks_proto_rawDescData
}

var file_services_tracks_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_services_tracks_proto_msgTypes = make([]protoimpl.MessageInfo, 13)
var file_services_tracks_proto_goTypes = []any{
	(ListSoundtracksRequest_FilterBy)(0), // 0: services.tracks.ListSoundtracksRequest.FilterBy
	(*Soundtrack)(nil),                   // 1: services.tracks.Soundtrack
	(*AddSoundtrackRequest)(nil),         // 2: services.tracks.AddSoundtrackRequest
	(*AddSoundtrackResponse)(nil),        // 3: services.tracks.AddSoundtrackResponse
	(*ListSoundtracksRequest)(nil),       // 4: services.tracks.ListSoundtracksRequest
	(*ListSoundtracksResponse)(nil),      // 5: services.tracks.ListSoundtracksResponse
	(*DeleteSoundtrackRequest)(nil),      // 6: services.tracks.DeleteSoundtrackRequest
	(*DeleteSoundtrackResponse)(nil),     // 7: services.tracks.DeleteSoundtrackResponse
	(*UpdateSoundtrackRequest)(nil),      // 8: services.tracks.UpdateSoundtrackRequest
	(*UpdateSoundtrackResponse)(nil),     // 9: services.tracks.UpdateSoundtrackResponse
	(*GetSoundtrackRequest)(nil),         // 10: services.tracks.GetSoundtrackRequest
	(*GetSoundtrackResponse)(nil),        // 11: services.tracks.GetSoundtrackResponse
	(*GetMovieSoundtrackRequest)(nil),    // 12: services.tracks.GetMovieSoundtrackRequest
	(*GetMovieSoundtrackResponse)(nil),   // 13: services.tracks.GetMovieSoundtrackResponse
	(*common.Meta)(nil),                  // 14: services.common.Meta
	(*common.PageOptions)(nil),           // 15: services.common.PageOptions
}
var file_services_tracks_proto_depIdxs = []int32{
	14, // 0: services.tracks.Soundtrack.meta:type_name -> services.common.Meta
	1,  // 1: services.tracks.AddSoundtrackRequest.soundtrack:type_name -> services.tracks.Soundtrack
	1,  // 2: services.tracks.AddSoundtrackResponse.soundtrack:type_name -> services.tracks.Soundtrack
	15, // 3: services.tracks.ListSoundtracksRequest.options:type_name -> services.common.PageOptions
	0,  // 4: services.tracks.ListSoundtracksRequest.filter_by:type_name -> services.tracks.ListSoundtracksRequest.FilterBy
	1,  // 5: services.tracks.ListSoundtracksResponse.soundtracks:type_name -> services.tracks.Soundtrack
	1,  // 6: services.tracks.UpdateSoundtrackRequest.soundtrack:type_name -> services.tracks.Soundtrack
	1,  // 7: services.tracks.UpdateSoundtrackResponse.soundtrack:type_name -> services.tracks.Soundtrack
	1,  // 8: services.tracks.GetSoundtrackResponse.soundtrack:type_name -> services.tracks.Soundtrack
	1,  // 9: services.tracks.GetMovieSoundtrackResponse.soundtracks:type_name -> services.tracks.Soundtrack
	2,  // 10: services.tracks.SoundtrackService.AddSoundtrack:input_type -> services.tracks.AddSoundtrackRequest
	4,  // 11: services.tracks.SoundtrackService.ListSoundtracks:input_type -> services.tracks.ListSoundtracksRequest
	6,  // 12: services.tracks.SoundtrackService.DeleteSoundtrack:input_type -> services.tracks.DeleteSoundtrackRequest
	8,  // 13: services.tracks.SoundtrackService.UpdateSoundtrack:input_type -> services.tracks.UpdateSoundtrackRequest
	10, // 14: services.tracks.SoundtrackService.GetSoundtrack:input_type -> services.tracks.GetSoundtrackRequest
	12, // 15: services.tracks.SoundtrackService.GetMovieSoundtracks:input_type -> services.tracks.GetMovieSoundtrackRequest
	3,  // 16: services.tracks.SoundtrackService.AddSoundtrack:output_type -> services.tracks.AddSoundtrackResponse
	5,  // 17: services.tracks.SoundtrackService.ListSoundtracks:output_type -> services.tracks.ListSoundtracksResponse
	7,  // 18: services.tracks.SoundtrackService.DeleteSoundtrack:output_type -> services.tracks.DeleteSoundtrackResponse
	9,  // 19: services.tracks.SoundtrackService.UpdateSoundtrack:output_type -> services.tracks.UpdateSoundtrackResponse
	11, // 20: services.tracks.SoundtrackService.GetSoundtrack:output_type -> services.tracks.GetSoundtrackResponse
	13, // 21: services.tracks.SoundtrackService.GetMovieSoundtracks:output_type -> services.tracks.GetMovieSoundtrackResponse
	16, // [16:22] is the sub-list for method output_type
	10, // [10:16] is the sub-list for method input_type
	10, // [10:10] is the sub-list for extension type_name
	10, // [10:10] is the sub-list for extension extendee
	0,  // [0:10] is the sub-list for field type_name
}

func init() { file_services_tracks_proto_init() }
func file_services_tracks_proto_init() {
	if File_services_tracks_proto != nil {
		return
	}
	file_services_tracks_proto_msgTypes[5].OneofWrappers = []any{
		(*DeleteSoundtrackRequest_Id)(nil),
		(*DeleteSoundtrackRequest_Name)(nil),
	}
	file_services_tracks_proto_msgTypes[9].OneofWrappers = []any{
		(*GetSoundtrackRequest_Id)(nil),
		(*GetSoundtrackRequest_Name)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_services_tracks_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   13,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_services_tracks_proto_goTypes,
		DependencyIndexes: file_services_tracks_proto_depIdxs,
		EnumInfos:         file_services_tracks_proto_enumTypes,
		MessageInfos:      file_services_tracks_proto_msgTypes,
	}.Build()
	File_services_tracks_proto = out.File
	file_services_tracks_proto_rawDesc = nil
	file_services_tracks_proto_goTypes = nil
	file_services_tracks_proto_depIdxs = nil
}