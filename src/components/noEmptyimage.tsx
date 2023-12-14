import { Styles } from "../lib";
import Logo from "../../public/siddons-logo.svg";
export default function NoEmptyimage() {
  return (
    <Styles.StylesList.emptyWrapper>
      <div className="images-container">
        <img
          src={Logo}
          alt="David Siddons Group"
          width={"100px"}
          className="img-logo"
        />
      </div>
      <h2 className="title">Sorry, no properties match these criteria</h2>
    </Styles.StylesList.emptyWrapper>
  );
}
