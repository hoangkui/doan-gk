import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ToggleSwitch from "toggle-switch-react-native";
import axios from "axios";
const ManualControl = () => {
  const [enabel, setEnable] = useState(true);
  const [loop, setLoop] = useState(false);
  const [value, setValue] = useState(0);
  // alert("?");
  useEffect(() => {
    axios
      .get("https://io.adafruit.com/api/v2/an_ngdinh/feeds/demo.humid")
      .then(function (response) {
        // handle success
        // alert(JSON.stringify(response.data["last_value"]));
        // setEnable(() => {
        //   if (response.data.last_value === "1") {
        //     return true;
        //   }
        //   return false;
        // });
        // alert(response.data.last_value);
        setValue(response.data.last_value);

        setLoop((x) => !x);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
    // .finally(function () {
    //   // always executed
    //   alert("Finally called");
    // });
  }, [loop]);
  const handlePost = () => {
    const headers = {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    };
    const value = enabel ? "1" : "0";
    const jsonPost = { last: "1" };
    axios
      .post("https://127.0.0.1:3000/temp/add", jsonPost, headers)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => console.log(error));
    console.log("vcc");
    // fetch("https://127.0.0.1:3000/temp/add", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     //   "Content-Type": "application/json",
    //     "Accept-Encoding": "gzip, deflate, br",
    //     Connection: "keep-alive",
    //   },
    //   body: JSON.stringify({
    //     last: "0",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     console.log(
    //       "POST Response",
    //       "Response Body -> " + JSON.stringify(responseData)
    //     );
    //   })
    //   .done();
  };
  return (
    <>
      <View style={styles.container}>
        <ToggleSwitch
          isOn={enabel}
          onColor="green"
          offColor="#d27979"
          label="Manual Control"
          labelStyle={{ color: "black", fontWeight: "900", fontSize: 32 }}
          size="large"
          onToggle={(isOn) => {
            console.log("changed to : ", isOn);
            handlePost();
            setEnable((x) => !x);
          }}
          // onPress={() => handlePost()}
          animationSpeed={100}
        />
      </View>
      {enabel && (
        <View style={styles.mainContent}>
          <Text style={styles.mainContentText}>{value}°C</Text>
        </View>
      )}
    </>
  );
};

export default ManualControl;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#ccc",
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  mainContent: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#E335DC",

    marginLeft: 100,
    marginRight: 100,
    paddingVertical: 25,
    fontSize: 50,
    alignItems: "center",
    color: "white",
    borderRadius: 10,
    marginTop: 50,
  },
  mainContentText: {
    fontSize: 40,
    color: "white",
  },
});
