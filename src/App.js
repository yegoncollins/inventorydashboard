import {Space} from "antd";
import './App.css';
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import SideMenu from "./components/SideMenu/sidemenu";
import PageContent from "./components/PageContent/pagecontent";

function App() {
  return (
    <div className="App">
      <Header/>
      <Space>
        <SideMenu/>
        <PageContent/>
      </Space>
      <Footer/>
    </div>
  );
}

export default App;
