self.onmessage = function (e) {
  const { data, query } = e.data;
  const result = searchResources(data, query);
  self.postMessage({ result });
};

function searchResources(resources, query) {
  const lowerQuery = query.toLowerCase();
  return resources.filter((resource) => {
    const titleMatch = resource.title.toLowerCase().includes(lowerQuery);
    const authorsMatch = resource.authors.some((author) =>
      author.toLowerCase().includes(lowerQuery)
    );
    const keywordsMatch = resource.keywords.some((keyword) =>
      keyword.toLowerCase().includes(lowerQuery)
    );
    return titleMatch || authorsMatch || keywordsMatch;
  });
}
