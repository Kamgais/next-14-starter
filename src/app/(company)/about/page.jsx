import React from 'react'

async function getData() {
  return new Promise((resolve, reject) => setTimeout(() => {
    const random = Math.random();
    if(random > 0.5) {
      reject('Failed to get data')
    }
    resolve()
  }, 2000))
}

export default async function AboutPage() {
  await getData()
  return (
    <div>
      About Page
    </div>
  )
}
