import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "react-copy-to-clipboard";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";



const CodeViewer = ({ code, headerText, description }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500); // Reset the "copied" status after 1.5 seconds
  };

  return (
   
    <div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <h3>{headerText}</h3>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <IconButton
            color="primary"
            aria-label="Copy to Clipboard"
            disabled={copied}
          >
            <FileCopyIcon />
          </IconButton>
        </CopyToClipboard>
      </div>

      {description && <SyntaxHighlighter language="plaintext" style={coldarkCold}>
        {description}
      </SyntaxHighlighter>
}

{code &&<SyntaxHighlighter language="javascript" style={solarizedlight}>
        {code}
      </SyntaxHighlighter>
}

      <Snackbar
        open={copied}
        autoHideDuration={1500} // Automatically close after 1.5 seconds
        onClose={() => setCopied(false)}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={() => setCopied(false)}
        >
          Code copied to clipboard!
        </MuiAlert>
      </Snackbar>
    </div>
   
  );
};

export default CodeViewer;
