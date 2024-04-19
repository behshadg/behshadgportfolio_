import resumePDF from '../../assets/Ghassemi_B_Resume.pdf';
import '../Resume.css';

function Resume() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Resume</h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="pdf-container">
            <iframe
              src={resumePDF}
              type="application/pdf"
              className="w-full h-screen"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
