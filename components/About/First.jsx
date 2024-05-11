import { colors } from "../../styles/colors";

export default function First() {
  return (
    <article className="mt-5">
      <div className="d-flex flex-column align-items-center justify-content-center gap-3">
        <h1 style={{marginBottom : '0px'}} className="fw-bold w-75 w-md-100">Empower Your Game: Elite Coaching for Aspiring Sportswomen</h1>
        <p  style={{marginBottom : '0px',fontSize : '18px',color : colors.gray}} className="w-75 w-md-100 ">
        "Empower Your Game: Elite Coaching for Aspiring Sportswomen" is more than just a motto—it's a commitment to excellence. Our coaching platform is designed to unlock the potential of every athlete, providing them with the tools, techniques, and mentorship needed to excel in their chosen sport. We believe in nurturing talent, fostering a growth mindset, and creating an environment where dedication meets opportunity. Join us and experience the transformative journey of becoming the best version of yourself, both on and off the field. Let's elevate your game together! 🏆
        </p>
      </div>
    </article>
  );
}
