import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import "./style.css";

const LoginBtn = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (

    <div>
      {!isAuthenticated && (
        <button 
          className="btn btn-info loginNav"
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
    
  );
};

export default LoginBtn;