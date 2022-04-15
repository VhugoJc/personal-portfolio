import React, { useState, useContext } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
const colors = ['#61DBFB', '#3c873a', '#589636', '#CF649A', '#202020','#42b883','#FFBC47'];

const Card = ({ card, style, onDirectionLock, onDragStart, onDragEnd, animate }) => (    
  <motion.div
    className="card"
    drag
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    dragDirectionLock
    onDirectionLock={onDirectionLock}
    onDragEnd={onDragEnd}
    animate={animate}
    style={{ ...style, background: card.background }}
    transition={{ ease: [.6, .05, -.01, .9] }}
    whileTap={{ scale: .85 }}
  >
    <p>
      <span className="iconify card-icons" data-icon={card.icon}></span> <br/>
      {card.text}
    </p>
  </motion.div>
)
const InfiniteCards = () => {
  const cardsInit = [
    { text: 'SASS',     background: colors[3], icon:"akar-icons:sass-fill" },
    { text: 'MONGO DB', background: colors[2], icon:"bxl:mongodb" },
    { text: 'NEXT JS',  background: colors[4], icon:"file-icons:nextjs" },
    { text: 'VUE JS',  background: colors[5], icon:"akar-icons:vue-fill" },
    { text: 'REACT JS', background: colors[0], icon:"akar-icons:react-fill" }, 
    { text: 'NODE JS',  background: colors[1], icon:"akar-icons:node-fill" }, 
    { text: 'Desliza para ver',  background: colors[6], icon:"bx:right-arrow-alt" },
  ]
  const [cards, setCards] = useState(cardsInit);
  const [dragStart, setDragStart] = useState({
    axis: null,
    animation: { x: 0, y: 0 }
  });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [1, .5, 1]);
  const shadowBlur = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [0, 25, 0]);
  const shadowOpacity = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [0, .2, 0]);
  const boxShadow = useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(0, 0, 0, ${shadowOpacity})`;
  const onDirectionLock = axis => setDragStart({ ...dragStart, axis: axis });
  const animateCardSwipe = animation => {
    setDragStart({ ...dragStart, animation });
      
    setTimeout(() => {
      setDragStart({ axis: null, animation: { x: 0, y: 0 } });
      x.set(0);
      y.set(0);
      if(cards.length===1){
        setCards(cardsInit.slice(1,cardsInit.length-1));
      }else{
      setCards([...cards.slice(0, cards.length - 1)]);
      }
    }, 200);
  }
  const onDragEnd = info => {
    if (dragStart.axis === 'x') {
      if (info.offset.x >= 100) 
        animateCardSwipe({ x: 175, y: 0 });
      else if (info.offset.x <= -100)
        animateCardSwipe({ x: -175, y: 0 }); 
    } else {
      if (info.offset.y >= 100)
        animateCardSwipe({ x: 0, y: 175 }); 
      else if (info.offset.y <= -100)
        animateCardSwipe({ x: 0, y: -175 }); 
    }
  }
  const renderCards = () => {
    return cards.map((card, index) => {
      if (index === cards.length - 1) {
        return (
          <Card 
            card={card}
            key={index}
            style={{ x, y, zIndex: index }}
            onDirectionLock={axis => onDirectionLock(axis)}
            onDragEnd={(e, info) => onDragEnd(info)}
            animate={dragStart.animation}
          />
        )
      } else return (
        <Card 
          card={card}
          key={index}
          style={{
            scale, 
            boxShadow,
            zIndex: index
          }}
        />
      )
    })
  }
  return (
    <>
    <div className='row'>
      
        <div className='col-lg-12 title-section'>
            <h2>🔥 Mis herramientas favoritas.</h2>
        </div>
    </div>
    <div className='row'>
      <div className='col-md-4'></div>
      <div className='col-md-4'>
      <div className="infinite-cards">
        {renderCards()}
      </div>
      </div>
      <div className='col-md-4'></div>
    </div>
    </>
  )
}

export default InfiniteCards;