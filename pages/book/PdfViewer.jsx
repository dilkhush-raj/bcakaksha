
import Script from "next/script";

export default function PdfViewer({pdf}) {

    const fun = () => {
        var adobeDCView = new AdobeDC.View({
            clientId: "a994d7a4166a4687b460cf57623a2053",
            divId: "adobe-dc-view",
          });
          adobeDCView.previewFile({
            content: { location: { url: url } },
            metaData: { fileName: "Bodea Brochure.pdf" },
          }, { embedMode: "FULL_WINDOW", defaultViewMode: "FIT_PAGE", showAnnotationTools: true, showDownloadPDF: true });
    }

    const url = pdf;
  return (
    <div className="pdf-viewer">
      <Script
        src="https://documentcloud.adobe.com/view-sdk/viewer.js"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <button onClick={fun}>view</button>
      <div id="adobe-dc-view"></div> 
    </div>
  );
}