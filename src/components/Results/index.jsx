import { Table, Spin } from "antd";
import { FacebookFilled, GoogleOutlined } from "@ant-design/icons";
import styles from "./results.module.css";

const Results = ({ tableData, loading }) => {

  const columns = [
    { key: "1", title: "INTERESTS", dataIndex: "interest" },
    {
      key: "2",
      title: "AUDIENCE SIZE",
      dataIndex: "audience_size",
      sorter: (a, b) => a.audience_size - b.audience_size,
    },
    { key: "3", title: "TOPIC", dataIndex: "topic" },
    {
      key: "4",
      title: "ACTIONS",
      dataIndex: "search",
      render: (record) => {
        return (
          <div className={styles.actions_div}>
            <a href={`https://www.facebook.com/search/pages/?q=${record.trim().split(" ").join("+")}`} target="_blank" rel="noreferrer"><FacebookFilled style={{ color: "#001529", marginLeft: 12 }}/></a>
            <a href={`https://www.google.com/search?q=${record.trim().split(" ").join("+")}`} target="_blank" rel="noreferrer"><GoogleOutlined style={{ color: "#001529" , marginLeft: 12 }}/></a>   
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.results_div}>
      {loading ? (
        <>
         <Spin size="large" />
        </>
      ) : (
        <Table dataSource={tableData} columns={columns} />
      )}
    </div>
  );
};

export default Results;
