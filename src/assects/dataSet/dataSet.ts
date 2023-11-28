export type valueHeadersType = 'Home' | 'Studio' | 'Works' | 'Contact'

export type headersDataType = {
    id: number
    value: valueHeadersType
}
export const headersData: headersDataType[] = [
  {id: 1, value: 'Home'},
  {id: 2, value: 'Studio'},
  {id: 3, value: 'Works'},
  {id: 4, value: 'Contact'},
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
