import React from "react";
import {
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { FontAwesome5, FontAwesome } from "react-native-vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "./App.styles";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import FetchData from "./src/hooks/FetchData";

function FastFoodScreen({ navigation, route }) {
  const { id } = route.params;
  const { datas } = FetchData("http://192.168.6.236:8000/api/menu/" + id);
  navigation = useNavigation();
  const CategoryItem = ({ item, navigation }) => (
    <TouchableOpacity
      style={appStyles.MainCategoryContainer}
      onPress={() => navigation.navigate("Tatlılar", { id: item.id })}
    >
      <View style={appStyles.ImageAndTextContainerMenu}>
        <View
          style={{
            borderBottomColor: "chocolate",
            borderBottomWidth: 1,
            flex: 1,
          }}
        >
          <Image
            borderTopLeftRadius={15}
            borderTopRightRadius={15}
            source={{ uri: item.imageUrl }}
            style={appStyles.CategoryImageBackground}
          />
        </View>

        <View style={appStyles.CategoryTextContainer}>
          <Text style={appStyles.CategoryText}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <View style={appStyles.MainBody}>
        <LinearGradient
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          colors={["#884A39", "#C38154", "#FFC26F", "#F9E0BB"]}
        >
          <View style={appStyles.MainNavbarTop}>
            <Text style={appStyles.MainNavbarTopText}>Kategoriler</Text>
          </View>
        </LinearGradient>

        <View style={appStyles.ScrollLimiter}>
          <FlatList
            contentContainerStyle={{
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            data={datas}
            renderItem={({ item }) => (
              <CategoryItem item={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
            style={appStyles.CategoriesScroll}
          />
        </View>

        <LinearGradient
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          colors={["#884A39", "#C38154", "#FFC26F", "#F9E0BB"]}
        >
          <View style={appStyles.MainNavbarBottom}>
            <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
              <FontAwesome5 name="home" style={appStyles.BottomBarIcons} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
}

export default FastFoodScreen;
