import { Button, Menu, Dropdown, Icon } from 'antd'
import "antd/dist/antd.css"
import "../styles/bar.css"

function Bar() {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="./food_receipt">Food Orders</a>
            </Menu.Item>
            <Menu.Item key="0">
                <a>Food Orders Report</a>
            </Menu.Item>
            <Menu.Item key="0">
                <a href="./address">Addresses</a>
            </Menu.Item>
            <Menu.Item key="0">
                <a href="./customer">Customers</a>
            </Menu.Item>
            <Menu.Item key="0">
                <a href="./delivery">Deliveries</a>
            </Menu.Item>
            <Menu.Item key="0">
                <a href="./food">Foods</a>
            </Menu.Item>
            <Menu.Item key="0">
                <a href="./market">Markets</a>
            </Menu.Item>
            <Menu.Item key="0">
                <a href="./material">Materials</a>
            </Menu.Item>
            <Menu.Item key="0">
                <a href="./log">Logs</a>
            </Menu.Item>
            <Menu.Item key="0">
                <a href="./material_receipt">Material Orders</a>
            </Menu.Item>
            <Menu.Item key="0">
                <a>Material Orders Report</a>
            </Menu.Item>
        </Menu>
    )
    return(
        <div className="root_bar">
            <div className="bar_buttons">
                <Button type="danger" className="bar_button" href="./food_receipt">
                    Food Orders
                </Button>
                <Button type="primary" className="bar_button report_button">
                    Food Orders Report
                </Button>
                <Button type="danger" className="bar_button" href="./address">
                    Addresses
                </Button>
                <Button type="danger" className="bar_button" href="./customer">
                    Customers
                </Button>
                <Button type="danger" className="bar_button" href="./delivery">
                    Deliveries
                </Button>
                
                <Button type="danger" className="bar_button" href="./food">
                    Foods
                </Button>

                
                <Button type="danger" className="bar_button" href="./market">
                    Markets
                </Button>
                <Button type="danger" className="bar_button" href="./material">
                    Materials
                </Button>

                <Button type="danger" className="bar_button" href="./log">
                    Logs
                </Button>

                <Button type="danger" className="bar_button" href="./material_receipt">
                    Material Orders
                </Button>
                <Button type="primary" className="bar_button report_button">
                    Material Orders Report
                </Button>
            </div>
            {/* <div>
                <Dropdown className="menu_drop_down" overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#">
                        Menu <Icon type="down" />
                    </a>
                </Dropdown>
            </div> */}
        </div>
    )
    
}

export default Bar