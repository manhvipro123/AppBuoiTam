export interface CategoryModel{
    id: string;
    name: string;
    description: string;
    image: string;
    status: Status;
}

export enum Status{
    Active = 1,
    Inactive = 0
}
