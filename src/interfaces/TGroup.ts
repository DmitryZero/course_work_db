import { TUser } from "./TUser";

export type TGroup = {
    id: string,
    name: string,
    children_groups?: TGroup[],
    users?: TUser[]
};