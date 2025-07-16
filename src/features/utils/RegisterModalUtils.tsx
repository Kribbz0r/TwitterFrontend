import { FormOne } from "../register/components/registerModal/forms/FormOne";
import { FormThree } from "../register/components/registerModal/forms/FormThree";
import { FormTwo } from "../register/components/registerModal/forms/FormTwo";

export const determineModalContent = (step: number): React.ReactElement => {

    switch (step) {
        case 1:
            return <FormOne />
        case 2:
            return <FormTwo />
        case 3:
            return <FormThree />
        case 4:
            return <span>Reg step 4</span>
        case 5:
            return <span>Reg step 5</span>
        case 6:
            return <span>Reg step 6</span>
        default: return <></>

    }
}