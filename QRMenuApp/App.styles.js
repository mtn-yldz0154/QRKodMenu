import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  // Renamed to appStyles

  MainBody: {
    backgroundColor: "#F9E0BB",
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  MainNavbarTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    height: 68,
  },

  MainNavbarTopText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  RecipeMainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    height: "100%",
    overflow: "hidden",
    position: "relative",
  },

  RecipeImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },

  RecipeTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },

  RecipeDescription: {
    fontSize: 15,

    color: "#9CA777",
  },

  MainNavbarBottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    width: "100%",
    height: 70,
    padding: 10,
  },

  ScrollLimiter: {
    height: "90%",
    flex: 1,
  },

  BottomBarIcons: {
    fontSize: 32,
    color: "#553939",
  },

  CategoriesScroll: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    marginLeft: 8,
    marginTop: 12,
  },

  GridMainContainer: {},

  MainCategoryContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    borderColor: "chocolate",
    borderRadius: 15,
    borderWidth: 1,
    width: "45%",
    marginHorizontal: 11,
    height: 120,
    backgroundColor: "#FFC26F",

    marginVertical: 25,
  },

  CategoryImageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 130,
  },

  ImageAndTextContainerMenu: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  CategoryTextContainer: {
    height: 25,
    textAlign: "center",
  },

  CategoryText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#884A39",
    textAlign: "center",
    fontStyle: "italic",
  },

  foodTypeBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "99%",
    height: 40,
    marginVertical: 20,

    marginHorizontal: 1,
    backgroundColor: "blanchedalmond",
    borderRadius: 10,
  },

  FoodTypeRowScroll: {
    flexDirection: "row",
    width: "100%",
    height: 175,
    marginVertical: 10,

    marginHorizontal: 1,
    borderRadius: 10,
  },

  MainFoodContainerInRowScroll: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,

    margin: 5,
    width: 200,
    height: "100%",
  },

  FoodInRowContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,
    width: 200,
    height: 100,
    backgroundColor: "#FFC26F",
  },

  MainFoodContainerInRowScrollImage: {
    flex: 16,
    width: "100%",
    height: 150,

    borderColor: "black",
    borderBottomWidth: 1,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,

    borderRadius: 20,
  },

  MainFoodContainerInRowScrollTextAndPriceContainer: {
    flex: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    borderTopWidth: 1,
    borderTopColor: "chocolate",
  },

  MainFoodContainerInRowScrollText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

  MainFoodContainerInRowScrollPrice: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    margin: 5,
    color: "crimson",
  },

  TurkishLiraIcon: {
    fontSize: 15,
    color: "crimson",
  },

  FoodImageAndTextContainerHome: {
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#FFC26F",
    borderWidth: 1,
    borderColor: "chocolate",

    width: 180,
    height: 145,
    borderRadius: 20,
  },

  foodTypeLabelText: {
    color: "black",
    fontWeight: "bold",
  },

  modalContainer: {
    height: "90%",
    justifyContent: "flex-end",
    alignItems: "center",

    marginTop: "20%",
  },

  modalContent: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "80%",
    backgroundColor: "blanchedalmond",
    borderRadius: 10,
    flexDirection: "column",
  },

  ModalImage: {
    width: "90%",
    height: "90%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "chocolate",
  },

  ModalText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    marginVertical: 50,
    justifyContent: "space-between",
    marginHorizontal: 15,
  },

  ModalImageAndTitle: {
    justifyContent: "center",
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    borderRadius: 30,
  },

  ModalDescriptionAndPrice: {
    justifyContent: "center",
    flexDirection: "row",
    width: "70%",
    alignItems: "center",
    borderRadius: 30,
  },

  ModalTopbar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "lightsalmon",
    width: "100%",
    height: 40,
  },

  ModalTopbarIcon: {
    fontSize: 45,
    marginRight: 20,
  },
});
