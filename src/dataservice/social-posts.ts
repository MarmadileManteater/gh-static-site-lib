import { IMedia, IMediaContent, IRSS, ISocialPost } from '../models/social-posts'
import { parseString } from 'xml2js'
import { promisify } from 'util'
import fsp from 'fs/promises'

export async function getAllSocialPosts() : Promise<ISocialPost[]> {
  return await getSocialPosts(0);
}

export async function getSocialPosts(startRange: number, endRange: number = -1) : Promise<ISocialPost[]> {
  let rssFeed = (await fsp.readFile("./social/feed.xml")).toString();
  let rss: IRSS = (await promisify(parseString)(rssFeed)).rss;
  let channel = rss.channel[0];
  if (endRange === -1) {
    endRange = channel.item.length;
  }
  return channel.item.slice(startRange, endRange).map(item => {
    const authorUrl = item.author[0].uri[0];
    const platformUrl = `https://${new URL(authorUrl).hostname}`;
    const mediaContent = item['media:content'] as IMediaContent[];
    
    return {
      title: item.title[0],
      originalUrl: item.link[0],
      handle: item.author[0].name[0],
      authorUrl,
      platformUrl,
      description: item.description[0],
      content: item["content:encoded"][0] as string,
      date: item.pubDate[0],
      media: mediaContent.filter((content) => content !== undefined).map((content) => {
        return {
          mimeType: content.$?.type,
          medium: content.$?.medium,
          url: content.$?.url,
          alt: Object.keys(content).indexOf('media:description') !== -1?content["media:description"][0] as string:''
        } as IMedia
      })
    } as ISocialPost;
  });
}
