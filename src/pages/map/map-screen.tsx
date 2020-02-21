import React from 'react';
import MapboxGL from "@react-native-mapbox-gl/maps";
import { View, StyleSheet } from 'react-native';

export const MapScreen = () => {

    MapboxGL.setAccessToken("pk.eyJ1IjoibmdrZiIsImEiOiJjajAydTdyc3MwNnI0MndsajJoMGlpN3ZyIn0.BGIZja4zlym3f4AS3olLhg");

    const styles = StyleSheet.create({
        page: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5FCFF"
        },
        container: {
          height: 300,
          width: 300,
          backgroundColor: "tomato"
        },
        map: {
          flex: 1
        }
      });

      MapboxGL.setTelemetryEnabled(false);
     

    return <>
        <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    </>
};