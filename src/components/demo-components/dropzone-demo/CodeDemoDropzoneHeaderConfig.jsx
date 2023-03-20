import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const CodeDemoDropzoneHeaderConfig = ({ splittedOnly = false }) => {
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeDemoDropzoneHeaderConfig;

const splittedCodeJS = `<Dropzone
    onChange={updateFiles}
    value={files}
    headerConfig={{
      customHeader: (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{ backgroundColor: "teal", color: "white" }}
            onClick={removeAllFiles}
          >
            delete files
          </button>
        </div>
      ),
    }}
>
  {files.length > 0 &&
    files.map((file) => (
      <FileMosaic key={file.id} {...file} onDelete={removeFile} info/>
    ))}
</Dropzone>`;
const splittedCodeTS = `<Dropzone
    onChange={updateFiles}
    value={files}
    headerConfig={{
      customHeader: (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{ backgroundColor: "teal", color: "white" }}
            onClick={removeAllFiles}
          >
            delete files
          </button>
        </div>
      ),
    }}
>
  {files.length > 0 &&
    files.map((file: ExtFile) => (
      <FileMosaic key={file.id} {...file} onDelete={removeFile} info/>
    ))}
</Dropzone>`;
const completeCodeJS = `import * as React from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";

export default function App() {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const removeAllFiles = (evt) => {
    evt.stopPropagation();
    setFiles([]);
  };
  return (
    <Dropzone
        onChange={updateFiles}
        value={files}
        headerConfig={{
          customHeader: (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                style={{ backgroundColor: "teal", color: "white" }}
                onClick={removeAllFiles}
              >
                delete files
              </button>
            </div>
          ),
        }}
    >
      {files.length > 0 &&
        files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
};`;

const completeCodeTS = `import * as React from "react";
import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";

export default function App() {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const updateFiles = (incommingFiles:ExtFile[]) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };
  const removeAllFiles = (evt) => {
    evt.stopPropagation();
    setFiles([]);
  };
  return (
    <Dropzone
        onChange={updateFiles}
        value={files}
        headerConfig={{
          customHeader: (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                style={{ backgroundColor: "teal", color: "white" }}
                onClick={removeAllFiles}
              >
                delete files
              </button>
            </div>
          ),
        }}
    >
      {files.length > 0 &&
        files.map((file:ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
}`;