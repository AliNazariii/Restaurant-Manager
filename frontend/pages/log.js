import { Form, List } from 'antd';
import "antd/dist/antd.css"
import "../styles/index.css"
import "../styles/log.css"
import Head from 'next/head'
import Bar from "../components/bar"
import Menu from "../components/menu"
import axios from 'axios';
import { useState, useEffect } from 'react';

function Log() {
    // const host = `http://localhost:4000`
    const host = 'http://37.152.176.66:4000'
    const [logs, setLogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(host + `/log`)
                .then(res => {
                    setLogs(res.data);
                })
        };
        fetchData();
    }, []);

    return(
        <div className="root">
            <Head>
                <title>Restaurant Manager</title>
            </Head>
            <div className="my-layout">
                <div className="left-side">
                    <div className="root_log">
                        <List
                            size="small"
                            dataSource={logs}
                            renderItem={item => 
                                <List.Item>
                                    <p className="log_items">
                                        log_time: {item.log_time}, 
                                        operation: {item.operation}, 
                                        address_id: {item.address_id}, 
                                        table_name: {item.table_name}
                                    </p>
                                </List.Item>
                            }
                        />
                    </div>
                </div>
                <div className="right-side">
                    <Bar />
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Form.create()(Log); 