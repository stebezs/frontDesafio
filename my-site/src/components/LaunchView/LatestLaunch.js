import React from 'react';
import * as dayjs from 'dayjs'
import { findFlagUrlByCountryName } from "country-flags-svg";
import CircularProgress from '@material-ui/core/CircularProgress';


class LatestLaunch extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            item: null,
            isLoaded: false
        }

    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/latest/')
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
            <CircularProgress />
        )
    }

    renderObject() {
        const { item } = this.state;
        return (
            <div>
                <body>
                    <ul>
                        <h2> {item.rocket_id}</h2>
                        <dd> Nome do foguete: {item.rocket_name}</dd>
                        <dd> Data do lançamento: {dayjs(item.launch_date_utc).format('MMMM D, YYYY h:mm A')}</dd>
                        <dd> Local do lançamento: {dayjs(item.launch_date_local).format('MMMM D, YYYY h:mm A')}</dd>
                        <dd> Tipo: {item.rocket_type}</dd>
                        <div> Nacionalidade: {item.nationality}
                        <img src={findFlagUrlByCountryName(item.nationality)} alt='nacionality' width="3%"/>
                        </div>
                        <dt></dt>
                    </ul>
                </body>
            </div>
        )
    }


    render() {
        const { item } = this.state
        return (
            item !== null ? this.renderObject() : this.renderLoading()
        )
    }
}
export default LatestLaunch;

