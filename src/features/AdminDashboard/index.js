import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStoresStart } from "./storeSlice";
import columns from './constants';
import { DataGrid } from '@material-ui/data-grid';
import StoreCreateStepper from './StoreCreateStepper';


const getScheduleTimes = (store, weekDay) => {
    const schedule = store.schedules.filter((s) => s.weekDay === weekDay)[0];
    return schedule.openingHour === schedule.closingHour ?
    'Closed' :
    schedule.openingHour + ' - ' + schedule.closingHour;
};

const getTableTemplateData = (list) => {
    let rowsTemplate = [];
    list.forEach(store => {
        rowsTemplate.push({
          id: store.id,
          name: store.name,
          monday: getScheduleTimes(store, 'Monday'),
          tuesday: getScheduleTimes(store, 'Tuesday'),
          wednesday: getScheduleTimes(store, 'Wednesday'),
          thursday: getScheduleTimes(store, 'Thursday'),
          friday: getScheduleTimes(store, 'Friday'),
          saturday: getScheduleTimes(store, 'Saturday'),
          sunday: getScheduleTimes(store, 'Sunday')
        });
      }
    );
    return rowsTemplate;
};

const AdminDashboard = (React.FC = () => {
    const dispatch = useDispatch();
    //const history = History;
    const store = useSelector((state) => state.store);
    const [dataMessage, setDataMessage] = useState("No Stores are defined");
    useEffect(() => {
        dispatch(getStoresStart());
    }, [dispatch]);
    
    return (
        <div style={{ height: 400, width: "100%" }}>
            <StoreCreateStepper />
            <DataGrid
                rows={getTableTemplateData(store.list.stores)}
                columns={columns}
                getRowId={(row) => row.id}
            />
        </div>
    );
});

export default AdminDashboard;
