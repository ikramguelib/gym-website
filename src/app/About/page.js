import About_content from "../../../components/About/About_content";
import Couv from "../../../components/About/Couv";
import First from "../../../components/About/First";
import Parts from "../../../components/About/Parts";

export default function About() {
  return (
      <section className="container">
        <First/>
        <Couv/>
        <div className="d-flex justify-conten-center mt-5 flex-wrap flex-md-nowrap gap-3">
          <Parts/>
          <About_content/>
        </div>
      </section>
  )
}
