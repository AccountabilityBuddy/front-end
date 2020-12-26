import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomepageHeader from './components/HomepageHeader'

const Homepage = () => {
    return (
        <HomepageHeader />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF"
        
    }
});

export default Homepage;