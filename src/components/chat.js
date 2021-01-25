import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash'
function average(data) {
    return _.round(_.sum(data) / data.length)
}
export default (props) => {
    return (
        <>
            <Sparklines data={props.data} width={100} height={50} margin={5}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine />
            </Sparklines>
            <div>{average(props.data)} {props.unit}</div>
        </>
    )
}