import React, { useEffect, useState, useRef } from 'react'
import CountUp from 'react-countup';
import { TypeAnimation } from 'react-type-animation';


import './counter.scss';

const stats = [
   {
      text: "Video \n views",
      count: 15000
   },
   {
      text: "Monthly page views on \n tedxiitguwahati.in",
      count: 8500
   },
   {
      text: "Newsletter Subscribers",
      count: 7500
   },
   {
      text: "Facebook followers",
      count: 5000
   },
   {
      text: "Net promoter score",
      count: 80
   },
   {
      text: "Instagram followers",
      count: 1400
   },

]

function Counter() {
   const containerRef = useRef(null)
   const [isVisible, setVisibility] = useState(false)


   const cbOnVisible = (entries) => {
      if (isVisible) return
      const [entry] = entries
      if (entry.isIntersecting) {
         setVisibility(true)
      }
   }

   const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
   }



   useEffect(() => {
      const observer = new IntersectionObserver(cbOnVisible, options)
      if (containerRef.current) observer.observe(containerRef.current)

      return () => {
         if (containerRef.current) observer.unobserve(containerRef.current)
      }
   }, [containerRef, options])

   return (
      <div>
         <div className="counter-container" ref={containerRef}>
            {
               stats.map(({ text, count }) => (
                  <div className="counter-stat" key={text}>
                     {isVisible ?
                        <CountUp duration={2} end={count} className="count" suffix="+" />
                        :
                        <p className="count">1</p>
                     }

                     <p className="text">{text}</p>
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default Counter