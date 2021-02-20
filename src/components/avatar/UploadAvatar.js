import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import { uploadAvatar } from '../../actions/userAction';
import { showAlert } from '../../actions/alertAction';
import './uploadAvatar.css';

const UploadAvatar = ({
  closeModalFunc,
  uploadAvatar,
  showAlert
}) => {
  const [avatarImage, setAvatarImage] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!avatarImage) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    }
    fileReader.readAsDataURL(avatarImage);
  }, [avatarImage]);

  const handlePickedImage = (e) => {
    let pickedImage;
    if (e.target.files && e.target.files.length === 1) {
      pickedImage = e.target.files[0];
      setAvatarImage(pickedImage);
      setIsValid(true);
    }
    else {
      setIsValid(false);
    }
  }

  const handleUploadAvatar = async () => {
    if (isValid) {
      await uploadAvatar(avatarImage);
      closeModalFunc(false);
      showAlert('Avatar was successfully edited!', 'success');
    }
  }

  const handlePickingImage = () => {
    filePickerRef.current.click();
  }

  return (
    <div>
      <input
        ref={filePickerRef}
        type="file"
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        onChange={handlePickedImage}
      />
      <div className="image-upload">
        <div className="image-upload-preview" onClick={handlePickingImage}>
          {previewUrl ? <img src={previewUrl} alt="avatar preview" /> : <p>Click here to choose an image.</p>}
        </div>
        <button
          className="btn btn-upload-avatar"
          onClick={handleUploadAvatar}
          disabled={!isValid}>EDIT AVATAR</button>
      </div>
    </div>
  )
}

export default connect(null, {
  uploadAvatar,
  showAlert
})(UploadAvatar);
