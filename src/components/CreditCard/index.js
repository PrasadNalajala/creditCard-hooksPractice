// Write your code here
import {useState} from 'react'
import {
  Container,
  Card,
  Heading,
  Hr,
  Para,
  CustomInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')

  const onchangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onchangeCardName = event => {
    setCardName(event.target.value)
  }
  const cardNameInCaps = cardName.toUpperCase()
  console.log(cardNameInCaps)
  return (
    <Container>
      <Card
        padding="20px"
        bgColor="#3b4b69"
        height="100vh"
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Card direction="column">
          <Heading color="#ffffff">CREDIT CARD</Heading>
          <Hr color="#ffd773" width="170px" />
        </Card>
        <Card
          bgSize="cover"
          direction="column"
          width="500px"
          brRadius="25px"
          height="300px"
          padding="50px"
          justifyContent="space-between"
          bgImg="https://assets.ccbp.in/frontend/hooks/credit-card-bg.png"
        >
          <Card direction="column">
            <Para marginTop="40px" color="#ffffff" fontSize="25px">
              {cardNumber}
            </Para>
          </Card>
          <Card
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Para margin="0" color="#d3d9e0" fontSize="15px">
              CARDHOLDER NAME
            </Para>
            <Para marginTop="15px" color="#ffffff" fontSize="20px">
              {cardNameInCaps}
            </Para>
          </Card>
        </Card>
      </Card>
      <Card
        width="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Card
          direction="column"
          justifyContent="center"
          alignItems="center"
          boxShadow="
    0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em #c3cad9"
          padding="50px"
          brRadius="5px"
        >
          <Heading color="#475569">Payment Method</Heading>
          <CustomInput
            marginTop="45px"
            type="text"
            onChange={onchangeCardNumber}
            placeholder="Card Number"
            value={cardNumber}
          />
          <CustomInput
            marginTop="18px"
            type="text"
            onChange={onchangeCardName}
            placeholder="Cardholder Name"
            value={cardName}
          />
        </Card>
      </Card>
    </Container>
  )
}

export default CreditCard
