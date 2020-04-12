import React from "react"
import Layout from "../../Component/Layout"
import Swiper from 'react-id-swiper';
import './Main.scss'

import 'swiper/css/swiper.css'

const SimpleSwiper = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }

  return <Swiper {...params}>
    <div className="slide_item">Slide 1</div>
    <div className="slide_item">Slide 2</div>
    <div className="slide_item">Slide 3</div>
  </Swiper>
}

export default () => {
  return (
    <Layout>
      <SimpleSwiper></SimpleSwiper>
      <div className="workbook-container">
        <div className="workbook">문제1</div>
        <div className="workbook">문제2</div>
        <div className="workbook">문제3</div>
      </div>
    </Layout>
  )
}
