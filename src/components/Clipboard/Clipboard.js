import { AboutButton } from "../CTA/CTAStyles";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Clipboard extends React.Component {
  state = {};
  render() {
    return (
      <>
        <CopyToClipboard
          text={"bp@sojourn.llc"}
          onCopy={() => this.setState({ copiedText: "bp@sojourn.llc" })}
        >
          <AboutButton>
            <i className="ni ni-active-40" />
            <span>
              {this.state.copiedText === "bp@sojourn.llc"
                ? "Email copied"
                : "Let's Build"}
            </span>
          </AboutButton>
        </CopyToClipboard>
      </>
    );
  }
}

export default Clipboard;
