import './App.css';
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import LogoutButton from "./components/LogoutButton";

function App() {
    return (
        <div>
            <div>
                <LoginButton/>
                <LogoutButton/>
            </div>
            <div>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
