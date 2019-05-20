import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// styles
import ButtonStyles from '@styles/ButtonStyles';

const renderButton = (
    {
        children,
        style = {},
        icon = false,
        onPress = () => { }
    }
) => {
    if (icon) {
        return (
            <FontAwesome.Button
                onPress={onPress}
                backgroundColor="transparent"
                style={{ ...ButtonStyles.main, ...style }}
                color="#569cbc"
                name={icon}
            >
                {children}
            </FontAwesome.Button>
        );
    }

    return (
        <View style={{ ...ButtonStyles.main, ...style }}>
            <TouchableNativeFeedback onPress={onPress}>
                {children}
            </TouchableNativeFeedback>
        </View>
    );
}

const Button = (props) => {
    return renderButton(props);
};

export default Button;