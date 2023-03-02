

import { Navigate, Outlet } from "react-router-dom";

const AutoLogin = () => {
  const token = localStorage.getItem('@TOKEN');

  return (
    <div>
      {token ? <Navigate to='/shop'/> : <Outlet />}
    </div>
  );
};

export default AutoLogin;