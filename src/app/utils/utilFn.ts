
// util function to copy test from page
  export const copyToClipboard = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      alert("Link copied to clipboard!");
    }
  };