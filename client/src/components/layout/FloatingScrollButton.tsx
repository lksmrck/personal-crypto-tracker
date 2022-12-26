import React, { useState, useEffect, FC } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import { Fab } from "@mui/material";
import { scrollTop } from "../../utils/scrollTop";

const FloatingScrollButton: FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <div>
      {showButton && (
        <Fab
          sx={{
            position: "fixed",
            bottom: "6.5rem",
            right: "2rem",
            backgroundColor: "white",
            color: "#008080",
          }}
          onClick={scrollTop}
        >
          <BsArrowUpCircle size={70} />
        </Fab>
      )}
    </div>
  );
};
export default FloatingScrollButton;
