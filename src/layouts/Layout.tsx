import DisplayCountdown from '../components/DisplayCountdown'
import Flight from '../assets/flight.png';
import Home from '../assets/home.png';
import Github from '../assets/github_logo.png';
import Us from '../assets/us.png';

function Layout() {


  return (
    <>
      <div className="flex flex-col items-center h-screen justify-between">
        <header className="header mb-12 h-10">

        </header>
        <div className="content flex flex-col items-center justify-center mt-0 mb-auto">
          <div className="italic font-thin">
            Coming home soon, Japan ...
          </div>
          <div className="flex justify-center mb-20 mt-10">
            <img src={Flight} className="mr-6 animate-flight h-48" />
            <img src={Home} className="h-20" />
          </div>
          <DisplayCountdown />
        </div>
        <footer className="footer mb-8">
          <div className="flex items-center justify-between mt-4">
            <img src={Github} className="h-10" />
            <div className="mx-12">
              Chou & Dou
            </div>
            <img src={Us} className="h-24" />
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;