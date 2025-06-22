import { FormOne } from "../register/components/registerModal/forms/FormOne"

export const determineModalContent = (step: number): React.ReactElement => {

    switch (step) {
        case 1:
            return <FormOne />
        case 2:
            return <span>Reg step 2</span>
        case 3:
            return <span>Reg step 3</span>
        case 4:
            return <span>Reg step 4</span>
        case 5:
            return <span>Reg step 5</span>
        case 6:
            return <span>Reg step 6</span>
        default: return <></>

    }
}