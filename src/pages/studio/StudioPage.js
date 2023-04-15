import { useContext, useState, useEffect } from 'react';
import luminance from 'color-luminance';
import Form from 'react-bootstrap/Form';
import HeaderMenu from '../../components/header-menu/HeaderMenu';
import IconArrowRight from '../../components/icon-arrow-right/IconArrowRight';
import IconArrowLeft from '../../components/icon-arrow-left/IconArrowLeft';
import Button from '../../components/button/Button';
import InnerPagePreview from '../../components/inner-page-preview/InnerPagePreview';
import InnerPageForm from '../../components/inner-page-form/InnerPageForm';
import AppContext from '../../AppContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './StudioPage.css';

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function StudioPage({ onChange }) {
  const appContext = useContext(AppContext);

  const [currentStep, setCurrentStep] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const handleChange = (field, value) => {
    onChange({
      ...appContext,
      cover: {
        ...appContext.cover,
        [field]: value,
      }
    });
  };

  const handlePageChange = (changedPage) => {
    const changedPages = [...appContext.pages];
    changedPages[currentStep - 1] = changedPage;

    onChange({
      ...appContext,
      pages: changedPages,
    });
  }

  const addPage = (event) => {
    event.preventDefault();
    const pagesCount = appContext.pages.length;

    onChange({
      ...appContext,
      pages: [
        ...appContext.pages,
        {
          layout: 0,
          backgroundColor: "#ffffff",
          textColor: "#333333",
          photos: [],
        },
      ]
    });

    setCurrentStep(pagesCount + 1);
  }

  const nextPage = () => {
    setCurrentStep(currentStep + 1);
  }

  const previousPage = () => {
    setCurrentStep(currentStep - 1);
  }

  useEffect(() => {
    if (appContext.cover.backgroundColor) {
      const rgb = hexToRgb(appContext.cover.backgroundColor);
      const lum = luminance(rgb.r, rgb.g, rgb.b);
      setIsDark(lum < 70);
    }
  }, [appContext.cover.backgroundColor])

  return (
    <div className="studio">
      <header className="headline-header">
        <HeaderMenu/>
      </header>

      <main>
        <div>
          <div className="container">
            <div className="preview-container">
              <div className="cover-by-photos">
                <button
                  className={currentStep === 0 ? "arrow-left disabled" : "arrow-left"}
                  aria-label="Previous page"
                  onClick={previousPage}
                >
                  <IconArrowLeft />
                </button>
                {currentStep === 0 && (
                  <div
                    className={`cover-page ${isDark ? 'dark' : ''}`}
                    style={{
                      backgroundColor: appContext.cover.backgroundColor,
                      color: appContext.cover.textColor,
                    }}
                  >
                    <div className="cover-title">{appContext.cover.title}</div>
                    <div className="cover-subtitle">{appContext.cover.subtitle}</div>
                  </div>
                )}
                {currentStep > 0 && (
                  <InnerPagePreview
                    page={appContext.pages[currentStep - 1]}
                    onChange={(changedPage) => handlePageChange(changedPage)}
                  />
                )}
                <button
                  className={currentStep === appContext.pages.length ? "arrow-right disabled" : "arrow-right"}
                  aria-label="Next page"
                  onClick={nextPage}
                >
                  <IconArrowRight />
                </button>
              </div>
            </div>

            <div className="option-photocover">
              <Form>
                {currentStep === 0 && (
                  <>
                    <Form.Group className="form-group">
                      <Form.Label className="size-title">Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Title"
                        value={appContext.cover.title}
                        onChange={(event) => handleChange('title', event.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="form-group">
                      <Form.Label className="size-title">Subtitle</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Subtitle"
                        value={appContext.cover.subtitle}
                        onChange={(event) => handleChange('subtitle', event.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="form-group">
                      <Form.Label htmlFor="theme" className="size-title">Background color</Form.Label>
                      <Form.Control
                        type="color"
                        placeholder="Background color"
                        value={appContext.cover.backgroundColor}
                        onChange={(event) => handleChange('backgroundColor', event.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="form-group">
                      <Form.Label htmlFor="theme" className="size-title">Text color</Form.Label>
                      <Form.Control
                        type="color"
                        placeholder="Text color"
                        value={appContext.cover.textColor}
                        onChange={(event) => handleChange('textColor', event.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3 form-group">
                      <Form.Label className="size-title">Size</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        value={appContext.cover.size}
                        onChange={(event) => handleChange('size', event.target.value)}
                      >
                        <option>Open this select menu</option>
                        <option value="1">9×13</option>
                        <option value="2">10х15 (A6)</option>
                        <option value="3">13×18</option>
                        <option value="3">15×21 (A5)</option>
                        <option value="3">20×30 (A4)</option>
                        <option value="3">30×40</option>
                        <option value="3">30×45 (A3)</option>
                      </Form.Select>
                    </Form.Group>
                  </>
                )}
                {currentStep > 0 && (
                  <InnerPageForm
                    page={appContext.pages[currentStep - 1]}
                    onChange={(changedPage) => handlePageChange(changedPage)}
                  />
                )}
                <Button onClick={addPage}>Add page</Button>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudioPage;
