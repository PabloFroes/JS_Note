import React, {Fragment, useState} from "react";
import Header from "../../../components/header";
import Notes from "../../../components/notes"
import "../../../styles/notes.scss"


function NotesIndexScreen() {
  const [isOpen, setIsOpen] = useState(false)

  return(
  <Fragment>
      <Header setIsOpen={setIsOpen}/>
      <Notes isOpen={isOpen} setIsOpen={setIsOpen}/>
    </Fragment>
  )
}

export default NotesIndexScreen
