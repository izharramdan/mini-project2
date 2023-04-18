import { useState, useEffect } from "react";
import axios from "axios";
import Alert from "./AlertLoginInfo";

// import { Link, useNavigate } from "react-router-dom";

function Login() {
  // const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sessionId, setSessionId] = useState("");
  // const [accountData, setAccountData] = useState([]);

  const session = localStorage.getItem("session_id");
  const account = {
    avatar: localStorage.getItem("accountAvatar"),
    id: localStorage.getItem("accountId"),
    username: localStorage.getItem("accountUsername"),
    name: localStorage.getItem("accountName"),
  };

  useEffect(() => {}, []);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogout = () => {
    localStorage.clear();
    setSessionId("");
    window.location.reload();
  };

  const handleApi = () => {
    console.log({ username, password });
    axios
      .get(
        "https://api.themoviedb.org/3/authentication/token/new?api_key=fe218ee83764fa44e44a16cfafcebd10"
      )
      .then((result1) => {
        axios
          .post(
            "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=fe218ee83764fa44e44a16cfafcebd10",
            {
              username: username,
              password: password,
              request_token: result1.data.request_token,
            }
          )
          .then((result2) => {
            axios
              .post(
                "https://api.themoviedb.org/3/authentication/session/new?api_key=fe218ee83764fa44e44a16cfafcebd10",
                {
                  request_token: result2.data.request_token,
                }
              )
              .then((result3) => {
                console.log("session_id: ", result3.data.session_id);
                setSessionId(result3.data.session_id);
                localStorage.setItem("session_id", result3.data.session_id);
                axios
                  .get(
                    `https://api.themoviedb.org/3/account?api_key=fe218ee83764fa44e44a16cfafcebd10&session_id=${result3.data.session_id}`
                  )
                  .then((result4) => {
                    // let data = await Promise.all(result4.data)
                    localStorage.getItem("accountAvatar", result4.data.avatar.avatar_path);
                    localStorage.setItem("accountId", result4.data.id);
                    localStorage.setItem("accountUsername", result4.data.username);
                    localStorage.setItem("accountName", result4.data.name);
                    console.log(localStorage.getItem("account"));
                    console.log(result4.data);
                    window.location.reload();
                  });
              });
            // navigate('/account')
          })
          .catch((error) => {
            alert("service error");
            console.log(error);
          });

        // console.log(result.data.request_token)
      });
  };

  return (
    <div className="signIn">
      {!session ? (
        <>
          <div
            className="modal fade"
            id="signInModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="signin">
                  <div className="pb_41">Sign In</div>
                  <div>
                    <input
                      value={username}
                      onChange={handleUsername}
                      name=""
                      className="form-control input_username"
                      type="text"
                      placeholder="username"
                    />
                  </div>
                  <div className="pb_41"></div>
                  <div>
                    <input
                      value={password}
                      onChange={handlePassword}
                      className="form-control input_password"
                      type="password"
                      placeholder="password"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <button
                      type="button"
                      className="btn btn-warning mt_24 btn_signin"
                      onClick={handleApi}
                    >
                      sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* <div className="bread-alert">
            <div className="alert alert-success" role="alert">
              Welcome
              <h1>{account.username}</h1>
              <h1>{account.id}</h1>
              <h1>{account.name}</h1>
            </div>
          </div> */}
          <Alert />
        </>
      )}
    </div>
  );
}
export default Login;
