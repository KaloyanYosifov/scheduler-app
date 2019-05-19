import { createStackNavigator, createAppContainer } from 'react-navigation';

// components
import App from '@comp/App';
import Settings from '@comp/settings';

const stackNavigator = createStackNavigator({
    App: {
        screen: App,
        navigationOptions: {
            title: 'Home'
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings'
        }
    }
});

export default createAppContainer(stackNavigator);