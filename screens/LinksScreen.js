import React from 'react';
import { ScrollView, StyleSheet, Text, FlatList, SectionList } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
// import { FlatList } from 'react-native-gesture-handler';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
        {/* ScrollView */}
        <ScrollView horizontal={true}>
          <Text style={{fontSize: 90}}>Scroll me!</Text>
          <Text style={{fontSize: 90}}>If you like!</Text>
          <Text style={{fontSize: 90}}>Scrolling down or right!</Text>
          <Text style={{fontSize: 90}}>React Native!</Text>
        </ScrollView>
        {/* FlatList */}
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            {key: 'Devin1'},
            {key: 'Jackson1'},
            {key: 'James1'},
            {key: 'Joel1'},
            {key: 'John1'},
            {key: 'Jillian1'},
            {key: 'Jimmy1'},
            {key: 'Julie1'},
            {key: 'Devin2'},
            {key: 'Jackson2'},
            {key: 'James2'},
            {key: 'Joel2'},
            {key: 'John2'},
            {key: 'Jillian2'},
            {key: 'Jimmy2'},
            {key: 'Juli2e'}
          ]}
          renderItem={({item}, index) => <Text style={styles.item}>{item.key}</Text>}
        />
        {/* SectionList */}
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
