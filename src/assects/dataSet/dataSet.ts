export type valueHeadersType = 'Home' | 'About Me' | 'Works' | 'Contact'
export type scrollIdHeadersType = 'home' | 'about' | 'works' | 'contact'

export type headersDataType = {
    id: number
    value: valueHeadersType
    scrollId: scrollIdHeadersType
}
export const headersData: headersDataType[] = [
  {id: 1, value: 'Home', scrollId: 'home'},
  {id: 2, value: 'About Me', scrollId: 'about'},
  {id: 3, value: 'Works', scrollId: 'works'},
  {id: 4, value: 'Contact', scrollId: 'contact'},
];

export type valueWorksDataType = 'Web Design' | 'Development' | 'Product Design' | 'Social Media'

export type worksDataType = {
    id: number,
    value: valueWorksDataType
}

export const worksData: worksDataType[] = [
  {id: 1, value: 'Web Design'},
  {id: 2, value: 'Development'},
  {id: 3, value: 'Product Design'},
  {id: 4, value: 'Social Media'},
];
