import DownloadLink from 'react-download-link';

export const DownloadButton = () => {
  return (
    <DownloadLink
      label="Download File"
      filename="Ngo-Hong-Thong-TopCV.pdf"
      exportFile={() => fetch('./Ngo-Hong-Thong-TopCV.pdf')}
    />
  );
};