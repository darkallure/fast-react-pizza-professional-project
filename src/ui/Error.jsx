import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <h2>{error.data || error.message}</h2>
      <LinkButton to={-1}> &larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
