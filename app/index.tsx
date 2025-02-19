import { Link, router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function index(_props: any) {
  return (
    <LinearGradient colors={["red", "yellow"]} style={styles.background}>
      <Image
        source={require("../assets/images/exploreLinks/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Dunning Read Natural Area</Text>

      <Link style={styles.audioNavigate} href={"/audioTourMap"}>
        <Text style={styles.audioNavigateText}>Audio Tour Map</Text>
      </Link>
      <Link style={styles.exploreNavigate} href={"/explore"}>
        <Text style={styles.exploreNavigateText}>Explore Wildlife</Text>
      </Link>
      <View style={styles.infoNavigate}>
        <Link style={styles.infoNavigateText} href={"/aboutus"}>
          <Text style={styles.infoNavigateText}>Learn About Us</Text>
        </Link>
      </View>
      <View style={styles.privacyContainer}>
        <Link style={styles.privacyText} href={"/privacy"}>
          <Text style={styles.privacyText}>Privacy Policy</Text>
        </Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 290, // Adjust the width and height as needed
    height: 290,
    marginBottom: 1,
    marginTop: 1,
    resizeMode: "contain", // Adjust the resizeMode as needed
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "darkgreen",
    textAlign: "center",
    overflow: "hidden",
    marginBottom: 40,
    marginTop: 40, // Adjusted marginTop to make the title stand out at the top
  },

  audioNavigate: {
    backgroundColor: "lightgreen",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 10,
    marginTop: 2,
  },
  audioNavigateText: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  exploreNavigate: {
    backgroundColor: "lightgreen",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 10,
    marginTop: 2,
  },
  exploreNavigateText: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  infoNavigate: {
    backgroundColor: "lightgreen",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 10,
    marginTop: 2,
  },
  infoNavigateText: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  privacyContainer: {
    marginBottom: 60,
    marginTop: 25,
    alignItems: "flex-start",
  },

  privacyText: {
    color: "black",
    textDecorationLine: "underline",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default index;
