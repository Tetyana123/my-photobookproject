import Form from "react-bootstrap/Form";
import './InnerPageForm.css';

function InnerPageForm({ page, onChange }) {
  const handleChange = (field, value, event) => {
    event.preventDefault();
    onChange({
      ...page,
      [field]: value,
    });
  };

  return (
    <>
      <Form.Group className="form-group">
        <Form.Label className="size-title">Layout</Form.Label>
        <ul className="layout-list">
          <li className="layout-item">
            <button
              className={`layout-button layout-0 ${page.layout === 0 ? 'active' : ''}`}
              onClick={(event) => handleChange('layout', 0, event)}
            />
          </li>
          <li className="layout-item">
            <button
              className={`layout-button layout-1 ${page.layout === 1 ? 'active' : ''}`}
              onClick={(event) => handleChange('layout', 1, event)}
            />
          </li>
          <li className="layout-item">
            <button
              className={`layout-button layout-2 ${page.layout === 2 ? 'active' : ''}`}
              onClick={(event) => handleChange('layout', 2, event)}
            />
          </li>
          <li className="layout-item">
            <button
              className={`layout-button layout-3 ${page.layout === 3 ? 'active' : ''}`}
              onClick={(event) => handleChange('layout', 3, event)}
            />
          </li>
          <li className="layout-item">
            <button
              className={`layout-button layout-4 ${page.layout === 4 ? 'active' : ''}`}
              onClick={(event) => handleChange('layout', 4, event)}
            />
          </li>
          <li className="layout-item">
            <button
              className={`layout-button layout-5 ${page.layout === 5 ? 'active' : ''}`}
              onClick={(event) => handleChange('layout', 5, event)}
            />
          </li>
          <li className="layout-item">
            <button
              className={`layout-button layout-6 ${page.layout === 6 ? 'active' : ''}`}
              onClick={(event) => handleChange('layout', 6, event)}
            />
          </li>
          <li className="layout-item">
            <button
              className={`layout-button layout-7 ${page.layout === 7 ? 'active' : ''}`}
              onClick={(event) => handleChange('layout', 7, event)}
            />
          </li>
          <li className="layout-item">
            <button
              className={`layout-button layout-8 ${page.layout === 8 ? 'active' : ''}`}
              onClick={(event) => handleChange('layout', 8, event)}
            />
          </li>
        </ul>
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label className="size-title">Background color</Form.Label>
        <Form.Control
          type="color"
          placeholder="Background color"
          value={page.backgroundColor}
          onChange={(event) => handleChange('backgroundColor', event.target.value, event)}
        />
      </Form.Group>
    </>
  );
}

export default InnerPageForm;
