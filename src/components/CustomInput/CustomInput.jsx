import Form from "react-bootstrap/Form";

const CustomInput = ({ type, placeholder, width }) => {
  return (
    <>
      <Form.Control
        style={{
          borderRadius: "10px",
          padding: "2%",
          margin: "1% 0%",
          width: `${width || 100}%`,
        }}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};
export default CustomInput;
