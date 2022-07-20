import { StyleSheet } from "react-native";
import { myColors } from "./Colors";
export const Styles = StyleSheet.create({
  // Button

  btnLight: {
    minWidth: 72,
    minHeight: 72,
    borderRadius: 24,
    backgroundColor: myColors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGray: {
    minWidth: 72,
    minHeight: 72,
    borderRadius: 24,
    backgroundColor: myColors.gray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnBlue: {
    minWidth: 72,
    minHeight: 72,
    borderRadius: 24,
    backgroundColor: myColors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnDark: {
    minWidth: 72,
    minHeight: 72,
    borderRadius: 24,
    backgroundColor: myColors.dark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: myColors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.black,
  },

  // Keyboard
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },

  viewBottom: {
    flex: 1,
    justifyContent: "end",
    alignItems: "center",
  },

  screenFirstNumber: {
    fontSize: 96,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
});
