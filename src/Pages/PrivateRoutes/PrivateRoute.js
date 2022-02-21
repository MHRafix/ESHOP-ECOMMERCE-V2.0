import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../CustomHooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
      const {user} = useAuth();

    return (
          <Route
          {...rest}
          render={({ location }) => user?.email ? children
        : <Redirect
           to={
               {
                   pathname:"/userAccount/user/login",
                   state: { from: location }
               }
           } > </Redirect>
        }
          >
          </Route>
    );
};

export default PrivateRoute;