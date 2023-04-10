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
