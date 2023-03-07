import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileMosaicLocalization = (props) => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeJSFileMosaicLocalization;

const splittedCodeJS = ``;
const splittedCodeTS = ``;


const completeCodeJS = `import * as React from "react";
import { FileMosaic } from "@files-ui/react";
import { Autocomplete, TextField } from "@mui/material";

const DemoFileMosaicLocalization = () => {
  const [localization, setLocalization] = React.useState(undefined);

  const hadleSelect = (value) => {
    console.log(value);
    setLocalization(value?.value);
 };
  return (
    <>
      <Autocomplete
        disablePortal
        autoSelect
        size="small"
        onChange={(e, value) => hadleSelect(value)}
        id="combo-box-demo"
        options={languages}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.language}
        renderInput={(params) => <TextField {...params} label="Localization" />}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          width: "100%",
          gap: "50px",
        }}
      >
        {extFiles.map((extFile, index) => (
          <FileMosaic
            key={index}
            {...extFile}
            localization={localization}
            onDelete={() => {}}
            info
          />
        ))}
      </div>
    </>
  );
};
export default DemoFileMosaicLocalization;

const languages = [
  { language: "Español: ES-es", value: "ES-es" },
  { language: "English: EN-en", value: "EN-en" },
  { language: "French: FR-fr", value: "FR-fr" },
  { language: "Italian: IT-it", value: "IT-it" },
  { language: "Portuguese: PT-pt", value: "PT-pt" },
  { language: "Russian: RU-ru", value: "RU-ru" },
  { language: "Chinese(simplified): ZH-cn", value: "ZH-cn" },
  { language: "Chinese(traditional): ZH-hk", value: "ZH-hk" },
];
const extFiles = [
  {
    id: 0,
    name: "file_localization.docx",
    size: 28 * 1024,
    errors: ["pdf not allowed", "file is too big"],
  },
  {
    id: 1,
    valid: false,
    name: "file_localization.docx",

    size: 28 * 1024,
    errors: ["pdf not allowed", "file is too big"],
  },
  {
    id: 2,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
  },
  {
    id: 3,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "preparing",
  },
  {
    id: 4,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "uploading",
    progress: 28,
  },
  {
    id: 5,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "aborted",
    uploadMessage: "Upload was aborted",
  },
  {
    id: 6,
    valid: false,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "error",
    uploadMessage: "there was an error on the server",
  },
  {
    id: 7,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "success",
    uploadMessage: "files-ui <3",
  },
];`;

const completeCodeTS = `import * as React from "react";
import { ExtFile, FileMosaic, Localization } from "@files-ui/react";
import { Autocomplete, TextField } from "@mui/material";

const DemoFileMosaicLocalization = () => {
  const [localization, setLocalization] = React.useState<
    Localization | undefined
  >(undefined);

  const hadleSelect = (value: LanguageItem | null) => {
    console.log(value);
    setLocalization(value?.value);
 };

  return (
    <>
      <Autocomplete
        disablePortal
        autoSelect
        size="small"
        onChange={(e, value) => hadleSelect(value as LanguageItem)}
        id="combo-box-demo"
        options={languages}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.language}
        renderInput={(params) => <TextField {...params} label="Localization" />}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          width: "100%",
          gap: "50px",
        }}
      >
        {extFiles.map((extFile, index) => (
          <FileMosaic
            key={index}
            {...extFile}
            localization={localization}
            onDelete={() => {}}
            info
          />
        ))}
      </div>
    </>
  );
};
export default DemoFileMosaicLocalization;

interface LanguageItem {
  language: string;
  value: Localization;
}

const languages = [
  { language: "Español: ES-es", value: "ES-es" },
  { language: "English: EN-en", value: "EN-en" },
  { language: "French: FR-fr", value: "FR-fr" },
  { language: "Italian: IT-it", value: "IT-it" },
  { language: "Portuguese: PT-pt", value: "PT-pt" },
  { language: "Russian: RU-ru", value: "RU-ru" },
  { language: "Chinese(simplified): ZH-cn", value: "ZH-cn" },
  { language: "Chinese(traditional): ZH-hk", value: "ZH-hk" },
];
const extFiles: ExtFile[] = [
  {
    id: 0,
    name: "file_localization.docx",
    size: 28 * 1024,
    errors: ["pdf not allowed", "file is too big"],
  },
  {
    id: 1,
    valid: false,
    name: "file_localization.docx",

    size: 28 * 1024,
    errors: ["pdf not allowed", "file is too big"],
  },
  {
    id: 2,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
  },
  {
    id: 3,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "preparing",
  },
  {
    id: 4,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "uploading",
    progress: 28,
  },
  {
    id: 5,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "aborted",
    uploadMessage: "Upload was aborted",
  },
  {
    id: 6,
    valid: false,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "error",
    uploadMessage: "there was an error on the server",
  },
  {
    id: 7,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "success",
    uploadMessage: "files-ui <3",
  },
];`;
