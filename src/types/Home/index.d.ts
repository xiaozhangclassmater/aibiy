interface goodPriceResponse {
  list: GoodPriceItem[],
  title?: string,
  type?: string,
  _id?: string,
  subTitle: string
}

interface GoodPriceItem {
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