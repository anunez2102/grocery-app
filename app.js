const productsList = [
    {
        item: 'Ginger Ale',
        brand: 'Canada Dry',
        units: '2 Liters',
        quantity: 2,
        isPurchased: false
    },

    {
        item: 'Hot Sauce',
        brand: 'Tapatio',
        units: '5 fl oz',
        quantity: 1,
        isPurchased: false
    },

    {
        item: 'Garlic Salt',
        brand: 'Badia',
        units: '16 oz',
        quantity: 1,
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
        quantity: '',
        isPurchased: false
    } 

    addItem = item => {
        this.setState({
            cartItems: [item, ...this.state.cartItems]
        })
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newItem = {
            name: this.state.item,
            brand: this.state.brand,
            units: parseInt(this.state.units),
            quantity: parseInt(this.state.quantity),
        }

        // console.log(typeof parseInt(newItem.price))
        this.setState({
            products: [newItem, ...this.state.products],
            name: '',
            price: 0,
            description: ''
        })
    }

    render() {
        return (
            <div>
                <div className="App"><form id="grocery-list">
                    <label htmlFor='item'>Item: </label>
                    <input id='item' type='text' /*value={this.state.item} */onChange={this.handleChange} />
                    <label htmlFor='brand'>Brand: </label>
                    <input id='brand' type='text' /*value={this.state.brand}*/ onChange={this.handleChange} />
                    <label htmlFor='units'>Units: </label>
                    <input id='units' type='text' /*value={this.state.units}*/ onChange={this.handleChange} />
                    <label htmlFor='quantity'>Quantity: </label>
                    <input id='quantity' type='text' /*value={this.state.quantity}*/ onChange={this.handleChange} />
                    <button type="submit" onClick={this.addItem.bind(this)}>ADD</button>
                    </form>
                    <ul>
                        {
                            this.state.products.map(item => {
                                return (
                                    <li>{item.item}, {item.brand}, {item.units}, {item.quantity}</li>
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