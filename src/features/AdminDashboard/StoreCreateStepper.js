import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementStep, decrementStep, updateStoreNameTxt, addNameToStore } from "./storeSlice";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ScheduleCard from'./ScheduleCard';


const initialStoreDetailsState = {
	name: {
		name: '',
		error: ''
	},
	schedules: [
        {
            name: 'Monday',
            cap: 0,
		    op: '',
		    cl: ''
        },
        {
            name: 'Tuesday',
            cap: 0,
		    op: '',
		    cl: ''
        },
        {
            name: 'Wednesday',
            cap: 0,
		    op: '',
		    cl: ''
        },
        {
            name: 'Thursday',
            cap: 0,
		    op: '',
		    cl: ''
        },
        {
            name: 'Friday',
            cap: 0,
		    op: '',
		    cl: ''
        },
        {
            name: 'Saturday',
            cap: 0,
		    op: '',
		    cl: ''
        },
        {
            name: 'Sunday',
            cap: 0,
		    op: '',
		    cl: ''
        },
    ]
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ["Create store name", "Create store Schedule"];
}

const weekdays = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
]


const StoreCreateStepper = (React.FC = () => {
    const classes = useStyles();
    const steps = getSteps();
    const dispatch = useDispatch();
    const store = useSelector((state) => state.store);
	const [storeDetails, setStoreDetails] = useState(initialStoreDetailsState);



    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
					<div>
						<TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Store Name"
                        name="name"
                        type="text"
                        onChange={(e) =>
							setStoreDetails({name: {name: e.target.value}})
                        }
                        {...(storeDetails.name.error && {
                            error: true,
                            helperText: storeDetails.name.error,
                        })}
                    />

					</div>
                    
					
                );
            case 1:
                return weekdays.map(d => <ScheduleCard weekDay={d} handleScheduleUpdate={handleScheduleUpdate}/>);
                
            default:
                return "Unknown step";
        }
    };

    const handleNext = () => {
        if (!storeDetails.name.name ||
            storeDetails.name.name.length < 3 ||
             storeDetails.name.name.length > 255) {
            setStoreDetails({ name: { error: "This field must be between 3-255 characters!" }});
        } else {
            setStoreDetails({name: {error: ''}});
            dispatch(addNameToStore(storeDetails.name.name));
        }
    };

    const handleBack = () => {
		setStoreDetails({name: {name: ''}})
        dispatch(decrementStep());
    };

    const handleReset = () => {
        //setActiveStep(0);
    };

    const handleSubmit = () => {};

    const handleScheduleUpdate = (scheduleDetails) => {
        console.log(scheduleDetails);
    };

    return (
        <div className={classes.root}>
            
            <Stepper activeStep={store.create.step}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {store.create.step === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button
                            onClick={handleReset}
                            className={classes.button}
                        >
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>
                            {getStepContent(store.create.step)}
                        </Typography>
                        <div>
                            <Button
                                disabled={
                                    store.create.step === 0
                                }
                                onClick={handleBack}
                                className={classes.button}
                            >
                                Back
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={
                                    store.create.step === steps.length - 1
                                        ? handleSubmit
                                        : handleNext
                                }
                                className={classes.button}
                            >
                                {store.create.step === steps.length - 1
                                    ? "Finish"
                                    : "Next"}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
})

export default StoreCreateStepper;


