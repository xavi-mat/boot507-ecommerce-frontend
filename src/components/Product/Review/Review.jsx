import { Button, Card, notification, Rate, Space } from 'antd';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function Review({ userIsAuthor, review, getReviews }) {

    const handleDelete = async () => {
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            const res = await axios.delete(
                API_URL + "/reviews/" + review.id,
                { headers: { Authorization: token } }
            );
            if (res.data?.result) {
                notification.success({
                    placement: "bottomLeft",
                    message: "Review deleted"
                });
                getReviews();
            } else {
                notification.error({
                    placement: "bottomLeft",
                    message: "Unable to delete review"
                })
            }
        } catch (error) {

        }
    }

    return (
        <Card
            type='inner'
            title={(
                <Space size="large">
                    <img
                        src={API_URL + "/users/avatar/" + review.User.avatar}
                        style={{ maxHeight: "80px" }}
                        alt=""
                    />
                    <h3>{review.User.username}</h3>
                </Space>
            )}
            extra={<Rate disabled defaultValue={review.stars} />}
            style={userIsAuthor ? { "background": "#FFFFAA" } : {}}
        >
            <div>{review.content}</div>
            {userIsAuthor ? (
                <div>
                    <Button
                        danger
                        type="primary"
                        onClick={handleDelete}
                    >
                        Delete review
                    </Button>
                </div>
            ) : null}
        </Card>
    );
}

export default Review;