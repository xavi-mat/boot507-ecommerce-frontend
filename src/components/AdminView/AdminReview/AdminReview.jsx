import { CheckSquareTwoTone, CloseSquareTwoTone } from "@ant-design/icons";
import { Button, Checkbox, notification, Table, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const { Paragraph } = Typography;
const API_URL = process.env.REACT_APP_API_URL;

function AdminReview() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllReviews();
    // eslint-disable-next-line
  }, [])

  const getAllReviews = async () => {
    try {
      const res = await axios.get("http://localhost:8080/reviews/");
      setReviews(res.data.result)
    } catch (error) {
      console.log(error)
    }
  };

  const handleReview = async (id, active) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.put(
        API_URL + "/reviews/" + id,
        { active },
        { headers: { Authorization: token } }
      );
      if (res.status === 200) {
        notification.success({
          placement: "bottomLeft",
          message: "Review updated",
        });
        getAllReviews();
      }
    } catch (error) {
      console.log(error)
    }
  }

  const review = reviews.map(review => (
    {
      key: review.id,
      id: review.id,
      product: review.Product.name,
      user: review.User.username,
      content: review.content,
      stars: review.stars,
      active: review.active ?
        (<><CheckSquareTwoTone twoToneColor="#00BB00" /> Active</>) :
        (<><CloseSquareTwoTone twoToneColor="#FF0000" /> Inactive</>),
      update: review.active ?
        (<Button
          type="primary"
          danger
          onClick={() => handleReview(review.id, false)}
        >
          Disable
        </Button>) :
        (<Button
          type="primary"
          onClick={() => handleReview(review.id, true)}
        >
          Enable
        </Button>),
    }
  ))

  const columns = [
    { title: 'Id', dataIndex: 'id', key: 'id', },
    { title: 'Product', dataIndex: 'product', key: 'product', },
    { title: 'User', dataIndex: 'user', key: 'user', },
    { title: 'Content', dataIndex: 'content', key: 'content', },
    { title: 'Stars', dataIndex: 'stars', key: 'stars', },
    { title: 'Status', dataIndex: 'active', key: 'active', },
    { title: 'Update', dataIndex: 'update', key: 'update', },
    // { title: 'Delete', dataIndex: 'delete', key: 'delete', },
    // { title: 'all', dataIndex: 'all', key: 'all', },
  ];
  return (
    <Table
      pagination={{ position: ["topRight", "bottomRight"] }}
      dataSource={review}
      columns={columns}
    />
  )
}

export default AdminReview