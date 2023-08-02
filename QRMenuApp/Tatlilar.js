import React from "react";
import {
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
} from "react-native";
import { Ionicons, FontAwesome5, FontAwesome } from "react-native-vector-icons";
import { SafeAreaProvider, StyleSheet } from "react-native-safe-area-context";
import { appStyles } from "./App.styles";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import FetchData from "./src/hooks/FetchData";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import CheckBox from "react-native-check-box";
function TatliScreen({ route, navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  const [sayi, setSayi] = useState(0);
  var [price, setPrice] = useState(0);
  var [myid, setmyId] = useState(0);

  const onCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Seç");
  const [data, setData] = useState([]);
  const [secenek, setSecenek] = useState([]);
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);
  const product = {
    name: "sdshds",
    imageUrl:
      "https://pizzagram.com.tr/wp-content/uploads/2020/12/kucukboymenu2.png",
    description: "dfjdfd",
    price: 80,
    detay: [],
  };
  const [urun, seturun] = useState(product);
  const { id } = route.params;
  const { datas } = FetchData("http://192.168.6.236:8000/api/category/" + id);

  async function handleDetailModal(id) {
    const response = await axios.get(
      "http://192.168.6.236:8000/api/product/product/" + id
    );

    var prd = {
      name: response.data.name,
      imageUrl: response.data.imageUrl,
      description: response.data.description,
      price: response.data.price,
      detay: response.data.productDetails,
    };

    seturun(prd);
    setData(response.data.productDetails);
    setSecenek(response.data.productDetails);
    setVisible(!visible);
  }
  const CategoryItem = ({ item }) => (
    <TouchableOpacity
      style={appStyles.MainCategoryContainer}
      onPress={() => handleDetailModal(item.id)}
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
            data={datas}
            renderItem={({ item }) => (
              <CategoryItem item={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
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
        <Modal transparent={true} animationType="slide" visible={visible}>
          <View style={appStyles.modalContainer}>
            <View style={appStyles.modalContent}>
              <View style={appStyles.ModalTopbar}>
                <Ionicons
                  onPress={() => {
                    setVisible(!visible);
                    setPrice(0);
                  }}
                  style={appStyles.ModalTopbarIcon}
                  name="close"
                ></Ionicons>
              </View>

              <View style={appStyles.ModalImageAndTitle}>
                <Image
                  style={[
                    appStyles.ModalImage,
                    { marginLeft: 0, marginTop: -40 },
                  ]}
                  source={{ uri: urun.imageUrl }}
                />

                <Text
                  style={[
                    appStyles.ModalText,
                    { color: "salmon", marginLeft: 50, fontSize: 24 },
                  ]}
                >
                  {urun.name}
                </Text>
              </View>

              <View style={appStyles.ModalDescriptionAndPrice}>
                <View style={{ flexDirection: "column", marginTop: -60 }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "salmon",
                      marginBottom: 10,
                      marginLeft: 11,
                    }}
                  >
                    İçindekiler
                  </Text>
                  <Text style={{ fontSize: 14, marginLeft: 10 }}>
                    {urun.description}
                  </Text>
                </View>

                <Text style={[appStyles.ModalText, { color: "salmon" }]}>
                  Fiyat:
                </Text>

                <Text
                  style={{ fontSize: 16, fontWeight: "bold", marginLeft: -10 }}
                >
                  {urun.price + price} TL
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 300 }}>
                  <Text>Detaylar</Text>
                  {urun.detay.map((item) => (
                    <CheckBox
                      key={item.id}
                      isChecked={checked}
                      onClick={async () => {
                        setSayi(item.id);
                        setPrice((price += item.price));
                        setmyId(item.price);
                      }}
                      rightText={item.ozellik + " - " + item.price + "TL"}
                    />
                  ))}
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaProvider>
  );
}

export default TatliScreen;
