import { React, useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
  Image,
} from "react-native";
import { FontAwesome5 } from "react-native-vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "./App.styles";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import FetchData from "./src/hooks/FetchData";

function CategoryScreen({ navigation }) {
  const { datas } = FetchData("http://192.168.6.236:8000/api/menu");

  navigation = useNavigation();

  const categories = [
    {
      id: "1",
      title: "Fast Food",
      image: require("./img/hamburger.webp"),
      screen: "FastFood",
    },
    {
      id: "2",
      title: "Aperatifler",
      image: require("./img/aperatif.jpeg"),
      screen: "Aperatifler",
    },
    {
      id: "3",
      title: "Soğuk İçecekler",
      image: require("./img/sogukicecek.webp"),
      screen: "SogukIcecek",
    },
    {
      id: "4",
      title: "Sıcak İçecekler",
      image: require("./img/sicakicecek.jpeg"),
      screen: "SicakIcecek",
    },
    {
      id: "5",
      title: "Tatlılar",
      image: require("./img/tatlilar.webp"),
      screen: "Tatlilar",
    },
    {
      id: "6",
      title: "Salatalar",
      image: require("./img/salatalar.jpeg"),
      screen: "Salatalar",
    },
  ];

  const CategoryItem = ({ item, navigation }) => (
    <TouchableOpacity
      style={appStyles.MainCategoryContainer}
      onPress={() => navigation.navigate("FastFood", { id: item.id })}
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
            <Text style={appStyles.MainNavbarTopText}>Menü</Text>
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

export default CategoryScreen;
