import React, {createContext, useEffect, useReducer, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DataUser} from '../types/userInfo';

enum ActionKind {
  RETRIEVE_DATA = 'RETRIEVE_DATA',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

enum StorageKind {
  userToken = 'userToken',
  userData = 'userData',
}

type ACTIONTYPE =
  | {
      type: ActionKind.RETRIEVE_DATA;
      isLoading?: boolean;
      userData: DataUser;
      userToken: string;
    }
  | {
      type: ActionKind.LOGIN;
      isLoading?: boolean;
      userData: DataUser;
      userToken: string;
    }
  | {
      type: ActionKind.LOGOUT;
      isLoading?: boolean;
      userData?: DataUser;
      userToken?: string;
    };

interface State {
  isLoading: boolean;
  userData: DataUser;
  userToken: string;
  signIn: ({value, token}: {value: DataUser; token: string}) => void;
  signOut: () => void;
}

interface Props {
  children: React.ReactNode;
}

const initialState: State = {
  isLoading: true,
  userData: {} as DataUser,
  userToken: '',
  signIn: () => {},
  signOut: () => {},
};

export const AuthContext = createContext<State>(initialState);

const dataReducer = (prevState: State, action: ACTIONTYPE) => {
  switch (action.type) {
    case ActionKind.RETRIEVE_DATA:
      return {
        ...prevState,
        userData: action.userData,
        userToken: action.userToken,
        isLoading: false,
      };
    case ActionKind.LOGIN:
      return {
        ...prevState,
        userData: action.userData,
        userToken: action.userToken,
        isLoading: false,
      };
    case ActionKind.LOGOUT:
      return {
        ...prevState,
        userData: {} as DataUser,
        userToken: '',
        isLoading: false,
      };
    default:
      return {
        ...prevState,
        isLoading: false,
      };
  }
};

const AuthProvider = ({children}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const userTokenStorage = await AsyncStorage.getItem(
          StorageKind.userToken,
        );
        const userStorage = await AsyncStorage.getItem(StorageKind.userData);

        const userToken = userTokenStorage === null ? '' : userTokenStorage;
        const userData: DataUser = userStorage ? JSON.parse(userStorage) : {};

        console.log(`token: ${userToken}, data: ${userStorage}`);

        return dispatch({
          type: ActionKind.RETRIEVE_DATA,
          userData: userData,
          userToken: userToken,
        });
      } catch (err: unknown) {
        console.log('error retrieve: ', err);
      }
    };

    setTimeout(() => {
      retrieveData();
    }, 1000);
  }, []);

  const signIn = useCallback(
    async ({value, token}: {value: DataUser; token: string}) => {
      try {
        await AsyncStorage.setItem(StorageKind.userToken, token);
        await AsyncStorage.setItem(StorageKind.userData, JSON.stringify(value));

        return dispatch({
          type: ActionKind.LOGIN,
          userData: value,
          userToken: token,
        });
      } catch (err: unknown) {
        console.log('error signin: ', err);
      }
    },
    [],
  );

  const signOut = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(StorageKind.userToken);
      await AsyncStorage.removeItem(StorageKind.userData);

      return dispatch({
        type: ActionKind.LOGOUT,
      });
    } catch (err: unknown) {
      console.log('error logout: ', err);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
