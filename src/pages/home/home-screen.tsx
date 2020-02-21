import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export const HomeScreen = () => {

    const navigation = useNavigation();

    return <>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Goto Map</Text>
            <Button title="Map" onPress={ ()=> navigation.navigate("map")  }>
            </Button>
        </View>
    </>;
};



/*
export class HomeScreen extends React.Component {

    private navigation = useNavigation();

    render() {
        return <>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Goto Map</Text>
                <Button title="Map" onPress={ this.onMapClick }>
                </Button>
            </View>
        </>;
    }

    private onMapClick() {
        this.navigation.navigate("map");
    }
}
*/