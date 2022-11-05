import './App.css';
import Header from "./components/header/Header";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {Reg_page} from "./components/reg_page/reg_page";
import Home_page from "./components/Home_page/Home_page";
import Users_page from "./components/Users_page/Users_page";
import Users_page_container from "./components/Users_page/Users_page_container";

function App(props) {
  return (
      <BrowserRouter>
        <body>
        <div>
          <Header></Header>
            <div>
                <Routes>
                    <Route path='/register' element={<Reg_page/>}></Route>
                    <Route path='' element={<Home_page/>}></Route>
                    <Route path='/Users' element={<Users_page_container/>}></Route>
                </Routes>

            </div>

        </div>
        </body>
      </BrowserRouter>

  );
}

export default App;
