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
                    <Button icon="facebook">
                        <Text style={AppStyles.buttonText}>Hello mama</Text>
                    </Button>
                </View>
            </Shell>
        );
    }
}

export default App;