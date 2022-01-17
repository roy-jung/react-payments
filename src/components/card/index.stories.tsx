import Card from './index'
import { ComponentStory } from '@storybook/react'

export default {
  title: '1. Components/Card',
}

const CardTemplate: ComponentStory<typeof Card> = args => <Card {...args} />

export const CardNew = CardTemplate.bind({})
CardNew.args = {
  type: 'new',
  cardData: null,
  setRoute: () => {},
}

export const CardEmpty = CardTemplate.bind({})
CardEmpty.args = {
  type: 'small',
  cardData: null,
}

export const cardData = {
  cardName: '그린카드',
  cardNumber: '1234 - 1234 - **** - ****',
  expired: '10 / 24',
  userName: 'JAENAM',
  alias: '법카',
}

export const CardBig = CardTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardBig.args = {
  type: 'big',
  cardData,
}

export const CardSmall = CardTemplate.bind({})
CardSmall.args = {
  type: 'small',
  cardData,
}
