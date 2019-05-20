import React from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';

// essentials
import Shell from '@comp/essentials/Shell';

class Scheduler extends React.Component {
    constructor(props) {
        super(props);

        const date = new Date();
        const fullYear = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDay().toString().padStart(2, '0');

        this.minDate = `${fullYear}-${month}-${day}`;
    }

    render() {
        return (
            <Shell>
                <Agenda
                    // the list of items that have to be displayed in agenda. If you want to render item as empty date
                    // the value of date key kas to be an empty array []. If there exists no value for date key it is
                    // considered that the date in question is not yet loaded
                    items={{
                        '2019-05-22': [{ text: 'item 1 - any js object' }],
                        '2019-05-23': [{ text: 'item 2 - any js object' }],
                        '2019-05-24': [],
                        '2019-05-25': [{ text: 'item 3 - any js object' }, { text: 'any js object' }]
                    }}
                    // callback that gets called when items for a certain month should be loaded (month became visible)
                    loadItemsForMonth={(month) => { console.log('trigger items loading') }}
                    minDate={this.minDate}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // specify how each item should be rendered in agenda
                    renderItem={(item, firstItemInDay) => { console.log(item, firstItemInDay); return (<View><Text> {item.text}</Text></View>); }}
                    // specify how each date should be rendered. day can be undefined if the item is not first in that day.
                    renderDay={(day, item) => { console.log(item, day); return (<View><Text> Yes</Text></View>); }}
                    // specify what should be rendered instead of ActivityIndicator
                    renderEmptyDate={() => { return (<View></View>); }}
                    // agenda theme
                    theme={{
                        agendaDayTextColor: 'yellow',
                        agendaDayNumColor: 'green',
                        agendaTodayColor: 'red',
                        agendaKnobColor: 'blue'
                    }}
                    // agenda container style
                    style={{}}
                />
            </Shell>
        );
    }
}

export default Scheduler;