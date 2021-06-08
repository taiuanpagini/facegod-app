import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { IStorie, IStories } from './interface';

import { StoriesList, Storie, Avatar, Name } from './styles';

const Stories: React.FC<IStories> = (props) => {
  const { stories } = props;

  return (
    <StoriesList
      data={stories}
      keyExtractor={storie => String(storie.id)}
      renderItem={({ item: storie }) => (
        <Storie
          onPress={() => { }}>
          <Avatar
            source={{ uri: storie.avatar }}
          />
          <Name>{storie.name}</Name>
        </Storie>
      )}
    />
  );
};

export default Stories;