import { MomentInput } from "moment";

export interface Item {
    id: string;
    name: string;
    kcal: number;
    date: MomentInput;
}

export interface ItemData {
    id?: string;
    name: string;
    kcal: number;
    date?: MomentInput;
}

export interface DataProviderData {
    currentDate: MomentInput;
    currentKcal: number;
    currentList: Item[];
    handleChangeData: (date: MomentInput) => void;
    addItem: (item: ItemData) => void;
    removeItem: (id: string) => void;
    updateItem: (item: Item) => void;
}