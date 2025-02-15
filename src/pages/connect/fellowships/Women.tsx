import {useAppData} from "../../../contexts/AppDataContext";
import FellowshipTemplate from "../fellowships/Fellowship";

export const WomenFellowshipPage = () => {
    const {fellowships} = useAppData();
    return <FellowshipTemplate fellowship={fellowships.Women} />;
}