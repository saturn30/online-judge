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
      <div className="slide_item">
        <span className="title" style={{ color: "white", fontWeight: "bold" }}>
          JS 온라인 저지 사이트입니다.
        </span>
      </div>
      <div className="slide_item">
        <span className="title" style={{ color: "white", fontWeight: "bold" }}>
          JS 온라인 저지 사이트입니다.
        </span>
      </div>
      <div className="slide_item">
        <span className="title" style={{ color: "white", fontWeight: "bold" }}>
          JS 온라인 저지 사이트입니다.
        </span>
      </div>
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
            <div className="box main-problem-item">컨텐츠 1</div>
            <div className="box main-problem-item">컨텐츠 2</div>
            <div className="box main-problem-item">컨텐츠 3</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
