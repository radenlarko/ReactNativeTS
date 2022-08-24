import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import {AuthContext} from '../../store/AuthContext';
import {AdyawinsaApp} from '../../assets';
import {bgMainColor, mainColor} from '../../utils/color';
import {ButtonRounded, MyTextInput} from '../../components';
import Feather from 'react-native-vector-icons/Feather';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ErrorResponse, LoginParamList} from '../../types';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {rules} from '../../utils/myRules';
import BgAuth from '../../components/Auth/BgAuth';
import Footer from '../../components/Auth/Footer';
import MyTextInputPassword from '../../components/MyTextInputPassword';
import {useDisclosure} from '../../hooks';
import {LoginInputs} from '../../types/formValue';
import {useMutation} from '@tanstack/react-query';
import {loginUser} from '../../utils/fetchApi';
import {AxiosError} from 'axios';
import {DataUser} from '../../types/userInfo';
import {myToast} from '../../utils/myToast';

type Props = NativeStackScreenProps<LoginParamList, 'SignIn'>;

const defaultValues: LoginInputs = {
  email: '',
  password: '',
};

const SignIn = ({navigation}: Props) => {
  const {signIn} = useContext(AuthContext);

  const {mutate, isLoading} = useMutation(loginUser, {
    onMutate: data => {
      console.log('data mutate: ', data);
    },
    onSuccess: data => {
      const userToken = data.token;
      const userData: DataUser = data.user;

      console.log('data success: ', data);
      myToast(`Selamat Datang ${userData.name}`);
      signIn({value: userData, token: userToken});
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      if (error.response?.data) {
        Alert.alert(
          String(error.response.status),
          String(error.response.data?.error?.message),
        );

        console.log('error response: ', error.response?.data);
        return;
      }

      Alert.alert('Error', String(error));
      console.log('error login: ', error);
    },
  });

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<LoginInputs>({
    defaultValues,
  });

  const {isOpen, onToggle} = useDisclosure();

  const onSubmit: SubmitHandler<LoginInputs> = data => {
    console.log(data);

    mutate(data);
  };

  return (
    <View style={{flex: 1, backgroundColor: mainColor}}>
      <StatusBar barStyle="light-content" backgroundColor={mainColor} />
      <BgAuth />
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <View style={styles.ecContainer}>
            <TouchableOpacity style={styles.ecButton} onPress={() => {}}>
              <Text style={{fontSize: 16, color: 'white'}}>
                <Feather name="user-minus" size={18} /> EC
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{paddingHorizontal: ScreenWidth * 0.07}}>
            <View style={{height: ScreenHeight * 0.1 - 40}}></View>
            <Image source={AdyawinsaApp} style={styles.logo} />
            <Text style={{fontSize: 36, color: 'white'}}>Welcome,</Text>
            <Text style={{color: 'white'}}>Sign in to continue!</Text>
            <KeyboardAvoidingView behavior="padding" style={{marginTop: 30}}>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <MyTextInput
                    icon="mail"
                    label="Email"
                    colorLabel="white"
                    placeholder="masukan email"
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    onError={errors.email ? true : false}
                    errorMessage={errors.email?.message}
                  />
                )}
                name="email"
                rules={rules.email}
              />
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <MyTextInputPassword
                    icon="lock"
                    label="Password"
                    onSecure={onToggle}
                    isSecure={!isOpen}
                    colorLabel="white"
                    placeholder="masukan password"
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    onError={errors.password ? true : false}
                    errorMessage={errors.password?.message}
                  />
                )}
                name="password"
                rules={rules.password}
              />
              <TouchableOpacity onPress={() => {}} style={{marginTop: 5}}>
                <Text style={{color: 'white'}}>Forgot Password?</Text>
              </TouchableOpacity>
              <ButtonRounded
                onPress={handleSubmit(onSubmit)}
                title={isLoading ? 'Loading..' : 'Sign In'}
                icon="log-in"
                disabled={isLoading}
                loading={isLoading}
                style={{justifyContent: 'flex-end', marginTop: 30}}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
        <Footer label="I'm a new user, " button="Sign Up" onPress={() => {}} />
      </View>
    </View>
  );
};

export default SignIn;

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: bgMainColor,
  },
  header: {
    flex: 5,
  },
  logo: {
    width: 100,
    height: 77,
    resizeMode: 'contain',
  },
  ecContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
    paddingHorizontal: ScreenWidth * 0.07,
    paddingBottom: 10,
  },
  ecButton: {backgroundColor: '#0771B9', padding: 8, borderRadius: 14},
});
