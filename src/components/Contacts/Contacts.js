import React from "react";
import Title from "../../components/Title/Title";
import ContForm from "./ContForm";
import Info from "./Info";
import "./Contacts.css";
import { Bounce } from "react-awesome-reveal";

const Contacts = () => {
  return (
    <div className="contacts">
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
    </div>
  );
};

export default Contacts;
