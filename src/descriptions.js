import React from "react";
import CodeViewer from "./CodeViewer";

const CodeExample = () => {
  const examples = [
    {
      headerText: "useEffect Example",
      code: `
        useEffect(() => {
          Axios.get("http://10.8.1.168:4545/api/v1/branches", {}).then(
            (response) => {
              const branches = response.data;
              setBranches(branches);
            },
            (error) => {
              console.log(error);
            }
          );
        }, []);
      `,
    },
    {
      headerText: "Map1 Example",
      code: `
        {vendors.map((option) => (
          <MenuItem key={option.id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      `,
    },
    {
      headerText: "Map2 Example",
      code: `
        {itemList.items.map((items, index) => (
          <div key={index} className="item-list">
          </div>
        ))}
      `,
    },
    {
      headerText: "Condition Rendering Example",
      code: `
        {isMobile ? (
          <Fab color="primary" aria-label="add" size="medium" className={classes.fabbutton} onClick={handleOpen}>
              <AddIcon sx={{ color: 'white' }} />
          </Fab>
        ) : (
          <Button className={classes.Button} variant="contained" onClick={handleOpen} startIcon={<AddCircleOutlinedIcon />}>
              Class
          </Button>
        )}
      `,
    },
    {
      headerText: "setTimeout Example",
      code: `
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      `,
    },
    {
      headerText: "MUI Avatar Example",
      code: `
        <Avatar
          alt="B"
          src={require("../../assets/images/b66.png")}
          sx={{ width: 100, height: 100 }}
        />
      `,
    },
    {
      headerText: "MUI Select Textfield Example",
      code: `
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      `,
    },
    {
      headerText: "MUI Textfield Example",
      code: `
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          variant="standard"
        />
      `,
    },
    {
      headerText: "MUI Image Textfield Example",
      code: `
        <TextField
          fullWidth
          id="floor_image"
          label="Floor Diagram"
          type="file"
          name="floor_image"
          inputProps={{ accept: 'image/*' }}
          onChange={handleImageChange}
          InputLabelProps={{
            shrink: true,
            className: classes.label
          }}
          variant="outlined"
          className={classes.select}
        />
      `,
    },
    {
      headerText: "MUI Button",
      code: `
        <Button
          className={classes.Button}
          variant="contained"
          onClick={handleSubmit}
          startIcon={<FileUploadOutlinedIcon />}
        >
          Upload Floor Diagram
        </Button>
      `,
    },
    {
      headerText: "For Theme",
      code: `
        const theme = useTheme();
        `,
    },
    {
      headerText: "For Classes",
      code: `
        const classes = useStyles();
        `,
    },
    {
      headerText: "For navigate",
      code: `
        const navigate = useNavigate();
        `,
    },
    {
      headerText: "useState",
      code: `
        const [loading, setLoading] = React.useState(false);
        const [responseMessage, setResponseMessage] = useState('');
        const [showDialog, setShowDialog] = useState(false);
        const [statusCode, setStatusCode] = useState(null);
        const [showroomnames, setShowroomnames] = React.useState([]);
        `,
    },
    {
      headerText: "For Handle image",
      code: `
        const handleImageChange = (event) => {
            setImage(event.target.files[0]);
        };
    
        `,
    },
    {
      headerText: "Mui MediaQuery",
      code: `
        const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
        const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
        const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));
        `,
    },
    {
      headerText: "Filter Example",
      code: `

        const examples = [
            {
              headerText: "useEffect Example",
            }
        ]
         
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle search term input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter examples based on the search term
  const filteredExamples = examples.filter((example) =>
    example.headerText.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //then Input

  <input
        type="text"
        placeholder="Search by headerText..."
        value={searchTerm}
        onChange={handleSearch}
      />
        `,
    },
    {
      headerText: "",
      code: `
         
        `,
    },
    {
      headerText: "",
      code: `
         
        `,
    },
    {
        headerText: "",
        code: `
           
          `,
      },
      {
        headerText: "",
        code: `
           
          `,
      },
      {
        headerText: "",
        code: `
           
          `,
      },
      {
        headerText: "",
        code: `
           
          `,
      },
      {
        headerText: "",
        code: `
           
          `,
      },
      {
        headerText: "",
        code: `
           
          `,
      },
  ];

  const [searchTerm, setSearchTerm] = React.useState("");

  // Function to handle search term input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter examples based on the search term
  const filteredExamples = examples.filter((example) =>
    example.headerText.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by headerText..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredExamples.map((example, index) => (
        <CodeViewer
          key={index}
          headerText={example.headerText}
          code={example.code}
        />
      ))}
    </div>
  );
};

export default CodeExample;
