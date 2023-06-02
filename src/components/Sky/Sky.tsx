import React from 'react'
import Stars from "../Stars"

type Props = {}

export default function Sky({ }: Props) {
    return (
        <div style={{
            background: "black",
            height: "100%"
        }}
        >
            <Stars />
        </div>
    )
}