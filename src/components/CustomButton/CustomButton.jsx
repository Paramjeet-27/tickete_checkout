import Button from "react-bootstrap/Button";

const CustomButton = ({ btnName, btnVariant, width }) => {
  return (
    <>
      <Button
        style={{
          borderRadius: "10px",
          letterSpacing: "0.1rem",
          width: `${width}%`,
          backgroundColor: "black",
          color: "white",
        }}
        variant={btnVariant}
      >
        {btnName}
      </Button>
    </>
  );
};
export default CustomButton;
