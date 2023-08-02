import React from 'react';
import { ScrollView, Image, Text, TouchableOpacity, View,  } from 'react-native';
import {  FontAwesome5, FontAwesome } from 'react-native-vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { appStyles } from './App.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';




function SogucIcecekScreen({ navigation }) {
    navigation = useNavigation();



    return (

        <SafeAreaProvider>
            <SafeAreaView>


                <View style={appStyles.MainBody}>

                    <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
                        colors={["#884A39", "#C38154", "#FFC26F", "#F9E0BB",]}>


                        <View style={appStyles.MainNavbarTop}>
                            <Text style={appStyles.MainNavbarTopText}>Soğuk İçecekler</Text>
                        </View>
                    </LinearGradient>

                    <View style={appStyles.ScrollLimiter}>

                        <ScrollView>

                            <View>


                                <View style={appStyles.foodTypeBar}>
                                    <Text fontSize="xs" style={{ fontWeight: "bold" }}>Hamburgerler</Text>

                                </View>


                                <View style={appStyles.FoodTypeRowScroll}>




                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>

                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>
                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>
                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>
                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>


                                    </ScrollView>

                                </View>


                            </View>


                            <View>


                                <View style={appStyles.foodTypeBar}>
                                    <Text fontSize="xs" style={{ fontWeight: "bold" }}>Pizzalar</Text>

                                </View>


                                <View style={appStyles.FoodTypeRowScroll}>


                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>

                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>
                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>
                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>
                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>


                                    </ScrollView>


                                </View>


                            </View>

                            <View>


                                <View style={appStyles.foodTypeBar}>
                                    <Text fontSize="xs" style={{ fontWeight: "bold" }}>Sandviçler</Text>

                                </View>


                                <View style={appStyles.FoodTypeRowScroll}>



                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>

                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>
                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>
                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>
                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>


                                    </ScrollView>

                                </View>


                            </View>

                            <View>


                                <View style={appStyles.foodTypeBar}>
                                    <Text fontSize="xs" style={{ fontWeight: "bold" }}>Dönerler</Text>

                                </View>


                                <View style={appStyles.FoodTypeRowScroll}>



                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>

                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>
                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>
                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>
                                        <View style={appStyles.MainFoodContainerInRowScroll}>

                                            <View style={appStyles.FoodImageAndTextContainerHome}>
                                                <Image style={appStyles.MainFoodContainerInRowScrollImage}
                                                    source={require("./img/hamburger.webp")} />

                                                <View style={appStyles.MainFoodContainerInRowScrollTextAndPriceContainer}>


                                                    <Text style={appStyles.MainFoodContainerInRowScrollText} fontSize="xs">Cheeseburger</Text>
                                                    <Text style={appStyles.MainFoodContainerInRowScrollPrice} fontSize="xs">99<FontAwesome style={appStyles.TurkishLiraIcon} name="turkish-lira" /></Text>



                                                </View>

                                            </View>

                                        </View>


                                    </ScrollView>

                                </View>


                            </View>



                        </ScrollView>


                    </View>

                    <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
                        colors={["#884A39", "#C38154", "#FFC26F", "#F9E0BB",]}>
                        <View style={appStyles.MainNavbarBottom}>



                            <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
                                <FontAwesome5 name="home" style={appStyles.BottomBarIcons} />
                            </TouchableOpacity>


                        </View>
                    </LinearGradient>


                </View>


            </SafeAreaView>
        </SafeAreaProvider>


    );
}


export default SogucIcecekScreen;

