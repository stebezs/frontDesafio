import React from 'react';
import * as dayjs from 'dayjs'
import { findFlagUrlByCountryName } from "country-flags-svg";
import CircularProgress from '@material-ui/core/CircularProgress';


class PastLaunch extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            item: null,
            isLoading: false
        }

    }

    componentDidMount() {
        this.setState({
            isLoading: true
        }, () => {
            fetch('http://127.0.0.1:8000/api/past/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    item: json
                })
            })
            .catch((err) => {
                console.log(err);
            }
            )
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            })
            ;
        }
        )
    }

    renderLoading() {
        return (
            <CircularProgress />
        )
    }

    renderObject(item, key) {        
        return (
            <div key={key} >
                <ul>
                 <h2> {item.rocket_id}</h2>
                 <dd> Nome do foguete: {item.rocket_name}</dd>
                 <dd> Data do lançamento: {dayjs(item.launch_date_utc).format('MMMM D, YYYY h:mm A')}</dd>
                 <dd> Local do lançamento: {dayjs(item.launch_date_local).format('MMMM D, YYYY h:mm A')}</dd>
                 <dd> Tipo: {item.rocket_type}</dd>
                 <div> Nacionalidade: {item.nationality}
                    <img src={findFlagUrlByCountryName(item.nationality)} alt='nacionality' width="3%"/>
                </div>
                </ul>
            </div>
        )
    }

    renderList(){
        const { item, isLoading} = this.state

        if (!isLoading && item !== null){
            return item.splice(1, item.length).map((launch, index)=>{
                return this.renderObject(launch, index)
            })
        } else {
            return null;
        }
    }

    render() {
        const { isLoading } = this.state
        return (
            isLoading ? this.renderLoading() : this.renderList()
        )
    }
}

export default PastLaunch;

