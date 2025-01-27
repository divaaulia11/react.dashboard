import {} from "antd";
import "./App.css";
import AppHeader from "./components/App.header";
import SideMenu from "./components/SideMenu";
import PageContent from "./components/PageContent";
import AppFooter from "./components/App.footer";

function App (){
  return <div classname="App">
  <AppHeader />
  <Space>
    <SideMenu></SideMenu>
    <PageContent></PageContent>
  </Space>
  <AppFooter />
  </div>;
}

export default App;