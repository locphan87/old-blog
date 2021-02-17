import dayjs from 'dayjs'

const formatString = 'DD/MM/YYYY'
const formatDate = (s: string): string => {
  return dayjs(s).format(formatString)
}
const getEnumKey = (value: any, enumType: any): string => {
  return Object.keys(enumType)[Object.values(enumType).indexOf(value)]
}

export { getEnumKey, formatDate }
