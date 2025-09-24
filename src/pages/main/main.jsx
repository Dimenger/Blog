import { useEffect, useState, useMemo } from "react";
import { useServerRequest } from "../../hooks";
import { PostCard } from "./components/post-card/post-card";
import { Pagination } from "./components/pagination/pagination";
import { PAGINATION_LIMIT } from "../../constants";
import { Search } from "./components/search/search";
import { debounce } from "./utils/debounce";

import styled from "styled-components";

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [shouldSearch, setShouldSearch] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer("fetchPosts", searchPhrase, page, PAGINATION_LIMIT).then(
      ({ res, error }) => {
        if (error) return;
        // res = { posts, links }
        setPosts(res.posts);
      }
    );
  }, [requestServer, page, shouldSearch]);

  const startDelaySearch = useMemo(() => debounce(setShouldSearch, 2000), []);

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value);
    startDelaySearch(!shouldSearch);
  };

  return (
    <div className={className}>
      <Search onChange={onSearch} searchPhrase={searchPhrase} />
      <div className="post-list">
        {posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => (
          <PostCard
            key={id}
            id={id}
            title={title}
            imageUrl={imageUrl}
            publishedAt={publishedAt}
            commentsCount={commentsCount}
          />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export const Main = styled(MainContainer)`
  & .post-list {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  }
`;
