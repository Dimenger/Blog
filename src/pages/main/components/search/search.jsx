import { Icon } from "../../../../components/icon/icon";
import { Input } from "../../../../components/input/input";
import styled from "styled-components";

const SearchContainer = ({ className, searchPhrase, onChange }) => {
  return (
    <div className={className}>
      <Input
        value={searchPhrase}
        onChange={onChange}
        className="search-input"
        placeholder="Поиск..."
      />
      <Icon id="fa-search" className="search-icon" />
    </div>
  );
};

export const Search = styled(SearchContainer)`
  display: flex;
  position: relative;
  width: 380px;
  height: 40px;
  margin: 10px auto 0;

  /* Даем полю ввода место под иконку */
  & .search-input {
    width: 100%;
    height: 100%;
    padding-right: 40px; /* ширина иконки + отступ слева/справа при необходимости */
    box-sizing: border-box;
  }

  /* Иконка внутри поля (правый край) */
  & .search-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
