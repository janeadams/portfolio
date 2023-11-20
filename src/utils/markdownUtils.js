async function fetchMarkdownContent(url) {
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Markdown content: ${response.status} ${response.statusText}`);
    }
    const markdownContent = await response.text();
    console.log(markdownContent);
    return markdownContent;
  } catch (error) {
    console.error('Error fetching Markdown content:', error);
    return '';
  }
}

export default fetchMarkdownContent;
