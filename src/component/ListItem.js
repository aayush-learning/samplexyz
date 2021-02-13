import React from 'react';
import {View, Text, Image} from 'react-native';

const ListItem = ({item, itemKey}) => {
  const {htmlSnippet, htmlTitle, displayLink, pagemap} = item;
  const {cse_image} = pagemap;
  const imageUrl = cse_image[0].src;
  return (
    <View
      key={itemKey}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}>
      <Image
        source={{uri: imageUrl}}
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'grey',
          borderRadius: 5,
        }}
      />
      <View
        style={{
          height: 100,
          marginLeft: 10,
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <Text style={{fontSize: 10}}>{displayLink}</Text>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>{htmlTitle}</Text>
        <Text style={{fontSize: 12}}>{htmlSnippet}</Text>
      </View>
    </View>
  );
};

export default ListItem;
