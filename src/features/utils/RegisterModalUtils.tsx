import { FormFour } from "../register/components/registerModal/forms/FormFour";
import { FormOne } from "../register/components/registerModal/forms/FormOne";
import { FormThree } from "../register/components/registerModal/forms/FormThree";
import { FormTwo } from "../register/components/registerModal/forms/FormTwo";
import { FormFive } from "../register/components/registerModal/forms/FormFive";
import { FormSix } from "../register/components/registerModal/forms/formSix";

export const determineModalContent = (step: number): React.ReactElement => {

    switch (step) {
        case 1:
            return <FormOne />
        case 2:
            return <FormTwo />
        case 3:
            return <FormThree />
        case 4:
            return <FormFour />
        case 5:
            return <FormFive />
        case 6:
            return <FormSix />
        default: return <></>

    }
}