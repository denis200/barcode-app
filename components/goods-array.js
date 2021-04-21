import React from 'react'
import Good from './good'

export default function GoodsArray(props){
    return(
        <Good name = {props.name} image = {props.image} price = {props.price}></Good>
    )
}