import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'

const SignIn = () => {
  const handleLogin = async () => {
    // Add your Google login logic here
    const result = await login()
    if (result) {
      console.log("Login Success");
    }else{
      Alert.alert("Error","Failed to login")
    }

  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        {/* Onboarding Image */}
        <Image 
          source={images.onboarding} 
          className='w-full h-4/6'
          resizeMode='contain'
        />

        {/* Text Section */}
        <View className='px-6 mt-2'>
          <Text className='text-sm text-center tracking-widest text-gray-500 uppercase font-medium'>
            Welcome to Real Estate
          </Text>

          <Text className='text-3xl font-bold text-center text-gray-800 mt-3 leading-snug'>
            Let’s get you closer to{"\n"}
            <Text className='text-blue-500'>
              your dream house
            </Text>
          </Text>

          <Text className='text-base text-center text-gray-600 mt-8'>
            Login to Real Estate with Google
          </Text>

          {/* Google Button */}
          <TouchableOpacity 
            onPress={handleLogin} 
            className='bg-white shadow-xl shadow-black rounded-full w-full py-2 mt-5 flex-row items-center justify-center'
          >
            <Image
              source={icons.google}
              className='w-6 h-6'
              resizeMode='contain'
            />
            <Text className='text-lg font-medium text-gray-800 ml-2'>
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
