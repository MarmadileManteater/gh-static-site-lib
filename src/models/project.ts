
export interface IProjectButtonData {
  prefix: string
  locationName: string
  link: string
  target: string
}
  
export interface IProject {
  type: 'IProject',
  title: string
  tags: Array<string>
  summary: string
  buttons: Array<IProjectButtonData>
  thumbnail: string
  lastUpdate: string
}

export interface ITag {
  name: string
  link: string
}
