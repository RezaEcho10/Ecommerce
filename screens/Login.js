import { View, Text, SafeAreaView, Image, KeyboardAvoidingView, Pressable } from 'react-native'
import React,{useState} from 'react'
import Amazon from '../assets/Amazon.png'
import { MaterialIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()
    const handleLogin = async() => {
        const user = {
            email: email,
            password: password
        }
        await axios.post('http://localhost:1010/login', user)
        .then((response) => {
            console.log(response);
            const token  = response.data.token
            AsyncStorage.setItem('authToken', token)
            navigation.navigate('home')
        })
    }
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <View>
            <Image source={Amazon} style={{width: 220, height: 80}} />
        </View>
        <KeyboardAvoidingView style={{marginTop: 35}}>
            <View style={{margin: 'auto', marginBottom: 50}}>
                <Text style={{fontWeight: 700, fontSize: 20}}>
                    Login In to your Account
                </Text>
            </View>
            <View >
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#D8D8D8', paddingVertical: 5,
                        borderRadius: 5, marginTop: 30}}>
                    <MaterialIcons name='email' size={24} color='black' style={{marginLeft: 5}} />
                    <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder='Enter your Email' style={{color: 'grey', width: 300, marginVertical: 10}} />
                </View>
            </View>
            <View >
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#D8D8D8', paddingVertical: 5,
                        borderRadius: 5, marginTop: 30}}>
                    <MaterialIcons name='lock' size={24} color='black' style={{marginLeft: 5}} />
                    <TextInput value={password} onChangeText={(text) => setPassword(text)} placeholder='Enter your Password' style={{color: 'grey', width: 300, marginVertical: 10}} />
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10,}}>
                <Text>Keep me logged in</Text>
                <Text style={{color: 'blue'}}>Forgot Password</Text>
            </View>
            <Pressable onPress={handleLogin} style={{margin: 'auto', marginTop: 50, backgroundColor: 'orange', width: '70%', height: 45, borderRadius: 7, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white'}}>Login</Text>
            </Pressable>
            <Pressable style={{margin: 'auto', marginTop: 10,}}>
                <Text style={{color: 'grey'}}>Already have an account? Sign in</Text>
            </Pressable>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login