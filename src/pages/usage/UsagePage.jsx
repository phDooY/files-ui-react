import Box from "@mui/material/Box";
import * as React from "react";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import NavBarTemplate from "../../templates/NavBarTemplate";
import BasicDemoDropzone from "../../components/demo-components/dropzone-demo/BasicDropzoneDemo";
import BasicDropzoneCodeJS from "../../components/demo-components/dropzone-demo/BasicDropzoneCodeJS";
import Paper from "@mui/material/Paper";
import AdvancedDropzoneDemo from "../../components/demo-components/dropzone-demo/AdvancedDropzoneDemo";
import { Alert, AlertTitle } from "@mui/material";
//import   AdvancedDropzoneCodeJS from "../../components/demo-components/dropzone-demo/AdvancedDropzoneCodeJS";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";
import AdvancedDropzoneCodeJS from "../../components/demo-components/dropzone-demo/AdvancedDropzoneCodeJS";
const rightMenuItems = [
  { id: 0, label: "Quick start", referTo: "/usage/#quick-start" },
  {
    id: 1,
    label: "Advanced examples",
    referTo: "/usage/#advanced-example",
  },
];
const UsagePage = (props) => {
  return (
    <MainLayoutPage
      rightMenu={<RightMenu width="240px" items={rightMenuItems} />}
    >
      <h1>Usage</h1>
      <MainParagraph>
        Learn the basics of working with Files UI components.
      </MainParagraph>

      <section id="quick-start">
        <DescParagraph>
          <SubTitle content="Quick start (Basic exaple)" />
          The following code snippet demonstrates a simple app that uses the
          Files UI <a href="/components/dropzone">Dropzone</a> and{" "}
          <a href="/components/file-mosaic">FileMosaic</a> components:
        </DescParagraph>
        <DescParagraph>
          In this demo we set dropzone with the minimun props that allows you to
          get done fast. These props are <CodeHighlight>onChange</CodeHighlight>{" "}
          and <CodeHighlight>value</CodeHighlight> props. This example is the
          same as the one you will find in the{" "}
          <a href="/components/dropzone/#basic-dropzone">Basic dropzone</a>{" "}
          section.
        </DescParagraph>{" "}
        <BasicDropzoneCodeJS splittedOnly />
        {/* <Paper variant="outlined" style={{ padding: "25px" }}>
          <BasicDemoDropzone />
        </Paper>{" "} */}
        <DescParagraph>
          You can play around with this code in the interactive Code Sandbox
          demo below. Try changing the <CodeHighlight>label</CodeHighlight> on
          the Dropzone to see the changes:
        </DescParagraph>
      {/*   <iframe
          title="codesandbox"
          src="https://codesandbox.io/embed/dropzone-ui-basic-3j01v"
          //src="https://codesandbox.io/embed/u9sy1h?hidenavigation=1&amp;fontsize=14&amp;view=preview"
          //src="https://codesandbox.io/s/material-ui-u9sy1h"
          style={{
            width: "100%",
            height: "500px",
            border: "0px none",
            borderRadius: "4px",
            overflow: "hidden",
          }}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe> */}
      </section>

      <section id="advanced-example">
        <SubTitle content="Advanced Example" />
        <DescParagraph>
          In this example we set dropzone with the props that allows validation
          and upload. These props are:
          <ul>
            <li>
              For validating: <CodeHighlight>accept</CodeHighlight>,{" "}
              <CodeHighlight>maxFiles</CodeHighlight> and{" "}
              <CodeHighlight>maxFileSize</CodeHighlight>
            </li>
            <li>
              For uploading: <CodeHighlight>uploadConfig</CodeHighlight>
            </li>
            <li>
              For simulating the upload process:{" "}
              <CodeHighlight>fakeUpload</CodeHighlight>
            </li>
          </ul>
        </DescParagraph>
        
        <Paper variant="outlined" style={{ padding: "25px" }}>
          <AdvancedDropzoneDemo />
        </Paper>
        <AdvancedDropzoneCodeJS />
      </section>
    </MainLayoutPage>
  );
};
export default UsagePage;