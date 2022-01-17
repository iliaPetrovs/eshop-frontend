import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

const PUBLIC_KEY =
  "pk_test_51KGiaLKfoI8qdTqswkb40eRHYWUNTxm9xFwPOl3kN7aXvW4oexacMiIC5SrC1n9RT9LIju4WDnsG8YtPH7aZ88as00Vp2wMPBm";
const SECRET_KEY =
  "sk_test_51KGiaLKfoI8qdTqsWuRlTNI4ry713HYZ5sqfTSQbVuEz1SoKRiaTSrXevQLzkl4iEXCTdTW73m15XgMo1CHbLcLW00TmzeYAbD";

export default function StripeContainer({total}) {

  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:8080/payments", "", {
        headers: {
          token: token.id,
          amount: total,
        },
      })
      .then(() => {
        alert("Payment Success");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <Stripe
        stripeKey={PUBLIC_KEY}
        token={handleToken}
      />
    </>
  );
}
