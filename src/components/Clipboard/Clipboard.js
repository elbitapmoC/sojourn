import React from "react";
import { AboutButton } from "../CTA/CTAStyles";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Clipboard = () => {
  state = {
    value: "bp@sojourn.llc",
    copied: false,
  };

  return (
    <>
      <CopyToClipboard
        text={this.state.value}
        onCopy={() => this.setState({ copied: true })}
      ></CopyToClipboard>

      <AboutButton>
        {this.state.copied ? "Email Copied." : "let's build"}
      </AboutButton>
    </>
  );
};

export default Clipboard;
