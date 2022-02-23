import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <nav class="fixed-nav-bar">
        <div className="left">
          <img
            id="ops"
            src="https://upload.wikimedia.org/wikipedia/en/b/b0/Indian_Institute_of_Technology_%28Indian_School_of_Mines%29%2C_Dhanbad_Logo.png"
            alt=""
          />
          <div id="iut">IIT(ISM) DHANBAD</div>
        </div>
        <div className="mid">
          <button className="butt">Overview</button>

          <button className="butt">Recruitment Process</button>
          <button className="butt" id="close">
            <img src="https://i.ibb.co/xGMyn7j/Recruiter.png" alt="" />
            Recruiter
          </button>
        </div>
      </nav>
      <div className="first">
        <div className="grid-container">
          <div className="grid-item">
            <p className="des">1</p> Invitation for placements, along with
            Placement brochure, are sent to recruiting organizations by CDC/
            Companies approaches CDC for placements.
          </div>
          <div className="grid-item">
            <p className="des">3</p> Recruiters submit filled JNF and/or INF.
          </div>
          <div className="grid-item">
            <p className="des"> 5</p> Pre-Placement Talks are scheduled for
            registered candidates.
          </div>
          <div className="grid-item">
            <p className="des">7</p> Company provides the list of shortlisted
            candidates to CDC for final interview process.
          </div>
          <div className="grid-item">
            <p className="des"> 9</p> Shortlisted candidates participate in the
            hiring process of the company.
          </div>
        </div>
        <img
          className="vector"
          src="https://i.ibb.co/pR3BDmp/website-1.png"
          alt=""
        />
        <div className="grid-rec">
          <div className="grid-item">
            <p className="des"> 2</p> Job Notification Form (JNF)/ Internship
            Notification Form (INF) are sent to the recruiters for registration.
          </div>
          <div className="grid-item">
            <p className="des"> 4</p> Data of eligible students is shared with
            the companies.
          </div>
          <div className="grid-item">
            <p className="des">6</p> Slots are provided to companies for Online
            Test/ GD Process etc.
          </div>
          <div className="grid-item">
            <p className="des des1"> 10 </p> In case a student is shortlisted
            for more than one company in a given slot, he/she is to provide a
            preference at least an hour before the start of the interviews.
          </div>
          <div className="grid-item">
            <p className="des des1"> 12</p> CDC confirms the offer acceptance to
            company based on the student preference collected in Step 9. The
            confirmation is given within 3 hours of result submission by the
            company.
          </div>
        </div>

        <div className="grid-rec2">
          <div className="grid-item">
            <p className="des">8 </p>CDC allots dates to organizations for
            campus interviews based on various details given by companies.
          </div>
          <div className="grid-item">
            <p className="des des1">11</p> Company submits a list of finally
            selected students, to CDC, along with a waitlist at the end of the
            day/ slot.
          </div>
          <div className="grid-item">
            <p className="des des1">13</p> Selected students are taken out from
            further placement process, in compliance with our One Student, One
            Job Policy.
          </div>
        </div>
      </div>
      <img
        className="vector1"
        src="https://i.ibb.co/qsmSbx2/Rectangle-52.png"
        alt=""
      />
    </div>
  );
}
