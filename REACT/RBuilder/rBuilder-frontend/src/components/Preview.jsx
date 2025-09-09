import { FaFileDownload } from "react-icons/fa";
import Stack from "@mui/material/Stack";
import { RiFileEditLine } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import Button from "@mui/material/Button";

const Preview = () => {
  return (
    <div className="p-3">
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <Button>
          <FaFileDownload className="fs-3" />
        </Button>
        <Button>
          <RiFileEditLine className="fs-3" />
        </Button>
        <Button>
          <FaHistory className="fs-3" />
        </Button>
      </Stack>
    </div>
  );
};
export default Preview;
