import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import { useTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';

const Upload = () => {

  const { image, setImage } = useState('https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=HVqvfhtg');
  const { colors } = useTheme();

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }

  const useCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }

  return (
    <View>
      <TouchableOpacity>

      </TouchableOpacity>
    </View>
  )
}
