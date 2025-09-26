export const getLastPageFromLinks = (links) => {
  if (!links) return 1; // если Link заголовок отсутствует

  // Попытка найти часть с rel="last"
  const match = /<[^>]*?_page=(\d+)&?_limit=\d+[^>]*>; rel="last"/.exec(links);
  if (match && match[1]) {
    return Number(match[1]);
  }

  // Базовый fallback: попробуем извлечь любой _page из ссылки
  const alt = /_page=(\d+)&?_limit=\d+/.exec(links);
  return alt ? Number(alt[1]) : 1;
};
