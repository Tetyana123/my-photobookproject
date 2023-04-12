import './InnerPagePreview.css';
import  CustomTextInput from "../../components/description-event/DescriptionPhoto";


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

      {page.layout === 2 && (
        <>
          <div className="flex-container"> 
            <div className="upload-photo1">
             <input className="upload-photo-input" type="file" />
            </div>
          </div> 

          <div className="upload-photo">
            Upload a photo
            <input className="upload-photo-input" type="file" />
          </div>
        </>
      )}

      {page.layout === 3 && (
        <>
          <div className="upload-photo">
            Upload a photo
            <input className="upload-photo-input" type="file" />
          </div>

          <div className="flex-container"> 
            <div className="upload-photo1">
              Upload a photo
             <input className="upload-photo-input" type="file" />
            </div>
            <div className="upload-photo1">
              Upload a photo
             <input className="upload-photo-input" type="file" />
            </div>
          </div> 
        </>
      )}

      {page.layout === 4 && (
        <>
          <div className="flex-container"> 
            <div className="upload-photo1">
              Upload a photo
             <input className="upload-photo-input" type="file" />
            </div>
            <div className="upload-photo1">
              Upload a photo
             <input className="upload-photo-input" type="file" />
            </div>
          </div> 

          <div className="flex-container"> 
            <div className="upload-photo1">
              Upload a photo
             <input className="upload-photo-input" type="file" />
            </div>
            <div className="upload-photo1">
              Upload a photo
             <input className="upload-photo-input" type="file" />
            </div>
          </div> 
        </>
      )}  

      {page.layout === 5 && (
        <>
         <div className="flex-container"> 
          <div className="upload-photo">
            Upload a photo
            <input className="upload-photo-input" type="file" />
          </div>

          <div className="container-description">
           <CustomTextInput/>
          </div>
         </div>
        </>
      )}

      {page.layout === 6 && (
        <>
         {/* <div className="container-discription"> */}

           <div className="upload-photo">
             Upload a photo
             <input className="upload-photo-input" type="file" />
           </div>

           <CustomTextInput/>
           
        {/* </div> */}
        </>
      )}

      {page.layout === 7 && (
        <>
         {/* <div className="container-discription"> */}

            <CustomTextInput/>

            <div className="upload-photo">
             Upload a photo
             <input className="upload-photo-input" type="file" />
            </div>

         {/* </div> */}
        </>
      )}

      {page.layout === 8 && (
        <>
          <div className="flex-container"> 

            <div className="upload-photo1">
              Upload a photo
             <input className="upload-photo-input" type="file" />
            </div>

            <CustomTextInput/>
            
          </div> 

          <div className="flex-container"> 

            <CustomTextInput/>

            <div className="upload-photo1">
              Upload a photo
             <input className="upload-photo-input" type="file" />
            </div>

          </div> 
        </>
      )} 

    </div>
  );
}

export default InnerPagePreview;
