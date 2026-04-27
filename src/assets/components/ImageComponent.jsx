import { Component } from 'react'

class ImgComponent extends Component {

    render() {
        return (
            <img className='w-50' src={this.props.src} alt={this.props.alt} id="ciao" /> 
        )
    }
}

export default ImgComponent;