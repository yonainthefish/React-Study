import React from 'react'

export default function ItemGenerator({datas}) {
    return (
        <>
            {datas.map((data) => {
                <div key={data.id}>
                    <h2>{data.id}. {data.title}</h2>
                    <time>{data.date}</time>
                </div>
            })}
        </>

    )
}