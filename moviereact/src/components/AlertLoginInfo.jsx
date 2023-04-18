function Alert() {
  const account = {
    avatar: localStorage.getItem("accountAvatar"),
    id: localStorage.getItem("accountId"),
    username: localStorage.getItem("accountUsername"),
    name: localStorage.getItem("accountName"),
  };

  // const getAvatar = (avatarpath) => {
  //   return `https://www.themoviedb.org/t/p/w500${avatarpath}`;
  // };

  const imgUrl = `https://www.themoviedb.org/t/p/w500`;

  console.log(account);

  return (
    <div className="bread-alert">
      <div className="alert alert-success" role="alert">
        <div className="alert-avatar">
          <img src={`${imgUrl}${account.avatar}`} />
        </div>
        <div className="alert-welcome">
          <h4>Welcome</h4>
        </div>
        <div className="alert-name">
          <h4>{account.name}</h4>
        </div>
        <div className="alert-id">
          <h4>{account.id}</h4>
        </div>
        {/* <div className="alert-welcome">
          <h1>{account.username}</h1>
        </div> */}
      </div>
    </div>
  );
}

export default Alert;
