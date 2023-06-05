import React from 'react'
import { randomNumber, randomElement } from '../../utils/random'
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
    cx = cx ?? randomNumber(50.00, 1080.00);
    cy = cy ?? randomNumber(50.00, 1920.00);
    r = r ?? randomElement([1.02, 1.03, 2.02, 2.03, 3.02,]);
    fill = fill ?? randomElement(["gray", "blue", "red", "yellow", "orange"])
    return (
        <motion.circle  {...{ cx, cy, r, fill }} drag />
    );
}