import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, TextInput} from 'react-native';
import ListItem from './ListItem';
import {fetchCall} from '../component/network/networkCall';
import {throttle} from 'lodash';

const CustomSearch = () => {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [list, setList] = useState([]);
  const [searchString, setString] = useState('');

  const onChange = (string) => {
    setString(string);
  };

  const renderStates = () => {
    if (loading) {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Loading Data...</Text>
        </View>
      );
    } else if (err) {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Error Occured.</Text>
        </View>
      );
    } else if (list) {
      return (
        <FlatList
          data={list}
          keyExtractor={(item, index) => item.cacheId}
          renderItem={({item}) => (
            <ListItem itemKey={item.cacheId} item={item} />
          )}
        />
      );
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCall(searchString)
      .then((data) => {
        const {items} = data;
        setLoading(false);
        setList(items);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [searchString]);

  return (
    <View
      style={{
        paddingVertical: 10,
        flex: 1,
      }}>
      <View
        style={{
          height: 40,
          borderColor: 'grey',
          borderWidth: 2,
        }}>
        <TextInput
          value={searchString}
          placeholder={'Enter string to search'}
          onChangeText={onChange}
        />
      </View>
      <View style={{flex: 1}}>{renderStates()}</View>
    </View>
  );
};

export default CustomSearch;
