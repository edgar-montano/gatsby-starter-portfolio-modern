import React from 'react'
import { motion } from "framer-motion"
import Star from "./Star"

type Props = {
    /**
     * the number of stars to generate.
     */
    count?: number;
}
export default function Stars({ count = 500 }: Props) {
    const stars = Array.from(Array(count)).map((_, index) => <Star key={index} />)

    return (
        <motion.svg width="830px" height="1603px" viewBox="-1 -1 830 1603" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <g id="Group" opacity="0.25" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(414.000000, 801.000000) rotate(-270.000000) translate(-414.000000, -801.000000) translate(-387.000000, 387.000000)" id="Oval" fill-rule="nonzero" fill="#000">
                    {stars}
                </g>
            </g>
        </motion.svg>
    )
}

