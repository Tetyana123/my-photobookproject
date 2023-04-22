import {useContext, useRef} from 'react';
import  CustomTextInput from '../../components/description-event/DescriptionPhoto';
import './InnerPagePreview.css';
import AppContext from "../../AppContext";

function InnerPagePreview({ page, onChange }) {
  const appContext = useContext(AppContext);

  const refs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const handleChange = (field, value) => {
    onChange({
      ...page,
      [field]: value,
    });
  }

  const handleChangePhoto = (index) => {
    const file = refs[index].current.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const photos = page.photos;
      page.photos[index] = reader.result;

      onChange({
        ...page,
        photos: photos,
      });
    },false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div
      className={`inner-page ${appContext.size === '6' ? 'square' : ''}`}
      style={{
        backgroundColor: page.backgroundColor,
        color: page.textColor,
      }}
    >
      {page.layout === 0 && (
        <div
          className={`upload-photo ${page.photos[0] ? 'with-photo' : ''}`}
          style={page.photos[0] ?
            {
              backgroundImage: `url('${page.photos[0]}')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'transparent',
            } :
            {}
          }
        >
          <span className="upload-photo-text">Upload a photo</span>
          <input
            ref={refs[0]}
            className="upload-photo-input"
            type="file"
            onChange={() => handleChangePhoto(0)}
          />
        </div>
      )}

      {page.layout === 1 && (
        <>
          <div
          className={`upload-photo ${page.photos[0] ? 'with-photo' : ''}`}
          style={page.photos[0] ?
            {
              backgroundImage: `url('${page.photos[0]}')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'transparent',
            } :
            {}
          }
        >
           <span className="upload-photo-text">Upload a photo</span>
          <input
            ref={refs[0]}
            className="upload-photo-input"
            type="file"
            onChange={() => handleChangePhoto(0)}
          />
        </div>

        <div
              className={`upload-photo ${page.photos[1] ? 'with-photo' : ''}`}
              style={page.photos[1] ?
                {
                  backgroundImage: `url('${page.photos[1]}')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'transparent',
                } :
                {}
              }
            >
              <span className="upload-photo-text">Upload a photo</span>
              <input
                ref={refs[1]}
                className="upload-photo-input"
                type="file"
                onChange={() => handleChangePhoto(1)}
              />
            </div>
        </>
      )}

      {page.layout === 2 && (
        <>
          <div className="flex-container">
            <div
              className={`upload-photo ${page.photos[0] ? 'with-photo' : ''}`}
              style={page.photos[0] ?
                {
                  backgroundImage: `url('${page.photos[0]}')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'transparent',
                } :
                {}
              }
            >
              <span className="upload-photo-text">Upload a photo</span>
              <input
                ref={refs[0]}
                className="upload-photo-input"
                type="file"
                onChange={() => handleChangePhoto(0)}
              />
            </div>
            <div
              className={`upload-photo ${page.photos[1] ? 'with-photo' : ''}`}
              style={page.photos[1] ?
                {
                  backgroundImage: `url('${page.photos[1]}')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'transparent',
                } :
                {}
              }
            >
              <span className="upload-photo-text">Upload a photo</span>
              <input
                ref={refs[1]}
                className="upload-photo-input"
                type="file"
                onChange={() => handleChangePhoto(1)}
              />
            </div>
          </div>  

        <div
            className={`upload-photo ${page.photos[2] ? 'with-photo' : ''}`}
            style={page.photos[2] ?
              {
                backgroundImage: `url('${page.photos[2]}')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'transparent',
              } :
              {}
            }
          >
            <span className="upload-photo-text">Upload a photo</span>
            <input
              ref={refs[2]}
              className="upload-photo-input"
              type="file"
              onChange={() => handleChangePhoto(2)}
            />
          </div>
        </>
      )}

      {page.layout === 3 && (
        <>
          <div
            className={`upload-photo ${page.photos[0] ? 'with-photo' : ''}`}
            style={page.photos[0] ?
              {
                backgroundImage: `url('${page.photos[0]}')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'transparent',
              } :
              {}
            }
          >
            <span className="upload-photo-text">Upload a photo</span>
            <input
              ref={refs[0]}
              className="upload-photo-input"
              type="file"
              onChange={() => handleChangePhoto(0)}
            />
          </div>

          <div className="flex-container">
            <div
              className={`upload-photo ${page.photos[1] ? 'with-photo' : ''}`}
              style={page.photos[1] ?
                {
                  backgroundImage: `url('${page.photos[1]}')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'transparent',
                } :
                {}
              }
            >
              <span className="upload-photo-text">Upload a photo</span>
              <input
                ref={refs[1]}
                className="upload-photo-input"
                type="file"
                onChange={() => handleChangePhoto(1)}
              />
            </div>
            <div
              className={`upload-photo ${page.photos[2] ? 'with-photo' : ''}`}
              style={page.photos[2] ?
                {
                  backgroundImage: `url('${page.photos[2]}')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'transparent',
                } :
                {}
              }
            >
              <span className="upload-photo-text">Upload a photo</span>
              <input
                ref={refs[2]}
                className="upload-photo-input"
                type="file"
                onChange={() => handleChangePhoto(2)}
              />
            </div>
          </div> 
        </>
      )}

      {page.layout === 4 && (
        <>
          <div className="flex-container">
            <div
              className={`upload-photo ${page.photos[0] ? 'with-photo' : ''}`}
              style={page.photos[0] ?
                {
                  backgroundImage: `url('${page.photos[0]}')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'transparent',
                } :
                {}
              }
            >
              <span className="upload-photo-text">Upload a photo</span>
              <input
                ref={refs[0]}
                className="upload-photo-input"
                type="file"
                onChange={() => handleChangePhoto(0)}
              />
            </div>
            <div
              className={`upload-photo ${page.photos[1] ? 'with-photo' : ''}`}
              style={page.photos[1] ?
                {
                  backgroundImage: `url('${page.photos[1]}')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'transparent',
                } :
                {}
              }
            >
              <span className="upload-photo-text">Upload a photo</span>
              <input
                ref={refs[1]}
                className="upload-photo-input"
                type="file"
                onChange={() => handleChangePhoto(1)}
              />
            </div>
          </div>

          <div className="flex-container">
            <div
              className={`upload-photo ${page.photos[2] ? 'with-photo' : ''}`}
              style={page.photos[2] ?
                {
                  backgroundImage: `url('${page.photos[2]}')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'transparent',
                } :
                {}
              }
            >
              <span className="upload-photo-text">Upload a photo</span>
              <input
                ref={refs[2]}
                className="upload-photo-input"
                type="file"
                onChange={() => handleChangePhoto(2)}
              />
            </div>
            <div
              className={`upload-photo ${page.photos[3] ? 'with-photo' : ''}`}
              style={page.photos[3] ?
                {
                  backgroundImage: `url('${page.photos[3]}')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'transparent',
                } :
                {}
              }
            >
              <span className="upload-photo-text">Upload a photo</span>
              <input
                ref={refs[3]}
                className="upload-photo-input"
                type="file"
                onChange={() => handleChangePhoto(3)}
              />
            </div>
          </div>
        </>
      )}

      {page.layout === 5 && (
        <>
          <div className="flex-container">
            <div
             className={`upload-photo ${page.photos[0] ? 'with-photo' : ''}`}
             style={page.photos[0] ?
              {
              backgroundImage: `url('${page.photos[0]}')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'transparent',
              } :
              {}
             }
            >
            <span className="upload-photo-text">Upload a photo</span>
              <input
               ref={refs[0]}
               className="upload-photo-input"
               type="file"
               onChange={() => handleChangePhoto(0)}
            />
            </div>

            <div className="container-description">
              <CustomTextInput
                value={page.description0}
                onChange={(value) => handleChange('description0', value)}
              />
            </div>
          </div>
        </>
      )}

      {page.layout === 6 && (
        <>
           <div
             className={`upload-photo ${page.photos[0] ? 'with-photo' : ''}`}
             style={page.photos[0] ?
             {
              backgroundImage: `url('${page.photos[0]}')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'transparent',
             } :
             {}
            }
           >
           <span className="upload-photo-text">Upload a photo</span>
            <input
             ref={refs[0]}
             className="upload-photo-input"
             type="file"
             onChange={() => handleChangePhoto(0)}
            />
          </div>

           <CustomTextInput
             value={page.description0}
             onChange={(value) => handleChange('description0', value)}
           />
        </>
      )}

      {page.layout === 7 && (
        <>
         
        <CustomTextInput
              value={page.description0}
              onChange={(value) => handleChange('description0', value)}
            />

            <div
              className={`upload-photo ${page.photos[0] ? 'with-photo' : ''}`}
              style={page.photos[0] ?
              {
                backgroundImage: `url('${page.photos[0]}')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'transparent',
              } :
              {}
              }
            >
              <span className="upload-photo-text">Upload a photo</span>
               <input
                ref={refs[0]}
                className="upload-photo-input"
                type="file"
                onChange={() => handleChangePhoto(0)}
               />
            </div>

        </>
      )}

      {page.layout === 8 && (
        <>
          <div className="flex-container"> 

            <div
              className={`upload-photo ${page.photos[0] ? 'with-photo' : ''}`}
              style={page.photos[0] ?
              {
                backgroundImage: `url('${page.photos[0]}')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'transparent',
              } :
              {}
              }
            >
            <span className="upload-photo-text">Upload a photo</span>
              <input
                ref={refs[0]}
                className="upload-photo-input"
                type="file"
                onChange={() => handleChangePhoto(0)}
              />
           </div>

            <CustomTextInput
              value={page.description0}
              onChange={(value) => handleChange('description0', value)}
            />
            
          </div> 

          <div className="flex-container"> 

            <CustomTextInput
              value={page.description1}
              onChange={(value) => handleChange('description1', value)}
            />

            <div
             className={`upload-photo ${page.photos[1] ? 'with-photo' : ''}`}
             style={page.photos[1] ?
              {
                backgroundImage: `url('${page.photos[1]}')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'transparent',
              } :
              {}
              }
            >
            <span className="upload-photo-text">Upload a photo</span>
              <input
                ref={refs[1]}
                className="upload-photo-input"
                type="file"
                onChange={() => handleChangePhoto(1)}
              />
            </div>
          </div> 
        </>
      )} 
    </div>
  );
}
export default InnerPagePreview;
