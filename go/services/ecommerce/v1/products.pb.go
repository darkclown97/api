// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        v3.12.4
// source: services/ecommerce/v1/products.proto

package products

import (
	common "github.com/darkclown97/api/common"
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

type ProductSortBy int32

const (
	ProductSortBy_PRODUCT_SORTBY_NAME       ProductSortBy = 0
	ProductSortBy_PRODUCT_SORTBY_PRICE      ProductSortBy = 1
	ProductSortBy_PRODUCT_SORTBY_POPULARITY ProductSortBy = 2
	ProductSortBy_PRODUCT_SORTBY_RATING     ProductSortBy = 3
)

// Enum value maps for ProductSortBy.
var (
	ProductSortBy_name = map[int32]string{
		0: "PRODUCT_SORTBY_NAME",
		1: "PRODUCT_SORTBY_PRICE",
		2: "PRODUCT_SORTBY_POPULARITY",
		3: "PRODUCT_SORTBY_RATING",
	}
	ProductSortBy_value = map[string]int32{
		"PRODUCT_SORTBY_NAME":       0,
		"PRODUCT_SORTBY_PRICE":      1,
		"PRODUCT_SORTBY_POPULARITY": 2,
		"PRODUCT_SORTBY_RATING":     3,
	}
)

func (x ProductSortBy) Enum() *ProductSortBy {
	p := new(ProductSortBy)
	*p = x
	return p
}

func (x ProductSortBy) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ProductSortBy) Descriptor() protoreflect.EnumDescriptor {
	return file_services_ecommerce_v1_products_proto_enumTypes[0].Descriptor()
}

func (ProductSortBy) Type() protoreflect.EnumType {
	return &file_services_ecommerce_v1_products_proto_enumTypes[0]
}

func (x ProductSortBy) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ProductSortBy.Descriptor instead.
func (ProductSortBy) EnumDescriptor() ([]byte, []int) {
	return file_services_ecommerce_v1_products_proto_rawDescGZIP(), []int{0}
}

type ListProductsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PageOptions *common.PageOptions `protobuf:"bytes,1,opt,name=page_options,json=pageOptions,proto3" json:"page_options,omitempty"`
	SortBy      ProductSortBy       `protobuf:"varint,2,opt,name=sort_by,json=sortBy,proto3,enum=services.ecommerce.v1.products.ProductSortBy" json:"sort_by,omitempty"`
	SearchTerm  string              `protobuf:"bytes,3,opt,name=search_term,json=searchTerm,proto3" json:"search_term,omitempty"`
	Categories  []string            `protobuf:"bytes,4,rep,name=categories,proto3" json:"categories,omitempty"`
}

func (x *ListProductsRequest) Reset() {
	*x = ListProductsRequest{}
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ListProductsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListProductsRequest) ProtoMessage() {}

func (x *ListProductsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListProductsRequest.ProtoReflect.Descriptor instead.
func (*ListProductsRequest) Descriptor() ([]byte, []int) {
	return file_services_ecommerce_v1_products_proto_rawDescGZIP(), []int{0}
}

func (x *ListProductsRequest) GetPageOptions() *common.PageOptions {
	if x != nil {
		return x.PageOptions
	}
	return nil
}

func (x *ListProductsRequest) GetSortBy() ProductSortBy {
	if x != nil {
		return x.SortBy
	}
	return ProductSortBy_PRODUCT_SORTBY_NAME
}

func (x *ListProductsRequest) GetSearchTerm() string {
	if x != nil {
		return x.SearchTerm
	}
	return ""
}

func (x *ListProductsRequest) GetCategories() []string {
	if x != nil {
		return x.Categories
	}
	return nil
}

type ListProductsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Products []*Product `protobuf:"bytes,1,rep,name=products,proto3" json:"products,omitempty"`
	Total    int32      `protobuf:"varint,2,opt,name=total,proto3" json:"total,omitempty"`
}

func (x *ListProductsResponse) Reset() {
	*x = ListProductsResponse{}
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ListProductsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListProductsResponse) ProtoMessage() {}

func (x *ListProductsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListProductsResponse.ProtoReflect.Descriptor instead.
func (*ListProductsResponse) Descriptor() ([]byte, []int) {
	return file_services_ecommerce_v1_products_proto_rawDescGZIP(), []int{1}
}

func (x *ListProductsResponse) GetProducts() []*Product {
	if x != nil {
		return x.Products
	}
	return nil
}

func (x *ListProductsResponse) GetTotal() int32 {
	if x != nil {
		return x.Total
	}
	return 0
}

type GetProductRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ProductId string `protobuf:"bytes,1,opt,name=product_id,json=productId,proto3" json:"product_id,omitempty"`
}

func (x *GetProductRequest) Reset() {
	*x = GetProductRequest{}
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetProductRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetProductRequest) ProtoMessage() {}

func (x *GetProductRequest) ProtoReflect() protoreflect.Message {
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetProductRequest.ProtoReflect.Descriptor instead.
func (*GetProductRequest) Descriptor() ([]byte, []int) {
	return file_services_ecommerce_v1_products_proto_rawDescGZIP(), []int{2}
}

func (x *GetProductRequest) GetProductId() string {
	if x != nil {
		return x.ProductId
	}
	return ""
}

type GetProductResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Detail *Product `protobuf:"bytes,1,opt,name=detail,proto3" json:"detail,omitempty"`
}

func (x *GetProductResponse) Reset() {
	*x = GetProductResponse{}
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetProductResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetProductResponse) ProtoMessage() {}

func (x *GetProductResponse) ProtoReflect() protoreflect.Message {
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetProductResponse.ProtoReflect.Descriptor instead.
func (*GetProductResponse) Descriptor() ([]byte, []int) {
	return file_services_ecommerce_v1_products_proto_rawDescGZIP(), []int{3}
}

func (x *GetProductResponse) GetDetail() *Product {
	if x != nil {
		return x.Detail
	}
	return nil
}

type Product struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name        string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Description string   `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	Brief       string   `protobuf:"bytes,4,opt,name=brief,proto3" json:"brief,omitempty"`
	Price       float64  `protobuf:"fixed64,5,opt,name=price,proto3" json:"price,omitempty"`
	InStock     bool     `protobuf:"varint,6,opt,name=in_stock,json=inStock,proto3" json:"in_stock,omitempty"`
	ImageUrl    []string `protobuf:"bytes,7,rep,name=image_url,json=imageUrl,proto3" json:"image_url,omitempty"`
	Seller      *Seller  `protobuf:"bytes,8,opt,name=seller,proto3" json:"seller,omitempty"`
	StarRating  float64  `protobuf:"fixed64,9,opt,name=star_rating,json=starRating,proto3" json:"star_rating,omitempty"`
	RatingCount int32    `protobuf:"varint,10,opt,name=rating_count,json=ratingCount,proto3" json:"rating_count,omitempty"`
}

func (x *Product) Reset() {
	*x = Product{}
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Product) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Product) ProtoMessage() {}

func (x *Product) ProtoReflect() protoreflect.Message {
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Product.ProtoReflect.Descriptor instead.
func (*Product) Descriptor() ([]byte, []int) {
	return file_services_ecommerce_v1_products_proto_rawDescGZIP(), []int{4}
}

func (x *Product) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Product) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Product) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Product) GetBrief() string {
	if x != nil {
		return x.Brief
	}
	return ""
}

func (x *Product) GetPrice() float64 {
	if x != nil {
		return x.Price
	}
	return 0
}

func (x *Product) GetInStock() bool {
	if x != nil {
		return x.InStock
	}
	return false
}

func (x *Product) GetImageUrl() []string {
	if x != nil {
		return x.ImageUrl
	}
	return nil
}

func (x *Product) GetSeller() *Seller {
	if x != nil {
		return x.Seller
	}
	return nil
}

func (x *Product) GetStarRating() float64 {
	if x != nil {
		return x.StarRating
	}
	return 0
}

func (x *Product) GetRatingCount() int32 {
	if x != nil {
		return x.RatingCount
	}
	return 0
}

type Seller struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SellerId string `protobuf:"bytes,1,opt,name=seller_id,json=sellerId,proto3" json:"seller_id,omitempty"`
	Name     string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *Seller) Reset() {
	*x = Seller{}
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Seller) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Seller) ProtoMessage() {}

func (x *Seller) ProtoReflect() protoreflect.Message {
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Seller.ProtoReflect.Descriptor instead.
func (*Seller) Descriptor() ([]byte, []int) {
	return file_services_ecommerce_v1_products_proto_rawDescGZIP(), []int{5}
}

func (x *Seller) GetSellerId() string {
	if x != nil {
		return x.SellerId
	}
	return ""
}

func (x *Seller) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type CreateProductRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Product *Product `protobuf:"bytes,1,opt,name=product,proto3" json:"product,omitempty"`
}

func (x *CreateProductRequest) Reset() {
	*x = CreateProductRequest{}
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *CreateProductRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateProductRequest) ProtoMessage() {}

func (x *CreateProductRequest) ProtoReflect() protoreflect.Message {
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[6]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateProductRequest.ProtoReflect.Descriptor instead.
func (*CreateProductRequest) Descriptor() ([]byte, []int) {
	return file_services_ecommerce_v1_products_proto_rawDescGZIP(), []int{6}
}

func (x *CreateProductRequest) GetProduct() *Product {
	if x != nil {
		return x.Product
	}
	return nil
}

type DeleteProductRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ProductId string `protobuf:"bytes,1,opt,name=product_id,json=productId,proto3" json:"product_id,omitempty"`
}

func (x *DeleteProductRequest) Reset() {
	*x = DeleteProductRequest{}
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[7]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DeleteProductRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteProductRequest) ProtoMessage() {}

func (x *DeleteProductRequest) ProtoReflect() protoreflect.Message {
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[7]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteProductRequest.ProtoReflect.Descriptor instead.
func (*DeleteProductRequest) Descriptor() ([]byte, []int) {
	return file_services_ecommerce_v1_products_proto_rawDescGZIP(), []int{7}
}

func (x *DeleteProductRequest) GetProductId() string {
	if x != nil {
		return x.ProductId
	}
	return ""
}

type DeleteProductResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DeleteProductResponse) Reset() {
	*x = DeleteProductResponse{}
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[8]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DeleteProductResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteProductResponse) ProtoMessage() {}

func (x *DeleteProductResponse) ProtoReflect() protoreflect.Message {
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[8]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteProductResponse.ProtoReflect.Descriptor instead.
func (*DeleteProductResponse) Descriptor() ([]byte, []int) {
	return file_services_ecommerce_v1_products_proto_rawDescGZIP(), []int{8}
}

// Only for internal use
type ProductInternal struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Meta        *common.Meta `protobuf:"bytes,1,opt,name=meta,proto3" json:"meta,omitempty"`
	Name        string       `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Description string       `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	Seller      *Seller      `protobuf:"bytes,4,opt,name=seller,proto3" json:"seller,omitempty"`
	Brief       string       `protobuf:"bytes,5,opt,name=brief,proto3" json:"brief,omitempty"`
	Price       float64      `protobuf:"fixed64,6,opt,name=price,proto3" json:"price,omitempty"`
	InStock     bool         `protobuf:"varint,7,opt,name=in_stock,json=inStock,proto3" json:"in_stock,omitempty"`
	ImageUrl    []string     `protobuf:"bytes,8,rep,name=image_url,json=imageUrl,proto3" json:"image_url,omitempty"`
	StarRating  float64      `protobuf:"fixed64,9,opt,name=star_rating,json=starRating,proto3" json:"star_rating,omitempty"`
	RatingCount int32        `protobuf:"varint,10,opt,name=rating_count,json=ratingCount,proto3" json:"rating_count,omitempty"`
}

func (x *ProductInternal) Reset() {
	*x = ProductInternal{}
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[9]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ProductInternal) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProductInternal) ProtoMessage() {}

func (x *ProductInternal) ProtoReflect() protoreflect.Message {
	mi := &file_services_ecommerce_v1_products_proto_msgTypes[9]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProductInternal.ProtoReflect.Descriptor instead.
func (*ProductInternal) Descriptor() ([]byte, []int) {
	return file_services_ecommerce_v1_products_proto_rawDescGZIP(), []int{9}
}

func (x *ProductInternal) GetMeta() *common.Meta {
	if x != nil {
		return x.Meta
	}
	return nil
}

func (x *ProductInternal) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ProductInternal) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *ProductInternal) GetSeller() *Seller {
	if x != nil {
		return x.Seller
	}
	return nil
}

func (x *ProductInternal) GetBrief() string {
	if x != nil {
		return x.Brief
	}
	return ""
}

func (x *ProductInternal) GetPrice() float64 {
	if x != nil {
		return x.Price
	}
	return 0
}

func (x *ProductInternal) GetInStock() bool {
	if x != nil {
		return x.InStock
	}
	return false
}

func (x *ProductInternal) GetImageUrl() []string {
	if x != nil {
		return x.ImageUrl
	}
	return nil
}

func (x *ProductInternal) GetStarRating() float64 {
	if x != nil {
		return x.StarRating
	}
	return 0
}

func (x *ProductInternal) GetRatingCount() int32 {
	if x != nil {
		return x.RatingCount
	}
	return 0
}

var File_services_ecommerce_v1_products_proto protoreflect.FileDescriptor

var file_services_ecommerce_v1_products_proto_rawDesc = []byte{
	0x0a, 0x24, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x65, 0x63, 0x6f, 0x6d, 0x6d,
	0x65, 0x72, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72,
	0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x1a, 0x15, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xdf, 0x01,
	0x0a, 0x13, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3f, 0x0a, 0x0c, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x6f, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x50, 0x61,
	0x67, 0x65, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x0b, 0x70, 0x61, 0x67, 0x65, 0x4f,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x46, 0x0a, 0x07, 0x73, 0x6f, 0x72, 0x74, 0x5f, 0x62,
	0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x2d, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x2e, 0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e,
	0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x2e, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74,
	0x53, 0x6f, 0x72, 0x74, 0x42, 0x79, 0x52, 0x06, 0x73, 0x6f, 0x72, 0x74, 0x42, 0x79, 0x12, 0x1f,
	0x0a, 0x0b, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x5f, 0x74, 0x65, 0x72, 0x6d, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0a, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x54, 0x65, 0x72, 0x6d, 0x12,
	0x1e, 0x0a, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x18, 0x04, 0x20,
	0x03, 0x28, 0x09, 0x52, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x22,
	0x71, 0x0a, 0x14, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x43, 0x0a, 0x08, 0x70, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63, 0x65, 0x2e, 0x76,
	0x31, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x2e, 0x50, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x12, 0x14, 0x0a, 0x05,
	0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x74, 0x6f, 0x74,
	0x61, 0x6c, 0x22, 0x32, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x49, 0x64, 0x22, 0x55, 0x0a, 0x12, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3f, 0x0a, 0x06,
	0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63,
	0x65, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x2e, 0x50, 0x72,
	0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x06, 0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x22, 0xb7, 0x02,
	0x0a, 0x07, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a,
	0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12,
	0x14, 0x0a, 0x05, 0x62, 0x72, 0x69, 0x65, 0x66, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x62, 0x72, 0x69, 0x65, 0x66, 0x12, 0x14, 0x0a, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x01, 0x52, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x12, 0x19, 0x0a, 0x08, 0x69,
	0x6e, 0x5f, 0x73, 0x74, 0x6f, 0x63, 0x6b, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x69,
	0x6e, 0x53, 0x74, 0x6f, 0x63, 0x6b, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x5f,
	0x75, 0x72, 0x6c, 0x18, 0x07, 0x20, 0x03, 0x28, 0x09, 0x52, 0x08, 0x69, 0x6d, 0x61, 0x67, 0x65,
	0x55, 0x72, 0x6c, 0x12, 0x3e, 0x0a, 0x06, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x18, 0x08, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x26, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x65,
	0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x64,
	0x75, 0x63, 0x74, 0x73, 0x2e, 0x53, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x52, 0x06, 0x73, 0x65, 0x6c,
	0x6c, 0x65, 0x72, 0x12, 0x1f, 0x0a, 0x0b, 0x73, 0x74, 0x61, 0x72, 0x5f, 0x72, 0x61, 0x74, 0x69,
	0x6e, 0x67, 0x18, 0x09, 0x20, 0x01, 0x28, 0x01, 0x52, 0x0a, 0x73, 0x74, 0x61, 0x72, 0x52, 0x61,
	0x74, 0x69, 0x6e, 0x67, 0x12, 0x21, 0x0a, 0x0c, 0x72, 0x61, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x72, 0x61, 0x74, 0x69,
	0x6e, 0x67, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x22, 0x39, 0x0a, 0x06, 0x53, 0x65, 0x6c, 0x6c, 0x65,
	0x72, 0x12, 0x1b, 0x0a, 0x09, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x49, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x22, 0x59, 0x0a, 0x14, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x64,
	0x75, 0x63, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x41, 0x0a, 0x07, 0x70, 0x72,
	0x6f, 0x64, 0x75, 0x63, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63, 0x65,
	0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x2e, 0x50, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x22, 0x35, 0x0a,
	0x14, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74,
	0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x49, 0x64, 0x22, 0x17, 0x0a, 0x15, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x72,
	0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0xda, 0x02,
	0x0a, 0x0f, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61,
	0x6c, 0x12, 0x29, 0x0a, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x15, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x73, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x52, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x3e, 0x0a, 0x06, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x26, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x65, 0x63,
	0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x73, 0x2e, 0x53, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x52, 0x06, 0x73, 0x65, 0x6c, 0x6c,
	0x65, 0x72, 0x12, 0x14, 0x0a, 0x05, 0x62, 0x72, 0x69, 0x65, 0x66, 0x18, 0x05, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x05, 0x62, 0x72, 0x69, 0x65, 0x66, 0x12, 0x14, 0x0a, 0x05, 0x70, 0x72, 0x69, 0x63,
	0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x01, 0x52, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x12, 0x19,
	0x0a, 0x08, 0x69, 0x6e, 0x5f, 0x73, 0x74, 0x6f, 0x63, 0x6b, 0x18, 0x07, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x07, 0x69, 0x6e, 0x53, 0x74, 0x6f, 0x63, 0x6b, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x6d, 0x61,
	0x67, 0x65, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x08, 0x20, 0x03, 0x28, 0x09, 0x52, 0x08, 0x69, 0x6d,
	0x61, 0x67, 0x65, 0x55, 0x72, 0x6c, 0x12, 0x1f, 0x0a, 0x0b, 0x73, 0x74, 0x61, 0x72, 0x5f, 0x72,
	0x61, 0x74, 0x69, 0x6e, 0x67, 0x18, 0x09, 0x20, 0x01, 0x28, 0x01, 0x52, 0x0a, 0x73, 0x74, 0x61,
	0x72, 0x52, 0x61, 0x74, 0x69, 0x6e, 0x67, 0x12, 0x21, 0x0a, 0x0c, 0x72, 0x61, 0x74, 0x69, 0x6e,
	0x67, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x72,
	0x61, 0x74, 0x69, 0x6e, 0x67, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x2a, 0x7c, 0x0a, 0x0d, 0x50, 0x72,
	0x6f, 0x64, 0x75, 0x63, 0x74, 0x53, 0x6f, 0x72, 0x74, 0x42, 0x79, 0x12, 0x17, 0x0a, 0x13, 0x50,
	0x52, 0x4f, 0x44, 0x55, 0x43, 0x54, 0x5f, 0x53, 0x4f, 0x52, 0x54, 0x42, 0x59, 0x5f, 0x4e, 0x41,
	0x4d, 0x45, 0x10, 0x00, 0x12, 0x18, 0x0a, 0x14, 0x50, 0x52, 0x4f, 0x44, 0x55, 0x43, 0x54, 0x5f,
	0x53, 0x4f, 0x52, 0x54, 0x42, 0x59, 0x5f, 0x50, 0x52, 0x49, 0x43, 0x45, 0x10, 0x01, 0x12, 0x1d,
	0x0a, 0x19, 0x50, 0x52, 0x4f, 0x44, 0x55, 0x43, 0x54, 0x5f, 0x53, 0x4f, 0x52, 0x54, 0x42, 0x59,
	0x5f, 0x50, 0x4f, 0x50, 0x55, 0x4c, 0x41, 0x52, 0x49, 0x54, 0x59, 0x10, 0x02, 0x12, 0x19, 0x0a,
	0x15, 0x50, 0x52, 0x4f, 0x44, 0x55, 0x43, 0x54, 0x5f, 0x53, 0x4f, 0x52, 0x54, 0x42, 0x59, 0x5f,
	0x52, 0x41, 0x54, 0x49, 0x4e, 0x47, 0x10, 0x03, 0x32, 0xd1, 0x04, 0x0a, 0x0e, 0x50, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x79, 0x0a, 0x0c, 0x4c,
	0x69, 0x73, 0x74, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x12, 0x33, 0x2e, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63, 0x65,
	0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x2e, 0x4c, 0x69, 0x73,
	0x74, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x34, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x65, 0x63, 0x6f, 0x6d,
	0x6d, 0x65, 0x72, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74,
	0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x73, 0x0a, 0x0a, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x12, 0x31, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e,
	0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x32, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x2e, 0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e,
	0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x50, 0x72, 0x6f, 0x64,
	0x75, 0x63, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x6e, 0x0a, 0x0d, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x12, 0x34, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63,
	0x65, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x2e, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x27, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x65, 0x63,
	0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x73, 0x2e, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x12, 0x61, 0x0a, 0x0d, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x12, 0x27, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63,
	0x65, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x2e, 0x50, 0x72,
	0x6f, 0x64, 0x75, 0x63, 0x74, 0x1a, 0x27, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72,
	0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x2e, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x12, 0x7c,
	0x0a, 0x0d, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x12,
	0x34, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x65, 0x63, 0x6f, 0x6d, 0x6d,
	0x65, 0x72, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73,
	0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x70, 0x72,
	0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x3b, 0x5a, 0x39,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x64, 0x61, 0x72, 0x6b, 0x63,
	0x6c, 0x6f, 0x77, 0x6e, 0x39, 0x37, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2f, 0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x72, 0x63, 0x65, 0x2f, 0x76, 0x31,
	0x2f, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_services_ecommerce_v1_products_proto_rawDescOnce sync.Once
	file_services_ecommerce_v1_products_proto_rawDescData = file_services_ecommerce_v1_products_proto_rawDesc
)

func file_services_ecommerce_v1_products_proto_rawDescGZIP() []byte {
	file_services_ecommerce_v1_products_proto_rawDescOnce.Do(func() {
		file_services_ecommerce_v1_products_proto_rawDescData = protoimpl.X.CompressGZIP(file_services_ecommerce_v1_products_proto_rawDescData)
	})
	return file_services_ecommerce_v1_products_proto_rawDescData
}

var file_services_ecommerce_v1_products_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_services_ecommerce_v1_products_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_services_ecommerce_v1_products_proto_goTypes = []any{
	(ProductSortBy)(0),            // 0: services.ecommerce.v1.products.ProductSortBy
	(*ListProductsRequest)(nil),   // 1: services.ecommerce.v1.products.ListProductsRequest
	(*ListProductsResponse)(nil),  // 2: services.ecommerce.v1.products.ListProductsResponse
	(*GetProductRequest)(nil),     // 3: services.ecommerce.v1.products.GetProductRequest
	(*GetProductResponse)(nil),    // 4: services.ecommerce.v1.products.GetProductResponse
	(*Product)(nil),               // 5: services.ecommerce.v1.products.Product
	(*Seller)(nil),                // 6: services.ecommerce.v1.products.Seller
	(*CreateProductRequest)(nil),  // 7: services.ecommerce.v1.products.CreateProductRequest
	(*DeleteProductRequest)(nil),  // 8: services.ecommerce.v1.products.DeleteProductRequest
	(*DeleteProductResponse)(nil), // 9: services.ecommerce.v1.products.DeleteProductResponse
	(*ProductInternal)(nil),       // 10: services.ecommerce.v1.products.ProductInternal
	(*common.PageOptions)(nil),    // 11: common.messages.PageOptions
	(*common.Meta)(nil),           // 12: common.messages.Meta
}
var file_services_ecommerce_v1_products_proto_depIdxs = []int32{
	11, // 0: services.ecommerce.v1.products.ListProductsRequest.page_options:type_name -> common.messages.PageOptions
	0,  // 1: services.ecommerce.v1.products.ListProductsRequest.sort_by:type_name -> services.ecommerce.v1.products.ProductSortBy
	5,  // 2: services.ecommerce.v1.products.ListProductsResponse.products:type_name -> services.ecommerce.v1.products.Product
	5,  // 3: services.ecommerce.v1.products.GetProductResponse.detail:type_name -> services.ecommerce.v1.products.Product
	6,  // 4: services.ecommerce.v1.products.Product.seller:type_name -> services.ecommerce.v1.products.Seller
	5,  // 5: services.ecommerce.v1.products.CreateProductRequest.product:type_name -> services.ecommerce.v1.products.Product
	12, // 6: services.ecommerce.v1.products.ProductInternal.meta:type_name -> common.messages.Meta
	6,  // 7: services.ecommerce.v1.products.ProductInternal.seller:type_name -> services.ecommerce.v1.products.Seller
	1,  // 8: services.ecommerce.v1.products.ProductService.ListProducts:input_type -> services.ecommerce.v1.products.ListProductsRequest
	3,  // 9: services.ecommerce.v1.products.ProductService.GetProduct:input_type -> services.ecommerce.v1.products.GetProductRequest
	7,  // 10: services.ecommerce.v1.products.ProductService.CreateProduct:input_type -> services.ecommerce.v1.products.CreateProductRequest
	5,  // 11: services.ecommerce.v1.products.ProductService.UpdateProduct:input_type -> services.ecommerce.v1.products.Product
	8,  // 12: services.ecommerce.v1.products.ProductService.DeleteProduct:input_type -> services.ecommerce.v1.products.DeleteProductRequest
	2,  // 13: services.ecommerce.v1.products.ProductService.ListProducts:output_type -> services.ecommerce.v1.products.ListProductsResponse
	4,  // 14: services.ecommerce.v1.products.ProductService.GetProduct:output_type -> services.ecommerce.v1.products.GetProductResponse
	5,  // 15: services.ecommerce.v1.products.ProductService.CreateProduct:output_type -> services.ecommerce.v1.products.Product
	5,  // 16: services.ecommerce.v1.products.ProductService.UpdateProduct:output_type -> services.ecommerce.v1.products.Product
	9,  // 17: services.ecommerce.v1.products.ProductService.DeleteProduct:output_type -> services.ecommerce.v1.products.DeleteProductResponse
	13, // [13:18] is the sub-list for method output_type
	8,  // [8:13] is the sub-list for method input_type
	8,  // [8:8] is the sub-list for extension type_name
	8,  // [8:8] is the sub-list for extension extendee
	0,  // [0:8] is the sub-list for field type_name
}

func init() { file_services_ecommerce_v1_products_proto_init() }
func file_services_ecommerce_v1_products_proto_init() {
	if File_services_ecommerce_v1_products_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_services_ecommerce_v1_products_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_services_ecommerce_v1_products_proto_goTypes,
		DependencyIndexes: file_services_ecommerce_v1_products_proto_depIdxs,
		EnumInfos:         file_services_ecommerce_v1_products_proto_enumTypes,
		MessageInfos:      file_services_ecommerce_v1_products_proto_msgTypes,
	}.Build()
	File_services_ecommerce_v1_products_proto = out.File
	file_services_ecommerce_v1_products_proto_rawDesc = nil
	file_services_ecommerce_v1_products_proto_goTypes = nil
	file_services_ecommerce_v1_products_proto_depIdxs = nil
}
