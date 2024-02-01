import IAddress from "./IAddress";

export default interface IRestaurant {
    title: string;
    lunchOpenWeekdays: string;
    lunchCloseWeekdays: string;
    lunchOpenWeekends: string;
    lunchCloseWeekends: string;
    dinnerOpenWeekdays: string;
    dinnerCloseWeekdays: string;
    dinnerOpenWeekends: string;
    dinnerCloseWeekends: string;
    telephone: string;
    address: IAddress
}