import { MinusIcon } from '@heroicons/react/24/outline'
import {  motion } from 'framer-motion'
import { Link } from 'react-router-dom'


export default function Hero() {



  return (
    <div className="bg-themeColor lg:h-[100dvh] flex items-end pb-20">
      <div className="relative isolate pt-5 px-6 lg:px-8 ">
        
        <div className="mx-auto pt-32 pb-16">
          <div className="lg:w-9/12 xl:w-8/12 2xl:w-8/12">
              <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{opacity: 1, y: 0}}
              transition={{
                  duration: 0.5,
              }}
              viewport={{ once: true }}
              className="overflow-hidden text-4xl font-semibold text-white/60 sm:text-[4.7rem] 2xl:text-[5.9rem] sm:leading-none tracking-tight">
              We turn ideas into extraordinary <span className="text-white">digital products</span> & <span className="text-white">experiences</span>
            </motion.h1>

            <motion.div
            initial={{ opacity: 0, y: 100 }}
              whileInView={{opacity: 1, y: 0}}
              transition={{
                  duration: 0.8,
              }}
              viewport={{ once: true }}>
              <p className="mt-6 text-lg text-gray-100 2xl:text-2xl">
              We design, build and ship world-class digital products for forward-thinking brands.
            </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{opacity: 1, y: 0}}
              transition={{
                  duration: 1,
              }}
              viewport={{ once: true }}
            >
              <Link className="bg-white text-black py-3 px-4 2xl:px-5 rounded shadow-md hover:shadow-2xl font-medium flex items-center gap-1 mt-5 w-fit 2xl:text-2xl" to="/contact-us">Get Started <MinusIcon className='h-5 w-5'></MinusIcon>contact us</Link>
              </motion.div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
