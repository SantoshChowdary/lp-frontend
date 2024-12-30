import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineCrown, AiOutlineSlack } from "react-icons/ai";
import styled from 'styled-components';

// interface SingleTabProps {
//   tab: {
//     tabId: string;
//     slug: string;
//     tabName: string;
//   };
//   activeMainTabId: string;
//   makeActiveTab: (id: string) => void;
// }

const TabListItem = styled.li<{ isactive: boolean }>`
  background-color: inherit;
  border-radius: 15px;
  margin: 10px 0;
  height: 52px;
  overflow: hidden;
  padding: 10px 20px;
  font-family: "Inter";
  color: rgb(194, 191, 191);
  display: flex;
  white-space: nowrap;
  align-items: center;
  font-weight: ${({ isactive }) => (isactive ? '600' : 'normal')};
  font-size: ${({ isactive }) => (isactive ? '16px' : '15px')};
  line-height: 1.75;
  letter-spacing: 0.5px;
  color: ${({ isactive }) => (isactive ? 'rgb(139, 100, 247)' : 'rgb(194, 191, 191)')};
  background-color: ${({ isactive }) => (isactive ? 'rgba(178, 142, 241, 0.16)' : 'inherit')};
  transition: letter-spacing 0.3s ease-in-out, background-color 0.3s ease-in-out;


  &:hover {
    font-weight: 600;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(155, 122, 246);
    letter-spacing: 1.5px;
  }
  &:active{
    text-decoration: none;
  }
`;

const TabIcon = styled.div`
  font-size: 25px;
  opacity: 0.4;
`;

const TabName = styled.span`
  margin-left: 10px;
`;

const SingleTab: React.FC<any> = ({ tab, activeMainTabId, makeActiveTab }) => {
  const { slug, tabName } = tab;

  return (
    <NavLink to={slug} style={{ textDecoration: 'none' }}>
      {
        ({isActive}) => (
          <TabListItem isactive={isActive}>
            <TabIcon as={isActive ? AiOutlineCrown : AiOutlineSlack} />
            <TabName>{tabName}</TabName>
          </TabListItem>
        )
      }
    </NavLink>
  );
};

export default SingleTab;
