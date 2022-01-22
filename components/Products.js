class Products extends Component {
   state={
       isPurchased:false
   }

//    toggleCart = () => {
//     this.setState({
//         isPurchased: !this.state.isPurchased
//     })
// }

    render() {

        return (
            <div>
                 <li onClick={() => this.props.handleAdd(this.props.product)}>
                    {this.props.item.item},
                    {this.props.item.brand}, 
                    {this.props.item.units}, 
                    {this.props.item.quantity}
                    {
                        this.state.isPurchased
                        ?
                        <span> has been purchased.</span>
                        :''
                    }
                </li>
            </div>
        );
    }
}

export default Products;
