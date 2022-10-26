import img00 from "../assets/base/base.png";
import img01 from "../assets/base/base2.png";

export interface ImageConfig {
  image: string;
  w: number;
  h: number;
  label: {
    x: number;
    y: number;
    w: number;
    h: number;
    fontSize: number;
    style?: string;
  };
}

export const images: ImageConfig[] = [
  {
    image: img00,
    w: 1080,
    h: 1080,
    label: {
      x: 0,
      y: 200,
      w: 1080,
      h: 100,
      fontSize: 130,
      style:
        "text-transform: uppercase; font-family: sans-serif; font-weight: bolder; background: transparent; border: none; color: white; text-align: center",
    },
  },
  {
    image: img01,
    w: 1080,
    h: 1080,
    label: {
      x: 0,
      y: 150,
      w: 900,
      h: 100,
      fontSize: 100,
      style:
        `text-transform: uppercase; 
         font-family: sans-serif; 
         font-weight: bolder; 
         background: #fe98c040; 
         border: none; 
         border-radius: 20px;
         color: #003c72; 
         text-align: center;
         transform: rotate(-15deg)`,
    },
  },
];
