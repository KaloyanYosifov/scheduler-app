import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// styles
import ButtonStyles from '@styles/ButtonStyles';

const renderButton = (children, style, icon) => {
    if (icon) {
        return (
            <FontAwesome.Button style={{ ...ButtonStyles.main, ...style }} color="#569cbc" name={icon}>
                {children}
            </FontAwesome.Button>
        );
    }

    return (
        <View style={{ ...ButtonStyles.main, ...style }}>
            <TouchableNativeFeedback>
                {children}
            </TouchableNativeFeedback>
        </View>
    );
}

const Button = ({ children, style = {}, icon = false }) => {
    return renderButton(children, style, icon);
};

export default Button;