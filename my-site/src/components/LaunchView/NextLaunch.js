import React from 'react';


class NextLaunch extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            item: null,
            isLoaded: false
        }

    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/next/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    item: json,
                    isLoaded: true,
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    renderLoading() {
        return (
            <div>Carregando</div>
        )
    }

    renderObject() {
        const { item } = this.state;
        return (
            <div>
                <ul>
                <li >
                  <li> {item.rocket_id}{item.launch_date_utc}</li>
                  Name: {item.rocket_name} | Email: {item.launch_date_utc}
                  
                </li>
                </ul>
            </div>
        )
    }

    
    render() {
        const { item } = this.state
        return(
            item !== null ? this.renderObject() : this.renderLoading()
        )
    }
}
export default NextLaunch;