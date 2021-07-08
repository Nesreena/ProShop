import propTypes from "prop-types";
import { Image, CartBox } from "./CartItem.Styles";
import {
  FlexColumn,
  FlexRow,
  Typography,
  InnerSection,
} from "../../App.Styles";
import { Counter } from "../../Screens/Gust/Product/Product.Styles";

export default function CartItem({
  count,
  setCount,
  price,
  image,
  name,
  handleDelete,
  increaseCounter,
  decreaseCounter
}) {
  return (
    <InnerSection style={{ alignItems: "start", marginBottom:"20px" }}>
      <CartBox>
        <FlexRow>
          <Image src={"https://proshop-ms.herokuapp.com/" + image} alt={name} />
          <Typography
            fontSize={24}
            fontWeight={"bold"}
            style={{ maxWidth: "50%", marginBottom: "120px" }}
          >
            {name}
          </Typography>
        </FlexRow>

        <FlexColumn
          style={{ width: "70%", height: "100%", justifyContent: "start" }}
        >
          <FlexRow style={{ justifyContent: "flex-end" }}>
            <Typography
              fontSize={18}
              style={{ padding: 12, fontWeight: "bold", cursor: "pointer" }}
              onClick={handleDelete}
            >
              x
            </Typography>
          </FlexRow>

          <FlexRow style={{ margin: "50px 0 0 50px" }}>
            <FlexRow
              style={{
                background: "#fff",
                width: "160px",
                marginRight: "70px",
              }}
            >
              <Counter
                onClick={decreaseCounter}
              >
                -
              </Counter>
              <Typography style={{ margin: "0 30px" }}>{count}</Typography>
              <Counter
                onClick={increaseCounter}
              >
                +
              </Counter>
            </FlexRow>
            <Typography
              fontSize={30}
              fontWeight={"bold"}
              style={{
                justifyContent: "flex-end",
                marginLeft: "10%",
                width: "auto",
              }}
            >
              ${price}
            </Typography>
          </FlexRow>
        </FlexColumn>
      </CartBox>
    </InnerSection>
  );
}

CartItem.defaultProps = {
  handleDelete: () => {},
  setCounter: () => {},
  count: 1,
};

CartItem.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  count: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  setCount: propTypes.func.isRequired,
  handleDelete: propTypes.func.isRequired,
};
