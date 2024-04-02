import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from './styles'

export default function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Página Home</Text>
            <Text>{codigo}</Text>
        </View>
    )
}
