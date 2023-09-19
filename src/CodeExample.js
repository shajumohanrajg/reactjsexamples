import React from "react";
import CodeViewer from "./CodeViewer";

const CodeExample = () => {
  const useEffect = `
  useEffect(() => {
    Axios.get("http://10.8.1.168:4545/api/v1/branches", {}).then(
      (response) => {
        // console.log("branches",response.data);
        const branches = response.data;
        setBranches(branches);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  `;
  const map1 = `
  {vendors.map((option) => (
    <MenuItem key={option.id} value={option.name}>
      {option.name}
    </MenuItem>
  ))}
`;

  const map2 = `
{itemList.items.map((items, index) => (
    <div key={index} className="item-list">
</div>
))}

`;

  const ConditionRendering = `
{isMobile ? (
    <Fab color="primary" aria-label="add" size="medium" className={classes.fabbutton} onClick={handleOpen}>
        <AddIcon sx={{ color: 'white' }} />
    </Fab>
) : (
    <Button className={classes.Button} variant="contained" onClick={handleOpen} startIcon={<AddCircleOutlinedIcon />}>
        Class
    </Button>
)}


`;

  const setTimeout = `
setTimeout(() => {
    window.location.reload();
  }, 1000);


`;

  const Avatar = `
<Avatar
alt="B"
src={require("../../assets/images/b66.png")}
sx={{ width: 100, height: 100 }}
/>

`;
  const SelectTextfield = `
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

`;

  const Textfield = `
<TextField
                      id="standard-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true
                      }}
                      variant="standard"
                    />


`;

const ImageTextfield = `
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

`;

const Button = `
<Button
className={classes.Button}
variant="contained"
onClick={handleSubmit}
startIcon={<FileUploadOutlinedIcon />}
>
Upload Floor Diagram
</Button>

`;
  return (
    <div>
      <CodeViewer headerText="useEffect Example" code={useEffect} />
      <CodeViewer headerText="Map1 Example" code={map1} />
      <CodeViewer headerText="Map2 Example" code={map2} />
      <CodeViewer
        headerText="Condition Rendering Example"
        code={ConditionRendering}
      />
      <CodeViewer headerText="setTimeout Example" code={setTimeout} />

      <CodeViewer headerText="MUI Avatar Example" code={Avatar} />

      <CodeViewer
        headerText="MUI Select Textfield Example"
        code={SelectTextfield}
      />

      <CodeViewer headerText="MUI Textfield Example" code={Textfield} />
      <CodeViewer headerText="MUI Image Textfield Example" code={ImageTextfield} />
      <CodeViewer headerText="MUI Button" code={Button} />
    </div>
  );
};

export default CodeExample;
