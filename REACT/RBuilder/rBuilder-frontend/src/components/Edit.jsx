import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RiFileEditLine } from "react-icons/ri";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import {
  getAResumeHistoryAPI,
  updateResumeHistoryAPI,
} from "../services/allAPI";
import { useEffect } from "react";
import { useState } from "react";

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

const Edit = ({ resumeId }) => {
  console.log(resumeId);

  const [resumeDetails, setResumeDetails] = useState({
    id: "",
    personalData: {
      name: "",
      jobTitle: "",
      location: "",
      email: "",
      phoneNumber: "",
      github: "",
      linkedin: "",
      portfolio: "",
    },
    education: {
      course: "",
      college: "",
      university: "",
      year: "",
    },
    experience: {
      jobRole: "",
      company: "",
      location: "",
      duration: "",
    },
    skills: [],
    summary: "",
  });

  const [inputSkill, setInputSkill] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getAResume();
  }, [resumeId]);

  const getAResume = async () => {
    const result = await getAResumeHistoryAPI(resumeId);
    // console.log(result);
    setResumeDetails(result.data);
  };

  const updateResume = async () => {
    const result = await updateResumeHistoryAPI(resumeId, resumeDetails);
    console.log(result);
  };

  const addSkill = (skill) => {
    // console.log(skill);
    if (resumeDetails.skills.includes(skill)) {
      alert("Skill already exists");
    } else {
      setResumeDetails((data) => ({
        ...data,
        skills: [...data.skills, skill],
      }));
    }
  };

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
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
              <div>
                <h3>Personal Details</h3>
                <div className="d-flex row p-3">
                  <TextField
                    id="standard-basic"
                    label="Full Name"
                    variant="standard"
                    value={resumeDetails?.personalData?.name}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        personalData: {
                          ...resumeDetails.personalData,
                          name: e.target.value,
                        },
                      })
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="Job Title"
                    variant="standard"
                    value={resumeDetails?.personalData?.jobTitle}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        personalData: {
                          ...resumeDetails.personalData,
                          jobTitle: e.target.value,
                        },
                      })
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="Location"
                    variant="standard"
                    value={resumeDetails?.personalData?.location}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        personalData: {
                          ...resumeDetails.personalData,
                          location: e.target.value,
                        },
                      })
                    }
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
                    value={resumeDetails?.personalData?.email}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        personalData: {
                          ...resumeDetails.personalData,
                          email: e.target.value,
                        },
                      })
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="Phone number"
                    variant="standard"
                    value={resumeDetails?.personalData?.phoneNumber}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        personalData: {
                          ...resumeDetails.personalData,
                          phoneNumber: e.target.value,
                        },
                      })
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="Github Link"
                    variant="standard"
                    value={resumeDetails?.personalData?.github}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        personalData: {
                          ...resumeDetails.personalData,
                          github: e.target.value,
                        },
                      })
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="LinkedIn Link"
                    variant="standard"
                    value={resumeDetails?.personalData?.linkedin}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        personalData: {
                          ...resumeDetails.personalData,
                          linkedin: e.target.value,
                        },
                      })
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="Portfolio Link"
                    variant="standard"
                    value={resumeDetails?.personalData?.portfolio}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        personalData: {
                          ...resumeDetails.personalData,
                          portfolio: e.target.value,
                        },
                      })
                    }
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
                    value={resumeDetails?.education?.course}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        education: {
                          ...resumeDetails.education,
                          course: e.target.value,
                        },
                      })
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="College Name"
                    variant="standard"
                    value={resumeDetails?.education?.college}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        education: {
                          ...resumeDetails.education,
                          college: e.target.value,
                        },
                      })
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="University"
                    variant="standard"
                    value={resumeDetails?.education?.university}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        education: {
                          ...resumeDetails.education,
                          university: e.target.value,
                        },
                      })
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="Year of Passout"
                    variant="standard"
                    value={resumeDetails?.education?.year}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        education: {
                          ...resumeDetails.education,
                          year: e.target.value,
                        },
                      })
                    }
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
                    value={resumeDetails?.experience?.jobRole}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        experience: {
                          ...resumeDetails.experience,
                          jobRole: e.target.value,
                        },
                      })
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="Company Name"
                    variant="standard"
                    value={resumeDetails?.experience?.company}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        experience: {
                          ...resumeDetails.experience,
                          company: e.target.value,
                        },
                      })
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="Location"
                    variant="standard"
                    value={resumeDetails?.experience?.location}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        experience: {
                          ...resumeDetails.experience,
                          location: e.target.value,
                        },
                      })
                    }
                  />
                  <TextField
                    id="standard-basic"
                    label="Duration"
                    variant="standard"
                    value={resumeDetails?.experience?.duration}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        experience: {
                          ...resumeDetails.experience,
                          duration: e.target.value,
                        },
                      })
                    }
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
                      onChange={(e) => setInputSkill(e.target.value)}
                    />
                    <Button
                      onClick={() => addSkill(inputSkill)}
                      variant="text"
                      sx={{ maxWidth: "40px" }}
                    >
                      Add
                    </Button>
                  </Stack>
                  <div>
                    <h5>Selected: </h5>
                    {resumeDetails?.skills?.length > 0
                      ? resumeDetails?.skills.map((item, index) => (
                          <Button variant="outlied" size="small">
                            {item}
                          </Button>
                        ))
                      : ""}
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
                    value={resumeDetails?.summary}
                    onChange={(e) =>
                      setResumeDetails({
                        ...resumeDetails,
                        summary: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </Typography>
            <Button onClick={updateResume} variant="contained">
              Update
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Edit;
