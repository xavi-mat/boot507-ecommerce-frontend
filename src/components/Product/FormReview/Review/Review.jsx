import { Card, Rate } from 'antd';

function Review({ userIsAuthor, review }) {
    return (
        <Card
            type='inner'
            title={"User #" + review.UserId}
            extra={<Rate disabled defaultValue={review.stars} />}
            style={userIsAuthor ? { "background": "#FFFFAA" } : {}}
        >
        <div >
            {review.content}
        </div>
        </Card>
    );
}

export default Review;