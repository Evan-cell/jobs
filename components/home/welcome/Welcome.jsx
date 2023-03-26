import React from 'react'
import { useRouter } from 'expo-router'
import { icons, SIZES } from "../../../constants";
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native'

import styles from './welcome.style'

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Kim</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
           style={styles.searchInput}
           value=""
           placeholder='what are you searching for'
           onChange={()=>{}}
            />
        </View>
        <TouchableOpacity>
          <Image
          source={icons.search}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome
