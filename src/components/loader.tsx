import { StylesList } from "../lib/styledComponents";

export default function Loader() {
  return (
    <StylesList.ListLoader>
      <span className="loader"></span>
    </StylesList.ListLoader>
  );
}
