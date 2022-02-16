import ClipLoader from 'react-spinners/ClipLoader';

const Loading = (props) => {
  return (
    <div className="sweet-loading">
      <ClipLoader loading={true} size={150} color="#12192c" />
    </div>
  );
};

export default Loading;
