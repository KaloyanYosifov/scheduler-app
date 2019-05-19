import React from 'react';
import { SafeAreaView, View } from 'react-native';

// styles
import ShellStyles from '@styles/ShellStyles';

const Shell = (
    {
        children,
        shellStyles = {}
    }
) => {
    return (
        <SafeAreaView>
            <View style={{ ...ShellStyles.shell, ...shellStyles }}>
                {children}
            </View>
        </SafeAreaView>
    );
};

export default Shell;