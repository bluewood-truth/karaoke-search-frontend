const parseQuery = (query: string): { [key: string]: any } => {
  if (query === '' || query[0] !== '?') {
    return {};
  }

  return JSON.parse(
    '{"' +
      decodeURI(query.slice(1))
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
};

export default parseQuery;
