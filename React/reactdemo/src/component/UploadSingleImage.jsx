import React, { useState, useEffect } from "react";

export default function UploadSingleImage() {
  const [imageSrc, setImageSrc] = useState("");
  const defaultImageUrl = "https://picsum.photos/id/237/200/300";

  // Load image from localStorage on component mount
  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setImageSrc(storedImage);
    } else {
      setImageSrc(defaultImageUrl);
    }
  }, []);

  // Handle image upload and preview
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setImageSrc(base64Image);
      };
      reader.onerror = () => alert("Error reading file");
      reader.readAsDataURL(file);
    }
  };

  // Save the image to localStorage
  const handleUpload = () => {
    if (imageSrc && imageSrc !== defaultImageUrl) {
      localStorage.setItem("uploadedImage", imageSrc);
      alert("Image uploaded successfully!");
    } else {
      alert("Please select an image first.");
    }
  };

  // Reset to the default image
  const handleDefault = () => {
    localStorage.removeItem("uploadedImage");
    setImageSrc(defaultImageUrl);
  };

  return (
    <div>
      <h1>Upload Single Image</h1>
      <div className="imageContainer">
        <img id="image-preview" src={imageSrc} alt="Image Preview" />
        <input
          type="file"
          className="fileInput"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>

      <div className="buttonContainer">
        <button onClick={handleUpload}>이미지 저장</button>
        <button onClick={handleDefault}>기본 이미지</button>
      </div>

      <style>
        {`
          .imageContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 200px;
            height: 200px;
          }
          #image-preview {
            border: 1px solid black;
            border-radius: 50%;
            width: 150px;
            height: 150px;
            position: relative;
            z-index: 1;
          }
          .fileInput {
            position: absolute;
            border-radius: 50%;
            opacity: 0;
            cursor: pointer;
            width: 150px;
            height: 150px;
            z-index: 2;
          }
          .buttonContainer {
            text-align: center;
            width: 200px;
          }
        `}
      </style>
    </div>
  );
}
