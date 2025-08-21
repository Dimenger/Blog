import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

const Header = () => <div>Header</div>;
const Content = styled.div`
  padding: 120px 0;
`;

const H2 = styled.div`
  text-align: center;
`;

const Footer = () => <div>Footer</div>;

export function App() {
  return (
    <>
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
    </>
  );
}
