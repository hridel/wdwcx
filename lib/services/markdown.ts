export const fetchMarkdown = async (url: string): Promise<string> => {
    if (!url.match(/^https?:\/\/.*\.md$/)) {
        return 'Invalid URL: Must be a public URL to a .md file';
    }

    const response = await fetch(url);
    return await response.text();
};
