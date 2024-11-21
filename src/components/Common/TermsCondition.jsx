import Link from "next/link";
import React from "react";

const TermsCondition = () => {
  return (
    <>
      <span className="terms-text">
        I agree to Dashlite{" "}
        <Link href="#" tabIndex="-1">
          Privacy Policy
        </Link>{" "}
        &amp;{" "}
        <Link href="#" tabIndex="-1">
          Terms.
        </Link>
      </span>
    </>
  );
};

export default TermsCondition;
