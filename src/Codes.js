import React from "react";
import CodeViewer from "./CodeViewer";
import { Typography, InputBase, Toolbar, AppBar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  color: "black",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "black",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    color: "black",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const CodeExample = () => {
  const examples = [
    {
      headerText: "React Hooks",
      description: `
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. 
      Hooks don't work inside classes — they let you use React without classes. 
      (We don't recommend rewriting your existing components overnight but you can start using Hooks in the new ones if you'd like.)
      Hooks are 
            1.useState
            2.useEffect
            3.useContext
            4.useMemo
            5.useRef
            6.useCallback

`,
      // code: `
      //   const [loading, setLoading] = React.useState(false);
      //   const [responseMessage, setResponseMessage] = useState('');
      //   const [showDialog, setShowDialog] = useState(false);
      //   const [statusCode, setStatusCode] = useState(null);
      //   const [showroomnames, setShowroomnames] = React.useState([]);
      //   `,
    },

    {
      headerText: "useState Example",
      description: `
      useState is React Hook that allows you to add state to a functional component. 
      It returns an array with two values: the current state and a function to update it.
      The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

`,
      code: `
        const [loading, setLoading] = React.useState(false);
        const [responseMessage, setResponseMessage] = useState('');
        const [showDialog, setShowDialog] = useState(false);
        const [statusCode, setStatusCode] = useState(null);
        const [showroomnames, setShowroomnames] = React.useState([]);
        `,
    },
    {
      headerText: "useEffect Example",
      description: `
  The useEffect Hook allows you to perform side effects in your components. 
  Some examples of side effects are: fetching data, directly updating the DOM, and timers. 
  useEffect accepts two arguments. The second argument is optional.

`,
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
      headerText: "useContext",
      description: `
      The useContext Hook provides function components access to the context value for a context object.
      It: Takes the context object (i.e., value returned from React. createContext ) as the one argument it accepts.

`,
      // code: `
      //   const [loading, setLoading] = React.useState(false);
      //   const [responseMessage, setResponseMessage] = useState('');
      //   const [showDialog, setShowDialog] = useState(false);
      //   const [statusCode, setStatusCode] = useState(null);
      //   const [showroomnames, setShowroomnames] = React.useState([]);
      //   `,
    },
    {
      headerText: "useMemo",
      description: `
      The useMemo is a hook used in the functional component of react that returns a memoized value.
      In Computer Science, memoization is a concept used in general when we don't need to recompute the function with a given argument for the next time as it returns the cached result.

`,
      // code: `
      //   const [loading, setLoading] = React.useState(false);
      //   const [responseMessage, setResponseMessage] = useState('');
      //   const [showDialog, setShowDialog] = useState(false);
      //   const [statusCode, setStatusCode] = useState(null);
      //   const [showroomnames, setShowroomnames] = React.useState([]);
      //   `,
    },
    {
      headerText: "useRef",
      description: `
      The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
      The useRef hook is a new addition in React 16.8. 
      To learn useRef the user should be aware about refs in React. Unlike useState if we change a value in useRef it will not re-render the webpage.

`,
      // code: `
      //   const [loading, setLoading] = React.useState(false);
      //   const [responseMessage, setResponseMessage] = useState('');
      //   const [showDialog, setShowDialog] = useState(false);
      //   const [statusCode, setStatusCode] = useState(null);
      //   const [showroomnames, setShowroomnames] = React.useState([]);
      //   `,
    },
    {
      headerText: "useCallback",
      description: `
      useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.
      Memoization is a way to cache a result so that it doesn't need to be computed again. This can boost performance.

`,
      // code: `
      //   const [loading, setLoading] = React.useState(false);
      //   const [responseMessage, setResponseMessage] = useState('');
      //   const [showDialog, setShowDialog] = useState(false);
      //   const [statusCode, setStatusCode] = useState(null);
      //   const [showroomnames, setShowroomnames] = React.useState([]);
      //   `,
    },
    {
      headerText: "JSX",
      description: `
      JSX stands for JavaScript XML.
      JSX allows us to write HTML in React.
      JSX makes it easier to write and add HTML in React.

`,
    },
    {
      headerText: "components",
      description: `
      Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

      Components come in two types, Class components and Function components.

      Class components
      React Class components have a built-in state object. You might have noticed that we used state earlier in the component constructor section. 
      The state object is where you store property values that belongs to the component.
      When the state object changes, the component re-renders.


      Functional component
      Functional component is just a simple javascript function; 
      it accepts the data in the form of props and returns the react element.
      Whereas the class component will be created using the class keyword, and it extends the React. 
      Component to make the class as a react component.


`,
    },
    {
      headerText: "Props",
      description: `
      In ReactJS, the props are a type of object where the value of attributes of a tag is stored.
      The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes.
      Basically, these props components are read-only components.

`,
    },
    {
      headerText: "Events",
      description: `
      An event is an action that could be triggered as a result of the user action or system generated event.
      For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.

`,
    },

    {
      headerText: "Map1 Example",
      description: `
      Map is a type of data structure or data collection that is used to store the data in the form of key and value pairs. 
      Each pair has a unique key in a map, and the value stored in each pair must be mapped to its unique key.

`,
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
      description: `
      In React, conditional rendering is the process of displaying different content based on certain conditions or states. 
      It allows you to create dynamic user interfaces that can adapt to changes in data and user interactions. 
      In this process, you can use conditional statements to decide what content should be rendered.
    
    `,
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
      headerText: "Router",
      description: `
      React Router is a JavaScript framework that lets us handle client and server-side routing in React applications.
      It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page.
      It also allows us to use browser history features while preserving the right application view.

`,
    },
    {
      headerText: "React Router Dom",
      description: `
      React Router DOM is an npm package that enables you to implement dynamic routing in a web app.
      It allows you to display pages and allow users to navigate them.
      It is a fully-featured client and server-side routing library for React.

`,
    },
    {
      headerText: "Fetch",
      description: `
      Fetch allows you to send or get data across networks.
      As a React developer, you should be able to comfortably consume APIs in your React applications in order to build a full-fledged React application.

`,
      code: `
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API URL you want to fetch data from
    const apiUrl = 'https://api.example.com/data';

    // Use the fetch function to make a GET request to the API
    fetch(apiUrl)
      .then((response) => {
        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((responseData) => {
        // Set the fetched data in the state
        setData(responseData);
        setLoading(false); // Set loading to false once data is loaded
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setLoading(false); // Set loading to false on error
      });
  }, []); // The empty dependency array ensures this effect runs only once on component mount


        `,
    },
    {
      headerText: "Async & Await",
      description: `
      The async function declaration creates a binding of a new async function to a given name. 
      The await keyword is permitted within the function body, enabling asynchronous,
      promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

`,
    },
    {
      headerText: "Axios",
      description: `
      Axios is a popular JavaScript library for making HTTP requests from a web browser or a Node. js server.

`,
    },
    {
      headerText: "Redux",
      description: `
      React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data.
      Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model. React Redux is conceptually simple.
      It subscribes to the Redux store, checks to see if the data which your component wants have changed, and re-renders your component.

      Redux was inspired by Flux. Redux studied the Flux architecture and omitted unnecessary complexity.
      
      Redux does not have Dispatcher concept.
      Redux has an only Store whereas Flux has many Stores.
      The Action objects will be received and handled directly by Store.
      
      STORE: A Store is a place where the entire state of your application lists.
      It manages the status of the application and has a dispatch(action) function.
      It is like a brain responsible for all moving parts in Redux.
      
      ACTION: Action is sent or dispatched from the view which are payloads that can be read by Reducers.
      It is a pure object created to store the information of the user's event.
      It includes information such as type of action, time of occurrence, location of occurrence, its coordinates, and which state it aims to change.
      
      REDUCER: Reducer read the payloads from the actions and then updates the store via the state accordingly.
      It is a pure function to return a new state from the initial state.
      
`,
    },
    {
      headerText: "Flux",
      description: `
      Flux in react. js provides a centralized data store, known as the "Store", which holds all of the data for your application.
      This makes it easier to manage your application's state and reduces the complexity of managing the state across multiple components.

      Flux applications have three major roles in dealing with data:
      
      Dispatcher
      Stores
      Views (React components)

`,
    },
    {
      headerText: "React Router Dom",
      description: `
      React Router DOM is an npm package that enables you to implement dynamic routing in a web app.
      It allows you to display pages and allow users to navigate them.
      It is a fully-featured client and server-side routing library for React.

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
    // {
    //   headerText: "",
    //   code: `

    //     `,
    // },
    // {
    //   headerText: "",
    //   code: `

    //     `,
    // },
    // {
    //   headerText: "",
    //   code: `

    //       `,
    // },
    // {
    //   headerText: "",
    //   code: `

    //       `,
    // },
    // {
    //   headerText: "",
    //   code: `

    //       `,
    // },
    // {
    //   headerText: "",
    //   code: `

    //       `,
    // },
    // {
    //   headerText: "",
    //   code: `

    //       `,
    // },
    // {
    //   headerText: "",
    //   code: `

    //       `,
    // },
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
      <AppBar position="static" sx={{ backgroundColor: "#e0f2f1" }}>
        <Toolbar>
         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block", color: "black" },
            }}
          >
            React js Examples
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={handleSearch}
            />
          </Search>
        </Toolbar>
      </AppBar>
     
      {filteredExamples.map((example, index) => (
        <CodeViewer
          key={index}
          description={example.description}
          headerText={example.headerText}
          code={example.code}
        />
      ))}
    </div>
  );
};

export default CodeExample;
