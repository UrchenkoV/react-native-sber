import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth } from "./src/utils/firebase";

export const useAuth = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        setUser(user);
      } else {
        setIsAuth(false);
        setUser({});
      }
    });
    console.log(unSub);
    return () => unSub();
  }, []);

  const values = { user, isAuth };

  return React.useMemo(() => values, [values]);
};
