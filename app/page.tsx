
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="container mx-auto">
        <h1>Home</h1>
        <p>Home information will go here.</p>

              <Container className="">
        <Row className="justify-content-center mt-3 mb-3">
          <Card className="mt-0 mb-3">
            <Card.Body>
				<Card.Title className="text-center">Sub Shack will be temporarily closed beginning 
				Saturday, January 31st until Sunday, 
				February 8th. We will reopen Monday, February 9th under new 
				ownership. <br/> <br/>
			  </Card.Title>
			  <Card.Text className="text-center">
				New operating hours beginning February 9th: <br/>
				Monday - Saturday: 11am - 7pm <br/>
				Sunday: Closed
			  </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row className="text-center">
          <h1>Delicious Subs Made Daily</h1>
          <p>
            Visit Sub Shack for freshly baked bread and high-quality meats and
            cheeses served in made-to-order sandwiches right in front of you!
          </p>
        </Row>
        <Row>
          <Col className="text-end">
            <Button className="customButton" href={orderSite}>
              Order Now
            </Button>
          </Col>
          <Col className="text-start">
            <Button className="customButton" href={menuSite}>
              View Menu
            </Button>
          </Col>
        </Row>
      </Container>
      </main>
    </div>
  )
}
