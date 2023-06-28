interface baseRoomInfo {
  list: RoomItem[],
  title?: string,
  type?: string,
  _id?: string,
  subTitle: string
}
interface RoomItem {
  bottom_info: bottom_info_Item
  id: string
  image_url: string
  lat: number
  lng: number
  name: string
  picture_url: string
  price: number
  price_format: string
  reviews_count: number
  star_rating_color: string
  verify_info: verify_info_Item
}
interface dest_address_Item {
  homes: string[],
  name: string
}

type dest_address_list = dest_address_Item[]

interface newAddFiled {
  reviews?: Review_Item[];
}
interface verify_info_Item {
  messages: []
  text_color: string
}
interface bottom_info_Item {
  content: string
  content_color: string
  font_size: string
  visibility: string
}
type dest_list = {
  [key: string]: (RoomItem & newAddFiled)[];
  [key: string]: (RoomItem & newAddFiled)[];
  [key: string]: (RoomItem & newAddFiled)[];
  [key: string]: (RoomItem & newAddFiled)[];
  [key: string]: (RoomItem & newAddFiled)[];
  [key: string]: (RoomItem & newAddFiled)[];
  [key: string]: (RoomItem & newAddFiled)[];
  [key: string]: (RoomItem & newAddFiled)[];
}
interface Review_Item {
  comments: string;
  created_at: string;
  is_translated: boolean;
  localized_date: string;
  reviewer_image_url: string;
  review_id: string | number;
}

interface HotSourceCityType {
  dest_address: dest_address_list,
  dest_list: dest_list,
  subtitle: string,
  title: string,
  type: string,
  _id: string
}


// type Optional<T, k extends keyof T> = 