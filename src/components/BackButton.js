import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../utils/theme';
import {RFValue as fs} from 'react-native-responsive-fontsize';


const BackButton = ({ goBack }) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Icon name="arrow-back" size={fs(26)} color={theme.colors.white} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 20,
    zIndex: 99,
    elevation: 99,
  },
  image: {
    tintColor: "#ffff",
    width: 24,
    height: 24,
  },
});

export default memo(BackButton);
