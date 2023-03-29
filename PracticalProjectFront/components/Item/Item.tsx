import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import type {PropsWithChildren} from 'react';

type ItemProps = PropsWithChildren<{
  title: string;
  description: string;
  age: number;
  url?: string;
}>;

const Item = ({title, description, age}: ItemProps): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.itemContainer}>
      <Text
        style={[
          styles.itemTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.itemDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {description}
      </Text>
      <Text
        style={[
          styles.age,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {age} años ofreciendo servicios.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  itemTitle: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: '600',
  },
  itemDescription: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: '400',
  },
  age: {
    fontSize: 13,
    fontWeight: '600',
  },
});

export default Item;
