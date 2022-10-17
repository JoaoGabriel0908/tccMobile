import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../../const/Colors";

const Campanhas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
    return () => {
      
    };
  }, []);

  const getList = () => {
    const fotos =
      "https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1";
    fetch(fotos)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
      })
      .catch((error) => {
        console.log("Error", error);
      })
      .finally(() => setIsLoading(false));
  };

  renderItem = ({ item, index }) => {};

  return (
    <SafeAreaView style={estilos.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
      <TouchableOpacity>
      <ScrollView scrollEventThrottle={16}>
        <View
          style={{ height: 200, marginTop: 20, backgroundColor: COLORS.preto }}
        >
          <ScrollView>
            <View></View>
          </ScrollView>
        </View>
        <View>
          <Text>Titulo</Text>
        </View>
      </ScrollView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapButton: {
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
    backgroundColor: COLORS.preto,
  },
});

export default Campanhas;
