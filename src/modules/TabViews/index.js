import { useState } from "react";
import { Tabs } from "antd";
import UsersList from "../../components/Tabs/UsersList";
import TaskRunner from "../../components/Tabs/TaskRunner";
import WikipediaIframe from "../../components/Tabs/WikipediaIframe";
import "./styles.scss";

// Render all tab views

const TabViews = () => {
  const [activeKey, setActiveKey] = useState("1");

  const tabItems = [
    {
      key: "1",
      label: "Wikipedia",
      content: <WikipediaIframe />,
    },
    {
      key: "2",
      label: "Users List",
      content: <UsersList switchToTabThree={() => setActiveKey("3")} />,
    },
    {
      key: "3",
      label: "Task Runner",
      content: <TaskRunner />,
    },
  ];

  return (
    <div className="tabs-container">
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        {tabItems?.map(({ key, label, content }) => (
          <Tabs.TabPane tab={label} key={key}>
            {content}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default TabViews;
