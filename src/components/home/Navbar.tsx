import React from "react";
import { Menu, Header } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GetCurrentUser } from "../../generatedTypes";
import { GET_CURRENT_USER_QUERY } from "../../graphql/getCurrentUser";
import { useKeepMeOnline } from "../../hooks/useKeepMeOnline";
import Cookies from "js-cookie";

export const Navbar: React.FC = () => {
  useKeepMeOnline();
  const history = useHistory();
  
  const { loading, error, data } = useQuery<GetCurrentUser>(GET_CURRENT_USER_QUERY);

  const isLoggedIn = !loading && !error && data && data.getCurrentUser;

  const logout = () => {
    Cookies.remove("access_token");
    history.push("/login");
    window.location.reload();
  }
  
  return (
    <Menu>
      <Menu.Item>
        <Link to="/">
          <Header>Terrawatts 2.0</Header>
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">
        {isLoggedIn ? (
          <>
            <Menu.Item>
              <Link to="/profile">
                {data.getCurrentUser.username}
              </Link>
            </Menu.Item>
            <Menu.Item onClick={logout}>Logout</Menu.Item>
          </>
        ) : (
          <>
          <Menu.Item>
            <Link to="/login">
              Login
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/signup">
              Signup
            </Link>
          </Menu.Item>
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
}
