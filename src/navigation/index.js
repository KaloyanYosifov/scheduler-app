import { createStackNavigator, createAppContainer } from 'react-navigation';

// components
import App from '@comp/App';
import Settings from '@comp/settings';
import Scheduler from '@comp/scheduler';

// create a scheduler stack navigator
const schedulerStackNavigator = createStackNavigator({
    Scheduler: {
        screen: Scheduler,
        navigationOptions: {
            title: 'Schedule a time!'
        }
    }
});

// create default stack navigator
const defaultStackNavigator = createStackNavigator({
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
    },
});

// create main stack navigator
const stackNavigator = createStackNavigator(
    {
        defaultStackNavigator,
        schedulerStackNavigator
    },
    {
        headerMode: 'none'
    }
);

export default createAppContainer(stackNavigator);