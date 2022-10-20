import React from "react"
import {View , Text } from "react-native"
import styles from "./style";

export default function Title(){
    return(
    <View style={styles.boxTittle}>
        <Text style={styles.textTittle}>ONEBITHEALTH</Text>
    </View>
    );
}