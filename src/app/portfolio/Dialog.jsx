import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function AlertDialog({ item, index }) {
  const [open, setOpen] = React.useState(false);
  const [indexSelect, setIndexSelect] = React.useState(-1);
  const handleClickOpen = () => {
    setIndexSelect(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderArrowPrev = (clickHandler, hasPrev, label) => {
    return (
      <button
        onClick={clickHandler}
        disabled={!hasPrev}
        aria-label={label}
        style={{
          position: "absolute",
          top: "60%",

          transform: "translateY(-50%)",
          background: "none",
          border: "none",

          fontSize: "24px",
          color: "black",
          zIndex: 1000,
        }}
      >
        &#9664; {/* Left arrow */}
      </button>
    );
  };

  const renderArrowNext = (clickHandler, hasNext, label) => {
    return (
      <button
        onClick={clickHandler}
        disabled={!hasNext}
        aria-label={label}
        style={{
          position: "absolute",
          top: "60%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",

          fontSize: "24px",
          color: "black",
        }}
      >
        &#9654; {/* Right arrow */}
      </button>
    );
  };

  return (
    <React.Fragment>
      <motion.button
        className="bg-red-600 text-white rounded-md p-4"
        onClick={handleClickOpen}
        animate={{ scale: [1, 1.1, 1] }} // Scale up to 1.1 and back to 1
        transition={{
          duration: 0.6, // Duration of each scale cycle
          repeat: Infinity, // Repeat the animation indefinitely
          repeatType: "mirror", // Mirrors the scale up and down smoothly
        }}
      >
        Show Demo
      </motion.button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // PaperProps={{
        //   style: {
        //     background: "black",
        //   },
        // }}
        maxWidth="md" // Options are 'xs', 'sm', 'md', 'lg', 'xl', or `false` to disable max width
        fullWidth // Ensures the Dialog takes the full width of the defined `maxWidth`
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Carousel
              autoPlay={true}
              // infiniteLoop={true}
              // showArrows={false} // Hide default arrows since we are rendering custom ones
              dynamicHeight={false} // Optional: Set based on your requirements
              showIndicators={false}
              renderArrowPrev={renderArrowPrev}
              renderArrowNext={renderArrowNext}
            >
              {item &&
                item.data &&
                item.data.map((item) => (
                  <>
                    <DialogTitle id="alert-dialog-title">
                      {item.title}
                    </DialogTitle>
                    <div
                      style={{ width: "100%", height: "100%" }}
                      className="bg-black"
                    >
                      <img
                        src={item.url}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </>
                ))}
            </Carousel>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleClose}
            className="bg-red-700 text-white hover:bg-white hover:text-red-600 shadow-md px-4 py-2 rounded-md"
          >
            Close
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
