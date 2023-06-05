import React from 'react'
import { randomNumber, randomElement, randomSign } from '../../utils/random'
import { motion } from "framer-motion"


type Props = {
    /**
     * cx represents the x coordinate of the star
     */
    cx?: number;
    /**
     * cy represents the y coordinate of the star
     */
    cy?: number;
    /**
     * The radius of the star
     */
    r?: number;
    /**
     * Color of the star corresponding to fill property.
     */
    fill?: string;
}

/**
 * Represents a single `Star` in an SVG component. 
 * Uses `<motion.circle />` to represent the Star.
 *
 * @export
 * @param {Props} { cx, cy, r, fill }
 */
export default function Star({ cx, cy, r, fill }: Props) {
    //@TODO: implement maxW and maxH as value for cx && cy
    // should be computed based on the SVG Viewbox.
    cx = cx ?? randomNumber(50.00, 1080.00);
    cy = cy ?? randomNumber(50.00, 1920.00);
    r = r ?? randomElement([1.02, 1.03, 2.02, 2.03, 3.02,]);
    fill = fill ?? randomElement(["gray", "white", "red", "yellow", "white"])

    const variants = {
        static: { y: 0, x: 0 },
        flicker: { opacity: [1, 0.8, 0.5, 0.6, 0.4, 1] },
    }

    return (
        <motion.circle variants={variants}  {...{ cx, cy, r, fill }} drag />
    );
}