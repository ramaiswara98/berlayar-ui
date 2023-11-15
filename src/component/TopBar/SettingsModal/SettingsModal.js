import React, { useState } from 'react'

import './SettingsModal.css'
import Input from '../../../shared_component/Input/Input'
import Button from '../../../shared_component/Button/Button'
import BerlayarModal from '../../../shared_component/Modal/Modal'

function SettingsModal() {
    const [modalDelete, setModalDelete] = useState(false);
    const [modalClear, setModalClear] = useState(false);
    const [modalExport, setModalExport] = useState(false);

    const toggleDelete = ()=> {
        setModalDelete(!modalDelete)
    }

    const toggleClear = ()=>{
        setModalClear(!modalClear)
    }

    const toggleExport = () => {
        setModalExport(!modalExport)
    }
  return (
    <div>
      <BerlayarModal
        title={"Delete Account"}
        show={modalDelete}
        toggle={()=>{toggleDelete()}}
        content={
          <div className="delete-modal-container">
            <ul>
              <li>
                <p>Once deleted it cannot be undone</p>
              </li>
              <li>
                <p>All of your data would be lost </p>
              </li>
              <li>
                <p>
                  This account’s access to connected API, URL, and repositories
                  will be removed
                </p>
              </li>
            </ul>
            <br />
            <p>Are you sure you want to delete your account?</p>
            <br />
            <Button primary={true} width={"150px"} text={"Delete"} />
          </div>
        }
      />

      <BerlayarModal
        title={"Clear all chats"}
        show={modalClear}
        toggle={()=>{toggleClear()}}
        content={
          <div className="delete-modal-container">
            <p>Are you sure you want to clear all of your chats?</p>
            <br />
            <Button primary={true} width={"150px"} text={"Clear"} />
          </div>
        }
      />

    <BerlayarModal
        title={"Export data"}
        show={modalExport}
        toggle={()=>{toggleExport()}}
        content={
          <div className="delete-modal-container">
            <p>It may take some time to process. You will be notified through email when it is ready.</p>
            <br />
            <Button primary={false} width={"150px"} text={"Export"} />
          </div>
        }
      />
      <div>
        <p>Change Theme</p>
        <div className="settings-modal-button-container">
          <div className="settings-modal-chooser-light">
            <p>Light</p>
          </div>
          <div className="settings-modal-chooser-dark">
            <p>Dark</p>
          </div>
        </div>
      </div>
      <div className="settings-modal-second-row">
        <p>Refactor codebase</p>
        <div className="settings-modal-input-container">
          <p>Deep Lake API:</p>
          <Input placeholder={"Enter API"} width={"100%"} />
        </div>
        <div className="settings-modal-input-container">
          <p>Github Respository URL:</p>
          <Input placeholder={"Enter URL"} width={"100%"} />
        </div>
        <div className="settings-modal-input-container">
          <p>Github Respository token (if private respository):</p>
          <Input placeholder={"Enter Respository token"} width={"100%"} />
        </div>
        <div className="settings-modal-input-container">
          <p>Open AI API:</p>
          <Input placeholder={"Enter API"} width={"100%"} />
        </div>
        <div className="settings-modal-input-container">
          <p>Enter Password to confirm changes:</p>
          <Input placeholder={"Enter password"} width={"100%"} />
        </div>
        <br />
        <Button primary={false} text={"Confirm"} width={"150px"} />
      </div>
      <div className="settings-modal-third-row">
        <div className="settings-modal-third-row-item">
          <p>Export Data</p>
          <Button primary={false} text={"Export"} width={"150px"} onClick={()=>toggleExport()} />
        </div>
        <div className="settings-modal-third-row-item">
          <p>Clear all chats</p>
          <Button primary={true} text={"Clear"} width={"150px"} onClick={()=>{toggleClear()}} />
        </div>
        <div className="settings-modal-third-row-item">
          <p>Delete Account</p>
          <Button primary={true} text={"Delete"} width={"150px"} onClick={()=>{toggleDelete()}}/>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal