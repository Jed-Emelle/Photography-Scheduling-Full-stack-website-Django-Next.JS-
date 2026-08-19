import Hero from "./components/Hero";
import Services from "./components/Services";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <BookingForm />
      <BookingList />
      <Footer />
    </>
  );
}