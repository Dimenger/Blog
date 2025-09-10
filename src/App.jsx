import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Authorization } from "./pages/authorization/authorization";
import { Registration } from "./pages/registration/registration";
import { Users } from "./pages/users/users";
import styled from "styled-components";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
`;

const Page = styled.div`
  padding: 120px 0;
`;

export function App() {
  return (
    <>
      <AppColumn>
        <Header />
        <Page>
          <Routes>
            <Route path="/" element={<div>Main page</div>} />
            <Route path="/login" element={<Authorization />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/users" element={<Users />} />
            <Route path="/post" element={<div>Post</div>} />
            <Route path="/post/:post_id" element={<div>New Post</div>} />
            <Route path="*" element={<div>Error</div>} />
          </Routes>
        </Page>
        <Footer />
      </AppColumn>
    </>
  );
}
