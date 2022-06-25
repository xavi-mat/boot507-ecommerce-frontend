import { Card } from "antd"
import premiumcat from "../../assets/premiumcat.jpg"

function Premium() {
    return (
        <div style={{ margin: "1rem 3rem" }}>
            <Card hoverable>
                <h1>Premium</h1>
                <h3>You are a Premium Customer. Congratulations!</h3>
                <h3>Stay tuned for great incoming discounts.</h3>
                <img src={premiumcat} width="100%" alt="Premium Cat" />
            </Card>
        </div>
    )
}

export default Premium