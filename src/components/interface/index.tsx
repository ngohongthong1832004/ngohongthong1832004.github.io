
type ParttenType = {
    func : string,
    tech : string
    link : string
}

export type ProjectType = {
    image: string,
    name : string,
    descriptions : string,
    ["link-demo"] : string,
    ["front-end"] : ParttenType,
    ["back-end"] : ParttenType,
    ["database"] : ParttenType,
    ["other"] : ParttenType

}

export interface ProjectInterfaceProps {
    data : ProjectType[]
}
