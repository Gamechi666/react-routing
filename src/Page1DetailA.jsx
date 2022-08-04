import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  console.log(state);
  return (
    <div>
      <h1>DetailAです</h1>
      <button onClick={onClickBack}>modoru</button>
    </div>
  );
};
