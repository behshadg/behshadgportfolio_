import resumePDF from '../../assets/Ghassemi_B_Resume.pdf';
import '../Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-heading">My Resume</h1>
      <div className="pdf-container">
        <iframe
          src={resumePDF}
          type="application/pdf"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}

export default Resume;
