import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";

import React, { useEffect, useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import "./CreatePostModal.css";
import {GoLocation} from "react-icons/go";
import { GrEmoji } from "react-icons/gr";
import { CloseButton } from "@chakra-ui/close-button";
import { Button } from "@chakra-ui/button";


const CreatePostModal = ({ onOpen, isOpen, onClose }) => {
  const finalRef = React.useRef(null);
  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [caption,setCaption]=useState("");

  useEffect(() => {
    console.log("files", file);
  }, [file]);

  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (
      droppedFile.type.startsWith("image/") ||
      droppedFile.type.startsWith("video/")
    ) {
      setFile(droppedFile);
    }
  }

  function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  }

  function handleDragLeave(event) {
    setIsDragOver(false);
  }

  const handleOnChange = (e) => {
    console.log(e.target.value);

    const file = e.target.files[0];
    if (
      file &&
      (file.type.startsWith("image/") || file.type.startsWith("video/"))
    ) {
      setFile(file);
    } else {
      setFile(null);
      alert("Please select an image/video file.");
    }
  };

  return (
    <div>
      <Modal
        size={"4xl"}
        className=""
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setFile(null);
          setIsDragOver(false);
        }}
      >
        <ModalOverlay />
        <ModalContent fontSize={"sm"}>
            
            <div className="flex justify-between py-1 px-10 items-center">
                <p>Create New Post</p>
                <Button className="inline-flex" colorScheme='blue' size={"sm"} variant='ghost'>Share</Button>
            </div>
          
          <hr className="hrLine" />

          <ModalBody>
            <div className="modalBodyBox flex h-[70vh] justify-between">
              <div className="w-[50%]">
                {!file && (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`drag-drop h-full`}
                  >
                    <div className="flex justify-center flex-col items-center">
                      <FaPhotoVideo className={`text-3xl ${isDragOver?"text-blue-800":""}`} />
                      <p>Drag photos or videos here </p>
                    </div>

                    <label for="file-upload" className="custom-file-upload">
                      Select from computer
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      accept="image/*, video/*"
                      multiple
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                )}
               
                {file && (
                  <img
                    className=""
                    src={URL.createObjectURL(file)}
                    alt="dropped-img"
                  />
                )}
              </div>
<div className="w-[1px] border h-full"></div>
              <div className="w-[50%]">
                <div className="flex items-center px-2">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://cdn.pixabay.com/photo/2023/02/28/03/42/ibex-7819817_640.jpg"
                    alt=""
                  />{" "}
                  <p className="font-semibold ml-4">ashok.zarmariya</p>
                </div>
                <div className="px-2">
                  <textarea
                    className="captionInput"
                    placeholder="Write a caption..."
                    name="caption"
                    rows="8"
                    onChange={(e)=>setCaption(e.target.value)}
                  />
                  
                </div>
                <div className="flex justify-between px-2">
                    <GrEmoji/>
                <p className="opacity-70">{caption.length}/2,200</p>
                </div>
                <hr />
                <div className="p-2 flex justify-between items-center">
                    <input className="locationInput" type="text" placeholder="Add Location" />
                    <GoLocation/>
                </div>
                <hr />
              </div>
            </div>

            {/* <div className="py-20">show off</div> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
