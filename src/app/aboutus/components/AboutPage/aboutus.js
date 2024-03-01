"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion'
import { FaLongArrowAltRight } from "react-icons/fa";

const aboutus = () => {
  function handleClick() {
    const router = useRouter();
    router.refresh();
  }
  return (
    <section id="about-us">
      <div class="container ">
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="image-holder">
              <img src="images/single-image1.jpg" alt="single" class="about-image" />
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="detail">
              <div class="display-header">
                <h2 class="section-title">How Did StudentStash Exhange come to be?</h2>
                <p>Toh Dekho mai basically bohot saari cheezen kareedta hu organize karne ke liye like plastic baskets , Soap Organisers and Clothe Organisers.
                  thora sa hoon mai OCD type critical but fir jab mera 4th Year khatam hone ko aya - mujhe in cheezon ko fekna ka mann nhi tha aur na hi ghar wapis le jaane ke jagah toh maine socha bech du.
                  fir maine socha mere jaise kitte aur honge
                <br />
                And StudentStash Exchange Was born - A webiste that lets you sell and buy things to people alike who don't wanna unnessacarily spend more on such stuff </p>
                <div class="btn-wrap">
                  <Link href="/Shop" class="btn btn-dark btn-medium d-flex align-items-center" tabindex="0">Shop our store<i class="icon icon-arrow-io"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default aboutus;
