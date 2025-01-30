export const FLAGS = {
  // Using the svg/256 versions for better quality
  UK: require('@/assets/images/flags/svg/gb.svg'),
  US: require('@/assets/images/flags/svg/us.svg'),
  ES: require('@/assets/images/flags/svg/es.svg'),
  FR: require('@/assets/images/flags/svg/fr.svg'),
  DE: require('@/assets/images/flags/svg/de.svg'),
  IT: require('@/assets/images/flags/svg/it.svg'),
  PT: require('@/assets/images/flags/svg/pt.svg'),
  BR: require('@/assets/images/flags/svg/br.svg'),
  VN: require('@/assets/images/flags/svg/vn.svg'),
  AU: require('@/assets/images/flags/svg/au.svg'),
} as const;

export type CountryCode = keyof typeof FLAGS;

export const getFlag = (countryCode: CountryCode) => FLAGS[countryCode]; 