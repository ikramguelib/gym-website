import React from 'react'
import { colors } from '../../styles/colors'

export default function About_content() {
  return (
    <div className="mt-5 w-md-50 w-100">
      <h1 style={{ marginBottom: "0px" }} className="fw-bold">
        Know About Fitency For Her
      </h1>
      <p
        style={{ color: colors.gray, marginBottom: "0px", fontSize: "18px" }}
        className="mt-3"
      >
        As graduates of the Institute of Physical Activity Science and
        Technology, our journey in the realm of training and sports nutrition
        has been both enlightening and transformative. Hailing from the vibrant
        tapestry of Algerian society, we intimately understand the myriad
        challenges that individuals face when striving for optimal health and
        fitness. Our experiences, deeply rooted in the fabric of our community,
        have led us to recognize the pressing need for accessible solutions
        tailored to our unique circumstances.
      </p>
      <p style={{ color: colors.gray, marginBottom: "0px", fontSize: "18px" }}>
        Through this platform, our mission
        is clear: to empower individuals like you to embrace a healthier
        lifestyle. We are not just purveyors of information; we are advocates
        for change, champions of wellness in a world often besieged by sedentary
        habits and nutritional pitfalls. With each paragraph, we endeavor to
        offer practical guidance, evidence-based strategies, and unwavering
        support on your journey towards vitality.
        </p>
    </div>
  );
}
