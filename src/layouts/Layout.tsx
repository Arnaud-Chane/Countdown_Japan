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
        <div className="content mt-0 mb-auto">
          <div>
            Coming home soon, Japan ...
          </div>
          <div className="flex self-start ">
            <img src={Flight} className="mr-6" />
            <img src={Home} className="h-10" />
          </div>
          <DisplayCountdown />
        </div>
        <footer className="footer mb-8">
          <div className="flex items-center justify-between mt-4">
            <img src={Github} className="h-10 mx-10" />
            <div className="mx-12">
              Chou & Dou
            </div>
            <img src={Us} className="h-24 mx-10" />
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;

1719093492430
12967308569













































