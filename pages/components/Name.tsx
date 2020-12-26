// @ts-nocheck

import React, { Component } from 'react';
import { TextInput, Text } from 'react-native';

type NameProps = {
    title: string
}

const Name = ({ title }: NameProps) => {
    const [value, onChangeText] = React.useState(`Enter ${title}`);

    return (
        <div>
            <Text>{title}: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </div>
    );
}

export default Name