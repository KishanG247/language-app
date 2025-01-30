import React from 'react';
import { Image, ImageStyle, StyleSheet } from 'react-native';
import { CountryCode, getFlag } from '../utils/flags';

type Props = {
  countryCode: CountryCode;
  size?: number;
  style?: ImageStyle;
};

export default function FlagImage({ countryCode, size = 30, style }: Props) {
  return (
    <Image
      source={getFlag(countryCode)}
      style={[
        styles.flag,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ]}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  flag: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
}); 