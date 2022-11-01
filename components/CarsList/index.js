import { View, FlatList, Dimensions } from 'react-native'
import React from 'react'
import cars from './cars';
import styles from './styles';
import CartItem from '../CartItem';
const CarsList = () => {
    
  return (
    <View style={styles.container}>
     <FlatList 
     data={cars}
     renderItem={({item}) => <CartItem car={item}/>}
     showsVerticalScrollIndicator={false}
     snapToAlignment={'start'}
     decelerationRate={'fast'}
     snapToInterval={Dimensions.get('window').height}
     />
    </View>
  )
}

export default CarsList;