import React from 'react'

export default function Footer() {
    return (
        <footer >
            <div className='w-75 mx-auto d-flex flex-row justify-content-between'>
                <div>
                    <span className='copyright'>Copyright 2022 FujiFox</span>
                </div>
                <div>
                    <span className='payments px-1'>PayPal</span>
                    <span className='payments px-1'>Meth</span>
                    <span className='payments px-1'>Cattle</span>
                    <span className='payments px-1'>Rocks</span>
                </div>
            </div>
        </footer>
    )
}
