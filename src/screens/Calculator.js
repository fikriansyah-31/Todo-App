import * as React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";
import { Styles } from "../styles/GlobalStyle";
import { myColors } from "../styles/Colors";

export default function Calculator() {
  const [number, setNumber] = useState("");
  const [displayNumber, setDisplayNumber] = useState(0);

  console.log(number);
  const handleNumberPress = (e) => {
    setNumber(number + e);
  };

  const handleOperationPress = (e) => {
    setNumber(number + e);
  };

  const getResult = () => {
    setNumber(eval("(" + number + ")").toString());
    setDisplayNumber(number);
  };

  const clear = () => {
    setNumber("");
    setDisplayNumber("");  
    //ini menetapkan status nomor ke nilai nomor dan displayNumber ke nilai nomor.
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 180,
          width: 320,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text style={[Styles.screenFirstNumber, { fontSize: 25 }]}>{displayNumber}</Text>
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>{number ? number : "0"}</Text>
      </View>

      <View style={Styles.row}>
        <Button title={"C"} isGray onPress={clear} />
        <Button title={"+/-"} isGray onPress={() => setNumber(eval(number * -1))} />
        <Button title={"%"} isGray onPress={() => handleOperationPress("%")} />
        <Button title={"÷"} isBlue onPress={() => handleOperationPress("/")} />
      </View>
      <View style={Styles.row}>
        <Button title={"7"} onPress={() => handleNumberPress("7")} />
        <Button title={"8"} onPress={() => handleNumberPress("8")} />
        <Button title={"9"} onPress={() => handleNumberPress("9")} />
        <Button title={"×"} isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title={"4"} onPress={() => handleNumberPress("4")} />
        <Button title={"5"} onPress={() => handleNumberPress("5")} />
        <Button title={"6"} onPress={() => handleNumberPress("6")} />
        <Button title={"-"} isBlue onPress={() => handleOperationPress("-")} />
      </View>
      <View style={Styles.row}>
        <Button title={"1"} onPress={() => handleNumberPress("1")} />
        <Button title={"2"} onPress={() => handleNumberPress("2")} />
        <Button title={"3"} onPress={() => handleNumberPress("3")} />
        <Button title={"+"} isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title={"."} onPress={() => handleNumberPress(".")} />
        <Button title={"0"} onPress={() => handleNumberPress("0")} />
        <Button title={"⌫"} onPress={() => setNumber(number.slice(0, -1))} />
        <Button title={"="} isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}
