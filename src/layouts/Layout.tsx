import DisplayCountdown from '../components/DisplayCountdown'
import Flight from '../assets/flight.png';
import Home from '../assets/home.png';
import Github from '../assets/github_logo.png';
import Us from '../assets/us.png';

function Layout() {


  return (
    <>
<div className="flex flex-col items-center h-screen justify-center">
  <div>
    Coming home soon, Japan ...
  </div>
  <div className="flex items-center">
    <img src={Flight} className="w-10 h-10 mr-2" />
    <img src={Home} className="w-10 h-10" />
  </div>
  <DisplayCountdown />
  <div className="flex items-center mt-4">
    <img src={Github} className="w-6 h-6 mr-2" />
    <div>
      Chou & Dou
    </div>
    <img src={Us} className="w-6 h-6 ml-2" />
  </div>
</div>
    </>
  );
}

export default Layout;














































