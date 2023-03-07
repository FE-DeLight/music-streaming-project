import * as style from "./BrowseList.style";

export const BrowseList = (props: any): JSX.Element => {
  return <div className="browse-list">{props.children}</div>;
};

export const BrowseHead = (props: any): JSX.Element => {
  return (
    <style.GridWrap className="browse-list-head">
      {props.children}
    </style.GridWrap>
  );
};

export const BrowseBody = (props: any): JSX.Element => {
  return <div className="browse-list-body">{props.children}</div>;
};

export const BrowseBodyRow = (props: any): JSX.Element => {
  return (
    <style.GridWrap className="browse-list-body-row">
      {props.children}
    </style.GridWrap>
  );
};
