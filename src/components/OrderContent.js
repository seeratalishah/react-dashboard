import React from 'react'
import Card from './Card'


function OrderContent() {

  const cards =[
    {
      className:'square',
      title: 'Overview',
      desc: `Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.`,
      pills: ['20% Growth', '50% RIO', '80% CTR ']
    },
    {
      className:'circle',
      title: 'Summary',
      desc: `Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.`,
      pills: ['20% Growth', '70% RIO', '80% CTR ']
    },
    {
      className:'triangle',
      title: 'JavaScript',
      desc: `Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.`,
      pills: [ '80% CTR ','20% Growth', '40% RIO', '80% CTR ' ,'80% CTR ','20% Growth', '40% RIO', '80% CTR ']
    },
    {
      className:'other',
      title: 'Node.js',
      desc: `Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.np
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.np
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.`,
      pills: ['20% Growth', '40% RIO', '80% CTR ']
    },
    {
      className:'circle',
      title: 'MongoDB',
      desc: `Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.`,
      pills: ['20% Growth', '40% RIO', '80% CTR ']
    },
    {
      className:'triangle',
      title: 'React Redux',
      desc: `Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.
      doloremque at neque.
      Atque error est modi sequi dicta odit odio pariatur doloremque at neque.`,
      pills: ['20% Growth', '40% RIO', '80% CTR ']
    },
  ]
  return (
    <div className='dashboard-content' >
        <h1>Order Content</h1>
        <div className="cards-container">
          {
            cards.map((card, index)=>{
              return <Card key={index} className={card.className} title={card.title} desc={card.desc} pills={card.pills} />
            })
          }
        </div>
    </div>
  )
}

export default OrderContent