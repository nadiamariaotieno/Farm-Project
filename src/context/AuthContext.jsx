import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("sfms_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    // Temporary demo auth: replace with real API later
    if (email === "admin@farm.com" && password === "password123") {
      const userData = { email, role: "admin" };
      setUser(userData);
      localStorage.setItem("sfms_user", JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, message: "Invalid email or password" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("sfms_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

