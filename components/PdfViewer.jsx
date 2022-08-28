import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Script from "next/script";

export default function PdfViewer({pdf}) {
  const router = useRouter()
    const url = pdf;
  return (
    <div className="pdf-viewer">
      <Script
        src="https://documentcloud.adobe.com/view-sdk/viewer.js"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div id="adobe-dc-view">
      <Button className="pdf-back-btn"   onClick={() => router.back()}>Back</Button>
      </div>

      {document.addEventListener("adobe_dc_view_sdk.ready", function () {
        var adobeDCView = new AdobeDC.View({
          clientId: "d6a5fb0a611a4a6d87a0cc1c116a25f2",
          divId: "adobe-dc-view",
        });
        adobeDCView.previewFile({
          content: { location: { url: url } },
          metaData: { fileName: "IGNOU की BCA कक्षा" },
        });
      })}
      {console.log(url)}
    </div>
  );
}
