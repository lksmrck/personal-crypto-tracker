import StatisticsCard from './StatisticsCard'
import { StyledStatistics } from './styled'

export default function Statistics() {

  const DUMMY_DATA = [{
    "crypto_id": "xxx",
    "name": "bitcoin",
    "ticker": "BTC",
    "icon": "davat sem?",
    "amount": 25,
    "average_purchase_price": 5500
  }, {
    "crypto_id": "xxx",
    "name": "ethereum",
    "ticker": "ETH",
    "icon": "davat sem?",
    "amount": 14,
    "average_purchase_price": 500
  }]

  const DUMMY_TRANSACTIONS = [{
    "transaction_id": 1,
"type": "buy",
"name": "bitcoin",
"ticker": "BTC",
"amount": 25,
"price": 5500

  }]


  return (
    <StyledStatistics>
      <div className="statistics-container">

      </div>
    </StyledStatistics>
  )
}
