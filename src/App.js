import AuthProvider from "context/AuthContext";
import React from "react";
import MainRoutes from "routes/mainRoutes";
function App() {
  return (
    <AuthProvider>
      <React.Fragment>
        <MainRoutes />
      </React.Fragment>
    </AuthProvider>
  );
}

export default App;
