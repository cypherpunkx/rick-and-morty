import React from "react";
import loader from "../../assets/loader_rick_and_morty.png";
import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ scale: 0.75 }}
      animate={{ scale: 1 }}
      transition={{
        repeat: Infinity,
        duration: 0.75,
        type: "tween",
        repeatType: "reverse",
      }}
      className="grid place-content-center"
    >
      <img src={loader} alt="loading" />
    </motion.div>
  );
}

export default Loader;
