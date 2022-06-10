import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStack from "./router";

const App = (): React.ReactElement => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default registerRootComponent(App);
