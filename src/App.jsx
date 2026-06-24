import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Banner */}
      <header className="banner">
        <h1 className="banner-title">geopirates.stream</h1>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="construction-container">
          {/* Cloudflare Pages serves files in the public folder from the root / */}
          <img
            className="construction-img"
            src="/construction.jpg"
            alt="Website Under Construction"
          />
        </div>

        <div className="status-message">
          <h2>Setting Sail Soon</h2>
          <p>We are currently charting new waters. Check back shortly!</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} geopirates.stream. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
