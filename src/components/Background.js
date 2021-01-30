import React, { memo } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from 'react-native';

const Background = ({ children, style }) => (
  <View style={[styles.background, { ...style }]}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default memo(Background);
