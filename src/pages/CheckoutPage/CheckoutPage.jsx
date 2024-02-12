import FAQBox from "../../components/FAQBox/FAQBox";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HoldTimer from "../../components/HoldTimer/HoldTimer";
import PaymentSummary from "../../components/PaymentSummary/PaymentSummary";

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <HoldTimer />
      <PaymentSummary />
      <FAQBox />
      <Footer />
    </>
  );
};
export default CheckoutPage;
