import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/100/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className="app-container">
      <div className="photo-list">
        <h2>Photo and Title List</h2>
        <table className="photo-table">
          <thead>
            <tr>
              <th className="table-header">Photo</th>
              <th className="table-header">Title</th>
            </tr>
          </thead>
          <tbody>
            {photos.map((photo) => (
              <tr
                key={photo.id}
                onClick={() => handlePhotoClick(photo)}
                className="table-row"
              >
                <td className="table-cell">
                  <img
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    className="thumbnail"
                  />
                </td>
                <td className="table-cell">{photo.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="photo-detail">
        <h2>Photo Details</h2>
        {selectedPhoto ? (
          <table className="detail-table">
            <thead>
              <tr>
                <th className="table-header">Field</th>
                <th className="table-header">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-cell">Album ID</td>
                <td className="table-cell">{selectedPhoto.albumId}</td>
              </tr>
              <tr>
                <td className="table-cell">ID</td>
                <td className="table-cell">{selectedPhoto.id}</td>
              </tr>
              <tr>
                <td className="table-cell">Title</td>
                <td className="table-cell">{selectedPhoto.title}</td>
              </tr>
              <tr>
                <td className="table-cell">URL</td>
                <td className="table-cell">
                  <a
                    href={selectedPhoto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedPhoto.url}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table-cell">Thumbnail</td>
                <td className="table-cell">
                  <img
                    src={selectedPhoto.thumbnailUrl}
                    alt={selectedPhoto.title}
                    className="thumbnail-detail"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Please select a photo to see the details.</p>
        )}
      </div>
    </div>
  );
};

export default App;
