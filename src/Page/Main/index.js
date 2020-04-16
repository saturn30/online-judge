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
      <div className="columns">
        <div className="column is-offset-2-tablet is-8-tablet">
          <div className="main-problem-container">
            <div className="box main-problem-item">문제 1</div>
            <div className="box main-problem-item">문제 2</div>
            <div className="box main-problem-item">문제 3</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
