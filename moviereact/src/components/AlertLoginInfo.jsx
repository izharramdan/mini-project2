function Alert() {
  const account = {
    avatar: localStorage.getItem("accountAvatar"),
    id: localStorage.getItem("accountId"),
    username: localStorage.getItem("accountUsername"),
    name: localStorage.getItem("accountName"),
  };

  const getAvatar = (avatarpath) => {
    return `https://www.themoviedb.org/t/p/w150_and_h150_face${avatarpath}`;
  };

  return (
    <div className="bread-alert">
      {/* <div className="alert-avatar">
        <img src={getAvatar(account.avata.tmdb.avatar_path)} alt="Gravatar" />
      </div> */}
      <div className="alert alert-danger" role="alert">
        <div className="alert-welcome">
          <h1>Welcome</h1>
        </div>
        <div className="alert-name">
          <h1>{account.name}</h1>
        </div>
        <div className="alert-id">
          <h1>{account.id}</h1>
        </div>
        {/* <div className="alert-welcome">
          <h1>{account.username}</h1>
        </div> */}
      </div>
    </div>
  );
}

export default Alert;
