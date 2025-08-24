import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
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

const Content = styled.div`
  padding: 120px 0;
`;
const H2 = styled.div`
  text-align: center;
`;

export function App() {
  return (
    <>
      <AppColumn>
        <Header />
        <Content>
          <H2>Page content</H2>
          <Routes>
            <Route path="/" element={<div>Main page</div>} />
            <Route path="/login" element={<div>Authorization</div>} />
            <Route path="/register" element={<div>Registration</div>} />
            <Route path="/users" element={<div>Users</div>} />
            <Route path="/post" element={<div>Post</div>} />
            <Route path="/post/:post_id" element={<div>New Post</div>} />
            <Route path="*" element={<div>Error</div>} />
          </Routes>
        </Content>
        <Footer />
      </AppColumn>
    </>
  );
}
