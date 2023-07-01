import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';
import { JobTabs } from '../..';

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome KP</Text>
        <Text style={styles.welcomeMessage}>Find your dream job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder='What are you seraching for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={JobTabs}
        />
      </View>

    </View>
  )
}

export default Welcome