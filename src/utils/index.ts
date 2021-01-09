const getEnumKey = (value: any, enumType: any): string => {
  return Object.keys(enumType)[Object.values(enumType).indexOf(value)]
}

export { getEnumKey }
