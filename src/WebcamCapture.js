import React, { useCallback, useRef } from "react";
import "./WebcamCapture.css";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useNavigate } from "react-router-dom";
import { setCameraImage } from "./features/cameraSlice";
import BoltIcon from "@mui/icons-material/Bolt";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FlipCameraIosIcon from "@mui/icons-material/FlipCameraIos";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

function WebcamCapture() {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    navigate("/preview");
  }, [webcamRef, navigate]);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
        mirrored
      />
      <RadioButtonUncheckedIcon
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
      <div className="webcamCapture__toolbar">
        <BoltIcon className="webcamCapture__boltIcon" />
        <VideoCallIcon />
        <MusicNoteIcon />
        <FlipCameraIosIcon />
        <AddCircleIcon />
        <PersonAddIcon className="webcamCapture__add" />
        <SearchIcon className="webcamCapture__search" />
        <AccountCircleIcon className="webcamCapture__account" />
      </div>
    </div>
  );
}

export default WebcamCapture;
