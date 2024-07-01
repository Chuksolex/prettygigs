import { useState } from 'react';
import axios from 'axios';

const SimpleUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'prettygigs_support'); // Replace with your Cloudinary upload preset

      const response = await axios.post('https://api.cloudinary.com/v1_1/bemultim/auto/upload', formData);
      console.log('Cloudinary upload response:', response.data);

      if (response.data.secure_url) {
        setUploadResult(response.data.secure_url);
      } else {
        throw new Error('Upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Simple Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
      {uploadResult && (
        <div>
          <h2>Upload Successful</h2>
          <p>File URL: <a href={uploadResult} target="_blank" rel="noopener noreferrer">{uploadResult}</a></p>
        </div>
      )}
      {error && (
        <div>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleUpload;
