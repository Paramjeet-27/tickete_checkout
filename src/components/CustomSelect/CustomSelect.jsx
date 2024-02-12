import Form from "react-bootstrap/Form";

const CustomSelect = ({ title, width }) => {
  return (
    <>
      <Form.Select
        style={{
          borderRadius: "10px",
          padding: "2%",
          margin: "1% 0%",
          width: `${width || 100}%`,
        }}
      >
        <option>{title}</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </>
  );
};
export default CustomSelect;
