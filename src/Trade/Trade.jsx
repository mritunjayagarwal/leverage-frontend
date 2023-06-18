
import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import coins from './data';
import { Input, Popover, Radio, Modal, message } from 'antd';
import { ArrowDownOutlined, DownOutlined, SettingOutlined } from '@ant-design/icons'
import axios from 'axios';
let tvScriptLoadingPromise;


const Trade = () => {
    const onLoadScriptRef = useRef();
    const [chartiii, setChart] = useState('BTC');
    const [chartt, setChartt] = useState('Binance:BTCUSD');

    useEffect(
        () => {
            onLoadScriptRef.current = createWidget;

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                const sym_val = chartt;
                if (document.getElementById('technical-analysis-chart-demo') && 'TradingView' in window) {
                    new window.TradingView.widget({
                        container_id: "technical-analysis-chart-demo",
                        width: "100%",
                        height: "50%",
                        autosize: true,
                        symbol: sym_val,
                        interval: "D",
                        timezone: "exchange",
                        theme: "dark",
                        style: "1",
                        toolbar_bg: "#f1f3f6",
                        hide_side_toolbar: true,
                        save_image: false,
                        // studies: ["ROC@tv-basicstudies", "StochasticRSI@tv-basicstudies", "MASimple@tv-basicstudies"],
                        show_popup_button: false,
                        popup_width: "1000",
                        popup_height: "650",
                        locale: "en"
                    });
                }
            }
        },
        [chartt]
    );

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <img src={Logo} className='navbar-brand logo-trade' alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Perpetual Dex <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Protocol</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Perpetual</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dex</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='trade-main'>
                <div className='mx-4 my-2'>
                    <div className='row'>
                        <div className='col-lg-3 order-md-1 mb-3'>
                            <div className="market-main">
                                <div className='coin-search'>
                                    <input type="text" placeholder='Search Coin' className='w-100 p-1 px-2 search-input' />
                                </div>
                                <div>
                                    <table className="table">
                                        <thead>
                                        <tr className="coin-stats-head">
                                            <th>Pair</th>
                                            <th>Price</th>
                                            <th>Change <i className='fa fa-exchange'></i></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            coins.map((coin) => {
                                                return (
                                                    <tr className='coin-stats' onClick={() => setChartt(`Binance:${coin.trade}`)}>
                                                        <td>
                                                            <i className='fa fa-star'></i> {coin.symbol}/USD
                                                        </td>
                                                        <td>
                                                            {coin.usd}
                                                        </td>
                                                        <td class = { coin.usd_24h_change >= 0 ? 'text-green': 'text-red'}>
                                                            {
                                                                coin.usd_24h_change >= 0 ? `+${coin.usd_24h_change.toFixed(2)}`: `${coin.usd_24h_change.toFixed(2)}`
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>

                                    </table>
                                    <table className='table'>
                                        <thead>
                                        <tr className='coin-stats-head'>
                                            <th>Price(USDT)</th>
                                            <th>Amount({chartiii})</th>
                                            <th>Time</th>
                                        </tr>
                                        </thead>
                                        <tr className='coin-stats'>
                                            <td class = "text-red">
                                               {(Math.random() * (3 - 1 + 1) + 28348).toFixed(3)}
                                            </td>
                                            <td>
                                                {(Math.random() * (2 - 0 + 1) + 0).toFixed(6)}
                                            </td>
                                            <td>
                                              { (new Date()).toLocaleTimeString()}
                                            </td>
                                        </tr>
                                        <tr className='coin-stats'>
                                            <td class = "text-red">
                                               {(Math.random() * (3 - 1 + 1) + 28348).toFixed(3)}
                                            </td>
                                            <td>
                                                {(Math.random() * (2 - 0 + 1) + 0).toFixed(6)}
                                            </td>
                                            <td>
                                              { (new Date()).toLocaleTimeString()}
                                            </td>
                                        </tr>
                                        <tr className='coin-stats'>
                                            <td class = "text-red">
                                               {(Math.random() * (3 - 1 + 1) + 28348).toFixed(3)}
                                            </td>
                                            <td>
                                                {(Math.random() * (2 - 0 + 1) + 0).toFixed(6)}
                                            </td>
                                            <td>
                                              { (new Date()).toLocaleTimeString()}
                                            </td>
                                        </tr>
                                        <tr className='coin-stats'>
                                            <td class = "text-red">
                                               {(Math.random() * (3 - 1 + 1) + 28348).toFixed(3)}
                                            </td>
                                            <td>
                                                {(Math.random() * (2 - 0 + 1) + 0).toFixed(6)}
                                            </td>
                                            <td>
                                              { (new Date()).toLocaleTimeString()}
                                            </td>
                                        </tr>
                                        <tr className='coin-stats'>
                                            <td class = "text-red">
                                               {(Math.random() * (3 - 1 + 1) + 28348).toFixed(3)}
                                            </td>
                                            <td>
                                                {(Math.random() * (2 - 0 + 1) + 0).toFixed(6)}
                                            </td>
                                            <td>
                                              { (new Date()).toLocaleTimeString()}
                                            </td>
                                        </tr>
                                        <tr className='coin-stats'>
                                            <td class = "text-red">
                                               {(Math.random() * (3 - 1 + 1) + 28348).toFixed(3)}
                                            </td>
                                            <td>
                                                {(Math.random() * (2 - 0 + 1) + 0).toFixed(6)}
                                            </td>
                                            <td>
                                              { (new Date()).toLocaleTimeString()}
                                            </td>
                                        </tr>
                                        <tr className='coin-stats'>
                                            <td class = "text-red">
                                               {(Math.random() * (3 - 1 + 1) + 28348).toFixed(3)}
                                            </td>
                                            <td>
                                                {(Math.random() * (2 - 0 + 1) + 0).toFixed(6)}
                                            </td>
                                            <td>
                                              { (new Date()).toLocaleTimeString()}
                                            </td>
                                        </tr>
                                        <tr className='coin-stats'>
                                            <td class = "text-red">
                                               {(Math.random() * (3 - 1 + 1) + 28348).toFixed(3)}
                                            </td>
                                            <td>
                                                {(Math.random() * (2 - 0 + 1) + 0).toFixed(6)}
                                            </td>
                                            <td>
                                              { (new Date()).toLocaleTimeString()}
                                            </td>
                                        </tr>
                                        <tr className='coin-stats'>
                                            <td class = "text-red">
                                               {(Math.random() * (3 - 1 + 1) + 28348).toFixed(3)}
                                            </td>
                                            <td>
                                                {(Math.random() * (2 - 0 + 1) + 0).toFixed(6)}
                                            </td>
                                            <td>
                                              { (new Date()).toLocaleTimeString()}
                                            </td>
                                        </tr>
                                        <tr className='coin-stats'>
                                            <td class = "text-red">
                                               {(Math.random() * (3 - 1 + 1) + 28348).toFixed(3)}
                                            </td>
                                            <td>
                                                {(Math.random() * (2 - 0 + 1) + 0).toFixed(6)}
                                            </td>
                                            <td>
                                              { (new Date()).toLocaleTimeString()}
                                            </td>
                                        </tr>
                                        <tr className='coin-stats'>
                                            <td class = "text-red">
                                               {(Math.random() * (3 - 1 + 1) + 28348).toFixed(3)}
                                            </td>
                                            <td>
                                                {(Math.random() * (2 - 0 + 1) + 0).toFixed(6)}
                                            </td>
                                            <td>
                                              { (new Date()).toLocaleTimeString()}
                                            </td>
                                        </tr>
                                        <tr className='coin-stats'>
                                            <td class = "text-red">
                                               {(Math.random() * (3 - 1 + 1) + 28348).toFixed(3)}
                                            </td>
                                            <td>
                                                {(Math.random() * (2 - 0 + 1) + 0).toFixed(6)}
                                            </td>
                                            <td>
                                              { (new Date()).toLocaleTimeString()}
                                            </td>
                                        </tr>
                                    </table>
                                    <table className='table'>
                                        <tr className='coin-stats'>
                                            <td>
                                                ADAD/USDT<br /><span>18:00:00</span>
                                            </td>
                                            <td>
                                                -6.31%<br /><span>Pullback</span>
                                            </td>
                                            <td>
                                                img
                                            </td>
                                        </tr>
                                        <tr className='coin-stats'>
                                            <td>
                                                ADAD/USDT<br /><span>18:00:00</span>
                                            </td>
                                            <td>
                                                -6.31%<br /><span>Rally</span>
                                            </td>
                                            <td>
                                                img
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 order-md-3 mb-3'>
                            <div style={{ "width": "100%" }}>
                                <div className='trade-box-main' style={{ "width": "100%" }}>
                                    <div className="tradeBoxHeader d-flex">
                                        <div className='text-center py-2 text-white bg-primary border' style={{ "flex": "1" }}>
                                            Long
                                        </div>
                                        <div className='text-center py-2 text-white bg-primary border' style={{ "flex": "1" }}>
                                            Short
                                        </div>
                                        <div className='text-center py-2 text-white bg-primary border' style={{ "flex": "1" }}>
                                            Swap
                                        </div>
                                    </div>
                                    <div>
                                        <ul className='buy-menu-left'>
                                            <li>Market</li>
                                            <li>Limit</li>
                                            <li>Trigger</li>
                                        </ul>
                                    </div>
                                    <div className="inputs trade-box-inputs w-100">
                                        <input type="text" placeholder='0' className='input-trade-values' />
                                        <input type="text" placeholder='0' className='input-trade-values' />

                                        <div className="switchButton switchButton-trade">
                                            <ArrowDownOutlined className='switchArrow' />
                                        </div>


                                        {/* choosing asset to swap*/}
                                        <div className="assetOne asset-one-trade">
                                            {chartiii}
                                            <DownOutlined />
                                        </div>
                                        <div className="assetTwo asset-two-trade">
                                            {chartiii}
                                            <DownOutlined />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='mt-2 m-0 w-100'>Collateral <span className='pull-right'>0.00</span></p>
                                        <p className='m-0 w-100'>Leverage <span className='pull-right'>-</span></p>
                                        <p className='m-0 w-100'>Entry price <span className='pull-right'>$17,678</span></p>
                                        <p className='m-0 w-100'>Liq. price <span className='pull-right'>-</span></p>
                                        <p className='m-0 w-100'>Fees <span className='pull-right'>-</span></p>
                                    </div>
                                    <div className="mt-3 btn btn-primary m-0 w-100">
                                        Swap
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 order-md-2 mb-3'>
                            <div className='graph-main'>
                                <div className='tradingview-widget-container'>
                                    <div id='technical-analysis-chart-demo' />
                                </div>
                                <div className='buy-sell'>
                                    <div className="buy-header">
                                        <div className="buy-menu-left">
                                            <ul>
                                                <li className='active'>Spot</li>
                                                <li>Cross 3x</li>
                                                <li>Isolated 10x</li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div className="buy-menu-left">
                                            <ul>
                                                <li>Spot</li>
                                                <li>Cross 3x</li>
                                                <li>Isolated 10x</li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul className='buy-menu-sub'>
                                                <li>Limit</li>
                                                <li>Market</li>
                                                <li>Stop-Limit</li>
                                                <li><i className='fa fa-caret-down'></i></li>
                                            </ul>
                                            <p>Avlb: 0.000 {chartiii}</p>
                                            <div className="buy-input-group">
                                                <input type="text" className="buy-price-input" placeholder='Price' />
                                                <div className='h-100 py-2 px-2 available-currency'>
                                                    199 USDT
                                                </div>
                                            </div>
                                            <div className="buy-input-group">
                                                <input type="text" className="buy-price-input" placeholder='Amount' />
                                                <div className='h-100 py-2 px-2 available-currency'>
                                                    {chartiii}
                                                </div>
                                            </div>
                                            <div className='buy-trade-btn'>
                                                <button className="btn btn-success w-100 py-2">Buy BTC</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul className='buy-menu-sub'>
                                                <li>Limit</li>
                                                <li>Market</li>
                                                <li>Stop-Limit</li>
                                                <li><i className='fa fa-caret-down'></i></li>
                                            </ul>
                                            <p>Avlb: 0.000 {chartiii}</p>
                                            <div className="buy-input-group">
                                                <input type="text" className="buy-price-input" placeholder='Price' />
                                                <div className='h-100 py-2 px-2 available-currency'>
                                                    199 USDT
                                                </div>
                                            </div>
                                            <div className="buy-input-group">
                                                <input type="text" className="buy-price-input" placeholder='Amount' />
                                                <div className='h-100 py-2 px-2 available-currency'>
                                                    {chartiii}
                                                </div>
                                            </div>
                                            <div className='buy-trade-btn'>
                                                <button className="btn btn-danger w-100 py-2">Sell BTC</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trade