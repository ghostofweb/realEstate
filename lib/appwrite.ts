import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite"
import * as Linking from 'expo-linking'

const config = {
    platform: 'com.real.estate',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID
}

const client = new Client()
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!)

const account = new Account(client)
const avatar = new Avatars(client)  // <--- Missing in your code, I added this

export async function login() {
    try {
        const redirectUri = Linking.createURL('/')
        await account.createOAuth2Session(OAuthProvider.Google, redirectUri)

        console.log("✅ Logged in successfully!")
        return true
    } catch (error) {
        console.log("Login failed:", error)
        return false
    }
}

export async function logout() {
    try {
        await account.deleteSession('current')
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function getUser(){
    try {
        const response = await account.get();
        if(response.$id){
            const userAvatar = avatar.getInitials(response.name)  // fixed typo (getInitals → getInitials)
            return {
                ...response,
                avatar: userAvatar.toString() // fixed that semicolon mistake
            }
        }
    } catch (error) {
        console.log(error)
    }
}
