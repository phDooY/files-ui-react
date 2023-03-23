import * as React from "react";

import { Stack } from "@mui/material";
import Overview from "../../components/getting-started/Overview";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import logoLight from "../../static/files-ui-logo-blue-wbg.png";
import logo_blue from "../../static/files-ui-logo-blue.png";
import "../../styles/GettingStartedPage.scss";
import InstallationNPM from "../../components/getting-started/InstallationNPM";
import InstallationYarn from "../../components/getting-started/InstallationYarn";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";

import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import { scrollHandler } from "../../utils/scrollHandler";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
const GettingStartedPage = ({ darkModeOn }) => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () =>
      scrollHandler(rightMenuItems, setSelectedItem)
    );
    return () => {
      window.removeEventListener("scroll", () =>
        scrollHandler(rightMenuItems, setSelectedItem)
      );
    };
  }, []);

  return (
    <MainLayoutPage selectedIndex={0}>
      <MainContentContainer>
        <Stack sx={{ width: "100%", alignItems: "center" }}>
          <img
            className="fui-logo-img-getting-started"
            src={!darkModeOn ? logo_blue : logoLight}
            alt="files-ui-logo"
          />
          <MainTitle>Files UI - Getting started!</MainTitle>
        </Stack>
        <section id="overview">
          <Overview />
        </section>

        <section id="installation">
          <SubTitle content="Installation" />

          <MainParagraph>
            Run one of the following commands to add Files UI to your project:
          </MainParagraph>
          <h3>npm:</h3>
          <InstallationNPM />
          <h3>yarn:</h3>
          <InstallationYarn />
        </section>

        <section id="peer-dependency">
          <SubTitle content="Peer dependency" />

          <DescParagraph>
            <CodeHighlight>react </CodeHighlight> {">= 17.0.0 "}and{" "}
            <CodeHighlight>react-dom</CodeHighlight>
            {" >= 17.0.0 "} are peer dependencies.
          </DescParagraph>
        </section>
        <section id="default-font">
          <SubTitle content="Default font" />

          <DescParagraph>
            Files UI components use the Poppins font by default. However, you
            can set your own font-family en each component.
          </DescParagraph>
        </section>
      </MainContentContainer>
      <RightMenuContainer>
        <RightMenu
          width="240px"
          items={rightMenuItems}
          selectedItemProp={selectedItem}
          setSelected={setSelectedItem}
        />
      </RightMenuContainer>
    </MainLayoutPage>
  );
};
export default GettingStartedPage;

const rightMenuItems = [
  {
    id: 0,
    label: "Overview",
    referTo: "/getting-started#overview",
  },
  {
    id: 1,
    label: "Installation",
    referTo: "/getting-started#installation",
  },
  {
    id: 2,
    label: "Peer dependency",
    referTo: "/getting-started#peer-dependency",
  },
  { id: 3, label: "Default font", referTo: "/getting-started#default-font" },
];
