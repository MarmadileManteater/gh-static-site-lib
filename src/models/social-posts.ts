
export interface IMedia {
  mimeType: string,
  medium: string,
  url: string,
  alt: string
}

export interface ISocialPost {
  title: string,
  originalUrl: string,
  handle: string,
  authorUrl: string,
  platformUrl: string,
  description: string,
  content: string,
  media: IMedia[],
  date: string
}

export interface IMediaAttributes {
  url: string,
  type: string,
  fizeSize: string,
  medium: string
}

export interface IMediaContent {
  $: IMediaAttributes
}

export interface IAuthor {
  name: string[],
  uri: string[]
}

export interface IItem {
  guid: string[],
  title: string[],
  plainTitle: string[],
  imageurl: string[],
  link: string[],
  description: string[],
  author: IAuthor[],
  pubDate: string[],
  createDate: string[],
  updateDate: string[]
}

export interface IChannel {
  title: string[],
  link: string[],
  item: IItem[]
}

export interface IRSS {
  $: any,
  channel: IChannel[]
}
