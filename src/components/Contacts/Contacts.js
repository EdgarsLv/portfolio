import React from "react";
import Title from "../../components/Title/Title";
import ContForm from "./ContForm";
import Info from "./Info";
import "./Contacts.css";
import { Bounce } from "react-awesome-reveal";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    // x: "-100vw",
    opacity: 0,
  },
  visible: {
    // x: "0",
    opacity: 1,
    transition: {
      opacity: { delay: 0.2, duration: 0.5 },
    },
  },
  exit: {
    // x: "100vw",
    opacity: 0,
    transition: { duration: 0.7, ease: "linear" },
  },
};

const Contacts = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="contacts"
    >
      <Title title="Contacts " content="contacts" />
      <div className="cont">
        <div className="row">
          <ContForm />
          <Info />
        </div>
      </div>
      <div className="row-cols-1">
        <div className="footer">
          <Bounce cascade>
            <p>&copy; 2020</p>
            <p>Edgars Pūcēns</p>
            <p>Web site created using: create-react-app</p>
          </Bounce>
        </div>
      </div>
    </motion.div>
  );
};

export default Contacts;
