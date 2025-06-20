import { ClearRounded, ArrowBackRounded } from '@mui/icons-material';
import React, { ReactElement } from 'react';

export const displayIcon = (step: number): React.ReactElement => {

    switch (step) {
        case 1:
            return <ClearRounded sx={{ fontSize: 25 }} />
        case 2:
            return <ArrowBackRounded sx={{ fontSize: 25 }} />
        case 3:
            return <ClearRounded sx={{ fontSize: 25 }} />
        case 4:
            return <></>;
        case 5:
            return <ArrowBackRounded sx={{ fontSize: 25 }} />
        case 6:
            return <></>;
        default: return <></>

    }
}