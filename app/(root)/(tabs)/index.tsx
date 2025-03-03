import { Link } from "expo-router";
import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">Welcome chiggas</Text>
      {/* Add the splash-icon image here */}
      <Image
        source={require("../../../assets/images/icon.png")}
        style={{ width: 200, height: 200 }} // Adjust size as needed
        resizeMode="contain" // Keeps the image proportionate
      />
      <Link href={'/sign-in'}>Sign In</Link>
      <Link href={'/explore'}>Explore</Link>
      <Link href={'/profile'}>Profile</Link>
      <Link href={{ pathname: "/(root)/properties/[id]", params: { id: "123" } }}>
        Property
      </Link>
    </View>
  );
}