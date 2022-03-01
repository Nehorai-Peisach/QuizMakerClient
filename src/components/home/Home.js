const Home = (props) => {
  return (
    <div className="center">
      <h1>Welcome {props.user.username}</h1>
    </div>
  );
};

export default Home;
