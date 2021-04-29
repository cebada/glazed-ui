import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const ScheduleCard = (React.FC = ({weekDay}, handleScheduleUpdate) => {
    console.log(handleScheduleUpdate);
    const title = weekDay + "'s schedule:";
    const [details, setdetails] = useState({
        weekDay: weekDay,
        capacity: 0,
        openingHour: '',
        closingHour: ''
    });


    
    return (
        <>
            <Card>
                <CardContent>
                    <Typography>{title}</Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="capacity"
                        label="Capacity"
                        name="capacity"
                        type="number"
                        onChange={(e) =>{
                            setdetails({ capacity: e.target.value});
                            handleScheduleUpdate(details);
                        }}
                        /*{...(weekDay.error.cap && {
                            error: true,
                            helperText: weekDay.error.cap,
                        })}*/
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="openingHour"
                        label="Opening Hour"
                        name="openingHour"
                        type="text"
                        onChange={(e) => {
                            setdetails({ openingHour: e.target.value });
                            handleScheduleUpdate(details);
                        }}                        
                        /*{...(weekDay.error.op && {
                            error: true,
                            helperText: weekDay.error.op,
                        })}*/
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="closingHour"
                        label="Closing Hour"
                        name="closingHour"
                        type="text"
                        onChange={(e) =>{
                            setdetails({ closingHour: e.target.value });
                            handleScheduleUpdate(details);
                        }
                        }
                        /*{...(weekDay.error.cl && {
                            error: true,
                            helperText: weekDay.error.cl,
                        })}*/
                    />
                </CardContent>
            </Card>
        </>
    );
});


export default ScheduleCard;