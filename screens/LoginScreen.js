import React from 'react';
import { Alert, Dimensions, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import colors from '../assets/colors.js';

export default function LoginScren ({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Icon
          color={colors.white}
          name='user-tie'
          type='font-awesome-5'
          size={100}
        />
        <View style={styles.inputContainer}>
          <View style={styles.infoInput}>
            <Icon
              name='face'
              type='material'
              size={40}
            />
            <TextInput
              style={styles.inputText}
              placeholder='Username'
              placeholderTextColor={colors.white}
            />
          </View>
          <View style={styles.infoInput}>
            <Icon
              name='vpn-key'
              type='material'
              size={40}
            />
            <TextInput
              placeholder='Password'
              placeholderTextColor={colors.white}
              secureTextEntry
              style={styles.inputText}
            />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => Alert.alert('Test', 'Pressed Login')}
            onLongPress={() => Alert.alert('Long Boy', 'Long Pressed Login')}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.additionalContainer}>
        <Text style={styles.signUpText} onPress={() => Alert.alert('Test', 'Pressed Sign Up')}>Sign Up</Text>
        <Text style={styles.forgotPassText} onPress={() => Alert.alert('Test', 'Pressed Forgot Password')}>Forgot Password</Text>
      </View>
      <Text style={styles.copyright}>4Guys1List{'\u00A9'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  additionalContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%'
  },
  background: {
    backgroundColor: colors.darkskyblue,
    flex: 1,
    minHeight: Math.round(Dimensions.get('window').height)
  },
  buttonContainer: {
    flex: 0.2
  },
  createAccountButton: {
    alignItems: 'center',
    backgroundColor: colors.tacao,
    borderColor: colors.white,
    borderRadius: 15,
    borderWidth: 1,
    flex: 0.15,
    justifyContent: 'center',
    marginTop: '5%',
    width: '100%'
  },
  container: {
    backgroundColor: colors.skyblue,
    borderColor: colors.black,
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: '5%',
    marginTop: '20%',
    marginLeft: '2%',
    marginRight: '2%',
    flex: 0.8,
    justifyContent: 'space-evenly'
  },
  copyright: {
    bottom: '1%',
    color: colors.white,
    fontSize: 15,
    position: 'absolute',
    right: '3%'

  },
  forgotPassText: {
    color: colors.white,
    fontSize: 18
  },
  infoInput: {
    backgroundColor: colors.gray,
    borderColor: colors.black,
    borderRadius: 10,
    borderWidth: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 30,
    paddingRight: 30
  },
  inputContainer: {
    justifyContent: 'space-evenly',
    flex: 0.65
  },
  inputText: {
    alignSelf: 'center',
    flex: 1,
    fontSize: 20,
    paddingLeft: 20
  },
  loginButton: {
    backgroundColor: colors.lightrust,
    borderColor: colors.white,
    borderRadius: 15,
    borderWidth: 1.5,
    marginTop: '10%',
    marginLeft: '2%',
    marginRight: '2%',
    justifyContent: 'center'
  },
  loginText: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: 30
  },
  signUpText: {
    color: colors.white,
    fontSize: 18
  }
});

// Green, Brown, Gray, Yellow
