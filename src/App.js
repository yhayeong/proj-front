import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Main from "./component/Main";
import Join from "./component/Join";
import Header from "./component/Header";
import Footer from "./component/Footer";
import NoticeList from "./component/NoticeList";
import NoticeDetail from "./component/NoticeDeatil";
import AdminNotice from "./component/AdminNotice";
import AdminNoticeForm from "./component/AdminNoticeForm";

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      {/* <PersistGate persistor={persister}> */}
      <BrowserRouter>
        <Main />
        <Header />
        <Routes>
          <Route exact path="/" element={<Join />} />
          <Route exact path="/notice" element={<NoticeList/>} />
          <Route exact path="/noticeDetail" element={<NoticeDetail/>} />
          <Route exact path="/adminNotice" element={<AdminNotice/>} />
          <Route exact path="/adminNoticeForm" element={<AdminNoticeForm/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </PersistGate> */}
      {/* </Provider> */}
    </div>
  );
}

export default App;
