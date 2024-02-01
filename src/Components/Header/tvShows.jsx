import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Popular
      </a>
    ),
  },
];

const TvShows = () => {
  return (
    <Link to={`/popularTvShows`}>
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>People</Space>
        </a>
      </Dropdown>
    </Link>
  );
};

export default TvShows;
