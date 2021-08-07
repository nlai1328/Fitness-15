import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import { style } from "styled-system";

function SignUp({ navigator }) {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", phoneNumber: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            onChangeText={handleChange("firstName")}
            onBlur={handleBlur("firstName")}
            value={values.firstName}
            style={styles.formInput}
            placeholder="First Name"
          />
          <TextInput
            onChangeText={handleChange("lastName")}
            onBlur={handleBlur("lastName")}
            value={values.lastName}
            style={styles.formInput}
            placeholder="Last Name"
          />
          <TextInput
            onChangeText={handleChange("phoneNumber")}
            onBlur={handleBlur("phoneNumber")}
            value={values.phoneNumber}
            style={styles.formInput}
            placeholder="Phone number"
          />
          <Button onPress={handleSubmit} title="Submit" style={styles.button} />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formInput: {
    width: "80%",
    height: "5%",
    borderColor: "#B5B4BC",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  button:{
    borderColor: "#B5B4BC",
    borderWidth: 3,
  }
});

export default SignUp;
