const productsList = [
    {
        item: 'Ginger Ale',
        brand: 'Canada Dry',
        units: '2 Liters',
        quantity: 0,
        isPurchased: false
    },

    {
        item: 'Hot Sauce',
        brand: 'Tapatio',
        units: '5 fl oz',
        quantity: 0,
        isPurchased: false
    },

    {
        item: 'Garlic Salt',
        brand: 'Badia',
        units: '16 oz',
        quantity: 0,
        isPurchased: false
    },
]     
console.table(productsList)

class App extends React.Component {
    state = {
        products: productsList,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false
    } 

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <form>
                    <label htmlFor='item'>Item: </label>
                    <input id='item' type='text' value={this.state.item} onChange={this.handleChange} />
                    <label htmlFor='brand'>Brand: </label>
                    <input id='brand' type='text' value={this.state.brand} onChange={this.handleChange} />
                    <label htmlFor='units'>Units: </label>
                    <input id='units' type='text' value={this.state.units} onChange={this.handleChange} />
                    <label htmlFor='quantity'>Quantity: </label>
                    <input id='quantity' type='text' value={this.state.quantity} onChange={this.handleChange} />
                    </form>
                    <ul>
                        {
                            this.state.products.map(item => {
                                return (
                                    <li>{item.item} {item.brand}</li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)