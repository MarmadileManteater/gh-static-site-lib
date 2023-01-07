
export interface IBlogPost {
  type: 'IBlogPost',
  id: string,
  html: string
  title: string
  shortDescription: string
  tags: string[]
  atime: number
  mtime: number
  ctime: number,
  gittime: number
}
