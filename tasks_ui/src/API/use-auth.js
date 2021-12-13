import axios from "axios";

// Hook (use-auth.js)
import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [token, setToken] = useState(false || getToken());
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (usrname, pass, setError) => {
    try {
      const res = await axios.post("http://localhost:8000/api-token-auth/", {
        username: usrname,
        password: pass,
      });

      if (res.status === 200) {
        setToken(res.data.token);
        storeToken(res.data.token);
        return true;
      }
    } catch (error) {
      setError("Invalid username or password");
    }
    return false;
  };
  const signup = (email, password) => {
    // return firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     setUser(response.user);
    //     return response.user;
    //   });
  };
  const signout = () => {
    setToken(false);
    removeToken();
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    // const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     setUser(user);
    //   } else {
    //     setUser(false);
    //   }
    // });
    // Cleanup subscription on unmount
    // return () => unsubscribe();
  }, []);
  // Return the user object and auth methods
  return {
    token,
    signin,
    signup,
    signout,
  };
}

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  return localStorage.getItem("token");
};

const removeToken = () => {
  localStorage.removeItem("token");
};
