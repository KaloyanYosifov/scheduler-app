import React from 'react';
import { View, Text } from 'react-native';

// styles
import AppStyles from '@styles/AppStyles';

// components
import Button from '@comp/essentials/Button';
import Shell from '@comp/essentials/Shell';

class App extends React.Component {
    render() {
        return (
            <Shell shellStyles={AppStyles.main}>
                <View style={AppStyles.buttonGroup}>
                    <Button
                        onPress={() => { this.props.navigation.navigate('Settings') }}
                        style={AppStyles.button}
                        icon="cog"
                    >
                        <Text style={AppStyles.buttonText}>Settings</Text>
                    </Button>
                </View>
            </Shell>
        );
    }
}

export default App;