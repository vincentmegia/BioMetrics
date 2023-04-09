import React from "react"
import { Button, SafeAreaView, StatusBar } from "react-native"
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics"

function App(): JSX.Element {
   const onPress = async () => {
      const rnBiometrics = new ReactNativeBiometrics()
      const { biometryType } = await rnBiometrics.isSensorAvailable()
      if (biometryType === BiometryTypes.FaceID) {
         //do something face id specific
         console.log("FaceID testing")
         rnBiometrics
            .simplePrompt({ promptMessage: "Confirm fingerprint" })
            .then((resultObject) => {
               const { success } = resultObject

               if (success) {
                  console.log("successful biometrics provided")
               } else {
                  console.log("user cancelled biometric prompt")
               }
            })
            .catch(() => {
               console.log("biometrics failed")
            })
      }
   }

   return (
      <SafeAreaView>
         <StatusBar barStyle="light-content" />
         <Button onPress={onPress} title="Face ID" />
      </SafeAreaView>
   )
}

export default App
