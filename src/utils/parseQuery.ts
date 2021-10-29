const parseQuery = (query: string): {[key: string]: string | undefined} => {
  try {
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
  } catch (e) {
    return {};
  }
};

export default parseQuery;
