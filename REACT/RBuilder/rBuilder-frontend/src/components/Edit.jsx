import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RiFileEditLine } from "react-icons/ri";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const Edit = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {" "}
      <div>
        <Button onClick={handleOpen}>
          <RiFileEditLine className="fs-3" />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              align="center"
            >
              Edit details
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2}}>
              <div>
                <h3>Personal Details</h3>
                <div className="d-flex row p-3">
                  <TextField
                    id="standard-basic"
                    label="Full Name"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Job Title"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Location"
                    variant="standard"
                  />
                </div>
              </div>

              <div>
                <h3>Contact Details</h3>
                <div className="d-flex row p-3">
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Phone number"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Github Link"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="LinkedIn Link"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Portfolio Link"
                    variant="standard"
                  />
                </div>
              </div>

              <div>
                <h3>Educational Details</h3>
                <div className="d-flex row p-3">
                  <TextField
                    id="standard-basic"
                    label="Course Name"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="College Name"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="University"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Year of Passout"
                    variant="standard"
                  />
                </div>{" "}
              </div>

              <div>
                <h3>Proffessional Details</h3>
                <div className="d-flex row p-3">
                  <TextField
                    id="standard-basic"
                    label="Job or Internship"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Company Name"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Location"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Duration"
                    variant="standard"
                  />
                </div>
              </div>

              <div>
                <h3>Skills</h3>
                <Box>
                  <Stack spacing={2}>
                    <TextField
                      id="standard-basic"
                      label="Job or Internship"
                      variant="standard"
                    />
                    <Button variant="text" sx={{ maxWidth: "40px" }}>
                      Add
                    </Button>
                  </Stack>
                  <div>
                    <h5>Suggestions: </h5>
                    <Button variant="outlied" size="small">
                      React
                    </Button>
                  </div>
                </Box>
              </div>

              <div>
                <h3>Proffessional Summary</h3>
                <div>
                  <TextField
                    id="standard-multiline-static"
                    label="Summary"
                    multiline
                    rows={4}
                    defaultValue="eg: I'm a passionate Web Developer"
                    variant="standard"
                  />
                </div>
              </div>
            </Typography>
            <Button variant="contained">Update</Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Edit;
