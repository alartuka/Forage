import React from 'react'
import "../style/Stocks.css";

function Stocks() {
    return (
        <section id="stocks">
            <div className='stocks_header'>
                {/* Profile name */}
                {/* stocks navbar */}
            </div>
            {/* MUI GRID !!! */}
            <div className='stocks_content'>
                <h3>ADD STOCK</h3>
                <div className='add_stock'>
                    <form className='add_stock_form'>
                        <label>PRODUCT NAME</label>
                        <input type='text' />
                        <br />
                        <label>PRODUCT CATEGORY</label>
                        <input type='text' />
                        <label>PRODUCT COUNT</label>
                        <input type="text" />
                        {/* BUTTON to confirm */}
                    </form>
                </div>

                <div className='upload_stock'>

                </div>
            </div>
        </section>
    )
}

export default Stocks