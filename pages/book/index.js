import PdfViewer from "./PdfViewer";
export default function Reader() {
  let url = "/pdf/test.pdf";
  return (
    <>
      <PdfViewer pdf={url} />
    </>
  );
}
