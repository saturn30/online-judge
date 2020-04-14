import React from "react"
import Layout from "../../Component/Layout"
import Swiper from "react-id-swiper"
import "./Main.scss"

import "swiper/css/swiper.css"

const SimpleSwiper = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }

  return (
    <Swiper {...params}>
      <div className="slide_item">Slide 1</div>
      <div className="slide_item">Slide 2</div>
      <div className="slide_item">Slide 3</div>
    </Swiper>
  )
}

export default () => {
  return (
    <Layout>
      <SimpleSwiper></SimpleSwiper>
      <div className="columns has-text-centered main-problem-container">
        <div className="column is-2-desktop is-1-tablet"></div>
        <div className="box column main-problem-item">문제 1</div>
        <div className="box column main-problem-item">문제 2</div>
        <div className="box column main-problem-item">문제 3</div>
        <div className="column is-2-desktop is-1-tablet"></div>
      </div>
    </Layout>
  )
}
