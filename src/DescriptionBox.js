import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CopyToClipboard from 'react-copy-to-clipboard';

const useStyles = makeStyles((theme) => ({
  descriptionBox: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    position: 'relative',
  },
  header: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  copyButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

function DescriptionBox({ header, description }) {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500); // Reset the "copied" status after 1.5 seconds
  };

  return (
    <Paper className={classes.descriptionBox} elevation={3}>
      <div className={classes.header}>
        <Typography variant="h6">{header}</Typography>
        <CopyToClipboard text={description} onCopy={handleCopy}>
          <IconButton
            className={classes.copyButton}
            color="primary"
            aria-label="Copy to Clipboard"
            disabled={copied}
          >
            <FileCopyIcon />
          </IconButton>
        </CopyToClipboard>
      </div>
      <Typography variant="body1">{description}</Typography>
      <Snackbar
        open={copied}
        autoHideDuration={1500}
        onClose={() => setCopied(false)}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={() => setCopied(false)}
        >
          Text copied to clipboard!
        </MuiAlert>
      </Snackbar>
    </Paper>
  );
}

export default DescriptionBox;
