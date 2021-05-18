import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from '../button/Button';
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
  const [isValid, setIsValid] = useState(true);

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
      setPreviewUrl('');
    }
  }

  const handleUploadAvatar = async () => {
    if (isValid) {
      if (!avatarImage) {
        setIsValid(false);
        return;
      }
      await uploadAvatar(avatarImage);
      closeModalFunc();
      showAlert('Successfully updated your avatar.', 'success');
    } else {
      setIsValid(false);
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
        <div
          className={`image-upload-preview${!isValid ? '--error' : ''}`}
          onClick={handlePickingImage}>
          {previewUrl ? <img src={previewUrl} alt="avatar preview" /> : <p>Click here to choose an image.</p>}
        </div>
        {!isValid && <small className="notice-choose-avatar">Please choose an image.</small>}
        <Button
          btnType="button"
          btnColor="warning"
          btnText="Edit Avatar"
          onClickFunc={handleUploadAvatar}
          isDisabled={!isValid}
        />
      </div>
    </div>
  )
}

export default connect(null, {
  uploadAvatar,
  showAlert
})(UploadAvatar);
