import { useState } from 'react';
import { motion } from 'framer-motion';
import ExploreCard from '../Components/Acordeon/Explorecard';
import ExploreWorlds from '../Components/Acordeon/ExploreWorlds';
import { staggerContainer } from '../Components/Acordeon/Motion'; 

const Testimonials = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section className="" id='explore'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className=""
      >
        
        {/* <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {ExploreWorlds.map((world, index) => (
            <Explorecard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div> */}
      </motion.div>
    </section>
  )
}

export default Testimonials