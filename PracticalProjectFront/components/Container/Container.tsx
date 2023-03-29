import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import type {PropsWithChildren} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type ContainerProps = PropsWithChildren<{
  children: ReactNode;
}>;

const Container = ({children}: ContainerProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    padding: 10,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={backgroundStyle}>
        <Text style={styles.highlight}>Banks</Text>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontSize: 17,
    fontWeight: '700',
  },
});

export default Container;
