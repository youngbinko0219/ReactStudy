import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <>
      <div className="naviWrap">
        <Link to="/crud">RealtimeCRUD</Link>&nbsp;
        <Link to="/listener">RealtiemListener</Link>&nbsp;
        <Link to="/chat">RealtimeChat</Link>
      </div>
    </>
  );
};

export default Navi;
