import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import callAPI from '../../utils/connectAPI';
import './Schedule.css'
class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            destination: [],
            to: [],
            selectFrom: '',
            checkedItems: new Map(),
            statusBtn: false
        }
    }

    componentDidMount() {
        callAPI('place', 'GET', null)
            .then(res => {
                this.setState({
                    destination: res.data,
                    to: res.data.places
                });
                //console.log(res.data)
            })
            .catch((err) => { console.log(err) })
    }

    onChangeStartDate = date => {
        this.setState({
            startDate: date,
            endDate: date
        });
    };

    onChangeFinishDate = date => {
        this.setState({
            endDate: date
        });
    };

    addDays = (days) => {
        let date = new Date(this.state.startDate);
        date.setDate(date.getDate() + days);
        return date.toString().substr(4, 12);
    }

    onChangeBtn = () => {
        this.setState({
            statusBtn: !this.state.statusBtn
        });
    }

    handleChange = (event) => {
        const item = event.target.name;
        const isChecked = event.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }

    listPlaceSelected = () => {
        if(this.state.statusBtn === true){
            if(this.state.checkedItems.size > 0){
                var listDestinationSelected = Array.from(this.state.checkedItems)
                return this.state.checkedItems.forEach(function(value, key) {
                    return console.log(key + ' = ' + value);
                  });
                    // return listDestinationSelected.map((des, index) => {
                    //     return (<div key={index}>{des}</div>)
                    // })
                     
            }  
        }
    }

    listDate = () => {
        var dateItems = [];
        var start = new Date(this.state.startDate);
        var end = new Date(this.state.endDate);
        var loop = new Date(start);
        dateItems.push(<DatePicker selected={start} dateFormat="dd/MM/yyyy" minDate={start} maxDate={start} />)
        while (loop < end) {
            let newDate = loop.setDate(loop.getDate() + 1);
            loop = new Date(newDate);
            dateItems.push(<DatePicker selected={newDate}
                dateFormat="dd/MM/yyyy"
                minDate={newDate}
                maxDate={newDate}
            />);
        }
        //console.log(dateItems);
        if(this.state.statusBtn === true)
            return <div>{dateItems}</div>;
    }

    listPlace = () => {
        console.log(this.state.checkedItems)
        return this.state.destination.map((currentFrom, index) => {
            return (
                <div className="form-check" style={{ float: 'left', width: '25%' }}>
                    <label key={index}>
                        <input type="checkbox" name={currentFrom.name} value={currentFrom.name} id={currentFrom._id} checked={this.state.checkedItems.get(currentFrom.name)} onChange={(event) => this.handleChange(event)} /><span className="label-text"> {currentFrom.name}</span>
                    </label>
                </div>
            )
        })
    }

    listDestination = () => {

    }
    
    onChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    listTo = (selectFrom) => {
        var tempTo = this.state.to.filter(item => item.name !== selectFrom);
        console.log(tempTo);
        return tempTo.map((currentTo, index) => {
            return (
                <option key={index} value={currentTo.name}>{currentTo.name}</option>
            )
        })
    }

    render() {
        let { startDate, endDate, selectFrom } = this.state
        return (
            <div>
                {/* Khoảng ngày
                <DatePicker
                    minDate={this.state.startDate}
                    maxDate={this.state.endDate}
                    showDisabledMonthNavigation
                    dateFormat="dd/MM/yyyy">

                </DatePicker> */}

                {/* Ngày 1:
                <DatePicker
                selected={startDate}
                minDate={this.state.startDate}
                maxDate={this.state.endDate}
                showDisabledMonthNavigation
                dateFormat="dd/MM/yyyy"
                />

                Ngày 2:
                
                <input type="text" value={this.addDays(1)}/>
                <DatePicker
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
                showTimeSelect
                showTimeSelectOnly
                showDisabledMonthNavigation
                /> */}
                <div className="where_togo_area">
                    <div className="row justify-content-center">
                        <div className="container">
                            <h2 style={{ color: 'white', textAlign: 'center' }}>TẠO LỊCH CHO CHUYẾN ĐI</h2>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-image">
                    <div className="container booking">
                        <h3>Chọn tỉnh thành bạn muốn khám phá nè</h3>
                        <form className="form-booking">
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="title">Tên chuyến đi: </label>
                                    <input type="text" name="title" class="form-control" placeholder="Nhập tên chuyến đi của bạn"></input>
                                </div>
                            </div>
                            <div className="form-row">
                                {/* <div className="form-group col-md-12">
                                    <label htmlFor="selectFrom">ĐIỂM ĐI</label>
                                    <div className="input-group mb-2">
                                        <select value={selectFrom}
                                            onChange={(event) => this.onChange(event)}
                                            name="selectFrom"
                                            onClick={() => { return <select> {this.listTo(selectFrom)}</select> }}
                                            className="form-control" id="selectFrom">
                                            {this.listFrom()}
                                        </select>
                                    </div>
                                </div> */}

                                <div className="form-group col-md-12">
                                    <label>Chọn điểm đến muốn khám phá: </label>
                                    <div className="input-group mb-2">
                                    </div>
                                    {this.listPlace()}
                                    {this.listPlaceSelected()}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="startDate">Chọn ngày đi: </label>
                                    <div className="input-group mb-2">
                                        <DatePicker
                                            selected={startDate}
                                            onChange={date => this.onChangeStartDate(date)}
                                            minDate={new Date()}
                                            showDisabledMonthNavigation
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="startDate">Chọn ngày về: </label>
                                    <div className="input-group mb-2">
                                        <DatePicker
                                            selected={endDate}
                                            onChange={date => this.onChangeFinishDate(date)}
                                            minDate={this.state.startDate}
                                            showDisabledMonthNavigation
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-center">
                                    <button type="button" className="btn btn-warning" onClick={() => this.onChangeBtn()}>TẠO LỊCH</button>
                                </div>
                            </div>
                            {this.listDate()}
                            {this.listPlaceSelected()}
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Schedule;