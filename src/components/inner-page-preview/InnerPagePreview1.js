import './InnerPagePreview.css';

function InnerPagePreview({ page }) {
  return (
    <div
      className="inner-page"
      style={{backgroundColor: page.backgroundColor}}
    >
      {page.layout === 0 && (
        <div className="upload-photo">
          Upload a photo
          <input className="upload-photo-input" type="file" />
        </div>
      )}
      {page.layout === 1 && (
        <>
          <div className="upload-photo">
            Upload a photo
            <input className="upload-photo-input" type="file" />
          </div>
          <div className="upload-photo">
            Upload a photo
            <input className="upload-photo-input" type="file" />
          </div>
        </>
      )}
      
    </div>
  );
}

export default InnerPagePreview;
