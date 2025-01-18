export interface Search {
    ref?: React.RefObject<HTMLInputElement>
    type: string
    placeholder: string
    name: string
    props?: React.ComponentPropsWithoutRef<"input">
}