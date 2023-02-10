export interface ImageInputProps {
    image: string;
    title: string;
    description: string;
    link?: string;   
    width?: number;   
    height?: number;   
}

export interface ImageSeriesProps {
    images: Array<ImageInputProps>;
}