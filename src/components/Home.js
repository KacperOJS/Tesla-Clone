import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgrounsImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgrounsImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
        <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgrounsImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
        <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgrounsImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
        <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back quarantee"
        backgrounsImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
        />
        <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less than New Roof Plus Solar Panels "
        backgrounsImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
        />
        <Section
        title="Accessories"
        description=" "
        backgrounsImg="accessories.jpg"
        leftBtnText="Shop now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
`
