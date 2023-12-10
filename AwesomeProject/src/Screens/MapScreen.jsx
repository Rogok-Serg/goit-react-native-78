// import MapView, { Marker } from "react-native-maps";
import { Text, View } from "react-native";

const MapScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>MapScreen</Text>
      {/* <MapView
      // style={styles.mapStyle}
      >
        <Marker />
      </MapView> */}
    </View>
  );
};

export default MapScreen;

// const styles = StyleSheet.create({
//   mapStyle: {
//     width: "100%",
//     height: "100%",
//   },
// });
