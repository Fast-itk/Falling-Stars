import Head from 'next/head'
import {Playground, Star} from '../shared/styles'
import {useEffect, useState} from 'react'
import {generateArray, getRandomInt} from '../utils/utils'
import {IStar} from '../interfaces/interfaces'
import {config} from '../config/config'

export default function Home() {

  const {countStars, distance, startPosition} = config

  const [stars, setStars] = useState<IStar[]>([])
  const [position, setPosition] = useState<number>(startPosition)

  const start = (): void => {

    const timer = setInterval(() => {

      setPosition((prev: number): number => {  
        console.log(countStars * -distance)
        if (prev === (countStars * -distance)) clearInterval(timer)
        return prev - 1
      })

    }, 1000/100)    
  }

  const allStars = stars.map((star, i) => {
    return (
      <Star 
        key={i} 
        style={{bottom: `${star.y}px`, left: `${star.x}px`}}
      >{star.value}</Star>
    )
  })

  const generateStars = (array: number[]): void => {
    const newStars = []

    array.forEach((item) => {
      const star: IStar = {
        value: getRandomInt(-5, 5),
        x: getRandomInt(20, 660),
        y: item * distance
      }
      newStars.push(star)
    })
    
    setStars(newStars)
  }

  useEffect(() => {
    start()
    generateStars(generateArray(countStars))
  }, [])

  return (
    <>
      <Head>
        <title>Falling stars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Playground style={{bottom: `${position}px`}}> 
            {allStars}
          </Playground>
      </main>

    </>
  )
}
