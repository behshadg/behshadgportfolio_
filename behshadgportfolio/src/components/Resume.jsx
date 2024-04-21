import resumePDF from '../../assets/Ghassemi_B_Resume.pdf';
import '../Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-wrapper">
        <h1 className="resume-title">My Resume</h1>
        <div className="resume-pdf">
          <iframe
            src={resumePDF}
            type="application/pdf"
            className="resume-pdf-iframe"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
