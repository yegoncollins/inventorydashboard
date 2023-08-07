import {Space} from "antd";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideMenu from "./components/SideMenu/SideMenu";
import PageContent from "./components/PageContent/PageContent";

function App() {
  return (
    <div className="App">
      <Header/>
      <Space className="SideMenuandPageContent">
        <SideMenu/>
        <PageContent/>
      </Space>
      <Footer/>
    </div>
  );
}

export default App;
