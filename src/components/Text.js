import React from 'react';
import {Text, Dimensions,StyleSheet} from 'react-native';
import {RFValue as fs} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

const Typography = (props) => {
  const TextStyles = [
    props?.type === 'thin' && styles.thin,
    props?.type === 'regular' && styles.regular,
    props?.type === 'semibold' && styles.semibold,
    props?.type === 'bold' && styles.bold,
  ];
  const colors = {
      color: props?.color || '#333333',
    },
    {width} = Dimensions.get('window');
  const sizeText = {
    fontSize: props.size ? fs(props.size, width) : fs(8, width),
  };
  return (
    <Text
      {...props}
      style={[styles.default, TextStyles, colors, sizeText, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: fs(7, width),
  },
  thin: {
    fontSize: fs(9, width),
    fontFamily: 'Lato-Thin',
  },
  regular: {
    fontSize: fs(9, width),
    fontFamily: 'Lato-Regular',
  },
  semibold: {
    fontSize: fs(9, width),
    fontFamily: 'Lato-Semibold',
  },
  bold: {
    fontSize: fs(9, width),
    fontWeight:"bold",
    fontFamily: 'Lato-Bold',
  },
});


export default Typography;
