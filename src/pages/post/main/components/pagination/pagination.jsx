import { Button } from "../../../../../components/button/button";

import styled from "styled-components";

const PaginationContainer = ({ className, page, setPage }) => {
  return (
    <div className={className}>
      <Button disabled={page === 1} onClick={() => setPage(1)}>
        В начало
      </Button>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Предыдущая
      </Button>
      <div className="current-page"> Страница: {page}</div>
      <Button onClick={() => setPage(page + 1)}>Следающая</Button>
      <Button onClick={() => setPage(1)}>В конец</Button>
    </div>
  );
};

export const Pagination = styled(PaginationContainer)`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  padding: 0 35px;

  & button {
    margin: 0 5px;
  }

  & .current-page {
    width: 100%;
    height: 30px;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    border: 1px solid #000;
  }
`;
