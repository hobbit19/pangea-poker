import React from "react";
import ReactModal from "react-modal";
import { css } from "@emotion/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

interface IProps {
  children?: React.ReactNode;
  contentLabel: string;
  id: string;
  isOpen: boolean;
  tabs?: { content: React.ReactNode; title: string; name: string }[];
  onRequestClose: () => void;
}
const isTest = process.env.NODE_ENV === "test";
!isTest && ReactModal.setAppElement("#root");

const modalStyle = {
  content: {
    backgroundColor: "var(--color-background)",
    border: 0,
    color: "var(--color-text)",
    left: "50%",
    opacity: 1,
    overflowX: "hidden",
    padding: "2rem 2rem",
    textAlign: "center",
    top: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "20rem",
    minHeight: "22.5rem",
    zIndex: 1000
  },
  overlay: {
    backgroundColor: "#0000007F",
    position: "absolute",
    height: "37.5rem",
    width: "50rem",
    zIndex: 999
  }
};

const tabsStyle = css`
  & > .react-tabs__tab-list {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Modal: React.FunctionComponent<IProps> = ({
  children,
  contentLabel,
  id,
  isOpen,
  onRequestClose,
  tabs
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={modalStyle}
      contentLabel={contentLabel}
      id={id}
      onRequestClose={onRequestClose}
      ariaHideApp={isTest ? false : true}
    >
      {tabs && (
        <Tabs css={tabsStyle}>
          <TabList>
            {tabs.map(tab => {
              return <Tab key={tab.name}>{tab.name}</Tab>;
            })}
          </TabList>
          {tabs.map(tab => {
            return (
              <TabPanel key={tab.name}>
                <h2>{tab.title}</h2>
                {tab.content}
              </TabPanel>
            );
          })}
        </Tabs>
      )}
      {children}
    </ReactModal>
  );
};

export default Modal;
