import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div>
      <Link to={"/board/list"}>
        <button>BoardListPage</button>
      </Link>
    </div>
  );
};
